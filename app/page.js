export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0a0f1a',
      color: '#e6edf3',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <section>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}>RiverCross</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', opacity: 0.9, margin: 0 }}>Coming soon.</p>
      </section>
    </main>
  );
}
