import { navigate } from "gatsby";
import React, { useEffect } from "react";
import { useFirebaseContext } from "../../../context/FirebaseContext";
import Layout from "../../base/Layout";

const Profile = () => {
  const { getUser } = useFirebaseContext();
  const user = getUser();

  return (
    <Layout>
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <img className="rounded-full" src="https://picsum.photos/200/200" />

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
      <p className="font-primary text-xl font-medium text-center mt-20">
        Pencapaian
      </p>
    </Layout>
  );
};

export default Profile;
