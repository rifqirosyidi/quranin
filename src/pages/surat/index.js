import { graphql } from "gatsby";
import React, { useState } from "react";

import Layout from "../../components/base/Layout";
import ListSurat from "../../components/data-display/list-surat/ListSurat";
import ViewAndSort from "../../components/navigation/view-and-sort-mode/ViewAndSort";

const Index = ({ data }) => {
  const [listSurat, setListSurat] = useState(data.allChapters.edges);

  return (
    <Layout rightSidebar={true}>
      <ViewAndSort listSurat={listSurat} setListSurat={setListSurat} />
      <ListSurat listSurat={data.allChapters.edges} />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query getAllChapters {
    allChapters {
      edges {
        node {
          slug
          number
          name {
            short
            translation {
              id
            }
            transliteration {
              id
            }
          }
          revelation {
            id
          }
          numberOfVerses
        }
      }
    }
  }
`;
