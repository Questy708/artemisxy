'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Download, ChevronDown, ChevronUp, Shield } from 'lucide-react';

interface Props {
  goToPage: (page: string) => void;
}

type Tab = 'overview' | 'donations' | 'applications' | 'contacts' | 'subscribers';

export default function AdminDashboard({ goToPage }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedApp, setExpandedApp] = useState<number | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const endpoints: Record<Tab, string> = {
        overview: '/api/admin',
        donations: '/api/donations',
        applications: '/api/applications',
        contacts: '/api/contact',
        subscribers: '/api/subscribe',
      };
      const res = await fetch(endpoints[activeTab]);
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      } else {
        setData(json);
      }
    } catch {
      setError('Failed to fetch data. Make sure the server is running.');
    } finally {
      setLoading(false);
      setLastRefresh(new Date());
    }
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  const formatCurrency = (n: number, c = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency: c }).format(n);

  const exportCSV = (rows: any[], filename: string) => {
    if (!rows || rows.length === 0) return;
    const headers = Object.keys(rows[0]).filter(k => k !== 'id');
    const csvRows = [
      headers.join(','),
      ...rows.map(row =>
        headers.map(h => {
          const val = row[h];
          if (val === null || val === undefined) return '';
          const str = String(val);
          return str.includes(',') || str.includes('"') || str.includes('\n')
            ? `"${str.replace(/"/g, '""')}"`
            : str;
        }).join(',')
      )
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs: { id: Tab; label: string; icon?: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'donations', label: 'Donations' },
    { id: 'applications', label: 'Applications' },
    { id: 'contacts', label: 'Messages' },
    { id: 'subscribers', label: 'Subscribers' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* Header */}
      <div className="bg-[#141414] text-white px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#8A0000] flex items-center justify-center text-white text-[11px] font-black">
              <Shield size={16} />
            </div>
            <div>
              <h1 className="text-[16px] font-bold">Artemis Admin</h1>
              <p className="text-[11px] text-white/50">Data Collection Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/30 hidden md:block">
              Last refresh: {lastRefresh.toLocaleTimeString()}
            </span>
            <button
              onClick={fetchData}
              className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
              suppressHydrationWarning
            >
              <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <button
              onClick={() => goToPage('home')}
              className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
              suppressHydrationWarning
            >
              Back to Site
            </button>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="max-w-[1400px] mx-auto flex gap-0 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setExpandedApp(null); }}
              className={`px-5 py-3 text-[12px] font-bold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-[#8A0000] border-[#8A0000]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
              suppressHydrationWarning
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-6 h-6 border-2 border-[#8A0000] border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-gray-400 text-[14px]">Loading data...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 text-[14px] rounded-sm">
            <p className="font-bold mb-1">Error loading data</p>
            <p>{error}</p>
            <button onClick={fetchData} className="mt-3 text-[12px] font-bold uppercase tracking-wider underline" suppressHydrationWarning>Try Again</button>
          </div>
        ) : (
          <>
            {/* ─── OVERVIEW ─── */}
            {activeTab === 'overview' && data?.stats && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] font-black text-[#141414]">Dashboard Overview</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  {[
                    { label: 'Total Donations', value: data.stats.totalDonations, color: '#8A0000' },
                    { label: 'Total Raised', value: formatCurrency(data.stats.totalRaised || 0), color: '#15803d' },
                    { label: 'Applications', value: data.stats.totalApplications, color: '#4338ca' },
                    { label: 'Messages', value: data.stats.totalContactMessages, color: '#0e7490' },
                    { label: 'Subscribers', value: data.stats.totalSubscribers, color: '#6b7280' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-200 p-5 hover:shadow-sm transition-shadow">
                      <div className="text-[28px] font-black" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {data.stats.unreadMessages > 0 && (
                  <div className="bg-[#8A0000]/5 border border-[#8A0000]/20 p-4 mb-8">
                    <span className="text-[13px] font-bold text-[#8A0000]">{data.stats.unreadMessages} unread message(s)</span>
                    <button onClick={() => setActiveTab('contacts')} className="ml-3 text-[11px] font-bold uppercase tracking-wider text-[#8A0000] underline" suppressHydrationWarning>View Messages</button>
                  </div>
                )}

                {data.donationsByStatus && Object.keys(data.donationsByStatus).length > 0 && (
                  <div className="bg-white border border-gray-200 p-5 mb-8">
                    <h3 className="text-[14px] font-bold text-[#141414] mb-3">Donations by Payment Status</h3>
                    <div className="flex gap-6">
                      {Object.entries(data.donationsByStatus).map(([status, count]) => (
                        <div key={status}>
                          <span className="text-[20px] font-black text-[#141414]">{count as number}</span>
                          <span className="ml-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">{status}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[12px] text-gray-500 mt-3">
                      <strong>pending</strong> = recorded but no payment gateway confirmation.
                      Set <code className="bg-gray-100 px-1">STRIPE_SECRET_KEY</code> in <code className="bg-gray-100 px-1">.env</code> to enable real payments.
                    </p>
                  </div>
                )}

                {/* Recent activity preview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 p-5">
                    <h3 className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-3">Recent Donations</h3>
                    {(data.recentDonations || []).length === 0 ? (
                      <p className="text-[13px] text-gray-400">No donations yet</p>
                    ) : (data.recentDonations || []).slice(0, 5).map((d: any) => (
                      <div key={d.id} className="py-2 border-b border-gray-100 last:border-0">
                        <div className="text-[13px] font-bold text-[#141414]">{formatCurrency(d.amount, d.currency)} <span className="text-[10px] font-normal text-gray-400">{d.paymentStatus}</span></div>
                        <div className="text-[11px] text-gray-500">{d.donorEmail} &middot; {formatDate(d.createdAt)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white border border-gray-200 p-5">
                    <h3 className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-3">Recent Applications</h3>
                    {(data.recentApplications || []).length === 0 ? (
                      <p className="text-[13px] text-gray-400">No applications yet</p>
                    ) : (data.recentApplications || []).slice(0, 5).map((a: any) => (
                      <div key={a.id} className="py-2 border-b border-gray-100 last:border-0">
                        <div className="text-[13px] font-bold text-[#141414]">{a.firstName} {a.lastName}</div>
                        <div className="text-[11px] text-gray-500">{a.email} &middot; {formatDate(a.createdAt)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white border border-gray-200 p-5">
                    <h3 className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-3">Recent Messages</h3>
                    {(data.recentContacts || []).length === 0 ? (
                      <p className="text-[13px] text-gray-400">No messages yet</p>
                    ) : (data.recentContacts || []).slice(0, 5).map((c: any) => (
                      <div key={c.id} className="py-2 border-b border-gray-100 last:border-0">
                        <div className="text-[13px] font-bold text-[#141414]">{c.name} {!c.read && <span className="text-[9px] bg-[#8A0000] text-white px-1.5 py-0.5 font-bold">NEW</span>}</div>
                        <div className="text-[11px] text-gray-500">{c.area} &middot; {formatDate(c.createdAt)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Setup instructions */}
                <div className="mt-8 bg-amber-50 border border-amber-200 p-6">
                  <h3 className="text-[14px] font-bold text-amber-800 mb-2">Payment Gateway Setup (Stripe)</h3>
                  <p className="text-[13px] text-amber-700 leading-relaxed mb-3">
                    Donations are currently saved to the database as <strong>pending</strong>. To accept real credit card payments via Stripe:
                  </p>
                  <ol className="text-[12px] text-amber-700 space-y-1.5 list-decimal list-inside">
                    <li>Create a Stripe account at <a href="https://stripe.com" target="_blank" rel="noreferrer" className="underline">stripe.com</a></li>
                    <li>Get your API keys from the Stripe Dashboard (Developers &rarr; API Keys)</li>
                    <li>Add <code className="bg-amber-100 px-1">STRIPE_SECRET_KEY=sk_live_...</code> to your <code className="bg-amber-100 px-1">.env</code> file</li>
                    <li>Set <code className="bg-amber-100 px-1">NEXT_PUBLIC_BASE_URL</code> to your production domain (e.g. <code className="bg-amber-100 px-1">https://yourdomain.com</code>)</li>
                    <li>In Stripe Dashboard, configure a webhook endpoint pointing to <code className="bg-amber-100 px-1">https://yourdomain.com/api/stripe/webhook</code></li>
                    <li>Add <code className="bg-amber-100 px-1">STRIPE_WEBHOOK_SECRET=whsec_...</code> to your <code className="bg-amber-100 px-1">.env</code> file</li>
                  </ol>
                  <p className="text-[11px] text-amber-600 mt-3">
                    Once Stripe is configured, donations will redirect donors to a Stripe checkout page, and payment status will automatically update to &ldquo;completed&rdquo; when the payment succeeds.
                  </p>
                </div>

                {/* Data storage info */}
                <div className="mt-4 bg-blue-50 border border-blue-200 p-6">
                  <h3 className="text-[14px] font-bold text-blue-800 mb-2">Where Your Data Is Stored</h3>
                  <p className="text-[13px] text-blue-700 leading-relaxed mb-3">
                    All form submissions are saved to a <strong>SQLite database</strong> via Prisma ORM. This includes:
                  </p>
                  <ul className="text-[12px] text-blue-700 space-y-1 list-disc list-inside">
                    <li><strong>Applications</strong> &mdash; from the 4-step Apply form (personal info, academics, accomplishments, financial aid)</li>
                    <li><strong>Donations</strong> &mdash; from the Give page donation form (with Stripe integration when configured)</li>
                    <li><strong>Contact Messages</strong> &mdash; from the Give page contact form and any contact forms</li>
                    <li><strong>Newsletter Subscribers</strong> &mdash; from subscribe forms across the site (homepage, blog, footer)</li>
                  </ul>
                  <p className="text-[11px] text-blue-600 mt-3">
                    Database file: <code className="bg-blue-100 px-1">/home/z/my-project/db/custom.db</code>. You can also export data to CSV using the download buttons on each tab.
                  </p>
                </div>
              </div>
            )}

            {/* ─── DONATIONS TABLE ─── */}
            {activeTab === 'donations' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] font-black text-[#141414]">Donations</h2>
                  {data?.donors && data.donors.length > 0 && (
                    <button
                      onClick={() => exportCSV(data.donors, 'artemis-donations')}
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8A0000] hover:underline"
                      suppressHydrationWarning
                    >
                      <Download size={13} /> Export CSV
                    </button>
                  )}
                </div>
                {(!data?.donors || data.donors.length === 0) ? (
                  <div className="bg-white border border-gray-200 p-10 text-center">
                    <p className="text-gray-400 text-[14px]">No donations recorded yet.</p>
                    <p className="text-[12px] text-gray-300 mt-2">When visitors submit the donation form on the Give page, their data will appear here.</p>
                  </div>
                ) : (
                  <div className="bg-white border border-gray-200 overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Date</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Donor</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Email</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Amount</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Method</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Status</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Recurring</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(data.donors || []).map((d: any) => (
                          <tr key={d.id || d.date} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3 text-gray-600 whitespace-nowrap">{formatDate(d.createdAt || d.date)}</td>
                            <td className="p-3 font-medium text-[#141414]">{d.donorName || d.name || 'Anonymous'}</td>
                            <td className="p-3 text-gray-500">{d.donorEmail || ''}</td>
                            <td className="p-3 font-bold text-[#141414]">{formatCurrency(d.amount, d.currency || 'USD')}</td>
                            <td className="p-3 text-gray-600 capitalize">{d.paymentMethod || 'card'}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                d.paymentStatus === 'completed' ? 'bg-green-100 text-green-700' :
                                d.paymentStatus === 'pending' ? 'bg-amber-100 text-amber-700' :
                                d.paymentStatus === 'expired' ? 'bg-red-100 text-red-700' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {d.paymentStatus || 'unknown'}
                              </span>
                            </td>
                            <td className="p-3 text-gray-500">{d.isRecurring ? `Yes (${d.recurringFreq})` : 'No'}</td>
                            <td className="p-3 text-gray-500 max-w-[200px] truncate">{d.message || d.tier || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* ─── APPLICATIONS TABLE ─── */}
            {activeTab === 'applications' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] font-black text-[#141414]">Applications</h2>
                  {data?.applications && data.applications.length > 0 && (
                    <button
                      onClick={() => exportCSV(data.applications, 'artemis-applications')}
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8A0000] hover:underline"
                      suppressHydrationWarning
                    >
                      <Download size={13} /> Export CSV
                    </button>
                  )}
                </div>
                {(!data?.applications || data.applications.length === 0) ? (
                  <div className="bg-white border border-gray-200 p-10 text-center">
                    <p className="text-gray-400 text-[14px]">No applications submitted yet.</p>
                    <p className="text-[12px] text-gray-300 mt-2">When visitors complete the Apply form, their data will appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {(data.applications || []).map((app: any, idx: number) => (
                      <div key={app.id} className="bg-white border border-gray-200 hover:border-gray-300 transition-colors">
                        {/* Summary row - always visible */}
                        <div
                          className="p-5 cursor-pointer flex items-start justify-between"
                          onClick={() => setExpandedApp(expandedApp === idx ? null : idx)}
                        >
                          <div>
                            <h3 className="text-[16px] font-bold text-[#141414]">{app.firstName} {app.lastName}</h3>
                            <p className="text-[12px] text-gray-500">{app.email} &middot; {app.phone || 'No phone'}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">{app.status}</span>
                              <p className="text-[11px] text-gray-400 mt-1">{formatDate(app.createdAt)}</p>
                            </div>
                            {expandedApp === idx ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                          </div>
                        </div>

                        {/* Expanded details */}
                        {expandedApp === idx && (
                          <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[12px] mb-4">
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Application Cycle</span> <span className="font-medium">{app.applicationCycle || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Concentration</span> <span className="font-medium">{app.concentration || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Gender</span> <span className="font-medium">{app.gender || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Citizenship</span> <span className="font-medium">{app.citizenship || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Country</span> <span className="font-medium">{app.country || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">How Heard</span> <span className="font-medium">{app.howHeard || '-'}</span></div>
                            </div>

                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A0000] mb-2">Academic Record</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[12px] mb-4">
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">School</span> <span className="font-medium">{app.schoolName || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">School Country</span> <span className="font-medium">{app.schoolCountry || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">GPA</span> <span className="font-medium">{app.gpa || '-'}/{app.maxGpa || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Grading Scale</span> <span className="font-medium">{app.gradingScale || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">SAT Math</span> <span className="font-medium">{app.satMath || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">SAT Reading</span> <span className="font-medium">{app.satReading || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">ACT Score</span> <span className="font-medium">{app.actScore || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Test Optional</span> <span className="font-medium">{app.isTestOptional ? 'Yes' : 'No'}</span></div>
                            </div>

                            {app.accomplishments && (
                              <div className="mb-4">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A0000] mb-2">Accomplishments</h4>
                                <div className="space-y-2">
                                  {(typeof app.accomplishments === 'string' ? JSON.parse(app.accomplishments) : app.accomplishments || []).map((acc: any, i: number) => (
                                    <div key={i} className="bg-gray-50 p-3 text-[12px]">
                                      <div className="font-bold text-[#141414]">{acc.title || 'Untitled'}</div>
                                      {acc.role && <div className="text-gray-500">Role: {acc.role}</div>}
                                      {acc.description && <div className="text-gray-600 mt-1">{acc.description}</div>}
                                      {acc.impact && <div className="text-gray-500 italic mt-1">Impact: {acc.impact}</div>}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {app.personalStatement && (
                              <div className="mb-4">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A0000] mb-2">Personal Statement</h4>
                                <p className="text-[12px] text-gray-700 leading-relaxed bg-gray-50 p-3">{app.personalStatement}</p>
                              </div>
                            )}

                            {app.missionStatement && (
                              <div className="mb-4">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A0000] mb-2">Mission Statement</h4>
                                <p className="text-[12px] text-gray-700 leading-relaxed bg-gray-50 p-3">{app.missionStatement}</p>
                              </div>
                            )}

                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A0000] mb-2">Financial Aid</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[12px]">
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Applying for Aid</span> <span className="font-medium">{app.applyingForAid || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Household Income</span> <span className="font-medium">{app.householdIncome || '-'}</span></div>
                              <div><span className="text-gray-400 block text-[10px] uppercase tracking-wider mb-0.5">Dependents</span> <span className="font-medium">{app.dependents || '-'}</span></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ─── CONTACT MESSAGES ─── */}
            {activeTab === 'contacts' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] font-black text-[#141414]">Contact Messages</h2>
                  {data?.messages && data.messages.length > 0 && (
                    <button
                      onClick={() => exportCSV(data.messages, 'artemis-messages')}
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8A0000] hover:underline"
                      suppressHydrationWarning
                    >
                      <Download size={13} /> Export CSV
                    </button>
                  )}
                </div>
                {(!data?.messages || data.messages.length === 0) ? (
                  <div className="bg-white border border-gray-200 p-10 text-center">
                    <p className="text-gray-400 text-[14px]">No messages received yet.</p>
                    <p className="text-[12px] text-gray-300 mt-2">When visitors submit the contact form on the Give page, their messages will appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {(data.messages || []).map((msg: any) => (
                      <div key={msg.id} className={`bg-white border p-5 ${!msg.read ? 'border-[#8A0000]/30 bg-[#8A0000]/[0.02]' : 'border-gray-200'}`}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-[16px] font-bold text-[#141414]">{msg.name} {!msg.read && <span className="text-[9px] bg-[#8A0000] text-white px-1.5 py-0.5 font-bold">NEW</span>}</h3>
                            <p className="text-[12px] text-gray-500">{msg.email}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5">{msg.area || 'General'}</span>
                            <p className="text-[11px] text-gray-400 mt-1">{formatDate(msg.createdAt)}</p>
                          </div>
                        </div>
                        {msg.subject && <p className="text-[12px] font-bold text-gray-600 mb-1">Subject: {msg.subject}</p>}
                        <p className="text-[13px] text-gray-700 leading-relaxed">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ─── SUBSCRIBERS ─── */}
            {activeTab === 'subscribers' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[24px] font-black text-[#141414]">Newsletter Subscribers</h2>
                  {data?.subscribers && data.subscribers.length > 0 && (
                    <button
                      onClick={() => exportCSV(data.subscribers, 'artemis-subscribers')}
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8A0000] hover:underline"
                      suppressHydrationWarning
                    >
                      <Download size={13} /> Export CSV
                    </button>
                  )}
                </div>
                {(!data?.subscribers || data.subscribers.length === 0) ? (
                  <div className="bg-white border border-gray-200 p-10 text-center">
                    <p className="text-gray-400 text-[14px]">No subscribers yet.</p>
                    <p className="text-[12px] text-gray-300 mt-2">When visitors subscribe to the newsletter, their email will appear here.</p>
                  </div>
                ) : (
                  <div className="bg-white border border-gray-200 overflow-x-auto">
                    <table className="w-full text-[13px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Email</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Source</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Active</th>
                          <th className="text-left p-3 font-bold text-[10px] uppercase tracking-wider text-gray-500">Subscribed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(data.subscribers || []).map((sub: any) => (
                          <tr key={sub.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3 font-medium text-[#141414]">{sub.email}</td>
                            <td className="p-3 text-gray-500 capitalize">{sub.source || '-'}</td>
                            <td className="p-3">
                              <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${sub.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                {sub.active ? 'Yes' : 'No'}
                              </span>
                            </td>
                            <td className="p-3 text-gray-500">{formatDate(sub.createdAt)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
