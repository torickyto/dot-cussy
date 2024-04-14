/**
 * SignInButton component handles user authentication state and displays a sign-in/sign-out button.
 * It uses next-auth/react to manage authentication.
 */

import { useState } from "react"; 
import { signIn, signOut, useSession } from "next-auth/react";
import LoginForm from "./LoginForm"; 

const SignInButton = () => {
  const { data: session } = useSession();
  const [showLogin, setShowLogin] = useState(false);

  const handleAuthClick = () => {
    if (session) {
      signOut();
    } else {
      setShowLogin(true);
    }
  };

  return (
    <>
      <button
        onClick={handleAuthClick}
        className="button-3d carved-text text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      >
        {session ? `sign out (${session.user.name})` : "sign in"}
      </button>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default SignInButton;
