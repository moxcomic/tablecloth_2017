const intervalId = setInterval(() => {
  if (cfg.item_definition.item) {
    const item = cfg.item_definition.item.get('305044')
    item.name_chs = '桌布-2017'
    item.desc_chs = '桌布'
    clearInterval(intervalId)
  }
}, 1000)
;