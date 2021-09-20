<template>
<p>{{weatherStat}}</p>    
</template>

<script lang ="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component 
export default class WeatherAppList extends Vue {
    @Prop({default: 'loading..'}) weatherStat: any
}
</script>