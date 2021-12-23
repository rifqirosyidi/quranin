import React from "react";
import Button from "../../general/button/Button";
import Input from "../../data-entry/input";

const ProfileSettings = () => {
  return (
    <div className="p-6 bg-primary rounded-xl">
      <h2 className="text-2xl font-primary font-medium">Profile</h2>
      <p className="text-secondary font-primary text-sm mt-1">
        Pengaturan profil anda.
      </p>
      <Input label="Name" bg="secondary" value="Your Name" />
      <Input label="Email" bg="secondary" value="your@nauk.com" />
      <div className="flex items-center justify-between mt-6">
        <Button variant="outline">Ganti Password</Button>
        <Button>Simpan</Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
