import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setMessage(result.error);
    } else if (onClose) {
      onClose();
    }
  };

  const handleSpotifyLogin = () => {
    signIn("spotify");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-green-500 p-8 rounded-2xl w-full max-w-md">
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-4xl text-white text-center mb-4">Log In</h2>
          <div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg"
            />
          </div>
          <div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg"
              style={{ color: 'black' }}
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleSpotifyLogin}
              className="bg-green-700 text-white rounded-full px-6 py-3"
            >
              Sign in with Spotify
            </button>
            <button
              type="submit"
              className="bg-green-700 text-white rounded-full px-6 py-3"
            >
              Log In
            </button>
          </div>
          {message && (
            <p className="text-xl text-red-500 text-center mt-4">{message}</p>
          )}
        </form>
        <button onClick={onClose} className="text-xl underline text-white mt-4">
          Close
        </button>
      </div>
    </div>
  );
}
