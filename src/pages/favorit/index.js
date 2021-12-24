import React from "react";
import Layout from "../../components/base/Layout";
import CardFavorite from "../../components/data-display/card/CardFavorite";

const Index = () => {
  return (
    <Layout>
      <div>
        <p className="font-primary text-center font-medium text-secondary mb-10">
          list ayat favorit anda
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
          <CardFavorite />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
