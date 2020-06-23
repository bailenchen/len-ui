module.exports = {
  base: '/len-ui/',
  title: 'Len UI',
  description: '一个基于Vue2.0的UI框架',
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/BaiLenChen/' },
      { text: '欢迎star', link: 'https://github.com/BaiLenChen/len-ui' },
    ],
    sidebar: [
      { title: '介绍', collapsable: false, children: ['/introduce/'] },
      {
        title: '入门',
        collapsable: false,
        children: ['/install/', '/get-started/'],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/radio',
          '/components/checkbox',
          '/components/input',
          '/components/switch',
          '/components/form',
          '/components/tab',
          '/components/tooltip',
          '/components/dialog',
          '/components/collapse',
        ],
      },
    ],
  },
}
