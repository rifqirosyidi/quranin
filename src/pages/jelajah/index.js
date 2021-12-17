import React from "react";
import Layout from "../../components/base/Layout";
import CardJelajah from "../../components/data-display/card/CardJelajah";

const index = () => {
  return (
    <Layout rightSidebar>
      <div className="grid grid-cols-2 gap-6">
        <CardJelajah />
        <CardJelajah />
        <CardJelajah />
        <CardJelajah />
        <CardJelajah />
        <CardJelajah />
      </div>
    </Layout>
  );
};

export default index;
