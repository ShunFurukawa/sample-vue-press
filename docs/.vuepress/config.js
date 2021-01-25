module.exports = {
  base: '/',
  dest: './build',
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: 'Foo', link: '/foo/' },
      { text: 'Bar', link: '/bar/' }
    ]
  }
};
