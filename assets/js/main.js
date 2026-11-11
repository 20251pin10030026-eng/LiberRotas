(() => {
  'use strict';
  const root = document.documentElement.dataset.root || '';
  const get = sel => document.querySelector(sel);
  const all = sel => [...document.querySelectorAll(sel)];

  /* Tema claro/escuro: nenhum serviço externo é utilizado. */
  const themeButton = get('[data-theme-toggle]');
  try {
    const saved = localStorage.getItem('liberrotas-theme');
    if (saved === 'dark' || saved === 'light') document.documentElement.dataset.theme = saved;
  } catch (_) { /* navegação restrita: tema padrão */ }
  const syncThemeButton = () => {
    if (!themeButton) return;
    const dark = document.documentElement.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton.setAttribute('title', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
    themeButton.querySelector('.theme-symbol').textContent = dark ? '☀' : '☾';
  };
  syncThemeButton();
  themeButton?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('liberrotas-theme', next); } catch (_) {}
    syncThemeButton();
  });

  /* Menu lateral adaptado a dispositivos móveis. */
  const menu = get('[data-menu-toggle]');
  const dimmer = get('[data-mobile-dimmer]');
  const setNav = open => {
    document.body.classList.toggle('nav-open', open);
    menu?.setAttribute('aria-expanded', String(open));
  };
  menu?.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
  dimmer?.addEventListener('click', () => setNav(false));
  all('.side-link').forEach(link => link.addEventListener('click', () => setNav(false)));

  /* Índice desta página, derivado de H2 e H3: evita manutenção duplicada. */
  const toc = get('[data-toc-links]');
  const headings = all('.doc-body h2[id],.doc-body h3[id]');
  if (toc) {
    if (!headings.length) get('.toc')?.remove();
    headings.forEach(h => {
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = h.textContent.trim();
      if (h.tagName === 'H3') a.classList.add('sub');
      toc.appendChild(a);
    });
  }
  if ('IntersectionObserver' in window && headings.length) {
    const mark = id => all('.toc-links a').forEach(a => a.classList.toggle('active', a.hash === '#' + id));
    const obs = new IntersectionObserver(items => {
      const top = items.filter(i => i.isIntersecting).sort((a,b) => a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if (top) mark(top.target.id);
    }, { rootMargin: '-95px 0px -72% 0px' });
    headings.forEach(h => obs.observe(h));
  }

  /* Barra de progresso de leitura. */
  const progress = get('[data-reading-progress]');
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${Math.max(0, Math.min(100,max > 0 ? window.scrollY / max * 100 : 0))}%`;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; } }, { passive:true });
  updateProgress();

  /* Busca client-side por título, seção e resumo. Atalho Ctrl/Cmd + K. */
  const overlay = get('#search-overlay');
  const field = get('#search-input');
  const results = get('#search-results');
  const searchOpen = () => {
    if (!overlay) return;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    field.value = '';
    renderSearch('');
    field.focus();
  };
  const searchClose = () => {
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  const normalize = text => String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function renderSearch(query) {
    if (!results) return;
    const items = window.LIBERROTAS_SEARCH || [];
    const q = normalize(query.trim());
    const filtered = q ? items.filter(it => normalize(`${it.title} ${it.group} ${it.description} ${it.keywords || ''}`).includes(q)) : items;
    results.replaceChildren();
    if (!filtered.length) {
      const empty = document.createElement('p');
      empty.className = 'search-empty';
      empty.textContent = 'Nenhuma seção encontrada. Tente outro termo.';
      results.append(empty);
      return;
    }
    filtered.forEach(item => {
      const a = document.createElement('a'); a.className = 'search-item'; a.href = root + item.href;
      const small = document.createElement('small'); small.textContent = item.group;
      const title = document.createElement('strong'); title.textContent = item.title;
      const desc = document.createElement('p'); desc.textContent = item.description;
      a.append(small,title,desc);
      results.append(a);
    });
  }
  all('[data-search-open]').forEach(el => el.addEventListener('click', searchOpen));
  get('[data-search-close]')?.addEventListener('click',searchClose);
  field?.addEventListener('input', () => renderSearch(field.value));
  field?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const first = results?.querySelector('.search-item');
      if (first) { e.preventDefault(); first.click(); }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault(); results?.querySelector('.search-item')?.focus();
    }
  });
  overlay?.addEventListener('click', e => { if (e.target === overlay) searchClose(); });
  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); searchOpen(); }
    if (e.key === 'Escape') { searchClose(); setNav(false); }
  });

  /* Reservas de anexos: cards não geram links quebrados. */
  all('[data-asset-kind][data-asset-key]').forEach(card => {
    const { assetKind:kind, assetKey:key } = card.dataset;
    const data = window.LIBERROTAS_ASSETS?.[kind]?.[key];
    if (!data?.arquivo?.trim()) return;
    const path = data.arquivo.trim().replace(/^\/+/, '');
    const external = /^https?:\/\//i.test(data.arquivo.trim());
    const href = external ? data.arquivo.trim() : root + path;
    const preview = card.querySelector('.asset-preview');
    const status = card.querySelector('.asset-label');
    const actions = card.querySelector('.asset-actions');
    if (!actions) return;
    card.classList.add('loaded');
    if (status) status.textContent = external ? 'Protótipo on-line · acesso externo' : 'Arquivo disponível em PDF';
    const isImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(path);
    if (isImage && preview) {
      const img = document.createElement('img');
      img.src = href;
      img.alt = data.alt || card.querySelector('.asset-meta strong')?.textContent || 'Imagem';
      img.loading = 'lazy';
      img.addEventListener('error', () => {
        preview.replaceChildren();
        preview.textContent = 'Não foi possível carregar a imagem. Confira o caminho em assets/js/content.js.';
        card.classList.remove('loaded');
        if (status) status.textContent = 'Arquivo não localizado';
      });
      preview.replaceChildren(img);
    }
    const open = document.createElement('a'); open.href = href;
    open.target = '_blank'; open.rel = 'noopener noreferrer';
    open.textContent = external ? 'Acessar protótipo ↗' : (isImage ? 'Abrir imagem ↗' : 'Abrir PDF ↗');
    actions.append(open);
    if (data.fonte?.trim()) {
      const source = document.createElement('a');
      source.href = /^https?:\/\//i.test(data.fonte.trim()) ? data.fonte.trim() : root + data.fonte.trim().replace(/^\/+/, '');
      source.textContent = 'Arquivo editável ↗'; source.target = '_blank'; source.rel = 'noopener noreferrer';
      actions.append(source);
    }
  });

  /* Link de referência para compartilhamento. */
  get('[data-copy-page]')?.addEventListener('click', async e => {
    const button = e.currentTarget;
    try {
      await navigator.clipboard.writeText(location.href);
      const old = button.textContent;
      button.textContent = 'Link copiado';
      setTimeout(() => button.textContent = old, 1600);
    } catch (_) {
      button.textContent = 'Use a barra de endereço';
    }
  });
})();
