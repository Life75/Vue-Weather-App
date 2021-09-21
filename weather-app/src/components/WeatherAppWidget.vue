<template>
  <div v-if="weatherStat">
    <div id="weather-stats" class="box">
      <img :src="dynamicIcons(weatherStat.getIcon())" />
      <li>
        <span id="temp">{{ convertKtoF(weatherStat.getTemp()) }}</span>
        <span class="gray"> | </span>
        <span id="tempC">{{ convertKtoC(weatherStat.getTemp()) }}</span>
        <br />
        <div class="gray">
          <span id="description">{{ weatherStat.getDescription() }}</span>
          <br />
          <span id="rain">{{ stringAdjustPop(weatherStat.getPop()) }}</span>
          <br />
          <span id="humidity">Humidity: {{ weatherStat.getHumidity() }}%</span>
          <br />
          <span id="date">{{ weatherStat.getDate() }}</span>
        </div>
      </li>
    </div>
  </div>
  <div v-else>loading...</div>
</template>

<script lang ="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WeatherAppWidget extends Vue {
  private BASE_ICON_URL = `http://openweathermap.org/img/wn/`;
  private END_ICON_URL = `@2x.png`;

  @Prop({ default: "loading..." }) weatherStat: any;

  public convertKtoF(tempK: number): string {
    const tempF = ((tempK * 9) / 5 - 459.67).toPrecision(2);
    return tempF + ` °F`;
  }

  public convertKtoC(tempK: number): string {
    const tempC = (tempK - 273.15).toPrecision(2);
    return tempC + ` °C`;
  }

  public dynamicIcons(icon: string): string {
    return `${this.BASE_ICON_URL}${icon}${this.END_ICON_URL}`;
  }

  public stringAdjustPop(pop: number): string {
    pop = pop * 100;
    return `Precipitation: ` + pop + `%`;
  }
}
</script>




<style scoped>
li {
  flex-direction: column;
}

.temp {
  text-align: center;
}

.gray {
  color: gray;
}

#weather-stats {
  border-radius: 4px;
  border: 2px solid lightgrey;
  padding: 5px;
}
</style>