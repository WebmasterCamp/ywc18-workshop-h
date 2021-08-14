// next.config.js;
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  modifyVars: { '@primary-color': '#1D256D' },

  webpack(config) {
    return config;
  },
});
// const withLess = require('@zeit/next-less');
// const withCSS = require('@zeit/next-css');
// const webpack = require('webpack');
// module.exports = {
//   exportTrailingSlash: true,
//   ...withCSS(
//     withLess({
//       lessLoaderOptions: {
//         modifyVars: {
//           'primary-color': '#1DA57A',
//           'link-color': '#1DA57A',
//           'border-radius-base': '2px',
//           'font-size-base': '18px',
//           'font-family': `'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
//   'Microsoft YaHei', 'Helvetica Neue', 'Apple Color Emoji',
//   'Segoe UI Emoji', 'Segoe UI Symbol', 'Prompt', 'Nanum Gothic'`,
//         },
//         javascriptEnabled: true,
//       },
//       webpack: (config) => {
//         config.module.rules.push({
//           test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//           use: [
//             {
//               loader: '@svgr/webpack',
//               options: {
//                 icon: true,
//               },
//             },
//           ],
//         });
//         return config;
//       },
//     })
//   ),
//   exportPathMap: () => {
//     return {
//       '/': { page: '/' },
//       '/seacrh': { page: '/search' },
//       '/detail': { page: '/profile' },
//     };
//   },
// };
