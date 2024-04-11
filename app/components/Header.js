"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SignInButton from './SignInButton';

const Header = () => {
    const router = useRouter();
    const [centerFocus, setCenterFocus] = useState('none');

    useEffect(() => {
        let focusState = 'none';
        if (router.pathname.startsWith('/ourArtist') || router.pathname.startsWith('/artist')) {
            focusState = 'left';
        } else if (router.pathname.startsWith('/aboutUs') || router.pathname.startsWith('/faq') || router.pathname.startsWith('/applications') || router.pathname.startsWith('/contact')) {
            focusState = 'right';
        }

        setCenterFocus(focusState);
    }, [router.pathname]);

    return (
        <>
            <style jsx>{`
                .blur { filter: blur(4px); }
                .transition { transition: all 0.5s ease-in-out; }
                .off-center-left { margin-right: auto; }
                .off-center-right { margin-left: auto; }
                .header-container { display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 0 2rem; }
                .link-group { display: flex; flex-direction: column; align-items: center; }
            `}</style>
            <header className="fixed top-0 left-0 w-full flex justify-center items-center px-4 z-10" style={{ height: '16vh', background: 'linear-gradient(to bottom, #333, #000)' }}>
                <div className="header-container">
                    <Link legacyBehavior href="/">
                        <a className="flex-initial">
                        <img src="/dotcussyPatch.png" alt="logo"
         className="mr-2 ml-[-64px]
                w-[610px] min-w-[610px] h-[410px] min-h-[410px]
                sm:w-[333px] sm:min-w-[333px] sm:h-[222px] sm:min-h-[222px]
                md:w-[4390px] md:min-w-[390px] md:h-[270px] md:min-h-[270px]
                lg:w-[510px] lg:min-w-[510px] lg:h-[345px] lg:min-h-[345px]
                xl:w-[610px] xl:min-w-[610px] xl:h-[410px] xl:min-h-[410px]"
    />
  </a>
                    </Link>
                    
                    <div className={` ml-auto link-group ${centerFocus === 'right' ? 'blur' : 'off-center-left'} transition`}>
                        <Link legacyBehavior href="/ourArtist">
                            <a className="sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-12xl text-gray-100 text-shadow-right mb-12">OUR ARTISTS</a>
                        </Link>
                        <div className="-mt-14 text-shadow-right-small sm:text-3xl md:text-4xl xl:text-5xl text-gray-100">
                            <Link legacyBehavior href="/artist1"><a className="mx-4">TRENCHCOATGORDY</a></Link>
                            <Link legacyBehavior href="/artist2"><a className="mx-6">DEATHCON3</a></Link>
                            <Link legacyBehavior href="/artist3"><a className="mx-4">BANFFWILLY</a></Link>
                        </div>
                    </div>

                    <div className={` mr-auto link-group ${centerFocus === 'left' ? 'blur' : 'off-center-right'} transition`}>
                        <Link legacyBehavior href="/aboutUs">
                            <a className="sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-12xl text-gray-100 text-shadow-left mb-12">ABOUT US </a>
                        </Link>
                        <div className="-mt-14 text-shadow-left-small sm:text-3xl md:text-4xl xl:text-5xl text-gray-100">
                            <Link legacyBehavior href="/faq"><a className="mx-4">FAQ</a></Link>
                            <Link legacyBehavior href="/applications"><a className="mx-11">APPLICATIONS</a></Link>
                            <Link legacyBehavior href="/contact"><a className="mx-4">CONTACT</a></Link>
                        </div>
                    </div>

                    <div className="flex-initial">
                        <SignInButton />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;