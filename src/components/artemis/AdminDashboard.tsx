'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Download, ChevronDown, ChevronUp, Shield, Lock, LogOut, Eye, EyeOff } from 'lucide-react';

interface Props {
  goToPage: (page: string) => void;
}

interface AllData {
  overview: any;
  donations: any;
  applications: any;
  messages: any;
  subscribers: any;
}

export default function AdminDashboard({ goToPage }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [allData, setAllData] = useState<AllData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedApp, setExpandedApp] = useState<number | null>(null);
  const [expandedMsg, setExpandedMsg] = useState<number | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  // Check if already authenticated on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin');
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setAuthChecked(true);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setLoginLoading(true);
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();
      if (json.success) {
        setIsAuthenticated(true);
        setPassword('');
      } else {
        setLoginError(json.error || 'Authentication failed');
      }
    } catch {
      setLoginError('Network error. Please try again.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/login', { method: 'DELETE' });
    } catch { /* ignore */ }
    setIsAuthenticated(false);
    setAllData(null);
  };

  // Fetch ALL data in parallel after login
  const fetchAllData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [overviewRes, donationsRes, applicationsRes, messagesRes, subscribersRes] = await Promise.all([
        fetch('/api/admin'),
        fetch('/api/donations'),
        fetch('/api/applications'),
        fetch('/api/contact'),
        fetch('/api/subscribe'),
      ]);

      // Check auth on first response
      if (overviewRes.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }

      const [overview, donations, applications, messages, subscribers] = await Promise.all([
        overviewRes.json(),
        donationsRes.json(),
        applicationsRes.json(),
        messagesRes.json(),
        subscribersRes.json(),
      ]);

      if (overview.error) {
        setError(overview.error);
      } else {
        setAllData({ overview, donations, applications, messages, subscribers });
      }
    } catch {
      setError('Failed to fetch data. Make sure the server is running.');
    } finally {
      setLoading(false);
      setLastRefresh(new Date());
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated, fetchAllData]);

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

  // Build "What's New" feed from overview data
  const buildWhatsNew = () => {
    if (!allData?.overview) return [];
    const ov = allData.overview;
    const items: { type: string; emoji: string; text: string; date: string; id: string }[] = [];

    (ov.recentDonations || []).forEach((d: any) => {
      items.push({
        type: 'donation',
        emoji: '💰',
        text: `${d.donorName || d.name || 'Someone'} donated ${formatCurrency(d.amount, d.currency)}`,
        date: d.createdAt || d.date,
        id: `d-${d.id}`,
      });
    });

    (ov.recentApplications || []).forEach((a: any) => {
      items.push({
        type: 'application',
        emoji: '📋',
        text: `${a.firstName} ${a.lastName} applied`,
        date: a.createdAt,
        id: `a-${a.id}`,
      });
    });

    (ov.recentContacts || []).forEach((c: any) => {
      items.push({
        type: 'message',
        emoji: '✉️',
        text: `${c.name} sent a message${!c.read ? ' (new!)' : ''}`,
        date: c.createdAt,
        id: `c-${c.id}`,
      });
    });

    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return items.slice(0, 5);
  };

  // ─── Loading while checking auth ───
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin mb-4" />
          <p className="text-white/40 text-base">Checking access...</p>
        </div>
      </div>
    );
  }

  // ─── Login Screen ───
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center px-6">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#8A0000] rounded-2xl flex items-center justify-center text-white mx-auto mb-5">
              <Shield size={28} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Artemis Admin</h1>
            <p className="text-sm text-white/40">Enter your admin password to continue</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setLoginError(''); }}
                  placeholder="Admin password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl text-white px-4 py-4 pl-11 pr-11 text-base placeholder-white/25 focus:outline-none focus:border-[#8A0000] focus:ring-2 focus:ring-[#8A0000]/30 transition-all"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  suppressHydrationWarning
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl text-red-300 p-4 text-sm mb-5">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading || !password}
              className="w-full py-4 bg-[#8A0000] rounded-xl text-white text-sm font-bold uppercase tracking-widest hover:bg-[#6B0000] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              suppressHydrationWarning
            >
              {loginLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => goToPage('home')}
              className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors"
              suppressHydrationWarning
            >
              ← Back to Site
            </button>
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-xs text-white/30 leading-relaxed">
              The admin password is set via the <code className="bg-white/10 px-1.5 py-0.5 rounded">ADMIN_PASSWORD</code> environment variable in your <code className="bg-white/10 px-1.5 py-0.5 rounded">.env</code> file. If you haven&apos;t set one, add it and restart the server.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── Authenticated Dashboard — Single Scrollable Page ───
  const stats = allData?.overview?.stats;
  const donors = allData?.donations?.donors || [];
  const applications = allData?.applications?.applications || [];
  const messages = allData?.messages?.messages || [];
  const subscribers = allData?.subscribers?.subscribers || [];

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* ─── Header Bar ─── */}
      <div className="bg-[#141414] text-white px-6 py-5 sticky top-0 z-30">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#8A0000] rounded-xl flex items-center justify-center text-white">
              <Shield size={18} />
            </div>
            <div>
              <h1 className="text-lg font-bold">Artemis Admin</h1>
              <p className="text-xs text-white/40">Your dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/25 hidden md:block">
              Updated {lastRefresh.toLocaleTimeString()}
            </span>
            <button
              onClick={fetchAllData}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-white/60 hover:text-white transition-all"
              suppressHydrationWarning
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-white/60 hover:text-white transition-all"
              suppressHydrationWarning
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Log Out</span>
            </button>
            <button
              onClick={() => goToPage('home')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white transition-all"
              suppressHydrationWarning
            >
              ← Site
            </button>
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-24">
            <div className="inline-block w-8 h-8 border-3 border-[#8A0000] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-400 text-lg">Loading...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 p-8 text-center">
            <p className="text-lg font-bold mb-2">Something went wrong</p>
            <p className="text-base mb-4">{error}</p>
            {error.includes('Unauthorized') || error.includes('Session expired') ? (
              <button onClick={handleLogout} className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-sm" suppressHydrationWarning>Log In Again</button>
            ) : (
              <button onClick={fetchAllData} className="px-6 py-3 bg-[#8A0000] text-white rounded-xl font-bold text-sm" suppressHydrationWarning>Try Again</button>
            )}
          </div>
        ) : (
          <div className="space-y-10">

            {/* ═══════ STATS BAR ═══════ */}
            {stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { label: 'Donations', value: stats.totalDonations, emoji: '💰', color: '#8A0000' },
                  { label: 'Total Raised', value: formatCurrency(stats.totalRaised || 0), emoji: '💵', color: '#15803d' },
                  { label: 'Applications', value: stats.totalApplications, emoji: '📋', color: '#b45309' },
                  { label: 'Messages', value: stats.totalContactMessages, emoji: '✉️', color: '#0e7490' },
                  { label: 'Subscribers', value: stats.totalSubscribers, emoji: '📬', color: '#7c3aed' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow text-center">
                    <div className="text-3xl mb-2">{stat.emoji}</div>
                    <div className="text-3xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* ═══════ RECENT ACTIVITY ═══════ */}
            <section>
              <h2 className="text-2xl font-black text-[#141414] mb-4">Recent Activity ✨</h2>
              {buildWhatsNew().length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                  <p className="text-4xl mb-3">🌱</p>
                  <p className="text-lg text-gray-400 font-medium">Nothing here yet</p>
                  <p className="text-sm text-gray-300 mt-1">When people interact with your site, you&apos;ll see their activity here.</p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
                  {buildWhatsNew().map(item => (
                    <div key={item.id} className="flex items-center gap-4 p-5">
                      <span className="text-2xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-[#141414]">{item.text}</p>
                        <p className="text-sm text-gray-400">{formatDate(item.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ═══════ MESSAGES ═══════ */}
            <section>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#141414]">✉️ Messages</h2>
                  <p className="text-base text-gray-500 mt-1">Messages from your contact form</p>
                </div>
                {messages.length > 0 && (
                  <button
                    onClick={() => exportCSV(messages, 'artemis-messages')}
                    className="flex items-center gap-2 px-5 py-3 bg-[#8A0000] text-white rounded-xl font-bold text-sm hover:bg-[#6B0000] transition-colors"
                    suppressHydrationWarning
                  >
                    <Download size={18} /> Export CSV
                  </button>
                )}
              </div>

              {messages.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                  <p className="text-5xl mb-4">📮</p>
                  <p className="text-xl text-gray-400 font-semibold">No messages yet</p>
                  <p className="text-base text-gray-300 mt-2 max-w-md mx-auto">When someone sends you a message through the contact form, it&apos;ll appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg: any, idx: number) => (
                    <div key={msg.id} className={`rounded-2xl border-2 overflow-hidden transition-all ${
                      !msg.read ? 'bg-[#8A0000]/[0.03] border-[#8A0000]/20' : 'bg-white border-gray-100'
                    }`}>
                      <div
                        className="p-5 cursor-pointer flex items-center justify-between gap-4"
                        onClick={() => setExpandedMsg(expandedMsg === idx ? null : idx)}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0 ${
                            !msg.read ? 'bg-[#8A0000] text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {msg.name?.[0]?.toUpperCase() || '?'}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#141414]">
                              {msg.name}
                              {!msg.read && <span className="ml-2 text-[10px] bg-[#8A0000] text-white px-2 py-1 rounded-md font-bold uppercase">New</span>}
                            </h3>
                            <p className="text-sm text-gray-500 truncate">{msg.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="text-right hidden sm:block">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1 rounded-lg">{msg.area || 'General'}</span>
                            <p className="text-xs text-gray-400 mt-1">{formatDate(msg.createdAt)}</p>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                            {expandedMsg === idx ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                          </div>
                        </div>
                      </div>
                      {expandedMsg === idx && (
                        <div className="px-5 pb-5 border-t border-gray-50 pt-4">
                          {msg.subject && <p className="text-base font-semibold text-gray-600 mb-2">Subject: {msg.subject}</p>}
                          <p className="text-base text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">{msg.message}</p>
                          <div className="sm:hidden mt-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1 rounded-lg">{msg.area || 'General'}</span>
                            <p className="text-xs text-gray-400 mt-1.5">{formatDate(msg.createdAt)}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ═══════ APPLICATIONS ═══════ */}
            <section>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#141414]">📋 Applications</h2>
                  <p className="text-base text-gray-500 mt-1">Everyone who submitted an application</p>
                </div>
                {applications.length > 0 && (
                  <button
                    onClick={() => exportCSV(applications, 'artemis-applications')}
                    className="flex items-center gap-2 px-5 py-3 bg-[#8A0000] text-white rounded-xl font-bold text-sm hover:bg-[#6B0000] transition-colors"
                    suppressHydrationWarning
                  >
                    <Download size={18} /> Export CSV
                  </button>
                )}
              </div>

              {applications.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                  <p className="text-5xl mb-4">📝</p>
                  <p className="text-xl text-gray-400 font-semibold">No applications yet</p>
                  <p className="text-base text-gray-300 mt-2 max-w-md mx-auto">When someone completes the Apply form, they&apos;ll appear here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {applications.map((app: any, idx: number) => (
                    <div key={app.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all overflow-hidden">
                      <div
                        className="p-5 cursor-pointer flex items-center justify-between gap-4"
                        onClick={() => setExpandedApp(expandedApp === idx ? null : idx)}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 bg-[#8A0000]/10 rounded-xl flex items-center justify-center text-[#8A0000] font-bold text-lg flex-shrink-0">
                            {app.firstName?.[0]}{app.lastName?.[0]}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#141414]">{app.firstName} {app.lastName}</h3>
                            <p className="text-sm text-gray-500 truncate">{app.email} &middot; {app.phone || 'No phone'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="text-right hidden sm:block">
                            <span className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700">{app.status || 'submitted'}</span>
                            <p className="text-xs text-gray-400 mt-1">{formatDate(app.createdAt)}</p>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                            {expandedApp === idx ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                          </div>
                        </div>
                      </div>

                      {expandedApp === idx && (
                        <div className="px-5 pb-5 border-t border-gray-50 pt-4">
                          {/* Personal Info */}
                          <h4 className="text-sm font-bold text-[#8A0000] mb-3 uppercase tracking-wider">👤 Personal Info</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm mb-6">
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Application Cycle</span> <span className="font-semibold">{app.applicationCycle || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Concentration</span> <span className="font-semibold">{app.concentration || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Gender</span> <span className="font-semibold">{app.gender || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Citizenship</span> <span className="font-semibold">{app.citizenship || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Country</span> <span className="font-semibold">{app.country || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">How Heard</span> <span className="font-semibold">{app.howHeard || '—'}</span></div>
                          </div>

                          {/* Academic Record */}
                          <h4 className="text-sm font-bold text-[#8A0000] mb-3 uppercase tracking-wider">🎓 Academic Record</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm mb-6">
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">School</span> <span className="font-semibold">{app.schoolName || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">School Country</span> <span className="font-semibold">{app.schoolCountry || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">GPA</span> <span className="font-semibold">{app.gpa || '—'}/{app.maxGpa || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Grading Scale</span> <span className="font-semibold">{app.gradingScale || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">SAT Math</span> <span className="font-semibold">{app.satMath || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">SAT Reading</span> <span className="font-semibold">{app.satReading || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">ACT Score</span> <span className="font-semibold">{app.actScore || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Test Optional</span> <span className="font-semibold">{app.isTestOptional ? 'Yes' : 'No'}</span></div>
                          </div>

                          {/* Accomplishments */}
                          {app.accomplishments && (
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#8A0000] mb-3 uppercase tracking-wider">🏆 Accomplishments</h4>
                              <div className="space-y-3">
                                {(typeof app.accomplishments === 'string' ? JSON.parse(app.accomplishments) : app.accomplishments || []).map((acc: any, i: number) => (
                                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-sm">
                                    <div className="font-bold text-[#141414] text-base">{acc.title || 'Untitled'}</div>
                                    {acc.role && <div className="text-gray-500 mt-1">Role: {acc.role}</div>}
                                    {acc.description && <div className="text-gray-600 mt-1">{acc.description}</div>}
                                    {acc.impact && <div className="text-gray-500 italic mt-1">Impact: {acc.impact}</div>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Personal Statement */}
                          {app.personalStatement && (
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#8A0000] mb-3 uppercase tracking-wider">✍️ Personal Statement</h4>
                              <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">{app.personalStatement}</p>
                            </div>
                          )}

                          {/* Mission Statement */}
                          {app.missionStatement && (
                            <div className="mb-6">
                              <h4 className="text-sm font-bold text-[#8A0000] mb-3 uppercase tracking-wider">🎯 Mission Statement</h4>
                              <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">{app.missionStatement}</p>
                            </div>
                          )}

                          {/* Financial Aid */}
                          <h4 className="text-sm font-bold text-[#8A0000] mb-3 uppercase tracking-wider">💵 Financial Aid</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Applying for Aid</span> <span className="font-semibold">{app.applyingForAid || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Household Income</span> <span className="font-semibold">{app.householdIncome || '—'}</span></div>
                            <div><span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">Dependents</span> <span className="font-semibold">{app.dependents || '—'}</span></div>
                          </div>

                          {/* Mobile-only date/status */}
                          <div className="sm:hidden mt-4 pt-4 border-t border-gray-100">
                            <span className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700">{app.status || 'submitted'}</span>
                            <p className="text-xs text-gray-400 mt-2">{formatDate(app.createdAt)}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ═══════ DONATIONS ═══════ */}
            <section>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#141414]">💰 Donations</h2>
                  <p className="text-base text-gray-500 mt-1">All the donations people have made</p>
                </div>
                {donors.length > 0 && (
                  <button
                    onClick={() => exportCSV(donors, 'artemis-donations')}
                    className="flex items-center gap-2 px-5 py-3 bg-[#8A0000] text-white rounded-xl font-bold text-sm hover:bg-[#6B0000] transition-colors"
                    suppressHydrationWarning
                  >
                    <Download size={18} /> Export CSV
                  </button>
                )}
              </div>

              {donors.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                  <p className="text-5xl mb-4">💝</p>
                  <p className="text-xl text-gray-400 font-semibold">No donations yet</p>
                  <p className="text-base text-gray-300 mt-2 max-w-md mx-auto">When someone makes a donation on your site, it&apos;ll show up right here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {donors.map((d: any) => (
                    <div key={d.id || d.date} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-2xl font-black text-[#8A0000]">{formatCurrency(d.amount, d.currency || 'USD')}</p>
                          <p className="text-base font-semibold text-[#141414] mt-1">
                            {d.donorName || d.name || (d.donorAnonymous ? 'Anonymous donor' : 'Unknown')}
                          </p>
                        </div>
                        <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                          d.paymentStatus === 'completed' ? 'bg-green-100 text-green-700' :
                          d.paymentStatus === 'pending' ? 'bg-amber-100 text-amber-700' :
                          d.paymentStatus === 'expired' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {d.paymentStatus || 'unknown'}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-500">
                        {d.donorEmail && <p>📧 {d.donorEmail}</p>}
                        <p>📅 {formatDate(d.createdAt || d.date)}</p>
                        {d.isRecurring && <p>🔄 Recurring ({d.recurringFreq || 'monthly'})</p>}
                        {d.paymentMethod && <p>💳 {d.paymentMethod}</p>}
                        {(d.message || d.tier) && <p>💬 &ldquo;{d.message || d.tier}&rdquo;</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ═══════ SUBSCRIBERS ═══════ */}
            <section>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#141414]">📬 Subscribers</h2>
                  <p className="text-base text-gray-500 mt-1">People who subscribed to your newsletter</p>
                </div>
                {subscribers.length > 0 && (
                  <button
                    onClick={() => exportCSV(subscribers, 'artemis-subscribers')}
                    className="flex items-center gap-2 px-5 py-3 bg-[#8A0000] text-white rounded-xl font-bold text-sm hover:bg-[#6B0000] transition-colors"
                    suppressHydrationWarning
                  >
                    <Download size={18} /> Export CSV
                  </button>
                )}
              </div>

              {subscribers.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
                  <p className="text-5xl mb-4">💌</p>
                  <p className="text-xl text-gray-400 font-semibold">No sign-ups yet</p>
                  <p className="text-base text-gray-300 mt-2 max-w-md mx-auto">When someone subscribes to your newsletter, they&apos;ll show up here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subscribers.map((sub: any) => (
                    <div key={sub.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold text-base flex-shrink-0">
                          {sub.email?.[0]?.toUpperCase() || '?'}
                        </div>
                        <div className="min-w-0">
                          <p className="text-base font-semibold text-[#141414] truncate">{sub.email}</p>
                        </div>
                      </div>
                      <div className="space-y-1.5 text-sm text-gray-500">
                        {sub.source && <p>📍 From: <span className="capitalize">{sub.source}</span></p>}
                        <p>📅 {formatDate(sub.createdAt)}</p>
                        <p>{sub.active ? '✅ Active' : '⏸️ Inactive'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ═══════ INFO CARDS ═══════ */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
              {/* Payment Setup — PayPal */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3">💳 How to Accept Real Payments</h3>
                <p className="text-base text-amber-700 leading-relaxed mb-4">
                  Right now, donations are saved as <strong>pending</strong>. To accept real payments:
                </p>
                <ol className="text-sm text-amber-700 space-y-2 list-decimal list-inside">
                  <li>Create a PayPal account at <a href="https://paypal.com" target="_blank" rel="noreferrer" className="underline font-semibold">paypal.com</a> (personal or business)</li>
                  <li>Get your PayPal email address</li>
                  <li>Add <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs">PAYPAL_EMAIL=your@email.com</code> to your <code className="bg-amber-100 px-1.5 py-0.5 rounded text-xs">.env</code> file</li>
                  <li>Donors will see a &ldquo;Donate with PayPal&rdquo; button on the Give page</li>
                </ol>
                <p className="text-xs text-amber-600 mt-4">
                  PayPal doesn&apos;t require an EIN — just a valid email address. You can also upgrade to a PayPal Business account later for more features.
                </p>
              </div>

              {/* Where Data Lives */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">📁 Where Your Data Lives</h3>
                <p className="text-base text-blue-700 leading-relaxed mb-4">
                  Everything is saved to a <strong>secure database</strong> on your server. This includes:
                </p>
                <ul className="text-sm text-blue-700 space-y-2 list-disc list-inside">
                  <li><strong>Applications</strong> — from the 4-step Apply form</li>
                  <li><strong>Donations</strong> — from the Give page</li>
                  <li><strong>Messages</strong> — from contact forms</li>
                  <li><strong>Newsletter sign-ups</strong> — from subscribe forms</li>
                </ul>
                <p className="text-xs text-blue-600 mt-4">
                  Database file: <code className="bg-blue-100 px-1.5 py-0.5 rounded">db/custom.db</code>. You can also download your data as CSV using the export buttons.
                </p>
              </div>
            </section>

          </div>
        )}
      </div>
    </div>
  );
}
