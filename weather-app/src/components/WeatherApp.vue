<template>
 <p>{{getWidget}}</p>
</template>

<script lang="ts">
import {  Component, Vue, } from 'vue-property-decorator';
import {getWeatherData} from './weather/weatherAPI'
//import WeatherAppList from './WeatherAppList.vue'

@Component
export default class WeatherApp extends Vue {
  private text = null

  get getWidget() {
    if(!this.text){
      return 'loading..' 
    }
    return this.text
  }
  
  
  public testing(): Promise<any> {
    return getWeatherData().then((data)=>{return data})
    //return console.log(test)
    
  } 

  async created() {
    const test =await this.testing()
    console.log(test[0])
    this.text = test;
    
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
