export const GlobalBackground = () => (
  <>
    {/* GIF Background - aparece em todas as telas */}
    <img
      src="/videos/banner-fundo.gif"
      alt="Background"
      className="fixed inset-0 w-full h-full object-cover z-0"
      style={{ filter: 'hue-rotate(100deg) brightness(1.3) saturate(1.4)' }}
    />
    
    {/* Overlay suave */}
    <div className="fixed inset-0 bg-slate-950/50 z-[1]" />
  </>
);
