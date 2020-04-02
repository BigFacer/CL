<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.setFontSize(750, 750)
  },
  methods: {
    setFontSize (designwWidth, maxWidth) {
      let doc = document
      let win = window
      let docE1 = doc.documentElement
      let remStyle = document.createElement('style')
      let rem
      let tid
      function refreshRem () {
        let width = docE1.getBoundingClientRect().width
        maxWidth = maxWidth || 540
        width > maxWidth && (width = maxWidth)
        rem = width * 10 / designwWidth
        remStyle.innerHTML = 'html{font-size:' + rem + 'px};'
      }
      if (docE1.firstElementChild) {
        docE1.firstElementChild.appendChild(remStyle)
      } else {
        let wrap = doc.createElement('div')
        wrap.appendChild(remStyle)
        doc.write(wrap.innerHTML)
        wrap = null
      }
      refreshRem()
      win.addEventListener('resize', function () {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }, false)
      win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
          clearTimeout(tid)
          tid = setTimeout(refreshRem, 300)
        }
      }, false)
      if (doc.readyStyle === 'complate') {
        doc.body.style.fontSize = '16px'
      } else {
        doc.addEventListener('DONContentLoaded', function (e) {
          doc.body.style.fontSize = '16px'
        }, false)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
