import { useState } from 'react'; // Make sure to import useState
import { signIn, signOut, useSession } from "next-auth/react";
import LoginForm from './LoginForm'; // Ensure LoginForm is correctly imported

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
      <button onClick={handleAuthClick} className="button-3d carved-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        {session ? `sign out (${session.user.name})` : "sign in"}
      </button>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default SignInButton;