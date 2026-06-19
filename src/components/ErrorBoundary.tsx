import React from 'react';

type Props = { children: React.ReactNode; onReset?: () => void };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override render() {
    if (this.state.hasError) {
      return (
        <main className="error-screen" role="alert">
          <div className="panel narrow">
            <p className="eyebrow">Ada bagian yang tersangkut</p>
            <h1>Halaman ini tidak bisa dibaca dengan aman.</h1>
            <p>Mulai ulang tampilan tanpa menampilkan detail teknis. Jawabanmu tetap berada di perangkat ini.</p>
            <button type="button" className="primary-button" onClick={this.props.onReset ?? (() => location.reload())}>Kembali ke awal</button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
