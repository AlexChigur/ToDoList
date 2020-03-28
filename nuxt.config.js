import path from 'path'
import _ from 'lodash'
import shortid from 'shortid'

const srcDir = path.resolve(__dirname + '/src')

module.exports = {
  transition: {
    name: 'test',
    mode: 'out-in'
  },

  mode: 'universal',
  srcDir,
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
  ],
  axios: {
    // TODO rework base url
    baseURL: 'http://localhost:4000/'
  },
  styleResources: {
    sass: [
      path.join(srcDir, 'assets/css/_defines.sass')
    ]
  },
  css: [
    path.join(srcDir, 'assets/css/styles.sass')
  ],
  build: {
    extend (config, context) {
      // Run ESLint on save
      if (context.isDev) {
        config.devtool = 'eval-source-map'
      }

      if (context.isDev && context.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }

      /*
       * Url loader for inline svg
       */
      const urlLoader = _.find(config.module.rules, { 'test': /\.(png|jpe?g|gif|svg|webp)$/i })
      if (urlLoader) {
        urlLoader.test = /\.(png|jpe?g|gif|webp)$/
        urlLoader.use[0].options.limit = 100

        const vueLoader = config.module.rules.find(({ loader }) => loader === 'vue-loader')
        vueLoader.options.modules = true
        config.module.rules.push({
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /inline/,
              loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
              options: {
                svgo: {
                  plugins: [
                    { removeDoctype: true },
                    { removeComments: true },
                    {
                      cleanupIDs:
                        {
                          prefix: {
                            toString () {
                              this.counter = this.counter || 0
                              return `id-${this.counter++}-${shortid.generate()}`
                            }
                          }
                        }
                    }
                  ]
                }
              },
              exclude: /node_modules/
            },
            urlLoader.use[0]
          ]
        })
      } else {
        console.error('no rule')
      }
    }
  }
}
