import React from "react";
import Layout from "../../base/Layout";
import ProfileSettings from "./_ProfileSettings";
import TampilanSettings from "./_TampilanSettings";

const Settings = () => {
  return (
    <Layout>
      <div className="flex space-x-6 items-start ">
        <ProfileSettings />
        <TampilanSettings />
        <ProfileSettings />
        <TampilanSettings />
      </div>
    </Layout>
  );
};

export default Settings;
