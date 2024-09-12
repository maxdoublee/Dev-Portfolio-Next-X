const withSvgr = require('next-svgr');

module.exports = withSvgr({
  images: {
    domains: ["sumitdey.netlify.app"], 
  },
  webpack(config) {
    return config;
  },
});