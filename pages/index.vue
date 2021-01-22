<template>
  <div class="container">
    <div>
      <h1 class="title">
        NodeRed
      </h1>
      <ul>
        <li>DeviceID: {{ data.Dev01_DeviceID }}</li>
        <li>Random: {{ data.Dev01_Random }}</li>
        <li>PSI_Open_Loop: {{ data.Dev01_PSI_Open_Loop }}</li>
        <li>PSI_A_Port: {{ data.Dev01_PSI_A_Port }}</li>
        <li>PSI_B_Port: {{ data.Dev01_PSI_B_Port }}</li>
        <li>PSI_Charge: {{ data.Dev01_PSI_Charge }}</li>
        <li>GPM_Open_Loop: {{ data.Dev01_GPM_Open_Loop }}</li>
        <li>GPM_Closed_Loop: {{ data.Dev01_GPM_Closed_Loop }}</li>
        <li>GPM_Case_Drain: {{ data.Dev01_GPM_Case_Drain }}</li>
        <li>PSI_Aux: {{ data.Dev01_PSI_Aux }}</li>
        <li>Motor_Load: {{ data.Dev01_Motor_Load }}</li>
      </ul>
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
    }
  },
  components: {},
  methods: {
    callApi() {
      const url = `/.netlify/functions/getData`;
      Vue.axios.get(
        url).then(response => {
        console.log(response)
        this.data = response.data
      }).catch(error => {
        this.data = {
         "Error": "Bad" 
        }
      })
    }
  },
  beforeMount() {
    this.callApi();
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
