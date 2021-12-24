import { graphql, Link, navigate } from "gatsby";
import React, { useContext, useEffect, useRef, useState } from "react";
import Layout from "../components/base/Layout";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaHeart,
} from "react-icons/fa";
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
        lastReadSlug: chapterSlug,
        lastReadChapter: chapterNameIndonesian,
        lastReadVerse: currentVerse,
      });

      navigate(`/surat/${chapterSlug}/ayat/${nextVerse}`);
    }
  };

  const handlePrev = async () => {
    await setMySurah({
      ...mySurah,
      lastReadSlug: chapterSlug,
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
          <div className="flex items-center justify-between w-80 md:w-96 mx-auto space-x-8">
            <div className="flex-1 flex-col items-center">
              <h2 className="font-primary text-lg font-bold">
                {chapterNameIndonesian}
              </h2>
              <p className="font-secondary text-gray-500 dark:text-gray-400 text-sm">
                ayat {currentVerse} dari {chapterTotalVerse}
              </p>
            </div>
            <div className="flex-1 flex-col items-center">
              <h2 className="font-primary text-lg font-bold ">Surat ke</h2>
              <p className="font-secondary text-gray-500 dark:text-gray-400 text-sm">
                {chapterNumber}
              </p>
            </div>
            <div className="flex-1 flex-col items-center">
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

        <div className="flex flex-col items-center justify-center py-10 md:mx-20">
          <div className="bg-primary  rounded-xl shadow-none">
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

            <h2 className="font-arabic px-8 md:px-14 pb-8 text-2xl leading-loose text-justify text-last-right">
              {verseText}
            </h2>
          </div>
          <div className="font-primary mt-6 text-justify leading-relaxed px-4 md:px-20">
            {verseTranslation}
          </div>
        </div>
        <div className="fixed bottom-10 left-1/2 md:bottom-auto md:left-auto transform -translate-x-1/2  md:right-72 md:top-1/2 h-20 -mt-10">
          <div className="flex md:flex-col space-x-10 md:space-x-0 md:space-y-10 items-center justify-between">
            <Button
              withHoverEffect={false}
              variant="outline"
              onClick={handlePrev}
              disabled={currentVerse === 1}
              className={cls({
                "text-gray-400 cursor-not-allowed": currentVerse === 1,
              })}
            >
              <FaChevronUp className="text-lg hidden md:block" />
              <FaChevronLeft className="text-lg md:hidden" />
            </Button>
            <div className="md:hidden">
              <Button>selesai</Button>
            </div>
            <Button
              withHoverEffect={false}
              variant="outline"
              onClick={handleNext}
            >
              <FaChevronDown className="text-lg hidden md:block" />
              <FaChevronRight className="text-lg md:hidden" />
            </Button>
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
