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
    <button onClick={handleAuthClick} className="button-3d carved-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
      {session ? `sign out (${session.user.name})` : "sign in"}
    </button>
  );
};

export default SignInButton;