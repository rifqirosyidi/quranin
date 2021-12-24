import React from "react";
import { useFirebaseContext } from "../../../context/FirebaseContext";
import Layout from "../../base/Layout";
import Trophy from "../../../assets/svg/trophy.svg";

const Profile = () => {
  const { getUser } = useFirebaseContext();
  const user = getUser();

  return (
    <Layout>
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <img
            className="rounded-full"
            src="https://picsum.photos/200/200"
            alt="user profile"
          />

          <div className="bg-primary rounded-xl p-6 text-center mt-10">
            <p className="font-primary text-xl  font-medium">
              {user?.displayName}
            </p>
            <p className="font-primary text-secondary mt-2 text-sm">
              Akun dibuat pada: Tue, 26 Oct 2021 02:15:10 GMT (58 days ago)
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-6 place-items-center">
        <div>
          <p className="font-primary text-secondary">ayat dibaca</p>
          <p className="font-primary text-5xl">120</p>
        </div>
        <div>
          <p className="font-primary text-secondary">surat dibaca</p>
          <p className="font-primary text-5xl">23</p>
        </div>
        <div>
          <p className="font-primary text-secondary">waktu membaca</p>
          <p className="font-primary text-5xl">23:00</p>
        </div>
        <div>
          <p className="font-primary text-secondary">khatam</p>
          <p className="font-primary text-5xl">12</p>
        </div>
      </div>
      <p className="font-primary text-xl font-medium text-center mt-20 mb-4">
        Pencapaian
      </p>
      <p className="font-primary font-light text-secondary md:w-1/2 mx-auto text-center mb-10">
        Berikut beberapa achievement & pencapaian yg telah anda peroleh.
        Meskipun semua pencapaian selesai Tetaplah semangat membaca Al Quran!.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-10 place-items-center pb-10">
        <div className="relative">
          <Trophy className="opacity-20 w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            <span className="font-bold">1x</span> khatam
          </p>
        </div>
        <div className="relative ">
          <Trophy className="w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            <span className="font-bold">3</span> quls
          </p>
        </div>
        <div className="relative ">
          <Trophy className="w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            ayat kursi
          </p>
        </div>
        <div className="relative ">
          <Trophy className="w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            Jus 1
          </p>
        </div>
        <div className="relative ">
          <Trophy className="w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            Jus 30
          </p>
        </div>
        <div className="relative ">
          <Trophy className="opacity-20 w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            al isra'
          </p>
        </div>
        <div className="relative ">
          <Trophy className="opacity-20 w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            al kahf
          </p>
        </div>
        <div className="relative ">
          <Trophy className="w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            10 menit
          </p>
        </div>
        <div className="relative ">
          <Trophy className="opacity-20 w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            100 menit
          </p>
        </div>
        <div className="relative ">
          <Trophy className="opacity-20 w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            1000 menit
          </p>
        </div>
        <div className="relative">
          <Trophy className="opacity-20 w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            baca ayat terpanjang
          </p>
        </div>
        <div className="relative ">
          <Trophy className="w-24" />
          <p className="absolute left-0 right-0 -bottom-5 text-sm rounded-md bg-primary p-2 text-center font-primary text-secondary">
            al-mulk
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
