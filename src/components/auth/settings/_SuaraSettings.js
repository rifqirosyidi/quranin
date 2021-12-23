import React from "react";
import Button from "../../general/button/Button";
import { FaVolumeUp } from "react-icons/fa";

const SuaraSettings = () => {
  return (
    <div className="p-6 bg-primary rounded-xl">
      <h2 className="text-2xl font-primary font-medium">Suara</h2>
      <p className="text-secondary font-primary text-sm mt-1">
        Pengaturan suara & reciter
      </p>
      <div className="flex items-center justify-between mt-4 space-x-5">
        <Button variant="outline" className="flex-1">
          Mishari
        </Button>
        <div className="h-11 w-11 flex items-center justify-center rounded-md  text-shadow cursor-pointer">
          <FaVolumeUp className="text-xl text-secondary" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 space-x-5">
        <Button variant="transparent" className="flex-1">
          Other
        </Button>
        <div className="h-11 w-11 flex items-center justify-center rounded-md  text-shadow cursor-pointer">
          <FaVolumeUp className="text-xl text-secondary" />
        </div>
      </div>
      <div className="flex items-center justify-end mt-6">
        <Button>Simpan</Button>
      </div>
    </div>
  );
};

export default SuaraSettings;
