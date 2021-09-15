<template>
<button @click="getLocation">Says hey in console</button>
    
</template>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
import {getWeatherData} from './weatherAPI'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public getLocation(): void{
    console.log(getWeatherData())
    return;
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
