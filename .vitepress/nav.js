function getNavs() {
  const base = [
    {
      text: '案例中心',
      activeMatch: `^/(sqldemo|sqlfunction|sqlerror|searchdemo|visulization|dataprocessdemo|oscompatibledemo)/`,
      items: [
        {
          items: [
            { text: 'SQL分析案例', link: '/sqldemo/index' },
            { text: 'SQL函数案例', link: '/sqlfunction/index' },
            { text: 'SQL错误中心', link: '/sqlerror/index' },
            { text: '查询案例', link: '/searchdemo/query/search_with_index' },
            { text: '可视化案例', link: '/visulization/index' },
            { text: '加工案例', link: '/dataprocessdemo/index' },
            { text: '开源兼容', link: '/oscompatibledemo/index' },
            { text: '告警规则案例', link: '/alert/index' },
            { text: 'CloudLen案例', link: '/cloudlen/index' },
          ],
        },
      ],
    },
    {
      text: '产品动态',
      link: '/product/',
    },
    {
      text: '招聘',
      activeMatch: `^/(jobs)/`,
      items: [
        {
          items: [
            {
              text: '可视化研发工程师',
              link: '/jobs/front',
            },
            {
              text: '2024春招实习',
              link: '/jobs/2024intern',
            },
          ],
        },
      ],
    },
    {
      text: '链接',
      items: [
        {
          items: [
            {
              text: '控制台 Playground',
              link: 'https://sls.aliyun.com/doc/playground/demo.html',
            },
            {
              text: '日志服务控制台',
              link: 'https://sls.console.aliyun.com/',
            },
          ],
        },
        {
          text: '其他链接',
          items: [
            {
              text: '日志服务文档',
              link: 'https://help.aliyun.com/document_detail/48869.html',
            },
          ],
        },
      ],
    },
  ]

  base.push({
    text: '如何贡献',
    activeMatch: `^/(dev)/`,
    items: [
      {
        items: [
          { text: '环境准备', link: '/dev/env' },
          { text: '文档样例', link: '/dev/' },
        ],
      },
    ],
  })

  return base
}

module.exports = getNavs
