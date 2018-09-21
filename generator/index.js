module.exports = (api, opts, rootOptions) => {
    const updateUse = require('./utils')

    api.extendPackage({
        dependencies: {
            'v-components-v1': '^0.1.24'
        }
    })

    const file = 'src/main.js'
    api.injectImports(file, `import components from 'v-components-v1'`)

    if (opts.customTheme === 'custom') {
        api.render({ './src/assets/theme.scss': './templates/src/scss/theme.scss' })
        api.injectImports(file, `import './assets/theme.scss'`)

    } else {
        api.injectImports(file, `import 'v-components-v1/dist/components.css'`)
    }
    api.postProcessFiles(files => {
        updateUse(api, opts, files)
    })
}