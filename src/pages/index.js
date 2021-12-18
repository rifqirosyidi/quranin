import React from "react";
import { Circle, Line } from "rc-progress";
import Layout from "../components/base/Layout";
import { FaCheck, FaCheckCircle, FaUserCircle } from "react-icons/fa";
import Button from "../components/general/button/Button";

const Index = () => {
  return (
    <Layout>
      <div className="h-full">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 rounded-md bg-primary shadow-sm">
            <div className="flex items-end justify-between p-8">
              <div>
                <p className="text-primary font-primary font-bold mb-10">
                  Khatamul Qur'an
                </p>

                <div className="text-3xl font-bold">
                  <span className="bg-clip-text text-transparent bg-emerald-400">
                    Surah: Al Baqarah
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-secondary text-secondary text-md">
                    Sapi Betina
                  </p>
                  <p className="font-secondary text-secondary text-md">
                    112 dari 282
                  </p>
                </div>
              </div>
              <div>
                <p className="font-primary text-primary tracking-wider text-md mb-4 text-center">
                  20%
                </p>
                <Button>lanjutkan</Button>
              </div>

              <p className="font-arabic text-primary text-8xl text-shadow">
                البقرة
              </p>
            </div>
            <Line
              percent="20"
              strokeWidth=".5"
              strokeLinecap="round"
              trailWidth=".5"
              strokeColor="#34d399"
              trailColor="#34d39933"
            />
          </div>
          <div className="bg-primary rounded-md p-8 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <p className="font-primary text-sm">
                Salam,{" "}
                <span className="block font-bold text-2xl text-emerald-400">
                  Rifqi
                </span>
              </p>
              <FaUserCircle className="text-5xl text-secondary" />
            </div>
            <div>
              <div className="flex justify-between items-center  mb-4">
                <div className="flex items-center">
                  <p className="font-primary text-sm mr-4">target harian</p>
                  <FaCheck className="text-sm text-green-400" />
                </div>
                <p className="font-primary text-sm font-bold text-emerald-400">
                  +21
                </p>
              </div>
              <Line
                percent="72"
                strokeWidth="2"
                strokeLinecap="round"
                trailWidth="2"
                strokeColor="#34d399"
                trailColor="#34d39933"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-6">
          <div className="col-span-2 bg-primary rounded-md p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-primary font-bold">Minggu ini</p>
              <p className="font-primary text-secondary text-sm">
                25 ayat per hari
              </p>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2 ">
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-3xl" />
                <p className="font-primary font-medium">Sab</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <FaCheckCircle className="text-3xl text-emerald-400" />
                <p className="font-primary font-medium text-emerald-400">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-3xl" />
                <p className="font-primary font-medium">Sab</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <FaCheckCircle className="text-3xl text-emerald-400" />
                <p className="text-emerald-400 font-primary font-medium">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-3xl" />
                <p className="font-primary font-medium">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-3xl" />
                <p className="font-primary font-medium">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-3xl" />
                <p className="font-primary font-medium">Sab</p>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-md p-6 shadow-sm">
            <div className="flex space-x-10">
              <div className="flex flex-col items-center justify-between">
                <p className="font-primary font-bold">Progress</p>
                <p className="font-primary text-secondary text-sm">
                  khatamul quran
                </p>
              </div>
              <div className="relative w-full">
                <Circle
                  className="rounded-full shadow-md"
                  percent="3"
                  strokeWidth="3"
                  strokeLinecap="round"
                  trailWidth="3"
                  strokeColor="#34d399"
                  trailColor="#34d39933"
                />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="font-primary text-sm">3.123%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row  gap-6">
            <div className="p-6 bg-primary rounded-md shadow-sm">
              <p className="font-primary font-bold">Estimasi khatam</p>
              <div className="flex items-center justify-between">
                <p className="font-primary text-secondary text-sm mt-2">
                  224 hari
                </p>
                <p className="font-primary text-secondary text-sm mt-2">
                  20 Nov 2022
                </p>
              </div>
            </div>
            <div className="p-6 bg-primary rounded-md shadow-sm flex justify-between items-center">
              <p className="font-primary font-bold">Ayat dibaca hari ini</p>
              <p className="font-primary font-bold text-green-400"> 34</p>
            </div>
          </div>
          <div className="col-span-2 bg-primary rounded-md p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-primary font-bold">Juga membaca surat</p>
              <p className="font-primary text-secondary">Ali Imran - 42</p>
              <Button>lanjutkan</Button>
            </div>
          </div>
          <div className="col-span-2 bg-primary rounded-md p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-primary font-bold">Terkakhir didengar</p>
              <p className="font-primary text-secondary">Ali Imran - 42</p>
              <Button>lanjutkan</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
