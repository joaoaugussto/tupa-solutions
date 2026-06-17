const apps = [
  {
    id: 'mechup',
    name: 'MechUp',
    cat: 'Gestão de Oficinas',
    desc: 'Sistema completo para mecânicas e oficinas automotivas. Controle ordens de serviço, clientes, veículos e financeiro — tudo na palma da mão, em tempo real.',
    feats: [
      'Ordens de serviço completas e organizadas',
      'Cadastro detalhado de clientes e veículos',
      'Controle financeiro com caixa em tempo real',
      'Dashboard com visão geral do dia',
      'Gestão de pagamentos e adiantamentos'
    ]
  },
  {
    id: 'scissors',
    name: 'Scissors',
    cat: 'Gestão de Barbearias',
    desc: 'App de agendamento e gestão para barbearias que querem atender mais com menos esforço. Sua agenda organizada, seu financeiro no controle.',
    feats: [
      'Agendamento rápido e organizado',
      'Controle de barbeiros e horários',
      'Histórico completo de clientes',
      'Gestão financeira do negócio',
      'Painel de desempenho diário'
    ]
  }
];

let cur = 0;

function mechSVG() {
  return `<svg viewBox="0 0 260 547" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="260" height="547" fill="#1c1c1e"/><text x="16" y="22" fill="#aaa" font-size="10" font-family="Outfit,sans-serif">16:16</text><text x="16" y="48" fill="white" font-size="20" font-family="Outfit,sans-serif" font-weight="700">Olá 👋</text><text x="16" y="64" fill="#888" font-size="10">Aqui está o resumo da</text><text x="16" y="78" fill="#888" font-size="10">sua oficina hoje.</text><rect x="148" y="52" width="96" height="30" rx="15" fill="#a78bfa" opacity="0.85"/><text x="196" y="72" text-anchor="middle" fill="white" font-size="10" font-weight="600">+ Nova OS</text><rect x="10" y="92" width="116" height="82" rx="10" fill="#2a2a2e"/><rect x="10" y="92" width="116" height="82" rx="10" stroke="#C75B12" stroke-width="1.3" stroke-opacity="0.8"/><rect x="90" y="100" width="28" height="28" rx="7" fill="#7A4B2E" opacity="0.6"/><text x="104" y="119" text-anchor="middle" fill="#D4AF37" font-size="14">💰</text><text x="18" y="112" fill="#aaa" font-size="8.5">CAIXA DA OFICINA</text><text x="18" y="148" fill="white" font-size="13" font-weight="700">R$ 4.830,00</text><text x="18" y="163" fill="#888" font-size="8.5">Valores já pagos</text><rect x="134" y="92" width="116" height="82" rx="10" fill="#2a2a2e"/><rect x="134" y="92" width="116" height="82" rx="10" stroke="#7c5cfa" stroke-width="1.3" stroke-opacity="0.8"/><rect x="214" y="100" width="28" height="28" rx="7" fill="#5b3fd4"/><text x="228" y="119" text-anchor="middle" fill="white" font-size="14">↗</text><text x="142" y="112" fill="#aaa" font-size="8.5">ADIANTADO</text><text x="142" y="148" fill="white" font-size="13" font-weight="700">R$ 500,00</text><text x="142" y="163" fill="#888" font-size="8.5">A executar</text><rect x="10" y="182" width="116" height="82" rx="10" fill="#2a2a2e"/><rect x="10" y="182" width="116" height="82" rx="10" stroke="#C75B12" stroke-width="1.3" stroke-opacity="0.8"/><rect x="90" y="190" width="28" height="28" rx="7" fill="#7A4B2E" opacity="0.6"/><text x="104" y="209" text-anchor="middle" fill="#C75B12" font-size="14">⏱</text><text x="18" y="202" fill="#aaa" font-size="8.5">A RECEBER</text><text x="18" y="238" fill="white" font-size="13" font-weight="700">R$ 900,00</text><text x="18" y="253" fill="#888" font-size="8.5">Pagamentos pendentes</text><rect x="134" y="182" width="116" height="82" rx="10" fill="#2a2a2e"/><rect x="214" y="190" width="28" height="28" rx="7" fill="#444"/><text x="228" y="209" text-anchor="middle" fill="#aaa" font-size="14">🔧</text><text x="142" y="202" fill="#aaa" font-size="8.5">OS ABERTAS</text><text x="142" y="238" fill="white" font-size="24" font-weight="700">5</text><text x="142" y="253" fill="#888" font-size="8.5">10 clientes · 10 carros</text><text x="16" y="280" fill="white" font-size="12" font-weight="600">Próximos serviços</text><rect x="10" y="288" width="240" height="76" rx="9" fill="#242428"/><text x="18" y="305" fill="white" font-size="11" font-weight="600">Troca de filtro de barro</text><text x="18" y="320" fill="#888" font-size="8.5">João Pereira · Honda — ABC-1D23</text><rect x="18" y="326" width="80" height="17" rx="8.5" fill="none" stroke="#C75B12" stroke-width="1"/><text x="58" y="338.5" text-anchor="middle" fill="#C75B12" font-size="8.5">Em andamento</text><rect x="106" y="326" width="62" height="17" rx="8.5" fill="none" stroke="#C75B12" stroke-width="1"/><text x="137" y="338.5" text-anchor="middle" fill="#C75B12" font-size="8.5">Adiantado</text><text x="18" y="357" fill="#C75B12" font-size="10" font-weight="600">R$ 1.400,00</text><rect x="10" y="372" width="240" height="70" rx="9" fill="#242428"/><text x="18" y="388" fill="white" font-size="11" font-weight="600">Troca de amortecedores</text><text x="18" y="402" fill="#888" font-size="8.5">João · Volkswagen — AHS-9101</text><rect x="18" y="408" width="80" height="17" rx="8.5" fill="none" stroke="#C75B12" stroke-width="1"/><text x="58" y="420.5" text-anchor="middle" fill="#C75B12" font-size="8.5">Em andamento</text><rect x="106" y="408" width="44" height="17" rx="8.5" fill="none" stroke="#4CAF50" stroke-width="1"/><text x="128" y="420.5" text-anchor="middle" fill="#4CAF50" font-size="8.5">Pago</text><text x="180" y="420.5" fill="#C75B12" font-size="10" font-weight="600">R$ 480,00</text><rect x="0" y="458" width="260" height="42" fill="#1c1c1e"/><rect x="0" y="458" width="260" height="1" fill="#333"/><text x="26" y="484" text-anchor="middle" fill="#a78bfa" font-size="8.5">Início</text><text x="80" y="484" text-anchor="middle" fill="#555" font-size="8.5">Clientes</text><text x="134" y="484" text-anchor="middle" fill="#555" font-size="8.5">Carros</text><text x="188" y="484" text-anchor="middle" fill="#555" font-size="8.5">Serviços</text><text x="236" y="484" text-anchor="middle" fill="#555" font-size="8.5">Mais</text><rect x="0" y="500" width="260" height="47" fill="#111"/><text x="78" y="528" fill="#888" font-size="9">|||</text><text x="127" y="528" text-anchor="middle" fill="#888" font-size="9">○</text><text x="174" y="528" fill="#888" font-size="9">&lt;</text></svg>`;
}

function scissorsSVG() {
  return `<svg viewBox="0 0 260 547" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="260" height="547" fill="#0B0906"/><rect width="260" height="68" fill="#110D08"/><text x="18" y="26" fill="#6a5830" font-size="10">9:41</text><text x="18" y="44" fill="#6a5830" font-size="10">Bem-vindo</text><text x="18" y="60" fill="#e8dba8" font-size="11" font-family="Cinzel,serif" font-weight="600">Scissors Barber</text><rect x="12" y="76" width="236" height="82" rx="12" fill="#161209"/><rect x="12" y="76" width="236" height="82" rx="12" stroke="#D4AF37" stroke-width="0.6" stroke-opacity="0.28"/><text x="22" y="94" fill="#6a5830" font-size="8.5" letter-spacing="1.5">PRÓXIMO AGENDAMENTO</text><text x="22" y="113" fill="#e8dba8" font-size="13" font-weight="600">Carlos Mendes</text><text x="22" y="129" fill="#6a5830" font-size="9">Corte + Barba · Barbeiro: André</text><rect x="162" y="101" width="78" height="26" rx="6" fill="#D4AF37" opacity="0.12"/><text x="201" y="119" text-anchor="middle" fill="#D4AF37" font-size="13" font-family="Cinzel,serif" font-weight="700">14:30</text><rect x="12" y="168" width="72" height="62" rx="10" fill="#161209"/><text x="48" y="197" text-anchor="middle" fill="#D4AF37" font-size="20" font-family="Cinzel,serif" font-weight="700">8</text><text x="48" y="212" text-anchor="middle" fill="#6a5830" font-size="8">Hoje</text><rect x="94" y="168" width="72" height="62" rx="10" fill="#161209"/><text x="130" y="194" text-anchor="middle" fill="#D4AF37" font-size="13" font-family="Cinzel,serif" font-weight="700">R$640</text><text x="130" y="212" text-anchor="middle" fill="#6a5830" font-size="8">Faturamento</text><rect x="176" y="168" width="72" height="62" rx="10" fill="#161209"/><text x="212" y="197" text-anchor="middle" fill="#D4AF37" font-size="20" font-family="Cinzel,serif" font-weight="700">4.9</text><text x="212" y="212" text-anchor="middle" fill="#6a5830" font-size="8">Avaliação</text><text x="18" y="254" fill="#6a5830" font-size="9" letter-spacing="1.5">AGENDA DO DIA</text><rect x="12" y="263" width="236" height="56" rx="8" fill="#161209"/><rect x="18" y="275" width="3" height="30" rx="1.5" fill="#D4AF37"/><text x="30" y="290" fill="#e8dba8" font-size="11" font-weight="600">Pedro Silva</text><text x="30" y="306" fill="#6a5830" font-size="9">Corte degradê · 11:00</text><text x="238" y="300" text-anchor="end" fill="#D4AF37" font-size="10">R$ 60</text><rect x="12" y="327" width="236" height="56" rx="8" fill="#161209"/><rect x="18" y="339" width="3" height="30" rx="1.5" fill="#C75B12"/><text x="30" y="354" fill="#e8dba8" font-size="11" font-weight="600">Rafael Costa</text><text x="30" y="370" fill="#6a5830" font-size="9">Barba completa · 12:30</text><text x="238" y="364" text-anchor="end" fill="#D4AF37" font-size="10">R$ 45</text><rect x="12" y="391" width="236" height="56" rx="8" fill="#161209"/><rect x="18" y="403" width="3" height="30" rx="1.5" fill="#D4AF37" opacity="0.35"/><text x="30" y="418" fill="#e8dba8" font-size="11" font-weight="600">Marco Antônio</text><text x="30" y="434" fill="#6a5830" font-size="9">Corte + Barba · 14:30</text><text x="238" y="428" text-anchor="end" fill="#D4AF37" font-size="10">R$ 90</text><rect x="0" y="494" width="260" height="53" fill="#110D08"/><text x="32" y="524" text-anchor="middle" fill="#D4AF37" font-size="9">Início</text><text x="88" y="524" text-anchor="middle" fill="#4a3820" font-size="9">Agenda</text><text x="144" y="524" text-anchor="middle" fill="#4a3820" font-size="9">Clientes</text><text x="200" y="524" text-anchor="middle" fill="#4a3820" font-size="9">Financeiro</text><text x="240" y="524" text-anchor="middle" fill="#4a3820" font-size="9">Mais</text></svg>`;
}

function getScr(id) {
  return id === 'mechup' ? mechSVG() : scissorsSVG();
}

function cls(i) {
  const d = ((i - cur) % apps.length + apps.length) % apps.length;
  if (d === 0) return 'active';
  if (d === 1) return 'next';
  if (d === apps.length - 1) return 'prev';
  return d <= apps.length / 2 ? 'fr' : 'fl';
}

function render() {
  const w = document.getElementById('sliderWrap');
  w.innerHTML = '';
  apps.forEach((app, i) => {
    const cl = cls(i);
    const el = document.createElement('div');
    el.className = `app-card ${cl}`;
    el.innerHTML = `<div class="phone-frame"><div class="phone-notch"></div><div style="width:100%;height:100%">${getScr(app.id)}</div></div><div class="card-info"><div class="card-name">${app.name}</div><div class="card-cat">${app.cat}</div><button class="btn-more" onclick="openModal(${i})">Ver detalhes →</button></div>`;
    if (cl !== 'active') el.addEventListener('click', () => { cur = i; render(); renderDots(); });
    w.appendChild(el);
  });
}

function renderDots() {
  const d = document.getElementById('dotsEl');
  d.innerHTML = '';
  apps.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `dot${i === cur ? ' on' : ''}`;
    dot.onclick = () => { cur = i; render(); renderDots(); };
    d.appendChild(dot);
  });
}

function openModal(i) {
  const a = apps[i];
  const apkFile = a.id === 'mechup' ? 'MechUp.apk' : 'Scissors.apk';
  const apkName = a.id === 'mechup' ? 'MechUp.apk' : 'Scissors.apk';
  document.getElementById('mInfo').innerHTML = `<div class="m-name">${a.name}</div><div class="m-cat">${a.cat}</div><p class="m-desc">${a.desc}</p><div class="m-feats">${a.feats.map(f => `<div class="m-feat">${f}</div>`).join('')}</div><a href="assets/apk/${apkFile}" download="${apkName}" class="m-dl">Quero esse app →</a>`;
  document.getElementById('mVisual').innerHTML = `<div class="m-phone">${getScr(a.id)}</div>`;
  document.getElementById('overlay').classList.add('open');
}

document.getElementById('mClose').onclick = () => document.getElementById('overlay').classList.remove('open');
document.getElementById('overlay').onclick = e => { if (e.target === document.getElementById('overlay')) document.getElementById('overlay').classList.remove('open'); };

if (document.getElementById('sliderWrap')) {
  document.getElementById('prevBtn').onclick = () => { cur = (cur - 1 + apps.length) % apps.length; render(); renderDots(); };
  document.getElementById('nextBtn').onclick = () => { cur = (cur + 1) % apps.length; render(); renderDots(); };
  render();
  renderDots();
}


/* --- Apps Section --- */
/* =====================================================
   SEÇÃO DE APPS — TUPÃ SOLUTIONS
   Adicionar ao main.js ou em <script> antes do </body>
   ===================================================== */

(function () {
  const state = { mechup: false, estoque: false };

  function appEnter(id) {
    if (state[id]) return;
    state[id] = true;

    const phone = document.getElementById('phone-' + id);
    if (phone) {
      phone.classList.remove('go');
      void phone.offsetWidth; // force reflow
      phone.classList.add('go');
    }

    const text = document.getElementById('app-text-' + id);
    if (text) {
      text.classList.remove('reveal', 'hide');
      void text.offsetWidth;
      text.classList.add('reveal');
    }
  }

  function appLeave(id) {
    state[id] = false;

    const phone = document.getElementById('phone-' + id);
    if (phone) {
      phone.classList.remove('go');
      phone.style.cssText = 'transform:translateX(-600px);opacity:0;';
      setTimeout(() => { phone.style.cssText = ''; }, 50);
    }

    const text = document.getElementById('app-text-' + id);
    if (text) {
      text.classList.remove('reveal');
      text.classList.add('hide');
      setTimeout(() => { text.classList.remove('hide'); }, 250);
    }
  }

  // Expõe globalmente para os atributos onmouseenter/onmouseleave do HTML
  window.appEnter = appEnter;
  window.appLeave = appLeave;
})();

(function () {
  const heroEls = document.querySelectorAll('.hero-animated');

  function runHeroAnim() {
    heroEls.forEach(el => {
      el.classList.remove('hero-visible');
      void el.offsetWidth;
    });
    heroEls.forEach(el => {
      const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
      setTimeout(() => {
        el.classList.add('hero-visible');
      }, delay);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runHeroAnim);
  } else {
    runHeroAnim();
  }
})();

(function () {
  const track = document.getElementById('mechupTrack');
  const dotsEl = document.getElementById('mechupDots');
  const labelEl = document.getElementById('mechupLabel');

  if (!track || !dotsEl || !labelEl) return;

  const labels = [
    'Dashboard',
    'Ordens de Serviço',
    'Clientes',
    'Carros',
    'Estoque',
    'Financeiro',
    'Adiantamentos',
    'Lembretes'
  ];

  const total = labels.length;
  let current = 0;
  let timer;

  labels.forEach(function (_, i) {
    const d = document.createElement('div');
    d.className = 'mechup-dot' + (i === 0 ? ' active' : '');
    dotsEl.appendChild(d);
  });

  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    document.querySelectorAll('.mechup-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
    if (labelEl) labelEl.textContent = labels[current];
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(function () {
      goTo(current + 1);
    }, 2800);
  }

  setTimeout(function () {
    startAuto();
  }, 1500);
})();

(function () {
  const scrollEls = document.querySelectorAll('.scroll-reveal');

  if (!scrollEls.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
          setTimeout(function () {
            el.classList.add('is-visible');
          }, delay);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  scrollEls.forEach(function (el) {
    observer.observe(el);
  });
})();

