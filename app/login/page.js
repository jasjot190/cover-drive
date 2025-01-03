"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUserAuth } from "@/_utils/auth-context";
import { useRouter } from "next/navigation";
// import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const { user, gitHubSignIn, googleSignIn, emailSignIn, firebaseSignOut } =
    useUserAuth();
  const [verify, setVerify] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function onChange(value) {
    if (value) {
      setVerify(true);
    }
  }

  const signOut = async () => await firebaseSignOut();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (verify) {
      EmailSignIn();
    }
    console.log(user);
  };
  const LogIn = async () => await gitHubSignIn();
  const googleLogIn = async () => await googleSignIn();
  // const EmailSignIn = async (e) => await emailSignIn(email, password);
  const EmailSignIn = async (e) => await emailSignIn(email, password);
  if (!user) {
    return (
      <main>
        <section className="flex justify-center items-center pt-5 sm:10 lg:pt-20">
          <div className="w-full max-w-sm bg-gray-100 p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Login
            </h2>
            <div className="flex flex-col gap-5">
              <Button
                onClick={googleLogIn}
                className="rounded-lg py-5 pr-10 dark:text-gray-200 dark:bg-gray-800"
              >
                {" "}
                <img src="/googlelogo.png" alt="" className="w-6 mx-3" />
                Login with Google
              </Button>
            </div>
            <h2 className="text-gray-400 text-center m-5">
              &ndash; or &ndash;
            </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <ReCAPTCHA
                sitekey="6LdH9Y4qAAAAACE9Wm20NV1hgoWZA79vwc4qKun5"
                onChange={onChange}
              /> */}

              <div className="flex">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 dark:text-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mt-5"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <div>
        User Exists
        <button
          onClick={() => signOut()}
          className="bg-blue-500 hover:bg-blue-700 dark:text-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mt-5"
        >
          SignOut
        </button>
      </div>
    );
  }
};

export default Login;
