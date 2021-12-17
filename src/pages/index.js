import React from "react";
import { Circle, Line } from "rc-progress";
import Layout from "../components/base/Layout";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 rounded-md bg-primary">
            <div className="flex items-center justify-between p-8">
              <div>
                <p className="text-primary font-primary font-bold mb-10">
                  Khatamul Qur'an
                </p>

                <div className="text-3xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-purple-500">
                    Surah: Al Baqarah
                  </span>
                </div>
                <p className="font-primary text-secondary text-md mt-2">
                  Sapi Betina
                </p>
              </div>
              <div>
                <p>112/282</p>
              </div>

              <p className="font-arabic text-primary text-8xl text-shadow">
                البقرة
              </p>
            </div>
            <Line
              percent="3"
              strokeWidth=".5"
              strokeLinecap="round"
              trailWidth=".5"
              strokeColor="#555"
              trailColor="#88888822"
            />
          </div>
          <div className="bg-primary rounded-md p-8">
            <p className="font-primary">Salam, Rifqi</p>
            <p className="font-primary font-bold">target harian</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-4 gap-6">
          <div className="col-span-2 bg-primary rounded-md p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-primary font-bold">minggu ini</p>
              <p className="font-primary text-secondary text-sm">
                25 ayat per hari
              </p>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2 ">
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-4xl " />
                <p className="font-primary">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-4xl " />
                <p className="font-primary">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-4xl " />
                <p className="font-primary">Sab</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <FaCheckCircle className="text-green-400 text-4xl " />
                <p className="text-green-400 font-primary">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-4xl " />
                <p className="font-primary">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-4xl " />
                <p className="font-primary">Sab</p>
              </div>
              <div className="flex flex-col items-center opacity-20 justify-center space-y-4">
                <FaCheckCircle className="text-4xl " />
                <p className="font-primary">Sab</p>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-md p-6 shadow-sm ">
            <div className="flex space-x-6">
              <div className="flex flex-col items-center justify-between">
                <p className="font-primary font-bold">minggu ini</p>
                <p className="font-primary text-secondary text-sm">
                  25 ayat per hari
                </p>
              </div>
              <div className="relative">
                <Circle
                  percent="3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  trailWidth="2"
                  strokeColor="#555"
                  trailColor="#88888822"
                />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="font-primary text-sm">3.123%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
