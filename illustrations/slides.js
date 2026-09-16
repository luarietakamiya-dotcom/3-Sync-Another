window.illustrationSlides = ["illustrations/character_achan_visual.jpg", "illustrations/character_key_visual_poster.jpg", "illustrations/character_lua_visual.jpg", "illustrations/character_mimi_visual.jpg", "illustrations/guest_03_katsunn_main.jpg", "illustrations/guest_06_mogu_main.png", "illustrations/guest_10_to_main.png", "illustrations/guest_11_uta_journey_main.png", "illustrations/guest_12_new_world_main.png", "illustrations/guest_13_aki_main.png", "illustrations/guest_14_gin_main.jpg", "illustrations/guest_15_blanchesca_main.png", "illustrations/guest_16_maeno_main.png", "illustrations/guest_18_memuroiro_main.png", "illustrations/hero_theatrical_visual.jpg", "illustrations/sync_achan_content.png", "illustrations/sync_achan_poster.jpg"];

// Mobile safeguard for very tall reveal sections.
const revealMobileSections = () => {
  if (!window.matchMedia('(max-width: 760px)').matches) return;
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('is-visible');
  });
};

document.addEventListener('DOMContentLoaded', revealMobileSections);
window.addEventListener('resize', revealMobileSections, { passive: true });

// Official links for the 3-Sync member cards.
setTimeout(() => {
  if (typeof guestMedia === 'undefined') return;

  guestMedia['sync-luarie'] = {
    ...(guestMedia['sync-luarie'] || {}),
    links: {
      ...((guestMedia['sync-luarie'] && guestMedia['sync-luarie'].links) || {}),
      x: 'https://x.com/LuarieTakamiya',
      youtube: 'https://www.youtube.com/@%E9%AB%98%E5%AE%AE%E3%83%AB%E3%82%A2%E3%83%AA%E3%82%A8-LUA',
      homepage: 'https://luarietakamiya-dotcom.github.io/luarie-takamiya/'
    }
  };

  guestMedia['sync-mimi'] = {
    ...(guestMedia['sync-mimi'] || {}),
    links: {
      ...((guestMedia['sync-mimi'] && guestMedia['sync-mimi'].links) || {}),
      x: 'https://x.com/yonagimimi?s=11',
      youtube: 'https://youtube.com/@yonagimimi?si=KMrwB5axYYEOJH5B'
    }
  };
}, 0);

// Guest modal: single-scroll layout inspired by the supplied mockup.
setTimeout(() => {
  const modal = document.querySelector('#guestModal');
  if (!modal) return;

  const dialog = modal.querySelector('.guest-modal-dialog');
  const inner = modal.querySelector('.guest-modal-inner:not(.guest-modal-body)');
  const body = modal.querySelector('.guest-modal-body');
  const media = modal.querySelector('.guest-modal-media');
  const toolbar = modal.querySelector('.guest-reading-toolbar');
  const close = modal.querySelector('.guest-modal-close');
  const frame = modal.querySelector('#guestModalFrame');
  const storyTab = modal.querySelector('[data-guest-panel="story"]');
  const title = modal.querySelector('#guestModalTitle');

  if (!dialog || !inner || !body || !media || !toolbar || !close || !frame || !storyTab || !title) return;

  // Keep the close button, but remove the playback toolbar and tabs from view.
  dialog.appendChild(close);

  const style = document.createElement('style');
  style.textContent = `
    .guest-reading-toolbar { display:none !important; }
    .guest-modal-dialog { padding-top:0 !important; }
    .guest-modal-tabs { display:none !important; }
    .guest-modal-inner { padding-top:clamp(22px,4vw,48px) !important; }
    .guest-modal-header { margin-bottom:18px !important; padding-top:0 !important; }
    .guest-modal-media { margin-top:18px; }
    .guest-modal-video-stage { border-radius:12px; overflow:hidden; }
    .guest-content-grid { display:block !important; }
    .guest-content-visual { display:none !important; }
    .guest-content-reader { width:100% !important; }
    .guest-modal-content { margin-top:0 !important; border-radius:12px !important; }
    .guest-modal-frame.is-reader { height:min(82svh,920px) !important; }

    .guest-overview { display:grid; gap:14px; margin:8px 0 18px; }
    .guest-overview-block { border:1px solid rgba(255,255,255,.14); border-radius:10px; background:rgba(255,255,255,.035); padding:16px 18px; }
    .guest-overview-label { display:block; margin-bottom:10px; color:var(--sub); font-size:10px; font-weight:900; letter-spacing:.18em; text-transform:uppercase; }
    .guest-overview-links { display:flex; flex-wrap:wrap; gap:10px; }
    .guest-overview-links a { display:inline-flex; align-items:center; gap:8px; min-height:40px; padding:9px 14px; border:1px solid rgba(255,255,255,.18); border-radius:999px; background:rgba(255,255,255,.045); color:#fff; font-size:12px; font-weight:800; letter-spacing:.06em; }
    .guest-overview-links a:hover { border-color:var(--sub); background:rgba(0,217,255,.08); }
    .guest-overview-links .guest-link-empty { color:rgba(255,255,255,.48); font-size:13px; }
    .guest-overview-intro { color:rgba(255,255,255,.82); font-size:15px; line-height:1.9; }
    .guest-overview-track { margin-top:7px; color:rgba(255,255,255,.5); font-size:12px; letter-spacing:.05em; }

    .guest-scroll-cue { display:grid; justify-items:center; gap:8px; padding:20px 12px 8px; color:rgba(255,255,255,.66); text-align:center; font-size:12px; letter-spacing:.08em; }
    .guest-scroll-arrow { width:32px; height:32px; border-right:4px solid #fff; border-bottom:4px solid #fff; transform:rotate(45deg); filter:drop-shadow(0 0 8px rgba(255,255,255,.18)); animation:guestCue 1.25s ease-in-out infinite; }
    @keyframes guestCue { 0%,100% { transform:translateY(-3px) rotate(45deg); opacity:.65; } 50% { transform:translateY(5px) rotate(45deg); opacity:1; } }

    .guest-modal-body::before { content:'STORY / SYNOPSIS'; display:block; margin:0 0 12px; color:var(--sub); font-size:10px; font-weight:900; letter-spacing:.18em; }

    @media (max-width:640px) {
      .guest-modal-inner { padding:20px 14px !important; }
      .guest-overview-block { padding:14px; }
      .guest-overview-links { gap:8px; }
      .guest-overview-links a { min-height:38px; padding:8px 12px; font-size:11px; }
      .guest-overview-intro { font-size:14px; }
      .guest-scroll-cue { padding-top:16px; }
      .guest-modal-frame.is-reader { height:76svh !important; }
    }
  `;
  document.head.appendChild(style);

  const overview = document.createElement('div');
  overview.className = 'guest-overview';
  overview.innerHTML = `
    <div class="guest-overview-block">
      <span class="guest-overview-label">SNS / OFFICIAL LINKS</span>
      <div class="guest-overview-links" data-guest-overview-links></div>
    </div>
    <div class="guest-overview-block">
      <span class="guest-overview-label">INTRODUCTION</span>
      <div class="guest-overview-intro" data-guest-overview-intro></div>
      <div class="guest-overview-track" data-guest-overview-track></div>
    </div>
  `;
  inner.insertBefore(overview, media);

  const cue = document.createElement('div');
  cue.className = 'guest-scroll-cue';
  cue.innerHTML = '<span class="guest-scroll-arrow" aria-hidden="true"></span><span>下にスクロールすると、あらすじがあります</span>';
  media.insertAdjacentElement('afterend', cue);

  const linksBox = overview.querySelector('[data-guest-overview-links]');
  const introBox = overview.querySelector('[data-guest-overview-intro]');
  const trackBox = overview.querySelector('[data-guest-overview-track]');

  const linkLabels = {
    x: 'X',
    youtube: 'YouTube',
    homepage: 'Official Site',
    website: 'Website',
    note: 'note',
    instagram: 'Instagram',
    tiktok: 'TikTok'
  };

  let activeCard = null;

  const findActiveCard = () => {
    const name = title.textContent.trim();
    return [...document.querySelectorAll('.guest-card')].find((card) => card.querySelector('.guest-name')?.textContent.trim() === name) || null;
  };

  const renderOverview = () => {
    activeCard = findActiveCard();
    if (!activeCard || typeof guestMedia === 'undefined') return;

    const key = activeCard.dataset.key || activeCard.dataset.no || '';
    const data = guestMedia[key] || {};
    const links = data.links || {};
    const track = activeCard.querySelector('.guest-track')?.textContent.replace(/^\s*(Track|Story)\s*[：:]\s*/i, '').trim() || '';

    linksBox.replaceChildren();
    const entries = Object.entries(links).filter(([, url]) => typeof url === 'string' && url.trim());
    if (entries.length) {
      entries.forEach(([type, url]) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = `${linkLabels[type] || type} ↗`;
        linksBox.appendChild(a);
      });
    } else {
      const empty = document.createElement('span');
      empty.className = 'guest-link-empty';
      empty.textContent = 'SNS / OFFICIAL LINK COMING SOON';
      linksBox.appendChild(empty);
    }

    introBox.textContent = track
      ? `「${track}」へつながる Another Story。`
      : 'この作品の Another Story を紹介します。';
    trackBox.textContent = track ? `TITLE / ${track}` : '';

    // Story is the only reading panel in the new layout.
    storyTab.click();
  };

  const updateIntroFromStory = () => {
    try {
      if (!activeCard || frame.hidden || !frame.contentDocument) return;
      const candidates = [...frame.contentDocument.querySelectorAll('p')]
        .map((p) => p.textContent.replace(/\s+/g, ' ').trim())
        .filter((text) => text.length >= 24);
      if (candidates[0]) introBox.textContent = candidates[0];
    } catch (_) {
      // Cross-origin pages keep the fallback introduction.
    }
  };

  frame.addEventListener('load', () => window.setTimeout(updateIntroFromStory, 80));

  const observer = new MutationObserver(() => {
    if (!modal.hidden && modal.classList.contains('is-open')) {
      window.setTimeout(renderOverview, 0);
    }
  });
  observer.observe(modal, { attributes:true, attributeFilter:['class','hidden'] });
}, 20);
