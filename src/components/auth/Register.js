import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import { FaExclamationCircle, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import ThemeToggle from "../base/ThemeToggle";
import Button from "../general/button/Button";
import Input from "../data-entry/input/Input";
import { auth } from "../../services/firebase-config";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async (name, email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).catch(
        (err) => {
          if (err.code === "auth/weak-password") {
            toast.error("Password lemah!");
          }
          if (err.code === "auth/operation-not-allowed") {
            toast.error("Operation not allowed!");
          }
          if (err.code === "auth/email-already-in-use") {
            toast.error("Email sudah terdaftar!");
          }
        }
      );
      await sendEmailVerification(auth.currentUser);
      await updateProfile(auth.currentUser, { displayName: name });

      toast.success(
        "Registrasi berhasil, silahkan cek email anda untuk verifikasi",
        {
          duration: 7000,
        }
      );
      return "success";
    } catch (err) {
      console.log(err);
    }
  };

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
                Registrasi {user?.email || "not registered"}
              </h2>
              <ThemeToggle />
            </div>
            <div className="flex flex-col space-y-3 my-6">
              <div className="flex space-x-4 items-center bg-primary px-4 py-3 hover:shadow-primary transition duration-300 transform hover:scale-105 cursor-pointer rounded-md">
                <FcGoogle className="text-" />
                <p className="font-primary text-sm text-secondary">
                  Register dengan Google
                </p>
              </div>

              <div className="flex space-x-4 items-center bg-primary px-4 py-3 hover:shadow-primary transition duration-300 transform hover:scale-105 cursor-pointer rounded-md">
                <FaFacebookF className="text- text-blue-500" />
                <p className="font-primary text-sm text-secondary">
                  Register dengan Facebook
                </p>
              </div>
              <div className="py-2 text-center">
                <p className="font-primary text-sm text-secondary">atau</p>
              </div>

              {/* Email and Password */}
              <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={async (values, { resetForm }) => {
                  const { name, email, password } = values;
                  await register(name, email, password);
                  resetForm();
                }}
              >
                {() => (
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

                    <Button type="submit" className="w-full mt-6">
                      Register
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <hr />
        </div>

        <p className="absolute top-10 right-10 font-primary">
          Sudah punya akun?{" "}
          <Link to="/app/login" className="text-green-400 underline">
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

export default Register;
