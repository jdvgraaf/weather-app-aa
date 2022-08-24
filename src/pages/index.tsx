import { useRouter } from "next/router"
import Head from "next/head";
import { trpc } from "../utils/trpc";


export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>

      <main>
        <h1>Title</h1>
      </main>
    </>
  );
}