const CITY = `tampa`;
const WEATHER_KEY=`0c0482d33a1b1e06b025cb6d75a4a82f`

function getWeatherData(): Promise<object>{
    //Assuming your location is in tampa 
    return pullAPIData().then((data) => {
        const parsedData = weatherParser(data);
        return parsedData;     
    })
}

async function pullAPIData(): Promise<Object>{
    const url =`http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${WEATHER_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function weatherParser(data: any){
    let date=null;
    const weatherStack = [];

    for(let i=0; i < data.list.length; i++){
        const newDate = data.list[i].dt_txt.split(" ")[0];

        if(String(date) !== String(newDate)){
            date = newDate;

            const weatherWidget = new WeatherWidget(
                data.list[i].main.temp,
                data.list[i].weather[0].description,
                data.list[i].pop,
                data.list[i].main.humidity,
                data.list[i].wind.speed,
                date,
                data.list[i].weather[0].icon
            ) 
            weatherStack.push(weatherWidget);
        }
    }
    return weatherStack;
}

class WeatherWidget {
    temperature: string;
    description: string;
    pop: string;
    humidity: string;
    wind: string;
    date: string;
    icon: string;
    

    constructor(
        temperature: string,
        description: string, 
        pop: string,
        humidity: string,
        wind: string,
        date: string,
        icon: string,
    ) {
        this.temperature = temperature;
        this.description = description;
        this.pop = pop;
        this.humidity = humidity;
        this.wind = wind;
        this.date = date;
        this.icon = icon;
    }

    public getTemp(): string{
        return this.temperature;
    }

    getDescription(): string{
        return this.description;
    }

    getPop(): string{
        return this.pop;
    }

    getHumidity(): string{
        return this.humidity;
    }

    getWind(): string{
        return this.wind;
    }

    getDate(): string{
        return this.date;
    }

    getIcon(): string{
        return this.icon;
    }
}


export {getWeatherData};