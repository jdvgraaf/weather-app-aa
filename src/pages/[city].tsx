import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IndexScreen } from "../components/screens/IndexScreen/IndexScreen";
import moment from 'moment'

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=${process.env.API_KEY}&units=metric`)
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

      <main>
        <IndexScreen cityNav={data.cityNav} weather={data.weather} />
      </main>
    </>
  );
}