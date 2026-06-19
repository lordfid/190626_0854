import { useEffect, useMemo, useState } from 'react';
import type { AppRoute } from './app/routes';
import type { SessionState, TestMode } from './types/questions';
import { AppShell } from './app/AppShell';
import { LandingHero } from './components/LandingHero';
import { Methodology } from './components/Methodology';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { ResultSummary } from './components/ResultSummary';
import { ShareCard } from './components/ShareCard';
import { ErrorBoundary } from './components/ErrorBoundary';
import { QUESTION_BY_ID } from './data/questionIndex';
import { clearSession, createSession, loadSession, saveSession } from './session/storage';
import { answerItem, completeSession, setCurrentIndex, skipItem } from './session/reducer';
import { calculateFinalResult } from './scoring/finalResult';

function App() {
  const [route, setRoute] = useState<AppRoute>('landing');
  const [session, setSession] = useState<SessionState | null>(null);
  const [sessionAvailable, setSessionAvailable] = useState(false);

  useEffect(() => {
    const loaded = loadSession();
    setSession(loaded);
    setSessionAvailable(Boolean(loaded));
    if (loaded?.completedAt) setRoute('result');
  }, []);

  function commit(next: SessionState) {
    setSession(next);
    saveSession(next);
    setSessionAvailable(true);
  }

  function start(mode: TestMode) {
    const fresh = createSession(mode);
    commit(fresh);
    setRoute('test');
  }

  function reset() {
    clearSession();
    setSession(null);
    setSessionAvailable(false);
    setRoute('landing');
  }

  const activeItem = session ? QUESTION_BY_ID[session.activeItemIds[session.currentIndex]] : undefined;
  const result = useMemo(() => session ? calculateFinalResult(session, QUESTION_BY_ID) : null, [session]);

  return (
    <ErrorBoundary onReset={reset}>
      <AppShell>
        {route === 'landing' && (
          <LandingHero
            hasSession={sessionAvailable}
            onStart={start}
            onResume={() => session ? setRoute(session.completedAt ? 'result' : 'test') : start('ringkas')}
            onOpenMethodology={() => setRoute('methodology')}
            onReset={reset}
          />
        )}
        {route === 'methodology' && <Methodology onBack={() => setRoute('landing')} />}
        {route === 'test' && session && activeItem && (
          <main className="test-page">
            <section className="test-top panel">
              <div>
                <p className="eyebrow">Mode {session.mode}</p>
                <h1>Socionics Dalam Diriku</h1>
              </div>
              <button type="button" className="ghost-button" onClick={() => setRoute('landing')}>Keluar</button>
            </section>
            <ProgressBar current={session.currentIndex + 1} total={session.activeItemIds.length} />
            <QuestionCard
              item={activeItem}
              existing={session.answers[activeItem.id]}
              canBack={session.currentIndex > 0}
              isLast={session.currentIndex === session.activeItemIds.length - 1}
              onBack={() => commit(setCurrentIndex(session, session.currentIndex - 1))}
              onSkip={() => {
                const skipped = skipItem(session, activeItem.id);
                const next = session.currentIndex === session.activeItemIds.length - 1
                  ? completeSession(skipped)
                  : setCurrentIndex(skipped, session.currentIndex + 1);
                commit(next);
                if (next.completedAt) setRoute('result');
              }}
              onNext={(value, elapsedMs) => {
                const answered = answerItem(session, { itemId: activeItem.id, value, elapsedMs, answeredAt: Date.now() });
                const next = session.currentIndex === session.activeItemIds.length - 1
                  ? completeSession(answered)
                  : setCurrentIndex(answered, session.currentIndex + 1);
                commit(next);
                if (next.completedAt) setRoute('result');
              }}
            />
          </main>
        )}
        {route === 'result' && result && <ResultSummary result={result} onMakeCard={() => setRoute('card')} onRestart={reset} />}
        {route === 'card' && result && <ShareCard result={result} onBack={() => setRoute('result')} />}
      </AppShell>
    </ErrorBoundary>
  );
}

export default App;
