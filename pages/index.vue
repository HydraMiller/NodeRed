<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        NodeRed
      </h1>
      <h2>{{ data }}</h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  data() {
    return {
      data: {},
      today: new Date(),
      dayNum: 0,
      dailyVerse: "John 3:17"
    }
  },
  components: {},
  methods: {
    search() {
      const url = `/.netlify/functions/getData?passage=${this.dailyVerse}`;
      Vue.axios.get(
        url).then(response => {
        console.log(response)
        this.data = response.data
      }).catch(error => {
        this.data = {
          "passages": [
            "<h2 class=\"extra_text\">John 3:16 <small class=\"audio extra_text\">(<a class=\"mp3link\" href=\"https://audio.esv.org/hw/43003016-43003016.mp3\" title=\"John 3:16\" type=\"audio/mpeg\">Listen</a>)</small></h2>\n<h3 id=\"p43003016_01-1\">For God So Loved the World</h3>\n<p id=\"p43003016_07-1\"><b class=\"verse-num woc\" id=\"v43003016-1\">16&nbsp;</b><span class=\"woc\">“For God so loved the world,<sup class=\"footnote\"><a class=\"fn\" href=\"#f1-1\" id=\"fb1-1\" title=\"&lt;note class=&quot;alternative&quot;&gt;Or &lt;i&gt;&lt;span class=&quot;catch-word&quot;&gt;For&lt;/span&gt; this is how God loved the world&lt;/i&gt;&lt;/note&gt;\">1</a></sup> that he gave his only Son, that whoever believes in him should not perish but have eternal life.</span></p>\n<div class=\"footnotes extra_text\">\n<h3>Footnotes</h3>\n<p><span class=\"footnote\"><a href=\"#fb1-1\" id=\"f1-1\">[1]</a></span> <span class=\"footnote-ref\">3:16</span> <note class=\"alternative\">Or <i><span class=\"catch-word\">For</span> this is how God loved the world</i></note>\n</p>\n</div>\n<p>(<a href=\"http://www.esv.org\" class=\"copyright\">ESV</a>)</p>"
          ]
        }
      })
    }
  },
  beforeMount() {
    this.search();
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
