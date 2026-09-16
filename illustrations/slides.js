window.illustrationSlides = ["illustrations/character_achan_visual.jpg", "illustrations/character_key_visual_poster.jpg", "illustrations/character_lua_visual.jpg", "illustrations/character_mimi_visual.jpg", "illustrations/guest_03_katsunn_main.jpg", "illustrations/guest_06_mogu_main.png", "illustrations/guest_10_to_main.png", "illustrations/guest_11_uta_journey_main.png", "illustrations/guest_12_new_world_main.png", "illustrations/guest_13_aki_main.png", "illustrations/guest_14_gin_main.jpg", "illustrations/guest_15_blanchesca_main.png", "illustrations/guest_16_maeno_main.png", "illustrations/guest_18_memuroiro_main.png", "illustrations/hero_theatrical_visual.jpg", "illustrations/sync_achan_content.png", "illustrations/sync_achan_poster.jpg"];

// Official links for the 3-Sync member cards.
// index.html defines guestMedia after this file is loaded, so apply the links
// on the next task after the inline script has finished initializing.
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
