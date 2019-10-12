module.exports = (options, ctx) => ({
  plugins: [
    ['@vuepress/search'],
    ['@vuepress/plugin-nprogress'],
    [
      'container',
      {
        type: 'tip',
        defaultTitle: { '/zh/': '提示'}
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: { '/zh/': '注意' }
      }
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: { '/zh/': '警告' }
      }
    ]
  ]
})