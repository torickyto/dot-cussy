import { useState } from "react";
import SignUpForm from "./SignUpForm.js";

export default function SignUpButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <button
        className="button-3d carved-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        onClick={() => setShowForm(!showForm)}
      >
        sign up
      </button>
      {showForm && <SignUpForm />}
    </>
  );
}
