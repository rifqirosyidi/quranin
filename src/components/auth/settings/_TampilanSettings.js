import React from "react";
import Button from "../../general/button/Button";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules

const TampilanSettings = () => {
  return (
    <div className="flex-1 self-auto p-6 bg-primary rounded-xl">
      <h2 className="text-2xl font-primary font-medium">Tampilan</h2>
      <p className="text-secondary font-primary text-sm mt-1">
        Pengaturan tampilan & user interface.
      </p>
      <div className="text-center mb-10">
        <p className="font-arabic mt-14 text-2xl text-cemter mx-auto">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </div>
      <p className="font-primary font-medium mt-4 mb-2">Font</p>
      <select
        className="font-primary w-full py-3 px-4 bg-secondary rounded-xl"
        name="font"
        id=""
      >
        <option value="" key="">
          Select
        </option>
        <option value="" key="">
          Madina
        </option>
        <option value="" key="">
          Text Indo
        </option>
      </select>
      <p className="font-primary font-medium mt-4 mb-2">Ukuran Font</p>
      <select
        className="font-primary w-full py-3 px-4 bg-secondary rounded-xl"
        name="font"
        id=""
      >
        <option value="" key="">
          12 px
        </option>
        <option value="" key="">
          12 px
        </option>
        <option value="" key="">
          14 px
        </option>
        <option value="" key="">
          21 px
        </option>
        <option value="" key="">
          32 px
        </option>
      </select>
      <div className="flex items-end justify-between my-4">
        <div>
          <p className="font-primary font-medium mt-4 mb-2">Transliterasi</p>
          <p className="font-primary text-secondary text-sm mt-1">
            tampilkan transliterasi qur'an
          </p>
        </div>
        <Toggle
          defaultChecked={true}
          icons={false}
          className="toggle-style"
          onChange={console.log("hello")}
        />
      </div>
      <div className="flex items-end justify-between my-4">
        <div>
          <p className="font-primary font-medium mt-4 mb-2">Terjemah</p>
          <p className="font-primary text-secondary text-sm mt-1">
            tampilkan terjemahan qur'an
          </p>
        </div>
        <Toggle
          defaultChecked={true}
          icons={false}
          className="toggle-style"
          onChange={console.log("hello")}
        />
      </div>{" "}
      <div className="flex items-center justify-end mt-6">
        <Button>Simpan</Button>
      </div>
    </div>
  );
};

export default TampilanSettings;
