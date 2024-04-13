import Head from "next/head";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

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
           contact info
          </p>
        </div>
        <Footer/>
      </main>
    </>
  );
}
