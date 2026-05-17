'use client';

import React, { useState, useEffect } from 'react';

interface Props {
  goToPage: (page: string) => void;
}

type Tab = 'overview' | 'donations' | 'applications' | 'contacts' | 'subscribers';

export default function AdminDashboard({ goToPage }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
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
    }
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  const formatCurrency = (n: number, c = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency: c }).format(n);

  const tabs: { id: Tab; label: string }[] = [
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
            <div className="w-8 h-8 bg-[#8A0000] flex items-center justify-center text-white text-[11px] font-black">A</div>
            <div>
              <h1 className="text-[16px] font-bold">Artemis Admin</h1>
              <p className="text-[11px] text-white/50">Data Collection Dashboard</p>
            </div>
          </div>
          <button onClick={() => goToPage('home')} className="text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
            Back to Site
          </button>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="bg-white border-b border-gray-200 px-6">
        <div className="max-w-[1400px] mx-auto flex gap-0">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-[12px] font-bold uppercase tracking-wider transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'text-[#8A0000] border-[#8A0000]'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-20 text-gray-400 text-[14px]">Loading...</div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 text-[14px]">{error}</div>
        ) : (
          <>
            {/* ─── OVERVIEW ─── */}
            {activeTab === 'overview' && data?.stats && (
              <div>
                <h2 className="text-[24px] font-black text-[#141414] mb-6">Dashboard Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                  {[
                    { label: 'Total Donations', value: data.stats.totalDonations, color: '#8A0000' },
                    { label: 'Total Raised', value: formatCurrency(data.stats.totalRaised || 0), color: '#15803d' },
                    { label: 'Applications', value: data.stats.totalApplications, color: '#4338ca' },
                    { label: 'Messages', value: data.stats.totalContactMessages, color: '#0e7490' },
                    { label: 'Subscribers', value: data.stats.totalSubscribers, color: '#6b7280' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-gray-200 p-5">
                      <div className="text-[28px] font-black" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {data.stats.unreadMessages > 0 && (
                  <div className="bg-[#8A0000]/5 border border-[#8A0000]/20 p-4 mb-8">
                    <span className="text-[13px] font-bold text-[#8A0000]">{data.stats.unreadMessages} unread message(s)</span>
                    <button onClick={() => setActiveTab('contacts')} className="ml-3 text-[11px] font-bold uppercase tracking-wider text-[#8A0000] underline">View Messages</button>
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
                  <h3 className="text-[14px] font-bold text-amber-800 mb-2">Payment Gateway Setup</h3>
                  <p className="text-[13px] text-amber-700 leading-relaxed mb-3">
                    Donations are currently saved to the database as <strong>pending</strong>. To accept real payments via Stripe:
                  </p>
                  <ol className="text-[12px] text-amber-700 space-y-1 list-decimal list-inside">
                    <li>Create a Stripe account at <a href="https://stripe.com" target="_blank" rel="noreferrer" className="underline">stripe.com</a></li>
                    <li>Get your API keys from the Stripe Dashboard</li>
                    <li>Add <code className="bg-amber-100 px-1">STRIPE_SECRET_KEY=sk_live_...</code> to your <code className="bg-amber-100 px-1">.env</code> file</li>
                    <li>Set <code className="bg-amber-100 px-1">NEXT_PUBLIC_BASE_URL</code> to your production domain</li>
                    <li>Configure the Stripe webhook endpoint to <code className="bg-amber-100 px-1">/api/stripe/webhook</code></li>
                  </ol>
                </div>
              </div>
            )}

            {/* ─── DONATIONS TABLE ─── */}
            {activeTab === 'donations' && (
              <div>
                <h2 className="text-[24px] font-black text-[#141414] mb-6">Donations</h2>
                {(!data?.donors || data.donors.length === 0) ? (
                  <p className="text-gray-400 text-[14px]">No donations recorded yet.</p>
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
                            <td className="p-3 text-gray-600">{formatDate(d.createdAt || d.date)}</td>
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
                <h2 className="text-[24px] font-black text-[#141414] mb-6">Applications</h2>
                {(!data?.applications || data.applications.length === 0) ? (
                  <p className="text-gray-400 text-[14px]">No applications submitted yet.</p>
                ) : (
                  <div className="space-y-4">
                    {(data.applications || []).map((app: any) => (
                      <div key={app.id} className="bg-white border border-gray-200 p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-[16px] font-bold text-[#141414]">{app.firstName} {app.lastName}</h3>
                            <p className="text-[12px] text-gray-500">{app.email} &middot; {app.phone || 'No phone'}</p>
                          </div>
                          <div className="text-right">
                            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">{app.status}</span>
                            <p className="text-[11px] text-gray-400 mt-1">{formatDate(app.createdAt)}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[12px]">
                          <div><span className="text-gray-400">Cycle:</span> <span className="font-medium">{app.applicationCycle || '-'}</span></div>
                          <div><span className="text-gray-400">Concentration:</span> <span className="font-medium">{app.concentration || '-'}</span></div>
                          <div><span className="text-gray-400">Country:</span> <span className="font-medium">{app.country || '-'}</span></div>
                          <div><span className="text-gray-400">GPA:</span> <span className="font-medium">{app.gpa || '-'}/{app.maxGpa || '-'}</span></div>
                          <div><span className="text-gray-400">School:</span> <span className="font-medium">{app.schoolName || '-'}</span></div>
                          <div><span className="text-gray-400">Financial Aid:</span> <span className="font-medium">{app.applyingForAid || '-'}</span></div>
                        </div>
                        {app.personalStatement && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Personal Statement</span>
                            <p className="text-[12px] text-gray-600 mt-1 line-clamp-3">{app.personalStatement}</p>
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
                <h2 className="text-[24px] font-black text-[#141414] mb-6">Contact Messages</h2>
                {(!data?.messages || data.messages.length === 0) ? (
                  <p className="text-gray-400 text-[14px]">No messages received yet.</p>
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
                <h2 className="text-[24px] font-black text-[#141414] mb-6">Newsletter Subscribers</h2>
                {(!data?.subscribers || data.subscribers.length === 0) ? (
                  <p className="text-gray-400 text-[14px]">No subscribers yet.</p>
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
