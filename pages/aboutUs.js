import Head from 'next/head';
import Header from '../app/components/Header'; // Adjust the path as necessary

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Dot Cussy</title>
      </Head>
      <Header />
      <main 
  className="text-white flex flex-col items-center justify-center h-screen text-center px-4"
  style={{
    background: "radial-gradient(circle, rgba(15,15,15,0.9) 0%, rgba(0,0,0,1) 100%)"
  }}
>
      <div className="space-y-4 max-w-7xl">
          <p className="text-2xl md:text-3xl">
            Our aim is to unearth and uplift the incredible talents scattered across Calgary,
            giving this city, rich with diverse sounds and stories, a platform built on the idea that
            every artist deserves to be heard.
          </p>
          <p className="text-3xl md:text-4xl font-bold tracking-widest">
            We spotlight artists and make connections. Simple as that.
          </p>
          <p className="text-2xl md:text-3xl ">
            We're here to give the city's music a platform and its artists a voice,
            creating a network where artists support artists, blending genres and styles in ways that haven’t been heard before.
          </p>
          <button 
            className="mt-4 button-3d carved-text text-xl md:text-2xl lg:text-3xl px-12 py-2"
            onClick={() => { /* Define sign-up action here */ }}
          >
            Sign Up
          </button>
        </div>
      </main>
    </>
  );
}