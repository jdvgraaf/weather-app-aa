import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IndexScreen } from "../components/screens/IndexScreen/CityScreenScreen";
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
}, {
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

  const coordinates = geolocation.find(({ id }: Coordinates) => id === context.params.city)
  if (coordinates === undefined) {
    return {
      props: {
        error: true,
        route: context.params.city
      }
    }
  }
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,minutely,alerts&appid=${process.env.API_KEY}&units=metric`)
  const data = await res.json()

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
          iconSrc: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`,
          temperature: `${Math.round(data.current.temp)}`
        },
        futureWeather: {
          forecast: data.daily.reduce((accumulator, day, index) => {
            if (index === 0 || accumulator.length === 4) {
              return accumulator
            }
            return accumulator.concat({
              weekday: moment.unix(day.dt).format('ddd'),
              iconSrc: `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
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
        {data.error === true ?
          <p>{`Data is not accessable for ${data.route}`}</p> :
          <IndexScreen className="justify-center" cityNav={data.cityNav} weather={data.weather} />
        }
      </main>
    </>
  );
}