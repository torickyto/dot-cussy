"use client"
import Head from 'next/head';
import { useEffect } from 'react';
import Header from './components/Header';

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
      <Header />
      <main className="flex flex-col items-center justify-center h-screen" style={{ marginTop: '-5%' }}>
  <div className="text-center px-4 space-y-2 md:space-y-3">
    <h1 className="text-3xl md:text-4xl lg:text- text-gray-100">
    <div className="flex justify-center text-4xl md:text-5xl lg:text-6xl text-gray-100">
    <span className="text-shadow">
    <div className="flex justify-center text-5xl md:text-6xl lg:text-7xl text-gray-100 tracking-wider">
  <span style={{ background: 'linear-gradient(to right, darkgray, lightgray)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
    Local Roots.
  </span>
  <span className="pl-2">
    Global Reach.
  </span>
</div></span>
</div>
    </h1>
    <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 pb-2 tracking-wider">From <span style={{ color: '#1DB954' }}>YYC</span> to the World.</h3>
    <img src="/spotifylogo.png" alt="Spotify Logo" className="mx-auto" style={{ maxWidth: '60px', height: 'auto', marginTop: '20px', marginBottom: '75px' }}/>
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-300 tracking-wide">We're scouting. Are you up?</h2>
  </div>
  <button class="button-3d carved-text text-xl md:text-2xl lg:text-3xl">sign up</button></main>
    </>
  );
}
