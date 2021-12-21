import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  FaCircleNotch,
  FaExclamationCircle,
  FaFacebookF,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Toaster } from "react-hot-toast";
import ThemeToggle from "../../components/base/ThemeToggle";
import Button from "../../components/general/button/Button";
import Input from "../../components/data-entry/input/Input";
import { useFirebaseContext } from "../../context/FirebaseContext";

const Index = () => {
  const { signUp, signInWithGoogle } = useFirebaseContext();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Nama belum di isi"),
    email: Yup.string()
      .email("Email yang anda masukkan tidak valid")
      .required("Email belum di isi"),
    password: Yup.string().required("Password belum di isi").min(6),
    passwordConfirmation: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password yang anda masukkan tidak sama"
      )
      .required("Konfirmasi password belum di isi"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <>
      <div className="flex relative items-center justify-center min-h-screen w-full text-primary bg-secondary">
        <div className="flex items-center justify-center p-10 text-left  rounded-md">
          <div className="w-80">
            <div className="flex items-center justify-between">
              <h2 className="font-primary text-2xl font-bold text-primary">
                Registrasi
              </h2>
              <ThemeToggle />
            </div>
            <div className="flex flex-col space-y-3 my-6">
              <button
                onClick={signInWithGoogle}
                className="flex space-x-4 items-center bg-primary px-4 py-3 hover:shadow-primary transition duration-1000 transform hover:scale-105 cursor-pointer rounded-md"
              >
                <FcGoogle className="text-" />
                <p className="font-primary text-sm text-secondary">
                  Register dengan Google
                </p>
              </button>

              <button className="flex space-x-4 items-center bg-primary px-4 py-3 hover:shadow-primary transition duration-1000 transform hover:scale-105 cursor-pointer rounded-md">
                <FaFacebookF className="text- text-blue-500" />
                <p className="font-primary text-sm text-secondary">
                  Register dengan Facebook - still in dev.
                </p>
              </button>
              <div className="py-2 text-center">
                <p className="font-primary text-sm text-secondary">atau</p>
              </div>

              {/* Email and Password */}
              <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={(values, { resetForm }) => {
                  signUp(values.name, values.email, values.password);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="space-y-4">
                      <Field
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        component={Input}
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <p className="flex items-center text-red-400 font-primary text-sm">
                            <FaExclamationCircle className="mr-2 text-red-400" />{" "}
                            {msg}
                          </p>
                        )}
                      />
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

                      <Field
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Konfirmasi Password"
                        component={Input}
                      />
                      <ErrorMessage
                        name="passwordConfirmation"
                        render={(msg) => (
                          <p className="flex items-center text-red-400 font-primary text-sm">
                            <FaExclamationCircle className="mr-2 text-red-400" />{" "}
                            {msg}
                          </p>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={true}
                      className="w-full mt-6"
                    >
                      {isSubmitting ? (
                        <p className="flex items-center space-x-2 justify-center cursor-not-allowed">
                          <FaCircleNotch className="animate-spin" />
                          <p>Processing...</p>
                        </p>
                      ) : (
                        <p>Register</p>
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
          Sudah punya akun?{" "}
          <Link to="/login" className="text-green-400 underline">
            Login
          </Link>
        </p>
      </div>

      <div className="font-primary">
        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default Index;
