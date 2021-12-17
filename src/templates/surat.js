import { graphql, Link, navigate } from "gatsby";
import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/base/Layout";
import { FaChevronDown, FaChevronUp, FaHeart } from "react-icons/fa";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "../components/media-player/AudioPlayer";
import { SurahContext } from "../context/SurahContext";
import cls from "classnames";
import { ModalTrophy } from "../components/feedback/modal";
import Button from "../components/general/button/Button";

export const query = graphql`
  query SuratQuery($slug: String, $number: Int) {
    currentChapter: chapters(slug: { eq: $slug }) {
      slug
      name {
        transliteration {
          id
        }
        short
      }
      number
      numberOfVerses
      preBismillah {
        text {
          arab
        }
      }
    }

    nextChapter: chapters(number: { eq: $number }) {
      slug
    }
  }
`;

const Surat = ({ data, pageContext }) => {
  const [mySurah, setMySurah] = useContext(SurahContext);
  const [isTrophyModalHidden, setIsTrophyModalHidden] = useState(true);

  const modalTrophyRef = useRef();

  const chapter = data.currentChapter;
  const nextChapter = data.nextChapter;
  const { juz, verseText, verseTranslation, audioSource, currentVerse } =
    pageContext;

  const chapterSlug = chapter.slug;
  const chapterSlugNext = nextChapter?.slug;
  console.log("CURR SLUG", chapterSlug);
  console.log("NEXT SLUG", nextChapter);

  const chapterNumber = chapter.number;
  const chapterNameIndonesian = chapter.name.transliteration.id;
  const chapterTotalVerse = chapter.numberOfVerses;

  const prevVerse = currentVerse - 1;
  const nextVerse = currentVerse + 1;
  const remainingVerse = chapterTotalVerse - currentVerse;

  const preBismillah = chapter.preBismillah?.text.arab;

  const handleNext = async () => {
    if (remainingVerse === 0) {
      handleTrophyModalHidden();
    } else {
      await setMySurah({
        ...mySurah,
        lastReadChapter: chapterNameIndonesian,
        lastReadVerse: currentVerse,
      });

      navigate(`/surat/${chapterSlug}/ayat/${nextVerse}`);
    }
  };

  const handlePrev = async () => {
    await setMySurah({
      ...mySurah,
      lastReadChapter: chapterNameIndonesian,
      lastReadVerse: currentVerse,
    });
    navigate(`/surat/${chapterSlug}/ayat/${prevVerse}`);
  };

  const handleTrophyModalHidden = () => {
    setIsTrophyModalHidden(
      (isTrophyModalHidden) => (isTrophyModalHidden = !isTrophyModalHidden)
    );
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        !isTrophyModalHidden &&
        modalTrophyRef.current &&
        !modalTrophyRef.current.contains(e.target)
      ) {
        setIsTrophyModalHidden(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isTrophyModalHidden]);

  return (
    <Layout rightSidebar>
      <div className="relative">
        <div className="text-center">
          <p className="font-primary mb-2 text-gray-500 dark:text-gray-400">
            Sedang membaca
          </p>
          <div className="flex items-center justify-between w-96 mx-auto space-x-8">
            <div className="flex flex-col items-center">
              <h2 className="font-primary text-lg font-bold ">
                {chapterNameIndonesian}
              </h2>
              <p className="font-secondary text-gray-500 dark:text-gray-400 text-sm">
                ayat {currentVerse} dari {chapterTotalVerse}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-primary text-lg font-bold ">Surat ke</h2>
              <p className="font-secondary text-gray-500 dark:text-gray-400 text-sm">
                {chapterNumber}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-primary text-lg font-bold ">Jus {juz}</h2>
              <p className="font-secondary text-gray-500 dark:text-gray-400 text-sm">
                {remainingVerse} ayat tersisa
              </p>
            </div>
          </div>
          {preBismillah !== null && parseInt(currentVerse) === 1 && (
            <p className="font-arabic mt-14 text-2xl">{preBismillah}</p>
          )}
        </div>

        <div className="flex flex-col items-center justify-center py-10 mx-20">
          <div className="bg-primary  rounded-md shadow-sm">
            <div className="flex justify-between p-4">
              <AudioPlayerProvider>
                <AudioPlayer
                  url={audioSource}
                  chapterName={chapterNameIndonesian}
                  chapterSlug={chapterSlug}
                  nextVerse={nextVerse}
                  totalVerse={chapterTotalVerse}
                />
              </AudioPlayerProvider>
              <FaHeart className="text-lg text-secondary" />
            </div>

            <h2 className="font-arabic px-14 pb-8 text-2xl leading-loose text-justify text-last-right">
              {verseText}
            </h2>
          </div>
          <div className="font-primary mt-6 text-justify leading-relaxed px-20">
            {verseTranslation}
          </div>
        </div>
        <div className="fixed right-72 top-1/2 h-20 -mt-10">
          <div className="flex flex-col space-y-10 items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentVerse === 1}
              className={cls({
                "text-gray-400 cursor-not-allowed": currentVerse === 1,
              })}
            >
              <FaChevronUp className="text-lg" />
            </button>

            <button onClick={handleNext}>
              <FaChevronDown className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      {!isTrophyModalHidden && (
        <ModalTrophy modalRef={modalTrophyRef} title="Selamat!">
          <p className="font-primary font-medium text-sm mt-4">
            anda telah menyelesaikan
            <p className="text-green-400 font-primary text-sm font-bold tracking-wider mb-6">
              Surat {chapterNameIndonesian}
            </p>
            {chapterNumber !== 114 ? (
              <Link to={`/surat/${chapterSlugNext}/ayat/1`}>
                <Button>lanjutkan</Button>
              </Link>
            ) : (
              <Link to="/">
                <Button>beranda</Button>
              </Link>
            )}
          </p>
        </ModalTrophy>
      )}
    </Layout>
  );
};

export default Surat;
