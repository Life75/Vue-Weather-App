<template>
  <div v-if="!this.loading">
    <ul>
      <li v-for="weatherStat in getForcast" :key="weatherStat.getDate()">
        <WeatherAppWidget :weatherStat="weatherStat" />
      </li>
    </ul>
  </div>
  <div v-else>Loading data...</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getWeatherData } from "./weather/weatherAPI";
import WeatherAppWidget from "./WeatherAppWidget.vue";

@Component({
  components: {
    WeatherAppWidget,
  },
})
export default class WeatherAppList extends Vue {
  private weatherStack: object;
  private loading = true;

  get getForcast(): object {
    return this.weatherStack;
  }

  async created(): Promise<void> {
    this.weatherStack = await getWeatherData();
    this.loading = false;

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
