import { getWeatherData } from './weatherAPI';

const state ={
    weatherList: [],
}
const mutations ={
    UPDATE_WEATHER_LIST(state: object, payload: Promise<object>){
        payload
            .then((data: object)=>{
                state = data;
            })
    }
}
const actions ={
    updateWeatherList(context: any){
        context.commit('UPDATE_WEATHER_LIST', getWeatherData());
    }
}

const getters= {
    getWeatherList: (state: { weatherList: any; }) => state.weatherList
}

const weatherModule ={
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default weatherModule;

