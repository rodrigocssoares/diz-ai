export default function LandingPage() {
  const formUrl = "https://seuformulario.com/quero-participar";
  const andreaLogo = "/images/logo-andrea-orlandi.png";
  const lonjoLogo = "/images/logo-lonjo.png";
  const fabiImage = "/images/fabi-guttin.png";
  const posto6Image = "/images/posto6-copacabana.png";

  return (
    <div className="min-h-screen bg-[#eef7fb] text-[#0f3f66]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#dff2fb] via-[#eef7fb] to-white" />
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-8 md:px-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="rounded-2xl bg-white/80 backdrop-blur px-4 py-3 shadow-lg">
                <img
                  src={andreaLogo}
                  alt="Logo Andrea Orlandi"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
              <div className="text-4xl md:text-5xl font-light">+</div>
              <div className="rounded-2xl bg-white/80 backdrop-blur px-4 py-3 shadow-lg">
                <img
                  src={lonjoLogo}
                  alt="Logo Lonjô"
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>

            <a
              href={formUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#f2b532] px-6 py-3 text-base font-semibold text-[#0f3f66] shadow-lg hover:scale-[1.02] transition"
            >
              Quero participar
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-[#f2b532] px-4 py-2 text-[#0f3f66] font-bold uppercase tracking-[0.2em] text-sm shadow">
              Marque na Agenda
            </div>

            <div>
              <div className="text-6xl md:text-8xl leading-none font-black text-[#0f3f66]">
                23/05
              </div>
              <div className="mt-3 text-lg md:text-xl font-medium text-[#2a7fb8]">
                Posto 6, Copacabana · Rio de Janeiro
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Lonjô e Andrea Orlandi recebem{" "}
                <span className="text-[#1f8ac0] italic">Fabi Guttin</span> para um encontro no mar.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-[#28506e]">
                Uma manhã especial para celebrar a natação, a longevidade ativa e os nadadores que seguem inspirando gerações dentro e fora d&apos;água.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-3xl bg-white p-5 shadow-md">
                <div className="text-3xl mb-2">🌊</div>
                <p className="text-sm leading-relaxed">
                  Inspiração para todos os nadadores do mar, em especial os masters.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-md">
                <div className="text-3xl mb-2">🏊</div>
                <p className="text-sm leading-relaxed">
                  Uma celebração aos nadadores mais longevos do esporte.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-md">
                <div className="text-3xl mb-2">💙</div>
                <p className="text-sm leading-relaxed">
                  Um encontro de histórias, experiências e amor pelo mar.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-white p-3 md:p-4">
              <img
                src={fabiImage}
                alt="Fabi Guttin"
                className="w-full h-[580px] object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 md:-left-8 rounded-3xl bg-[#0f3f66] text-white p-5 md:p-6 shadow-xl max-w-xs">
              <div className="text-sm uppercase tracking-[0.2em] text-[#8fd8ff]">
                Destaque
              </div>
              <p className="mt-2 text-base leading-relaxed">
                Fabi Guttin é multi recordista e medalhista na natação master. Aos 70+, segue quebrando barreiras com paixão, disciplina e energia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] bg-white p-8 md:p-10 shadow-xl border border-[#d9edf7]">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={lonjoLogo}
                alt="Logo Lonjô"
                className="h-14 w-14 rounded-full object-contain bg-[#3aa5de] p-1"
              />
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#2a7fb8] font-semibold">
                  Sobre
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mt-1">Lonjô</h2>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-[#355a77]">
              Lonjô é uma iniciativa do administrador, surfista e triatleta <strong>Rodrigo Soares</strong>, criada para incentivar uma longevidade ativa e jovial.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
              A proposta é inspirar pessoas a atravessarem o tempo com mais movimento, energia, presença e entusiasmo, traduzindo na prática o conceito de <strong>lonjovialidade</strong>: longevidade com jovialidade.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
              Mais do que viver mais, Lonjô propõe viver bem o próprio tempo, valorizando saúde, autonomia, convívio, propósito e alegria de viver.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 md:p-10 shadow-xl border border-[#d9edf7]">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={andreaLogo}
                alt="Logo Andrea Orlandi"
                className="h-14 w-auto object-contain"
              />
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#2a7fb8] font-semibold">
                  Sobre
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold mt-1">Andrea Orlandi</h2>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-[#355a77]">
              Andrea Orlandi é uma experiente professora de natação e empreendedora, com forte atuação no Rio de Janeiro e especialização em águas abertas e preparação física.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
              Com mais de 20 anos de trajetória, tornou-se referência no treinamento de equipes de natação no mar, especialmente na região de Copacabana, unindo técnica, segurança e paixão pelo ambiente marinho.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
              Seu trabalho inclui treinos, preparação de nadadores e projetos voltados a travessias e experiências em mar aberto.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16">
        <div className="space-y-6">
          <div className="rounded-[2rem] bg-white p-8 md:p-10 shadow-xl border border-[#d9edf7]">
            <div className="text-sm uppercase tracking-[0.25em] text-[#2a7fb8] font-semibold">
              Sobre a convidada
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              Fabi Guttin
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#355a77]">
              Multi recordista e medalhista na natação master, aos 70+ segue quebrando barreiras, desenvolvendo projetos e inspirando gerações com sua paixão, disciplina e energia dentro e fora d&apos;água. <strong>Lonjovialidade pura!</strong>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
              Em 2025 cumpriu o impressionante desafio de nadar <strong>70 km em 7 dias aos 70 anos</strong>, reforçando que longevidade e movimento caminham juntos e que idade não é limite para quem se prepara para o futuro.
            </p>
             <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
              O desafio inspirou a produção do documentário Véia Nada, que começa a ser exibido em festivais.
            </p>
            <div className="mt-8">
              <a
                href={formUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#0f3f66] px-6 py-3 text-base font-semibold text-white shadow-lg hover:scale-[1.02] transition"
              >
                Quero participar
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white shadow-xl border border-[#d9edf7] overflow-hidden">
            <img
              src={posto6Image}
              alt="Vista do Posto 6 em Copacabana"
              className="w-full h-[280px] md:h-[360px] object-cover"
            />
            <div className="p-8 md:p-10">
              <div className="text-sm uppercase tracking-[0.25em] text-[#2a7fb8] font-semibold">
                O local do evento
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                Posto 6, Copacabana
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#355a77]">
                O Posto 6 é um dos pontos mais tradicionais da natação no mar do Rio de Janeiro. Com águas geralmente mais tranquilas e uma rotina já conhecida por nadadores experientes, é local de treino e ponto de encontro de diversas assessorias de natação.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#355a77]">
                Além da beleza icônica de Copacabana vista do mar, o local reúne esporte, convivência e cultura de águas abertas, criando o cenário ideal para um encontro especial como este.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f3f66] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-[#8fd8ff] font-semibold">
              O encontro
            </div>
            <h3 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
              Mais que uma natação, um encontro. Mais que um evento, um movimento.
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-[#d6edf8]">
              Lonjô e Andrea Orlandi se unem para promover uma celebração do esporte, da vitalidade e da presença no tempo. Uma experiência pensada para quem ama o mar e se inspira em trajetórias reais.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/10 backdrop-blur p-8 shadow-lg">
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <div className="font-semibold">Data</div>
                  <div className="text-[#d6edf8]">23 de maio</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-semibold">Local</div>
                  <div className="text-[#d6edf8]">Posto 6, Copacabana</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <div className="font-semibold">Realização</div>
                  <div className="text-[#d6edf8]">Lonjô + Andrea Orlandi</div>
                </div>
              </div>
            </div>

            <a
              href={formUrl}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#f2b532] px-6 py-4 text-lg font-semibold text-[#0f3f66] shadow-lg hover:scale-[1.02] transition"
            >
              Quero participar
            </a>
            <p className="mt-4 text-sm text-center text-[#d6edf8]">
              Substitua o link do botão pelo endereço do seu formulário.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
