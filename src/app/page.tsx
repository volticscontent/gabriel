import Image from "next/image";
import AnimatedCounter from "./components/AnimatedCounter";
import CountdownTimer from "./components/CountdownTimer";
import FloatingElements from "./components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative bg-white text-gray-900 section-padding">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🔥</span>
                </div>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  MÉTODO REVOLUCIONÁRIO
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Transforme Sua Moto em uma
                <span className="text-gradient block mt-2">Máquina de Dinheiro</span>
              </h1>
              
              <p className="text-large text-secondary max-w-xl">
                Descubra o sistema completo que já ajudou <strong className="text-primary">+5.000 pessoas</strong> a 
                faturar <strong>R$ 3.000 a R$ 8.000 por mês</strong> 
                com delivery e transporte urbano.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  🚀 QUERO COMEÇAR AGORA
                </button>
                <button className="btn-secondary">
                  📹 Ver Depoimentos
                </button>
              </div>
              
              <div className="card-minimal">
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-medium">Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-medium">Suporte completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="font-medium">Acesso vitalício</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="card shadow-medium">
                <Image
                  src="/renda-motos/images/banner-principal.png"
                  alt="Pessoa com moto gerando renda"
                  width={600}
                  height={400}
                  priority
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🏆</span>
              </div>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                RESULTADOS COMPROVADOS
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
              Mais de <span className="text-gradient">5.000 pessoas</span> já estão
              <span className="block">faturando alto</span>
            </h2>
            <p className="text-large text-secondary max-w-3xl mx-auto">
              Veja alguns resultados reais dos nossos alunos que transformaram suas vidas com o método
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="card hover-lift">
              <div className="aspect-video bg-tertiary rounded-lg mb-6 flex items-center justify-center">
                <span className="text-muted">📹 Vídeo Depoimento</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">João Silva</h4>
                    <p className="text-small">Motoqueiro há 2 anos • São Paulo</p>
                  </div>
                </div>
                <blockquote className="text-secondary italic border-l-4 border-primary pl-4">
                  "Em apenas 3 meses consegui sair do vermelho e agora estou faturando mais de <strong className="text-primary">R$ 6.000 por mês</strong>. O método realmente funciona!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-small">5.0/5 estrelas</span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    ✓ VERIFICADO
                  </span>
                </div>
              </div>
            </div>
            
            <div className="card hover-lift">
              <div className="aspect-video bg-tertiary rounded-lg mb-6 flex items-center justify-center">
                <span className="text-muted">📹 Vídeo Depoimento</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">MS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Santos</h4>
                    <p className="text-small">Entregadora • Rio de Janeiro</p>
                  </div>
                </div>
                <blockquote className="text-secondary italic border-l-4 border-accent pl-4">
                  "Nunca pensei que conseguiria <strong className="text-primary">R$ 4.500 por mês</strong> trabalhando com delivery. Mudou minha vida completamente!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-small">5.0/5 estrelas</span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    ✓ VERIFICADO
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Estatísticas impressionantes */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="bg-secondary p-6 rounded-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={5000} suffix="+" />
                </div>
                <p className="text-primary font-medium mb-1">Alunos Satisfeitos</p>
                <p className="text-muted text-sm">Pessoas transformaram suas vidas</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary p-6 rounded-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter target={4.9} />
                </div>
                <p className="text-primary font-medium mb-1">Avaliação Média</p>
                <p className="text-muted text-sm">De 5 estrelas possíveis</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary p-6 rounded-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">
                  R$ <AnimatedCounter target={6000} />
                </div>
                <p className="text-primary font-medium mb-1">Faturamento Médio</p>
                <p className="text-muted text-sm">Por mês dos nossos alunos</p>
              </div>
            </div>
          </div>
          
          {/* Social proof final */}
          <div className="text-center">
            <div className="bg-secondary inline-flex items-center gap-4 px-6 py-4 rounded-lg border border-primary/20 max-w-lg mx-auto">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JS</span>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MR</span>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">CF</span>
                </div>
                <div className="w-10 h-10 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+5K</span>
                </div>
              </div>
              <div className="text-left">
                <p className="text-primary font-medium">Junte-se a +5.000 pessoas</p>
                <p className="text-muted text-sm">que já estão faturando alto com motos</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-yellow-500">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-muted text-xs">4.9/5 • +2.500 avaliações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="bg-secondary px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/20">
                MÉTODO COMPROVADO
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Por que o <span className="text-accent">Renda com Motos</span>
              <span className="block">realmente funciona?</span>
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Um sistema testado e aprovado que elimina tentativa e erro, 
              <strong className="text-primary"> baseado em resultados reais</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary p-6 text-center rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image src="/renda-motos/emojis/rocket.svg" alt="Rocket" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sistema Comprovado</h3>
              <p className="text-secondary">
                Método testado por <strong className="text-primary">milhares de pessoas</strong> com resultados consistentes e previsíveis em todo o Brasil.
              </p>
            </div>
            
            <div className="bg-secondary p-6 text-center rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image src="/renda-motos/emojis/money-bag.svg" alt="Money" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Múltiplas Fontes de Renda</h3>
              <p className="text-secondary">
                <strong className="text-accent">Delivery, transporte urbano, corridas</strong> e muito mais. Diversifique e maximize seus ganhos.
              </p>
            </div>
            
            <div className="bg-secondary p-6 text-center rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image src="/renda-motos/emojis/chart-increasing.svg" alt="Chart" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Crescimento Escalável</h3>
              <p className="text-secondary">
                Comece com uma moto e <strong className="text-primary">escale para uma frota</strong>. O céu é o limite para seus ganhos.
              </p>
            </div>
            
            <div className="bg-secondary p-6 text-center rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image src="/renda-motos/emojis/clock.svg" alt="Clock" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Flexibilidade Total</h3>
              <p className="text-secondary">
                <strong className="text-accent">Trabalhe quando e onde quiser</strong>. Você é o dono do seu tempo e da sua agenda.
              </p>
            </div>
            
            <div className="bg-secondary p-6 text-center rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image src="/renda-motos/emojis/handshake.svg" alt="Handshake" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Suporte Completo</h3>
              <p className="text-secondary">
                <strong className="text-primary">Comunidade ativa, mentoria</strong> e suporte técnico para garantir seu sucesso.
              </p>
            </div>
            
            <div className="bg-secondary p-6 text-center rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image src="/renda-motos/emojis/trophy.svg" alt="Trophy" width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Resultados Garantidos</h3>
              <p className="text-secondary">
                <strong className="text-accent">Garantia incondicional</strong>. Se não funcionar para você, devolvemos 100% do investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 particles-bg opacity-5"></div>
        <div className="relative container-custom">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-2xl">💎</span>
              </div>
              <span className="glass-effect px-6 py-3 rounded-full text-sm font-bold">
                CONTEÚDO PREMIUM
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              O que você vai receber por apenas
              <span className="text-gradient-success block text-6xl lg:text-8xl mt-4 animate-pulse-glow">R$ 29,90</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Um curso completo que vale mais de <strong className="text-gradient-success">R$ 2.000</strong> - 
              <span className="text-red-400 font-bold"> mais de 98% de desconto!</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group card p-8 bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Módulo Fundamentos</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Como escolher a moto ideal, documentação completa e primeiros passos para começar
                </p>
                <div className="glass-effect px-4 py-2 rounded-full inline-block">
                  <span className="text-blue-400 font-bold text-sm">Valor: R$ 297</span>
                </div>
              </div>
            </div>
            
            <div className="group card p-8 bg-gradient-to-br from-green-600/20 to-emerald-800/20 border border-green-500/30 hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Estratégias de Delivery</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Melhores apps, rotas otimizadas e segredos para maximizar seus ganhos diários
                </p>
                <div className="glass-effect px-4 py-2 rounded-full inline-block">
                  <span className="text-green-400 font-bold text-sm">Valor: R$ 397</span>
                </div>
              </div>
            </div>
            
            <div className="group card p-8 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Transporte Urbano</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Como trabalhar com Uber, 99 e outros apps de transporte com máxima eficiência
                </p>
                <div className="glass-effect px-4 py-2 rounded-full inline-block">
                  <span className="text-purple-400 font-bold text-sm">Valor: R$ 297</span>
                </div>
              </div>
            </div>
            
            <div className="group card p-8 bg-gradient-to-br from-orange-600/20 to-red-800/20 border border-orange-500/30 hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-600 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Gestão Financeira</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Controle total de gastos, impostos e estratégias para reinvestir os lucros
                </p>
                <div className="glass-effect px-4 py-2 rounded-full inline-block">
                  <span className="text-orange-400 font-bold text-sm">Valor: R$ 497</span>
                </div>
              </div>
            </div>
            
            <div className="group card p-8 bg-gradient-to-br from-teal-600/20 to-cyan-800/20 border border-teal-500/30 hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Escalando o Negócio</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Como expandir para múltiplas motos e criar uma frota lucrativa
                </p>
                <div className="glass-effect px-4 py-2 rounded-full inline-block">
                  <span className="text-teal-400 font-bold text-sm">Valor: R$ 597</span>
                </div>
              </div>
            </div>
            
            <div className="group card p-8 bg-gradient-to-br from-yellow-600/20 to-orange-800/20 border border-yellow-500/30 hover-lift animate-fade-in-up relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-lg">6</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Segurança e Manutenção</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Dicas essenciais de segurança, manutenção preventiva e seguros
                </p>
                <div className="glass-effect px-4 py-2 rounded-full inline-block">
                  <span className="text-yellow-400 font-bold text-sm">Valor: R$ 197</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bônus Exclusivos */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/50 p-10 rounded-3xl text-center hover-lift animate-fade-in-up relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-pulse-glow"></div>
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-glow animate-bounce-soft">
                  <span className="text-3xl">🎁</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white">
                  BÔNUS EXCLUSIVOS
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="glass-effect p-6 rounded-2xl">
                  <div className="text-4xl mb-4">📊</div>
                  <h4 className="text-xl font-bold text-white mb-3">Planilha de Controle</h4>
                  <p className="text-gray-300 mb-4">Controle completo de ganhos, gastos e lucros</p>
                  <span className="text-yellow-400 font-bold">Valor: R$ 197</span>
                </div>
                
                <div className="glass-effect p-6 rounded-2xl">
                  <div className="text-4xl mb-4">📋</div>
                  <h4 className="text-xl font-bold text-white mb-3">Lista de Fornecedores</h4>
                  <p className="text-gray-300 mb-4">Contatos exclusivos para equipamentos e peças</p>
                  <span className="text-yellow-400 font-bold">Valor: R$ 147</span>
                </div>
                
                <div className="glass-effect p-6 rounded-2xl">
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="text-xl font-bold text-white mb-3">Grupo VIP WhatsApp</h4>
                  <p className="text-gray-300 mb-4">Comunidade exclusiva com suporte direto</p>
                  <span className="text-yellow-400 font-bold">Valor: R$ 297</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-2xl text-white font-bold mb-2">
                  Valor Total dos Bônus: <span className="text-gradient-success">R$ 641,00</span>
                </p>
                <p className="text-yellow-400 font-bold text-lg">
                  🔥 GRÁTIS por tempo limitado!
                </p>
              </div>
            </div>
          </div>
          
          {/* Resumo do valor */}
          <div className="text-center">
            <div className="glass-strong p-10 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Resumo do Investimento</h3>
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Curso Completo (6 Módulos):</span>
                  <span className="text-white font-bold">R$ 2.085,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Bônus Exclusivos:</span>
                  <span className="text-white font-bold">R$ 641,00</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center text-2xl">
                    <span className="text-gray-300">Valor Total:</span>
                    <span className="text-white font-bold line-through opacity-60">R$ 2.726,00</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center text-3xl">
                    <span className="text-white font-bold">Seu Investimento HOJE:</span>
                    <span className="text-gradient-success font-bold">R$ 29,90</span>
                  </div>
                  <p className="text-green-400 font-bold text-lg mt-2">
                    💥 Economia de R$ 2.696,10 (98.9% OFF)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Garantia */}
       <section className="section-padding bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 particles-bg opacity-10"></div>
         <div className="relative container-custom">
           <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16 animate-fade-in-up">
               <div className="inline-flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                   <span className="text-3xl">🛡️</span>
                 </div>
                 <span className="glass-effect px-8 py-4 rounded-full text-lg font-bold">
                   GARANTIA BLINDADA
                 </span>
               </div>
               <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-8">
                 <span className="text-gradient-success">Garantia Incondicional</span>
                 <span className="block text-white mt-2">de 7 Dias</span>
               </h2>
               <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
                 Experimente o curso por <strong className="text-green-400">7 dias completos</strong>. 
                 Se não ficar 100% satisfeito, devolvemos <strong className="text-white">todo o seu dinheiro</strong> sem perguntas.
               </p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 mb-16">
               <div className="glass-effect p-8 rounded-2xl text-center hover-lift animate-fade-in-up group">
                 <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                   <span className="text-2xl">⚡</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">Acesso Imediato</h3>
                 <p className="text-gray-300">Receba o curso na hora, sem esperar</p>
               </div>
               
               <div className="glass-effect p-8 rounded-2xl text-center hover-lift animate-fade-in-up group">
                 <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                   <span className="text-2xl">💰</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">Dinheiro de Volta</h3>
                 <p className="text-gray-300">100% do valor devolvido se não gostar</p>
               </div>
               
               <div className="glass-effect p-8 rounded-2xl text-center hover-lift animate-fade-in-up group">
                 <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                   <span className="text-2xl">🤝</span>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-4">Sem Perguntas</h3>
                 <p className="text-gray-300">Processo simples e sem burocracia</p>
               </div>
             </div>
             
             <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50 p-10 rounded-3xl text-center">
               <h3 className="text-3xl font-heading font-bold text-white mb-4">
                 🔒 Risco Zero para Você
               </h3>
               <p className="text-xl text-gray-200 leading-relaxed">
                 Você tem <strong className="text-green-400">7 dias completos</strong> para testar todo o conteúdo. 
                 Se por qualquer motivo não ficar satisfeito, basta enviar um email e devolvemos 
                 <strong className="text-white"> 100% do seu investimento</strong>.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* CTA Final */}
       <section className="section-padding bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="absolute inset-0 particles-bg opacity-20"></div>
         <div className="relative container-custom">
           <div className="max-w-6xl mx-auto text-center">
             <div className="mb-16 animate-fade-in-up">
               <div className="inline-flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-glow animate-bounce-soft">
                   <span className="text-3xl">🚀</span>
                 </div>
                 <span className="glass-strong px-8 py-4 rounded-full text-lg font-bold">
                   ⏰ ÚLTIMAS VAGAS DISPONÍVEIS
                 </span>
               </div>
               
               <h2 className="text-5xl lg:text-7xl font-heading font-bold mb-8 animate-pulse-glow">
                 Sua Transformação
                 <span className="block text-gradient-hero mt-2">Começa AGORA!</span>
               </h2>
               
               <p className="text-2xl lg:text-3xl mb-12 text-yellow-100 leading-relaxed max-w-4xl mx-auto">
                 Não deixe para amanhã o que pode <strong className="text-white">mudar sua vida hoje</strong>. 
                 Milhares já estão faturando alto - <strong className="text-yellow-300">seja o próximo!</strong>
               </p>
             </div>
             
             {/* Contador de urgência */}
               <div className="glass-strong p-8 rounded-3xl mb-12 max-w-3xl mx-auto animate-fade-in-up">
                 <div className="flex items-center justify-center gap-4 mb-6">
                   <span className="text-2xl animate-pulse">⏰</span>
                   <h3 className="text-2xl font-bold text-white">Oferta Expira em:</h3>
                 </div>
                 <CountdownTimer />
                 <p className="text-red-300 font-bold text-lg mt-4 animate-pulse">
                   🔥 Apenas 98 vagas restantes neste preço!
                 </p>
               </div>
             
             {/* Preço em destaque */}
             <div className="glass-strong p-12 rounded-3xl mb-12 max-w-2xl mx-auto animate-fade-in-up relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 animate-pulse-glow"></div>
               <div className="relative">
                 <div className="text-center mb-8">
                   <p className="text-xl text-gray-300 mb-2">De R$ 2.726,00 por apenas:</p>
                   <div className="text-7xl lg:text-8xl font-bold text-gradient-success mb-4 animate-pulse-glow">
                     R$ 29,90
                   </div>
                   <p className="text-2xl text-yellow-300 font-bold">
                     💥 Economia de R$ 2.696,10 (98.9% OFF)
                   </p>
                 </div>
                 
                 <div className="space-y-4 mb-8">
                   <div className="flex items-center justify-center gap-3 text-lg">
                     <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                       <span className="text-white text-xs">✓</span>
                     </span>
                     <span className="text-white">Acesso vitalício ao curso completo</span>
                   </div>
                   <div className="flex items-center justify-center gap-3 text-lg">
                     <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                       <span className="text-white text-xs">✓</span>
                     </span>
                     <span className="text-white">Todos os bônus exclusivos (R$ 641)</span>
                   </div>
                   <div className="flex items-center justify-center gap-3 text-lg">
                     <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                       <span className="text-white text-xs">✓</span>
                     </span>
                     <span className="text-white">Garantia incondicional de 7 dias</span>
                   </div>
                   <div className="flex items-center justify-center gap-3 text-lg">
                     <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                       <span className="text-white text-xs">✓</span>
                     </span>
                     <span className="text-white">Suporte completo e comunidade VIP</span>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Botão principal */}
             <div className="mb-12 animate-fade-in-up">
               <button className="btn-primary btn-large text-2xl px-16 py-8 mb-6 animate-bounce-soft hover-glow shadow-strong transform hover:scale-105 transition-all duration-300">
                 🚀 GARANTIR MINHA VAGA AGORA
               </button>
               <p className="text-yellow-200 text-lg font-bold animate-pulse">
                 👆 Clique aqui e transforme sua vida em 2024!
               </p>
             </div>
             
             {/* Elementos de confiança */}
             <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
               <div className="glass-effect p-6 rounded-2xl text-center">
                 <div className="text-3xl mb-3">🔒</div>
                 <h4 className="font-bold text-white mb-2">Pagamento Seguro</h4>
                 <p className="text-gray-300 text-sm">Criptografia SSL e proteção total</p>
               </div>
               
               <div className="glass-effect p-6 rounded-2xl text-center">
                 <div className="text-3xl mb-3">⚡</div>
                 <h4 className="font-bold text-white mb-2">Acesso Imediato</h4>
                 <p className="text-gray-300 text-sm">Receba tudo na hora, sem esperar</p>
               </div>
               
               <div className="glass-effect p-6 rounded-2xl text-center">
                 <div className="text-3xl mb-3">🏆</div>
                 <h4 className="font-bold text-white mb-2">Resultados Garantidos</h4>
                 <p className="text-gray-300 text-sm">Ou seu dinheiro de volta</p>
               </div>
             </div>
             
             {/* Aviso final */}
             <div className="mt-16 glass-effect p-8 rounded-2xl max-w-4xl mx-auto animate-fade-in-up">
               <p className="text-xl text-yellow-200 leading-relaxed">
                 ⚠️ <strong className="text-white">ATENÇÃO:</strong> Esta oferta especial de R$ 29,90 é por tempo limitado. 
                 Após o término da promoção, o curso voltará ao preço normal de <strong className="text-red-300">R$ 497,00</strong>. 
                 <strong className="text-yellow-300">Não perca esta oportunidade única!</strong>
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Footer */}
       <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Renda com Motos. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ...existing code ...
