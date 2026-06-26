import { useState } from 'react';
import { useStore } from './lib/store';
import { Dashboard } from './components/Dashboard';
import { Timeline } from './components/Timeline';
import { Schedule } from './components/Schedule';
import { Deliverables } from './components/Deliverables';
import { Audits } from './components/Audits';
import { Settings } from './components/Settings';
import { SyncBadge } from './components/SyncBadge';
import { fmtDateLong, todayIso } from './lib/util';

type View = 'dashboard' | 'timeline' | 'schedule' | 'deliverables' | 'audits' | 'settings';

const NAV: { id: View; label: string }[] = [
  { id: 'dashboard',    label: 'Dashboard' },
  { id: 'timeline',     label: 'Timeline' },
  { id: 'schedule',     label: 'Schedule' },
  { id: 'deliverables', label: 'Deliverables' },
  { id: 'audits',       label: 'Audits' },
  { id: 'settings',     label: 'Settings' },
];

export default function App() {
  const store = useStore();
  const [view, setView] = useState<View>('dashboard');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-ink-800 bg-ink-950/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-emerald-400 to-sky-400 flex items-center justify-center text-ink-950 font-bold text-sm">DH</div>
            <div>
              <div className="text-sm font-semibold text-ink-50 leading-none">Founder Liberation OS</div>
              <div className="text-[10px] text-ink-500 mt-0.5">Dream Helpers · 4-week command</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 ml-4">
            {NAV.map(n => (
              <button
                key={n.id}
                onClick={() => setView(n.id)}
                className={`px-3 py-1.5 rounded-md text-sm transition ${
                  view === n.id
                    ? 'bg-ink-800 text-ink-50'
                    : 'text-ink-300 hover:bg-ink-800/60 hover:text-ink-100'
                }`}
              >{n.label}</button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden lg:block text-right">
              <div className="text-[10px] uppercase tracking-wider text-ink-500">Today</div>
              <div className="text-xs text-ink-300">{fmtDateLong(todayIso())}</div>
            </div>
            <SyncBadge
              status={store.syncStatus}
              lastSyncedAt={store.lastSyncedAt}
              error={store.syncError}
              onPull={store.pullNow}
              onPush={store.pushNow}
            />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden border-t border-ink-800 px-2 py-1 flex items-center gap-1 overflow-x-auto">
          {NAV.map(n => (
            <button
              key={n.id}
              onClick={() => setView(n.id)}
              className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap transition ${
                view === n.id ? 'bg-ink-800 text-ink-50' : 'text-ink-300'
              }`}
            >{n.label}</button>
          ))}
        </div>
      </header>

      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-5">
        {store.syncStatus === 'no-config' && (
          <div className="card p-3 mb-4 border-amber-500/40 bg-amber-500/10">
            <div className="flex items-center gap-3">
              <div className="text-amber-200 text-xs">
                <strong>Not connected to Gist.</strong> Edits live only in this browser until you set up sync in{' '}
                <button className="underline" onClick={() => setView('settings')}>Settings</button>.
              </div>
            </div>
          </div>
        )}
        {view === 'dashboard'    && <Dashboard store={store} />}
        {view === 'timeline'     && <Timeline store={store} />}
        {view === 'schedule'     && <Schedule store={store} />}
        {view === 'deliverables' && <Deliverables store={store} />}
        {view === 'audits'       && <Audits store={store} />}
        {view === 'settings'     && <Settings store={store} />}
      </main>

      <footer className="border-t border-ink-800 py-3 px-4 text-[11px] text-ink-500 text-center">
        Founder Liberation OS · weekdays 1–4pm PST · built for Grant and partner
      </footer>
    </div>
  );
}
