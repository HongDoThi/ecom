<template>
  <div id="app">
    <div id="loading" v-if="loading">
      <img src="../img/Loading.gif" alt="">
    </div>
    <router-view/>
  </div>
</template>
<script>
import {EventBus} from './main.js'
export default {
  data(){
    return{
      loading: false
    }
  },
  created(){
    EventBus.$on('loadingStatus', payload=>{
      this.loading = payload
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
