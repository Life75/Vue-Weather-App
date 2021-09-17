<template>
  <p></p>
</template>

<script lang="ts">
import { Component, Vue, } from 'vue-property-decorator';
//import {getWeatherData} from './weatherAPI'
//import WeatherAppList from './WeatherAppList.vue'
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

@Component({
  computed: ({
    ...mapActions({
      updateWeatherList: 'updateWeatherList'
    }),

    ...mapGetters({
      getWeatherList: 'getWeatherList'
    })
  })


})

export default class WeatherApp extends Vue {
  updateWeatherList!: () => any;

  beforeMount() {
    console.log(this.updateWeatherList)    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
