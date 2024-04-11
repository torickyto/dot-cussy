import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  const handleAuthClick = () => {
    if (session) {
      signOut();
    } else {
      signIn("spotify");
    }
  };

  return (
    <button onClick={handleAuthClick} className="button-3d carved-text text-xl md:text-2xl lg:text-3xl px-12 py-2 mt-6">
      {session ? `sign out (${session.user.name})` : "sign in with Spotify"}
    </button>
  );
};

export default SignInButton;