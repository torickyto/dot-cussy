/**
 * Header component renders the main header section.
 * It includes navigation links, a logo, and a sign-in button.
 * The appearance and layout of the header adjust based on the current route.
 */

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SignInButton from "./SignInButton";

const Header = () => {
  const router = useRouter();
  const [centerFocus, setCenterFocus] = useState("none");

// Determine which headings to blur based on the current route
  useEffect(() => {
    let focusState = "none";
    if (
      router.pathname.startsWith("/ourArtist") ||
      router.pathname.startsWith("/artist")
    ) {
      focusState = "left";
    } else if (
      router.pathname.startsWith("/aboutUs") ||
      router.pathname.startsWith("/faq") ||
      router.pathname.startsWith("/applications") ||
      router.pathname.startsWith("/contact")
    ) {
      focusState = "right";
    }

// Update the blur based on route
    setCenterFocus(focusState);
  }, [router.pathname]);

  return (
    <>
      <style jsx>{`
        .blur {
          filter: blur(4px);
        }
        .transition {
          transition: all 0.5s ease-in-out;
        }
        .off-center-left {
          margin-right: auto;
        }
        .off-center-right {
          margin-left: auto;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 2rem;
        }
        .link-group {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      <header
        className="fixed top-0 left-0 w-full flex justify-center items-center px-4 z-10"
        style={{
          height: "16vh",
          background: "linear-gradient(to bottom, #333, #000)",
        }}
      >
        <div className="header-container">
          <Link legacyBehavior href="/">
            <a className="flex-initial">
              <img
                src="/dotcussyPatch.png"
                alt="logo"
                className="mr-2 ml-[-64px]
                sm:w-[210px] sm:min-w-[210px] sm:h-[150px] sm:min-h-[150px]
                md:w-[313px] md:min-w-[313px] md:h-[212px] md:min-h-[212px]
                xl:w-[330px] xl:min-w-[330px] xl:h-[225px] xl:min-h-[225px]"
              />
            </a>
          </Link>
  {/* Render the link group for 'Our Artists' or other pages */}
          <div
            className={`mr-auto ml-28 -mb-12 link-group ${centerFocus === "right" ? "blur" : ""}`}
          >
            <Link legacyBehavior href="/ourArtists">
              <a className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-12xl text-gray-100 text-shadow-right mb-12">
                OUR ARTISTS
              </a>
            </Link>
            <div className="-mt-14 text-shadow-right-small sm:text-xl md:text-2xl xl:text-3xl text-gray-100">
              <Link legacyBehavior href="artist/6FJBqlc0Qn7iLzTRbsDOUU">
                <a className="mx-4">TRENCHCOATGORDY</a>
              </Link>
              <Link legacyBehavior href="artist/3C3bEzj3lIkOH3RYI0NwAZ">
                <a className="mx-6">DEATHCON3</a>
              </Link>
              <Link legacyBehavior href="artist/5K4W6rqBFWDnAN6FQUkS6x">
                <a className="mx-4">BANFFWILLY</a>
              </Link>
            </div>
          </div>

{/* Render the link group for 'About Us' or other pages */}
          <div
            className={`mr-auto -mb-12 link-group ${centerFocus === "left" ? "blur" : ""}`}
          >
            <Link legacyBehavior href="/aboutUs">
              <a className="sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-12xl text-gray-100 text-shadow-left mb-12">
                ABOUT US{" "}
              </a>
            </Link>
            <div className="-mt-14 text-shadow-left-small sm:text-xl md:text-2xl xl:text-3xl text-gray-100">
              <Link legacyBehavior href="/faq">
                <a className="mx-4">FAQ</a>
              </Link>
              <Link legacyBehavior href="/applications">
                <a className="mx-11">APPLICATIONS</a>
              </Link>
              <Link legacyBehavior href="/contact">
                <a className="mx-4">CONTACT</a>
              </Link>
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
