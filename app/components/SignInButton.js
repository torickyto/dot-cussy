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
      <button onClick={handleAuthClick} className="button-3d carved-text text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {session ? `sign out (${session.user.name})` : "sign in"}
      </button>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default SignInButton;