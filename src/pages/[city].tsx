import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IndexScreen } from "../components/screens/IndexScreen/IndexScreen";
import moment from 'moment'

interface Coordinates {
  id: string
  lat: number;
  lon: number;
}

const geolocation: Array<Coordinates> = [{
    id: "Bogota",
    lat: 4.7110,
    lon: -74.0721
  },{
    id: "Cairo",
    lat: 30.0444,
    lon: 31.2357
  }, {
    id: "Bangalore",
    lat: 12.9716,
    lon: 77.5946
  }
]

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API

  const coordinates = geolocation.find(({id} : Coordinates) => id === context.params.city)
  if(coordinates === undefined){
    return {
      props:{
        error: true
      }
    }
  }
  //const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,minutely,alerts&appid=${process.env.API_KEY}&units=metric`)
  //const data = await res.json()
  const data = {
    "lat": 33.44,
    "lon": -94.04,
    "timezone": "America/Chicago",
    "timezone_offset": -18000,
    "current": {
        "dt": 1661385752,
        "sunrise": 1661341502,
        "sunset": 1661388744,
        "temp": 27.32,
        "feels_like": 29.71,
        "pressure": 1013,
        "humidity": 73,
        "dew_point": 22.05,
        "uvi": 0.22,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.6,
        "wind_deg": 80,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ]
    },
    "daily": [
        {
            "dt": 1661364000,
            "sunrise": 1661341502,
            "sunset": 1661388744,
            "moonrise": 1661331480,
            "moonset": 1661384760,
            "moon_phase": 0.92,
            "temp": {
                "day": 25.96,
                "min": 21.05,
                "max": 27.94,
                "night": 23.58,
                "eve": 27.32,
                "morn": 22.08
            },
            "feels_like": {
                "day": 25.96,
                "night": 24.32,
                "eve": 29.71,
                "morn": 22.8
            },
            "pressure": 1014,
            "humidity": 79,
            "dew_point": 22.2,
            "wind_speed": 4.65,
            "wind_deg": 56,
            "wind_gust": 7.49,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 98,
            "pop": 1,
            "rain": 2.45,
            "uvi": 8.61
        },
        {
            "dt": 1661450400,
            "sunrise": 1661427943,
            "sunset": 1661475070,
            "moonrise": 1661421360,
            "moonset": 1661473320,
            "moon_phase": 0.95,
            "temp": {
                "day": 24.52,
                "min": 21.05,
                "max": 26.72,
                "night": 22.54,
                "eve": 25.75,
                "morn": 21.74
            },
            "feels_like": {
                "day": 25.33,
                "night": 23.36,
                "eve": 26.55,
                "morn": 22.53
            },
            "pressure": 1015,
            "humidity": 88,
            "dew_point": 22.35,
            "wind_speed": 3.97,
            "wind_deg": 47,
            "wind_gust": 6.63,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.29,
            "rain": 0.35,
            "uvi": 5.68
        },
        {
            "dt": 1661536800,
            "sunrise": 1661514384,
            "sunset": 1661561396,
            "moonrise": 1661511360,
            "moonset": 1661561700,
            "moon_phase": 0.98,
            "temp": {
                "day": 29.21,
                "min": 21.16,
                "max": 30.04,
                "night": 23.35,
                "eve": 26.68,
                "morn": 21.18
            },
            "feels_like": {
                "day": 33,
                "night": 24.25,
                "eve": 29.51,
                "morn": 21.94
            },
            "pressure": 1015,
            "humidity": 69,
            "dew_point": 22.98,
            "wind_speed": 3.31,
            "wind_deg": 103,
            "wind_gust": 4.78,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 61,
            "pop": 0.96,
            "rain": 4.04,
            "uvi": 8.52
        },
        {
            "dt": 1661623200,
            "sunrise": 1661600825,
            "sunset": 1661647721,
            "moonrise": 1661601300,
            "moonset": 1661649780,
            "moon_phase": 0,
            "temp": {
                "day": 29.94,
                "min": 21.98,
                "max": 30.63,
                "night": 23.63,
                "eve": 27.03,
                "morn": 21.98
            },
            "feels_like": {
                "day": 33.54,
                "night": 24.45,
                "eve": 29.9,
                "morn": 22.79
            },
            "pressure": 1013,
            "humidity": 64,
            "dew_point": 22.35,
            "wind_speed": 3.06,
            "wind_deg": 161,
            "wind_gust": 6.72,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 48,
            "pop": 1,
            "rain": 2.69,
            "uvi": 9.03
        },
        {
            "dt": 1661709600,
            "sunrise": 1661687266,
            "sunset": 1661734045,
            "moonrise": 1661691240,
            "moonset": 1661737860,
            "moon_phase": 0.04,
            "temp": {
                "day": 30.39,
                "min": 22.35,
                "max": 30.84,
                "night": 23.31,
                "eve": 27.27,
                "morn": 22.35
            },
            "feels_like": {
                "day": 34.04,
                "night": 24.1,
                "eve": 30.35,
                "morn": 23.15
            },
            "pressure": 1013,
            "humidity": 62,
            "dew_point": 22.53,
            "wind_speed": 3.21,
            "wind_deg": 166,
            "wind_gust": 8.86,
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": 22,
            "pop": 0.97,
            "rain": 5.34,
            "uvi": 9.16
        },
        {
            "dt": 1661796000,
            "sunrise": 1661773707,
            "sunset": 1661820369,
            "moonrise": 1661781180,
            "moonset": 1661825880,
            "moon_phase": 0.08,
            "temp": {
                "day": 30.83,
                "min": 22,
                "max": 30.83,
                "night": 23.5,
                "eve": 26.26,
                "morn": 22
            },
            "feels_like": {
                "day": 34.49,
                "night": 24.33,
                "eve": 26.26,
                "morn": 22.79
            },
            "pressure": 1015,
            "humidity": 60,
            "dew_point": 22.17,
            "wind_speed": 3.78,
            "wind_deg": 154,
            "wind_gust": 8.78,
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "heavy intensity rain",
                    "icon": "10d"
                }
            ],
            "clouds": 21,
            "pop": 0.99,
            "rain": 11.61,
            "uvi": 10
        },
        {
            "dt": 1661882400,
            "sunrise": 1661860147,
            "sunset": 1661906692,
            "moonrise": 1661871180,
            "moonset": 1661913960,
            "moon_phase": 0.11,
            "temp": {
                "day": 29.73,
                "min": 21.77,
                "max": 30.32,
                "night": 24.56,
                "eve": 27.21,
                "morn": 21.77
            },
            "feels_like": {
                "day": 33.31,
                "night": 25.29,
                "eve": 30.11,
                "morn": 22.56
            },
            "pressure": 1016,
            "humidity": 65,
            "dew_point": 22.48,
            "wind_speed": 2.9,
            "wind_deg": 175,
            "wind_gust": 6.47,
            "weather": [
                {
                    "id": 502,
                    "main": "Rain",
                    "description": "heavy intensity rain",
                    "icon": "10d"
                }
            ],
            "clouds": 50,
            "pop": 0.95,
            "rain": 9.46,
            "uvi": 10
        },
        {
            "dt": 1661968800,
            "sunrise": 1661946588,
            "sunset": 1661993014,
            "moonrise": 1661961300,
            "moonset": 1662002100,
            "moon_phase": 0.14,
            "temp": {
                "day": 29.85,
                "min": 22.29,
                "max": 31.73,
                "night": 25.69,
                "eve": 28.69,
                "morn": 22.29
            },
            "feels_like": {
                "day": 33.56,
                "night": 26.35,
                "eve": 32.4,
                "morn": 23.06
            },
            "pressure": 1015,
            "humidity": 65,
            "dew_point": 22.73,
            "wind_speed": 2.42,
            "wind_deg": 182,
            "wind_gust": 4.11,
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": 100,
            "pop": 0.83,
            "rain": 6.29,
            "uvi": 10
        }
    ]
}
  // Pass data to the page via props
  return {
    props: {
      cityNav: {
        selectedCity: context.params.city,
        cities: ["Bangalore", "Cairo", "Bogota"]
      },
      weather: {
        currentWeather: {
          weatherTypeText: data.current.weather[0].main,
          iconSrc: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`,
          temperature: `${Math.round(data.current.temp)}`
        },
        futureWeather: {
          forecast: data.daily.reduce((accumulator, day, index) => {
            if (index === 0 || accumulator.length === 4) {
              return accumulator
            }
            return accumulator.concat({
              weekday: moment.unix(day.dt).format('ddd'),
              iconSrc: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
              temperature: `${Math.round(day.temp.day)}`,
            })
          }, [])
        }
      }
    }
  }
}

export default function Home(data: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>

      <main className="bg-card-background h-screen flex justify-center">
        <IndexScreen className="justify-center" cityNav={data.cityNav} weather={data.weather} />
      </main>
    </>
  );
}