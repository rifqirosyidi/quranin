const axios = require("axios");
const { resolve4 } = require("dns");
const path = require("path");
const slugify = require("slugify");

const CHAPTER_NODE_TYPE = "Chapters";

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        chapters: allChapters {
          edges {
            node {
              slug
              number
              verses {
                meta {
                  juz
                }
                text {
                  arab
                }
                translation {
                  id
                }
                number {
                  inSurah
                }
                audio {
                  primary
                }
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.");
    return;
  }

  const chapters = result.data.chapters.edges;
  const SuratTemplate = path.resolve(`src/templates/surat.js`);

  chapters.forEach((chapter) => {
    chapter.node.verses.forEach((verse) => {
      createPage({
        path: `/surat/${chapter.node.slug}/ayat/${verse.number.inSurah}`,
        component: SuratTemplate,
        context: {
          slug: chapter.node.slug,
          number: chapter.node.number + 1,
          currentVerse: verse.number.inSurah,
          juz: verse.meta.juz,
          verseText: verse.text.arab,
          verseTranslation: verse.translation.id,
          audioSource: verse.audio.primary,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;
  const fetchAllChapters = () =>
    axios.get(`https://api.quran.sutanlab.id/surah`);
  const { data: chapters } = await fetchAllChapters();

  for (const chapter of chapters.data) {
    const fetchVerse = () =>
      axios.get(`https://api.quran.sutanlab.id/surah/${chapter.number}`);
    const { data: verses } = await fetchVerse();

    createNode({
      ...chapter,
      ...verses.data,
      id: createNodeId(`${CHAPTER_NODE_TYPE}-${chapter.number}`),
      slug: slugify(chapter.name.transliteration.id, {
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: true,
      }),
      parent: null,
      children: [],
      internal: {
        type: CHAPTER_NODE_TYPE,
        content: JSON.stringify(chapter),
        contentDigest: createContentDigest(chapter),
      },
    });
  }
  return;
};

exports;
