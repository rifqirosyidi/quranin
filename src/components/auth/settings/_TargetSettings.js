import React from "react";
import Button from "../../general/button/Button";
import { FaExclamationTriangle } from "react-icons/fa";

const TargetSettings = () => {
  return (
    <div className="p-6 bg-primary rounded-xl">
      <h2 className="text-2xl font-primary font-medium">Target</h2>
      <p className="text-secondary font-primary text-sm mt-1">
        Tentukan target harian anda
      </p>

      <p className="font-primary font-medium mt-4 mb-2">Target harian</p>

      <div className="flex space-x-5">
        <Button variant="transparent">5 ayat</Button>
        <Button variant="transparent">10 ayat</Button>
      </div>
      <div className="flex space-x-5 mt-2">
        <Button variant="transparent">25 ayat</Button>
        <Button variant="outline">50 ayat</Button>
      </div>

      <div className="flex items-center space-x-5 mt-10">
        <FaExclamationTriangle className="text-yellow-500 text-lg" />
        <p className="flex-1 font-primary text-secondary text-sm">
          mensetting target yang tiggi akan sulit untuk mempertahankan kebiasaan
          dalam jangka panjang
        </p>
      </div>
      <div className="flex items-center justify-end mt-6">
        <Button>Simpan</Button>
      </div>
    </div>
  );
};

export default TargetSettings;
