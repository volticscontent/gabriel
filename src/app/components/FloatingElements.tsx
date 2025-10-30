export default function FloatingElements() {
  // Elementos decorativos flutuantes no fundo da página
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Orbs suaves com blur para dar profundidade */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-3xl" />

      {/* Linhas sutis */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/[0.03] to-transparent" />
    </div>
  );
}