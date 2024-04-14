import Head from "next/head";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import SignUpButton from "@/app/components/SignUpButton";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Dot Cussy</title>
      </Head>
      <Header />
      <main
        className="text-white bg-black flex flex-col items-center justify-center h-screen text-center px-4"
        style={{
          background:
            "radial-gradient(circle, rgba(15,15,15,0.9) 0%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div className="space-y-8 max-w-7xl">
          <p className="text-4xl md:text-5xl text-gray-300">
            Our aim is to unearth and uplift the incredible talents scattered
            across Calgary, giving this city, rich with diverse sounds and
            stories, a platform built on the idea that every artist deserves to
            be heard.
          </p>
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest">
            We spotlight artists and make connections. Simple as that.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-300">
            We&aposre here to give the city&aposs music a platform and its artists a
            voice, creating a network where artists support artists, blending
            genres and styles in ways that haven&apost been heard before.
          </p>
          <SignUpButton />
        </div>
        <Footer/>
      </main>
    </>
  );
}
