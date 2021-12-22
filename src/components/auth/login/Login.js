import { Link } from "gatsby";
import React from "react";
import {
  FaCircleNotch,
  FaExclamationCircle,
  FaFacebookF,
} from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ThemeToggle from "../../base/ThemeToggle";
import Button from "../../general/button/Button";
import Input from "../../data-entry/input/Input";
import { useFirebaseContext } from "../../../context/FirebaseContext";

const Login = () => {
  const { signIn, signInWithGoogle } = useFirebaseContext();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email yang anda masukkan tidak valid")
      .required("Email belum di isi"),
    password: Yup.string().required("Password belum di isi"),
  });

  return (
    <div className="flex relative items-center justify-center min-h-screen w-full text-primary bg-secondary">
      <div className="flex items-center justify-center p-10 text-left  rounded-xl">
        <div className="w-80">
          <div className="flex items-center justify-between">
            <h2 className="font-primary text-2xl font-bold text-primary">
              Masuk
            </h2>
            <ThemeToggle />
          </div>
          <div className="flex flex-col space-y-3 my-6">
            <button
              onClick={signInWithGoogle}
              className="flex space-x-4 items-center bg-primary px-4 py-3 hover:shadow-primary transition duration-1000 transform hover:scale-105 cursor-pointer rounded-xl"
            >
              <FcGoogle className="text-" />
              <p className="font-primary text-sm text-secondary">
                Login dengan Google
              </p>
            </button>

            <button className="flex space-x-4 items-center bg-primary px-4 py-3 hover:shadow-primary transition duration-1000 transform hover:scale-105 cursor-pointer rounded-xl">
              <FaFacebookF className="text- text-blue-500" />
              <p className="font-primary text-sm text-secondary">
                Login dengan Facebook - still in dev.
              </p>
            </button>
            <div className="py-2 text-center">
              <p className="font-primary text-sm text-secondary">atau</p>
            </div>

            {/* Email and Password */}
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                const { email, password } = values;
                setSubmitting(true);
                await signIn(email, password).catch((err) => {
                  setSubmitting(false);
                });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="space-y-4">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email"
                      component={Input}
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => (
                        <p className="flex items-center text-red-400 font-primary text-sm">
                          <FaExclamationCircle className="mr-2 text-red-400" />{" "}
                          {msg}
                        </p>
                      )}
                    />
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      component={Input}
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => (
                        <p className="flex items-center text-red-400 font-primary text-sm">
                          <FaExclamationCircle className="mr-2 text-red-400" />{" "}
                          {msg}
                        </p>
                      )}
                    />
                  </div>

                  <div className="flex items-center justify-end mt-2">
                    <Link
                      to="/forgot-password"
                      className="font-primary text-secondary text-xs"
                    >
                      lupa password?
                    </Link>
                  </div>
                  <Button type="submit" className="w-full mt-4">
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2 justify-center cursor-not-allowed">
                        <FaCircleNotch className="animate-spin" />
                        <p>Processing...</p>
                      </div>
                    ) : (
                      <p>Masuk</p>
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <hr />
      </div>

      <p className="absolute bottom-10 right-10 font-primary">
        Tidak punya akun?{" "}
        <Link to="/authenticate/register" className="text-green-400 underline">
          Daftar
        </Link>
      </p>

      <div className="font-primary">
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default Login;
