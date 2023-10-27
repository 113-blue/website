import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: 113"
        description="Welcome to 113 homepage."
        canonical="https://113.blue"
        openGraph={{
          url: "https://113.blue/",
        }}
      />
      <Head>
        <title>113.blue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
