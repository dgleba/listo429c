// Inside vue.config.js
module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      
      icons: [
        {
            'src': '../img/icons/apple-touch-icon-120x120.png',
            'sizes': '120x120',
            'type': 'image/png',
        },
        {
            'src': './img/icons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png',
        },
        {
            'src': './img/icons/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png',
        },
    ],
    iconPaths: {
        favicon32: './img/icons/favicon-32x32.png',
        favicon16: './img/icons/favicon-16x16.png',
        appleTouchIcon: './img/icons/apple-touch-icon-120x120.png',
        appleTouchIcon: './img/icons/apple-touch-icon-180x180.png',
        maskIcon: './img/icons/safari-pinned-tab.svg',
        msTileImage: './img/icons/mstile-150x150.png',
    },

      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
    }
  }

