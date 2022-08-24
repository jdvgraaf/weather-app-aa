import { useRouter } from "next/router"
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { IndexScreen } from "../components/screens/IndexScreen/IndexScreen";
import { trpc } from "../utils/trpc";

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {

  // Fetch data from external API
  //const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=e087342eca2f4ee4605ce0db0e3b8fb2&units=metric&exclude=hourly,minutely,alerts`)
  //const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=${process.env.API_KEY}&units=metric`)
  //const data = await res.json()


  // Pass data to the page via props
  return {
    props: {
      cityNav: {
        selectedCity: context.params.city,
        cities: ["Ottawa", "Moscow", "Tokyo"]
      },
      weather: {
        currentWeather: {
          weatherTypeText: "Cloudy",
          iconSrc: "http://openweathermap.org/img/wn/10d@4x.png",
          temperature: "19"
        },
        futureWeather: {
          forecast: [{
            weekday: "Wed",
            iconSrc: "http://openweathermap.org/img/wn/10d@2x.png",
            temperature: "-18",
          },
          {
            weekday: "Thu",
            iconSrc: "http://openweathermap.org/img/wn/11d@2x.png",
            temperature: "0",
          },
          {
            weekday: "Fri",
            iconSrc: "http://openweathermap.org/img/wn/13d@2x.png",
            temperature: "6",
          },
          {
            weekday: "Sat",
            iconSrc: "http://openweathermap.org/img/wn/50d@2x.png",
            temperature: "70",
          }]
        }
      }
    }
  }
}

export default function Home(data: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data)
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