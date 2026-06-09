export function BackgroundEffects() {
  return (
    <>
      {/* Noise */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Gradient orbs */}
      <div
        aria-hidden="true"
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: 'rgba(108,99,255,0.12)',
          filter: 'blur(120px)',
          top: '-200px',
          right: '-200px',
        }}
      />
      <div
        aria-hidden="true"
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: 'rgba(56,189,248,0.07)',
          filter: 'blur(120px)',
          bottom: '20%',
          left: '-150px',
        }}
      />
      <div
        aria-hidden="true"
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{
          background: 'rgba(244,114,182,0.06)',
          filter: 'blur(120px)',
          top: '50%',
          right: '10%',
        }}
      />

      {/* Cursor glow */}
      <div
        id="cursor-glow"
        aria-hidden="true"
        className="fixed pointer-events-none z-0 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)',
          transition: 'left 0.1s, top 0.1s',
        }}
      />
    </>
  )
}
