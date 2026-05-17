'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  RefreshCw, Download, ChevronDown, ChevronRight, Shield, Lock, LogOut,
  Eye, EyeOff, DollarSign, Users, Mail, UserPlus, Home, CreditCard,
  Database, ExternalLink, Clock, ArrowUpRight, MessageSquare, FileText,
  Heart, ChevronLeft
} from 'lucide-react';

interface Props {
  goToPage: (page: string) => void;
}

type Section = 'overview' | 'donations' | 'applications' | 'messages' | 'subscribers';

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

  const [activeSection, setActiveSection] = useState<Section>('overview');
  const [allData, setAllData] = useState<AllData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => { checkAuth(); }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin');
      setIsAuthenticated(res.ok);
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
    try { await fetch('/api/admin/login', { method: 'DELETE' }); } catch { /* ignore */ }
    setIsAuthenticated(false);
    setAllData(null);
  };

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

      if (overviewRes.status === 401) {
        setIsAuthenticated(false);
        setError('Session expired. Please log in again.');
        return;
      }

      const [overview, donations, applications, messages, subscribers] = await Promise.all([
        overviewRes.json(), donationsRes.json(), applicationsRes.json(),
        messagesRes.json(), subscribersRes.json(),
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
    if (isAuthenticated) fetchAllData();
  }, [isAuthenticated, fetchAllData]);

  const toggleExpanded = (idx: number) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const formatTime = (d: string) => new Date(d).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const formatCurrency = (n: number, c = 'USD') => new Intl.NumberFormat('en-US', { style: 'currency', currency: c }).format(n);
  const formatRelative = (d: string) => {
    const diff = Date.now() - new Date(d).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days}d ago`;
    return formatDate(d);
  };

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
            ? `"${str.replace(/"/g, '""')}"` : str;
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

  // Derived data
  const stats = allData?.overview?.stats;
  const donors = allData?.donations?.donors || [];
  const applications = allData?.applications?.applications || [];
  const messages = allData?.messages?.messages || [];
  const subscribers = allData?.subscribers?.subscribers || [];
  const unreadCount = messages.filter((m: any) => !m.read).length;

  // Sidebar nav items
  const navItems: { id: Section; label: string; icon: React.ReactNode; count?: number }[] = [
    { id: 'overview', label: 'Overview', icon: <Home size={18} /> },
    { id: 'donations', label: 'Donations', icon: <DollarSign size={18} />, count: donors.length },
    { id: 'applications', label: 'Applications', icon: <FileText size={18} />, count: applications.length },
    { id: 'messages', label: 'Messages', icon: <Mail size={18} />, count: unreadCount || undefined },
    { id: 'subscribers', label: 'Subscribers', icon: <UserPlus size={18} />, count: subscribers.length },
  ];

  // ─── Auth check loading ───
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#0A2540] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  // ─── Login Screen — Stripe-inspired ───
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A2540] flex items-center justify-center px-6">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield size={22} className="text-[#0A2540]" />
            </div>
            <h1 className="text-[22px] font-semibold text-white mb-1">Artemis Dashboard</h1>
            <p className="text-sm text-white/50">Sign in to your admin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-white/60 mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setLoginError(''); }}
                  placeholder="Enter your admin password"
                  className="w-full bg-white/10 border border-white/15 rounded-lg text-white px-4 py-3 text-sm placeholder-white/25 focus:outline-none focus:border-[#80E9FF] focus:ring-1 focus:ring-[#80E9FF]/30 transition-all"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  suppressHydrationWarning
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg text-red-300 px-4 py-3 text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading || !password}
              className="w-full py-3 bg-[#80E9FF] text-[#0A2540] rounded-lg text-sm font-semibold hover:bg-[#65D9F2] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              suppressHydrationWarning
            >
              {loginLoading ? 'Signing in...' : 'Continue'}
            </button>
          </form>

          <button
            onClick={() => goToPage('home')}
            className="mt-8 w-full text-center text-sm text-white/30 hover:text-white/60 transition-colors flex items-center justify-center gap-2"
            suppressHydrationWarning
          >
            <ChevronLeft size={14} /> Back to website
          </button>
        </div>
      </div>
    );
  }

  // ─── Authenticated Dashboard — Stripe Layout ───
  return (
    <div className="min-h-screen bg-[#F6F9FC] flex">
      {/* ═══ SIDEBAR ═══ */}
      <aside className={`${sidebarCollapsed ? 'w-[68px]' : 'w-[220px]'} bg-[#0A2540] text-white flex flex-col transition-all duration-200 shrink-0 sticky top-0 h-screen`}>
        {/* Logo */}
        <div className={`px-4 h-[56px] flex items-center border-b border-white/10 ${sidebarCollapsed ? 'justify-center' : 'gap-3'}`}>
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shrink-0">
            <Shield size={16} className="text-[#0A2540]" />
          </div>
          {!sidebarCollapsed && (
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">Artemis</p>
              <p className="text-[10px] text-white/40 uppercase tracking-wider">Dashboard</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-2 space-y-0.5">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-white/10 text-white font-medium'
                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                } ${sidebarCollapsed ? 'justify-center' : ''}`}
                title={sidebarCollapsed ? item.label : undefined}
                suppressHydrationWarning
              >
                <span className="shrink-0">{item.icon}</span>
                {!sidebarCollapsed && (
                  <>
                    <span className="flex-1 text-left truncate">{item.label}</span>
                    {item.count !== undefined && item.count > 0 && (
                      <span className={`text-[11px] font-medium px-1.5 py-0.5 rounded-full ${
                        item.id === 'messages' && unreadCount > 0
                          ? 'bg-[#80E9FF] text-[#0A2540]'
                          : 'bg-white/10 text-white/60'
                      }`}>
                        {item.count}
                      </span>
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="px-2 py-3 border-t border-white/10 space-y-0.5">
          <button
            onClick={fetchAllData}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
            title="Refresh data"
            suppressHydrationWarning
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            {!sidebarCollapsed && <span>Refresh</span>}
          </button>
          <button
            onClick={() => goToPage('home')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
            title="View website"
            suppressHydrationWarning
          >
            <ExternalLink size={16} />
            {!sidebarCollapsed && <span>View Site</span>}
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-red-400 hover:bg-white/5 transition-all"
            title="Sign out"
            suppressHydrationWarning
          >
            <LogOut size={16} />
            {!sidebarCollapsed && <span>Sign Out</span>}
          </button>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/20 hover:text-white/50 transition-all mt-2"
            suppressHydrationWarning
          >
            <ChevronLeft size={16} className={`transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            {!sidebarCollapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="h-[56px] bg-white border-b border-[#E8ECF1] flex items-center justify-between px-6 sticky top-0 z-20">
          <h1 className="text-[15px] font-semibold text-[#1A1F36] capitalize">{activeSection}</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#8792A2]">
              Last updated {lastRefresh.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="p-6 max-w-[1080px]">
          {loading ? (
            <div className="flex items-center justify-center py-32">
              <div className="inline-block w-5 h-5 border-2 border-[#0A2540] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-sm font-medium text-red-800 mb-1">Something went wrong</p>
              <p className="text-sm text-red-600 mb-4">{error}</p>
              <button
                onClick={error.includes('Unauthorized') || error.includes('expired') ? handleLogout : fetchAllData}
                className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium"
                suppressHydrationWarning
              >
                {error.includes('Unauthorized') || error.includes('expired') ? 'Sign In Again' : 'Try Again'}
              </button>
            </div>
          ) : (
            <>
              {/* ═══ OVERVIEW ═══ */}
              {activeSection === 'overview' && (
                <div className="space-y-6">
                  {/* Welcome */}
                  <div>
                    <h2 className="text-xl font-semibold text-[#1A1F36]">Welcome to your dashboard</h2>
                    <p className="text-sm text-[#8792A2] mt-0.5">Here's what's happening with your site today.</p>
                  </div>

                  {/* Metric Cards — Stripe style */}
                  {stats && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { label: 'Total Raised', value: formatCurrency(stats.totalRaised || 0), icon: <DollarSign size={16} />, accent: '#0A2540', bg: '#F0F4FF' },
                        { label: 'Applications', value: stats.totalApplications, icon: <FileText size={16} />, accent: '#B45309', bg: '#FFF8F0' },
                        { label: 'Messages', value: stats.totalContactMessages, icon: <MessageSquare size={16} />, accent: '#0E7490', bg: '#F0F9FF', sub: unreadCount > 0 ? `${unreadCount} unread` : undefined },
                        { label: 'Subscribers', value: stats.totalSubscribers, icon: <UserPlus size={16} />, accent: '#7C3AED', bg: '#F5F0FF' },
                      ].map((m, i) => (
                        <div key={i} className="bg-white rounded-lg border border-[#E8ECF1] p-5 hover:shadow-sm transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-[#8792A2] uppercase tracking-wide">{m.label}</span>
                            <span className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: m.bg, color: m.accent }}>
                              {m.icon}
                            </span>
                          </div>
                          <p className="text-2xl font-semibold text-[#1A1F36]">{m.value}</p>
                          {m.sub && (
                            <p className="text-xs text-[#80E9FF] font-medium mt-1 flex items-center gap-1">
                              <ArrowUpRight size={12} /> {m.sub}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Recent Activity — Stripe timeline style */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-semibold text-[#1A1F36]">Recent Activity</h3>
                      <button onClick={() => setActiveSection('messages')} className="text-xs text-[#0A2540] font-medium hover:underline" suppressHydrationWarning>View all</button>
                    </div>
                    <div className="bg-white rounded-lg border border-[#E8ECF1]">
                      {buildActivity().length === 0 ? (
                        <div className="py-12 text-center">
                          <Clock size={24} className="mx-auto text-[#C1C9D2] mb-2" />
                          <p className="text-sm text-[#8792A2]">No activity yet</p>
                          <p className="text-xs text-[#C1C9D2] mt-0.5">When people interact with your site, you'll see it here.</p>
                        </div>
                      ) : (
                        <div className="divide-y divide-[#F0F3F7]">
                          {buildActivity().map((item, i) => (
                            <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-[#F6F9FC] transition-colors">
                              <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0" style={{ background: item.bg, color: item.color }}>
                                {item.icon}
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-[#1A1F36] truncate">{item.text}</p>
                              </div>
                              <span className="text-xs text-[#C1C9D2] shrink-0">{item.time}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Setup — clean cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg border border-[#E8ECF1] p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CreditCard size={16} className="text-[#B45309]" />
                        <h3 className="text-sm font-semibold text-[#1A1F36]">Accept Payments</h3>
                      </div>
                      <p className="text-xs text-[#8792A2] leading-relaxed mb-3">
                        Donations are currently saved as pending. Set up PayPal to accept real payments — no EIN required.
                      </p>
                      <ol className="text-xs text-[#5A6987] space-y-1.5 list-decimal list-inside">
                        <li>Create a PayPal account at <a href="https://paypal.com" target="_blank" rel="noreferrer" className="text-[#0A2540] hover:underline">paypal.com</a></li>
                        <li>Get your PayPal email address</li>
                        <li>Add <code className="bg-[#F6F9FC] px-1 py-0.5 rounded text-[11px]">PAYPAL_EMAIL=you@email.com</code> to your <code className="bg-[#F6F9FC] px-1 py-0.5 rounded text-[11px]">.env</code></li>
                      </ol>
                      <p className="text-[11px] text-[#C1C9D2] mt-3">PayPal doesn't require an EIN. You can upgrade to Business later.</p>
                    </div>
                    <div className="bg-white rounded-lg border border-[#E8ECF1] p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Database size={16} className="text-[#0E7490]" />
                        <h3 className="text-sm font-semibold text-[#1A1F36]">Your Data</h3>
                      </div>
                      <p className="text-xs text-[#8792A2] leading-relaxed mb-3">
                        All submissions are stored in a secure database on your server:
                      </p>
                      <ul className="text-xs text-[#5A6987] space-y-1.5">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0A2540]" /> Applications from the Apply form</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8A0000]" /> Donations from the Give page</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" /> Messages from contact forms</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" /> Newsletter sign-ups</li>
                      </ul>
                      <p className="text-[11px] text-[#C1C9D2] mt-3">Database: <code className="bg-[#F6F9FC] px-1 py-0.5 rounded text-[11px]">db/custom.db</code> · Export any section as CSV</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ═══ DONATIONS ═══ */}
              {activeSection === 'donations' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-[#1A1F36]">Donations</h2>
                      <p className="text-sm text-[#8792A2] mt-0.5">{donors.length} donation{donors.length !== 1 ? 's' : ''} received</p>
                    </div>
                    {donors.length > 0 && (
                      <button
                        onClick={() => exportCSV(donors, 'artemis-donations')}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8ECF1] rounded-md text-xs font-medium text-[#5A6987] hover:bg-[#F6F9FC] transition-colors"
                        suppressHydrationWarning
                      >
                        <Download size={13} /> Export
                      </button>
                    )}
                  </div>

                  {donors.length === 0 ? (
                    <EmptyState icon={<Heart size={24} />} title="No donations yet" desc="When someone makes a donation, it will appear here." />
                  ) : (
                    <div className="bg-white rounded-lg border border-[#E8ECF1] overflow-hidden">
                      {/* Table header */}
                      <div className="grid grid-cols-[1fr_1fr_100px_120px_90px] gap-4 px-4 py-2.5 bg-[#F6F9FC] text-[11px] font-semibold text-[#8792A2] uppercase tracking-wider border-b border-[#E8ECF1]">
                        <span>Donor</span>
                        <span>Email</span>
                        <span>Amount</span>
                        <span>Date</span>
                        <span>Status</span>
                      </div>
                      {/* Rows */}
                      <div className="divide-y divide-[#F0F3F7]">
                        {donors.map((d: any) => (
                          <div key={d.id || d.date} className="grid grid-cols-[1fr_1fr_100px_120px_90px] gap-4 px-4 py-3 hover:bg-[#F6F9FC] transition-colors items-center text-sm">
                            <span className="font-medium text-[#1A1F36] truncate">
                              {d.donorName || d.name || (d.donorAnonymous ? 'Anonymous' : 'Unknown')}
                            </span>
                            <span className="text-[#5A6987] truncate text-xs">{d.donorEmail || '—'}</span>
                            <span className="font-semibold text-[#1A1F36]">{formatCurrency(d.amount, d.currency || 'USD')}</span>
                            <span className="text-xs text-[#8792A2]">{formatDate(d.createdAt || d.date)}</span>
                            <span>
                              <StatusBadge status={d.paymentStatus || 'unknown'} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ═══ APPLICATIONS ═══ */}
              {activeSection === 'applications' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-[#1A1F36]">Applications</h2>
                      <p className="text-sm text-[#8792A2] mt-0.5">{applications.length} application{applications.length !== 1 ? 's' : ''} submitted</p>
                    </div>
                    {applications.length > 0 && (
                      <button
                        onClick={() => exportCSV(applications, 'artemis-applications')}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8ECF1] rounded-md text-xs font-medium text-[#5A6987] hover:bg-[#F6F9FC] transition-colors"
                        suppressHydrationWarning
                      >
                        <Download size={13} /> Export
                      </button>
                    )}
                  </div>

                  {applications.length === 0 ? (
                    <EmptyState icon={<FileText size={24} />} title="No applications yet" desc="When someone applies, they'll appear here." />
                  ) : (
                    <div className="bg-white rounded-lg border border-[#E8ECF1] overflow-hidden">
                      <div className="divide-y divide-[#F0F3F7]">
                        {applications.map((app: any, idx: number) => {
                          const isExpanded = expandedItems.has(idx);
                          return (
                            <div key={app.id}>
                              {/* Row */}
                              <div
                                className="flex items-center gap-3 px-4 py-3 hover:bg-[#F6F9FC] transition-colors cursor-pointer"
                                onClick={() => toggleExpanded(idx)}
                              >
                                <div className="w-8 h-8 rounded-full bg-[#F0F4FF] flex items-center justify-center text-[#0A2540] text-xs font-semibold shrink-0">
                                  {app.firstName?.[0]}{app.lastName?.[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-[#1A1F36]">{app.firstName} {app.lastName}</p>
                                  <p className="text-xs text-[#8792A2] truncate">{app.email}</p>
                                </div>
                                <span className="text-xs text-[#8792A2] hidden sm:block">{app.concentration || '—'}</span>
                                <span className="text-xs text-[#C1C9D2] hidden sm:block">{formatDate(app.createdAt)}</span>
                                <StatusBadge status={app.status || 'submitted'} />
                                <ChevronRight size={14} className={`text-[#C1C9D2] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                              </div>

                              {/* Expanded Detail */}
                              {isExpanded && (
                                <div className="px-4 pb-4 pt-1 bg-[#FAFBFD] border-t border-[#F0F3F7]">
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                                    <DetailField label="Cycle" value={app.applicationCycle} />
                                    <DetailField label="Concentration" value={app.concentration} />
                                    <DetailField label="Gender" value={app.gender} />
                                    <DetailField label="Citizenship" value={app.citizenship} />
                                    <DetailField label="Country" value={app.country} />
                                    <DetailField label="How Heard" value={app.howHeard} />
                                    <DetailField label="Phone" value={app.phone} />
                                    <DetailField label="GPA" value={app.gpa ? `${app.gpa}/${app.maxGpa || '—'}` : undefined} />
                                    <DetailField label="School" value={app.schoolName} />
                                    <DetailField label="School Country" value={app.schoolCountry} />
                                    <DetailField label="SAT Math" value={app.satMath} />
                                    <DetailField label="SAT Reading" value={app.satReading} />
                                    <DetailField label="ACT" value={app.actScore} />
                                    <DetailField label="Applying for Aid" value={app.applyingForAid} />
                                    <DetailField label="Household Income" value={app.householdIncome} />
                                  </div>
                                  {app.accomplishments && (
                                    <div className="mt-3">
                                      <p className="text-[11px] font-semibold text-[#8792A2] uppercase tracking-wider mb-1.5">Accomplishments</p>
                                      {(typeof app.accomplishments === 'string' ? JSON.parse(app.accomplishments) : app.accomplishments || []).map((acc: any, i: number) => (
                                        <div key={i} className="text-xs text-[#5A6987] mb-1">
                                          <span className="font-medium text-[#1A1F36]">{acc.title}</span>
                                          {acc.role && <span className="ml-1">· {acc.role}</span>}
                                          {acc.description && <span className="ml-1">— {acc.description}</span>}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {app.personalStatement && (
                                    <div className="mt-3">
                                      <p className="text-[11px] font-semibold text-[#8792A2] uppercase tracking-wider mb-1.5">Personal Statement</p>
                                      <p className="text-xs text-[#5A6987] leading-relaxed">{app.personalStatement}</p>
                                    </div>
                                  )}
                                  {app.missionStatement && (
                                    <div className="mt-3">
                                      <p className="text-[11px] font-semibold text-[#8792A2] uppercase tracking-wider mb-1.5">Mission Statement</p>
                                      <p className="text-xs text-[#5A6987] leading-relaxed">{app.missionStatement}</p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ═══ MESSAGES ═══ */}
              {activeSection === 'messages' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-[#1A1F36]">Messages</h2>
                      <p className="text-sm text-[#8792A2] mt-0.5">
                        {messages.length} message{messages.length !== 1 ? 's' : ''}
                        {unreadCount > 0 && <span className="text-[#80E9FF]"> · {unreadCount} unread</span>}
                      </p>
                    </div>
                    {messages.length > 0 && (
                      <button
                        onClick={() => exportCSV(messages, 'artemis-messages')}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8ECF1] rounded-md text-xs font-medium text-[#5A6987] hover:bg-[#F6F9FC] transition-colors"
                        suppressHydrationWarning
                      >
                        <Download size={13} /> Export
                      </button>
                    )}
                  </div>

                  {messages.length === 0 ? (
                    <EmptyState icon={<MessageSquare size={24} />} title="No messages yet" desc="When someone contacts you, their message will appear here." />
                  ) : (
                    <div className="space-y-2">
                      {messages.map((msg: any, idx: number) => {
                        const isExpanded = expandedItems.has(idx);
                        return (
                          <div
                            key={msg.id}
                            className={`bg-white rounded-lg border transition-all ${
                              !msg.read ? 'border-[#80E9FF]/40 bg-[#F0FBFF]' : 'border-[#E8ECF1]'
                            }`}
                          >
                            <div
                              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-[#F6F9FC] transition-colors"
                              onClick={() => toggleExpanded(idx)}
                            >
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                                !msg.read ? 'bg-[#0A2540] text-white' : 'bg-[#F0F4FF] text-[#0A2540]'
                              }`}>
                                {msg.name?.[0]?.toUpperCase() || '?'}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="text-sm font-medium text-[#1A1F36]">{msg.name}</p>
                                  {!msg.read && <span className="w-1.5 h-1.5 rounded-full bg-[#80E9FF]" />}
                                </div>
                                <p className="text-xs text-[#8792A2] truncate">{msg.email}</p>
                              </div>
                              {msg.area && (
                                <span className="text-[11px] font-medium text-[#8792A2] bg-[#F6F9FC] px-2 py-0.5 rounded hidden sm:block">{msg.area}</span>
                              )}
                              <span className="text-xs text-[#C1C9D2] shrink-0">{formatRelative(msg.createdAt)}</span>
                              <ChevronRight size={14} className={`text-[#C1C9D2] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                            </div>
                            {isExpanded && (
                              <div className="px-4 pb-4 pt-1 border-t border-[#F0F3F7]">
                                {msg.subject && <p className="text-sm font-medium text-[#1A1F36] mb-2">{msg.subject}</p>}
                                <p className="text-sm text-[#5A6987] leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                                <p className="text-[11px] text-[#C1C9D2] mt-3">{formatDate(msg.createdAt)} at {formatTime(msg.createdAt)}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* ═══ SUBSCRIBERS ═══ */}
              {activeSection === 'subscribers' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-[#1A1F36]">Subscribers</h2>
                      <p className="text-sm text-[#8792A2] mt-0.5">{subscribers.length} newsletter subscriber{subscribers.length !== 1 ? 's' : ''}</p>
                    </div>
                    {subscribers.length > 0 && (
                      <button
                        onClick={() => exportCSV(subscribers, 'artemis-subscribers')}
                        className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8ECF1] rounded-md text-xs font-medium text-[#5A6987] hover:bg-[#F6F9FC] transition-colors"
                        suppressHydrationWarning
                      >
                        <Download size={13} /> Export
                      </button>
                    )}
                  </div>

                  {subscribers.length === 0 ? (
                    <EmptyState icon={<UserPlus size={24} />} title="No subscribers yet" desc="When someone subscribes to your newsletter, they'll show up here." />
                  ) : (
                    <div className="bg-white rounded-lg border border-[#E8ECF1] overflow-hidden">
                      <div className="grid grid-cols-[1fr_100px_100px_80px] gap-4 px-4 py-2.5 bg-[#F6F9FC] text-[11px] font-semibold text-[#8792A2] uppercase tracking-wider border-b border-[#E8ECF1]">
                        <span>Email</span>
                        <span>Source</span>
                        <span>Signed Up</span>
                        <span>Status</span>
                      </div>
                      <div className="divide-y divide-[#F0F3F7]">
                        {subscribers.map((sub: any) => (
                          <div key={sub.id} className="grid grid-cols-[1fr_100px_100px_80px] gap-4 px-4 py-3 hover:bg-[#F6F9FC] transition-colors items-center text-sm">
                            <span className="font-medium text-[#1A1F36] truncate">{sub.email}</span>
                            <span className="text-xs text-[#8792A2] capitalize">{sub.source || '—'}</span>
                            <span className="text-xs text-[#8792A2]">{formatDate(sub.createdAt)}</span>
                            <span className="text-xs">
                              {sub.active ? (
                                <span className="text-emerald-600 font-medium">Active</span>
                              ) : (
                                <span className="text-[#C1C9D2]">Inactive</span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );

  // ─── Helpers ───

  function buildActivity() {
    if (!allData?.overview) return [];
    const ov = allData.overview;
    const items: { text: string; time: string; icon: React.ReactNode; bg: string; color: string }[] = [];

    (ov.recentDonations || []).forEach((d: any) => {
      items.push({
        text: `${d.donorName || d.name || 'Someone'} donated ${formatCurrency(d.amount, d.currency)}`,
        time: formatRelative(d.createdAt || d.date),
        icon: <DollarSign size={12} />, bg: '#F0F4FF', color: '#0A2540',
      });
    });

    (ov.recentApplications || []).forEach((a: any) => {
      items.push({
        text: `${a.firstName} ${a.lastName} submitted an application`,
        time: formatRelative(a.createdAt),
        icon: <FileText size={12} />, bg: '#FFF8F0', color: '#B45309',
      });
    });

    (ov.recentContacts || []).forEach((c: any) => {
      items.push({
        text: `${c.name} sent a message`,
        time: formatRelative(c.createdAt),
        icon: <MessageSquare size={12} />, bg: '#F0F9FF', color: '#0E7490',
      });
    });

    items.sort((a, b) => a.time.localeCompare(b.time));
    return items.slice(0, 8);
  }
}

// ─── Sub-components ───

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    completed: 'bg-emerald-50 text-emerald-700',
    active: 'bg-emerald-50 text-emerald-700',
    pending: 'bg-amber-50 text-amber-700',
    submitted: 'bg-[#F0F4FF] text-[#0A2540]',
    expired: 'bg-red-50 text-red-700',
    failed: 'bg-red-50 text-red-700',
    unknown: 'bg-[#F6F9FC] text-[#8792A2]',
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium ${styles[status] || styles.unknown}`}>
      {status}
    </span>
  );
}

function DetailField({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="text-[11px] font-semibold text-[#8792A2] uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-xs text-[#1A1F36] font-medium">{value || '—'}</p>
    </div>
  );
}

function EmptyState({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-lg border border-[#E8ECF1] py-16 text-center">
      <div className="text-[#C1C9D2] mb-2 flex justify-center">{icon}</div>
      <p className="text-sm font-medium text-[#8792A2]">{title}</p>
      <p className="text-xs text-[#C1C9D2] mt-0.5">{desc}</p>
    </div>
  );
}
