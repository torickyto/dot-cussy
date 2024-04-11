"use client"
import { useState } from 'react';
import Link from 'next/link';
import SignInButton from './SignInButton';

const Header = () => {
    // State to manage whether the animation should play
    const [centerFocus, setCenterFocus] = useState('');
  
    // Function to handle click events and set the focus
    const handleFocus = (focus) => {
      setCenterFocus(focus);
    };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center px-4 z-10" style={{ height: '16vh', background: 'linear-gradient(to bottom, #333, #000)' }}>
      <Link legacyBehavior href="/">
        <a>
        <img src="/dotcussyPatch.png" alt="logo" className="mr-2" style={{ height: '210px', width: '440px', marginLeft: '-64px'}} />
        </a>
        </Link>
      
      <div className=" -ml-40 flex justify-around items-center h-full w-full mr-64">
        <div className="pt-14 text-center">
          <Link legacyBehavior href="/ourArtist">
            <a className="text-9xl text-gray-100 text-shadow-right">OUR ARTISTS</a>
          </Link>
          <div className="-mt-4 text-shadow-right-small text-4xl text-gray-100 ">
            <Link legacyBehavior href="/artist1"><a className="mx-2">TRENCHCOATGORDY</a></Link>
            <Link legacyBehavior href="/artist2"><a className="mx-4">DEATHCON3</a></Link>
            <Link legacyBehavior href="/artist3"><a className="mx-2">BANFFWILLY</a></Link>
          </div>
        </div>
        <div className="pt-14 text-center">
          <Link legacyBehavior href="/aboutUs">
            <a className="text-9xl text-gray-100 text-shadow-left">ABOUT US</a>
          </Link>
          <div className="-mt-4 text-shadow-left-small text-4xl text-gray-100">
            <Link legacyBehavior href="/faq"><a className=" mx-5">FAQ</a></Link>
            <Link legacyBehavior href="/applications"><a className=" mx-11">APPLICATIONS</a></Link>
            <Link legacyBehavior href="/contact"><a className=" mx-2">CONTACT</a></Link>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
      <SignInButton />
      </div>
    </header>
  );
};

export default Header;