const path = require('path')
const ProgressPlugin = require('progress-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const yaml = require('js-yaml')
const requireContext = require('require-context')
const package = require('../package.json')

const server = `http://localhost:${package.config.devServerPort}`

module.exports = {
  stats: 'minimal',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.twig$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name (resourcePath) {
                const customPath = resourcePath
                  .replace(/^.*templates/, '')
                  .replace(/\.twig/, '.html')

                return customPath
              }
            }
          },
          // include webpack-html-script-insert-loader only in development
          ...process.env.NODE_ENV === 'development' ?
          [{
            loader: 'webpack-html-script-insert-loader',
            options: {
              src: `${server}/main.js`,
              location: 'body'
            }
          }] : [],
          'extract-loader',
          {
            loader: 'webpack-mjml-loader',
            options: {
              filePath: path.resolve(__dirname, '../src'),
              keepComments: process.env.NODE_ENV !== 'production',
              minify: process.env.NODE_ENV === 'production',
              minifyOptions: {
                'collapseWhitespace': true,
                'minifyCSS': true,
                'removeEmptyAttributes': true
              }
            }
          },
          {
            loader: 'twig-html-loader',
            options: {
              namespaces: {
                '@layouts': path.resolve(__dirname, '../src/layouts'),
                '@templates': path.resolve(__dirname, '../src/templates'),
                '@components': path.resolve(__dirname, '../src/components')
              },
              data: (context) => {
                let data = {
                  server: server,
                  env: process.env.NODE_ENV,
                  development: process.env.NODE_ENV === 'development',
                  production: process.env.NODE_ENV === 'production'
                }

                requireContext(path.resolve(__dirname, '../src/data'), false, /\.ya?ml$/)
                  .keys()
                  .forEach(file => {
                    // force webpack to watch files
                    context.addDependency(path.resolve(__dirname, `../src/data/${file}`))

                    const contents = context.fs.readFileSync(path.resolve(__dirname, `../src/data/${file}`))
                    data = { ...data, ...yaml.load(contents) }
                  })

                return data
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin()
  ]
}