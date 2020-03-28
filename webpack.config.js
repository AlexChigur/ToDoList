module.exports = {
  resolve: {
    // for WebStorm
    alias: {
      '@': path.join(path.resolve(__dirname), 'src'),
      '~': path.join(path.resolve(__dirname)),
      '~~': path.join(path.resolve(__dirname)),
    }
  }
}
