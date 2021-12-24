import React from "react";
import Layout from "../../base/Layout";
import FeedbackSettings from "./_FeedbackSettings";
import ProfileSettings from "./_ProfileSettings";
import SuaraSettings from "./_SuaraSettings";
import TampilanSettings from "./_TampilanSettings";
import TargetSettings from "./_TargetSettings";

const Settings = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col space-y-6">
          <ProfileSettings />
          <SuaraSettings />
        </div>
        <div className="flex flex-col space-y-5">
          <TampilanSettings />
        </div>
        <div className="flex flex-col space-y-5">
          <TargetSettings />
          <FeedbackSettings />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
