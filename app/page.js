"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/homeBackground.png')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';
  }, []);

  return (
    <>
      <Head>
        <title>dot cussy</title>
      </Head>
      <header className="fixed top-0 left-0 w-full flex items-center px-4 z-10" style={{ height: '16vh', background: 'linear-gradient(to bottom, #333, #000)' }}>
        <img src="/dotcussyPatch.png" alt="logo" className="mr-2" style={{ height: '100%', marginLeft: '-84px'}} />
        <div className=" -ml-44 flex justify-around items-center h-full w-full">
          <div className="pt-14 text-center">
            <Link legacyBehavior href="/ourArtist">
              <a className="text-7xl font-bold text-gray-100">OUR ARTISTS</a>
            </Link>
            <div className="mt-2">
              <Link legacyBehavior href="/artist1"><a className="text-2xl text-gray-100 mx-2">TRENCHCOATGORDY</a></Link>
              <Link legacyBehavior href="/artist2"><a className="text-2xl text-gray-100 mx-2">DEATHCON3</a></Link>
              <Link legacyBehavior href="/artist3"><a className="text-2xl text-gray-100 mx-2">BANFFWILLY</a></Link>
            </div>
          </div>
          <div className="pt-14 text-center">
            <Link legacyBehavior href="/aboutUs">
              <a className="text-7xl font-bold text-gray-100">ABOUT US</a>
            </Link>
            <div className="mt-2">
              <Link legacyBehavior href="/faq"><a className="text-2xl text-gray-100 mx-2">FAQ</a></Link>
              <Link legacyBehavior href="/applications"><a className="text-2xl text-gray-100 mx-2">APPLICATIONS</a></Link>
              <Link legacyBehavior href="/contact"><a className="text-2xl text-gray-100 mx-2">CONTACT</a></Link>
            </div>
          </div>
        </div>
        {/* Removed Sign Up button, left only Sign In */}
        <div className="absolute top-4 right-4">
          <button className=" rounded-3xl bg-green-500 text-gray-100 px-4 py-2">sign in</button>
        </div>
      </header>
      <main className="grid place-items-center" style={{ height: 'calc(100vh - 20vh)' }}>
        <div>
          <h1 className="text-6xl font-semibold text-gray-100 mb-2">Local Roots. Global Reach.</h1>
          <h3 className="text-3xl text-center text-gray-100">From YYC to the World.</h3>
        </div>
      </main>
    </>
  );
}
