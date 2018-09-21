module.exports = (api, opts, files) => {
    const file = 'src/main.js'
    const main = files[file]

    if (main) {
        const lines = main.split(/\r?\n/g).reverse()
        const lastImportIndex = lines.findIndex(line => line.match(/^import/))

        lines[lastImportIndex] += `\n\nVue.use(components)`

        files[file] = lines.reverse().join('\n')
    }
}