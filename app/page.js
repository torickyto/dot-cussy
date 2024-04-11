"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { signIn } from "next-auth/react";

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
        <img src="/dotcussyPatch.png" alt="logo" className="mr-2" style={{ height: '100%', marginLeft: '-64px'}} />
        <div className=" -ml-40 flex justify-around items-center h-full w-full mr-64">
          <div className="pt-14 text-center">
            <Link legacyBehavior href="/ourArtist">
              <a className="text-7xl text-gray-100 font-semibold text-shadow-right">OUR ARTISTS</a>
            </Link>
            <div className="mt-2 text-shadow-right-small">
              <Link legacyBehavior href="/artist1"><a className="text-2xl text-gray-100 mx-2">TRENCHCOATGORDY</a></Link>
              <Link legacyBehavior href="/artist2"><a className="text-2xl text-gray-100 mx-2">DEATHCON3</a></Link>
              <Link legacyBehavior href="/artist3"><a className="text-2xl text-gray-100 mx-2">BANFFWILLY</a></Link>
            </div>
          </div>
          <div className="pt-14 text-center text-shadow-left-small">
            <Link legacyBehavior href="/aboutUs">
              <a className="text-7xl text-gray-100 font-semibold text-shadow-left">ABOUT US</a>
            </Link>
            <div className="mt-2">
              <Link legacyBehavior href="/faq"><a className="text-2xl text-gray-100 mx-2">FAQ</a></Link>
              <Link legacyBehavior href="/applications"><a className="text-2xl text-gray-100 mx-2">APPLICATIONS</a></Link>
              <Link legacyBehavior href="/contact"><a className="text-2xl text-gray-100 mx-2">CONTACT</a></Link>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
        <button onClick={() => signIn("spotify")} className="button-3d carved-text text-xl md:text-2xl lg:text-3xl px-12 py-2 mt-6">sign in with Spotify</button>
        <button class="button-3d carved-text text-xl md:text-2xl lg:text-3xl px-12 py-2 mt-6">sign in</button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center h-screen" style={{ marginTop: '-5%' }}>
  <div className="text-center px-4 space-y-2 md:space-y-3">
    <h1 className="text-3xl md:text-4xl lg:text- text-gray-100">
    <div className="flex justify-center text-4xl md:text-5xl lg:text-6xl text-gray-100">
    <span className="text-shadow">
  <span style={{ background: 'linear-gradient(to right, darkgray, lightgray)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Local Roots.</span>
  <span className="pl-2">Global Reach.</span></span>
</div>
    </h1>
    <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 pb-2 font-sem">From <span style={{ color: '#1DB954' }}>YYC</span> to the World.</h3>
    <img src="/spotifylogo.png" alt="Spotify Logo" className="mx-auto" style={{ maxWidth: '60px', height: 'auto', marginBottom: '85px' }}/>
    <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-100">We're scouting. Are you up?</h2>
  </div>
  <button class="button-3d carved-text text-xl md:text-2xl lg:text-3xl px-12 py-2 mt-6">sign up</button></main>
    </>
  );
}
