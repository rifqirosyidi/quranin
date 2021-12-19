import React, { useContext } from "react";
import { navigate } from "gatsby";
import {
  FaCircleNotch,
  FaPauseCircle,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { useAudioPlayer } from "react-use-audio-player";
import { ListeningModeContext } from "../../context/ListeningModeContext";
import { SurahContext } from "../../context/SurahContext";

const AudioPlayer = ({
  url,
  chapterName,
  chapterSlug,
  nextVerse,
  totalVerse,
  toggleModal,
}) => {
  const [mySurah, setMySurah] = useContext(SurahContext);
  const [isListening] = useContext(ListeningModeContext);

  if (nextVerse > totalVerse) {
    toggleModal();
  }
  const nextLink = `/surat/${chapterSlug}/ayat/${nextVerse}`;

  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: url,
    format: ["mp3"],
    autoplay: isListening ? true : false,
    html5: true,
    onend: () => {
      if (isListening) {
        setMySurah({
          ...mySurah,
          lastListenChapter: chapterName,
          lastListenVerse: nextVerse - 1,
        });
        navigate(nextLink);
      } else {
        setMySurah({
          ...mySurah,
          lastListenChapter: chapterName,
          lastListenVerse: nextVerse - 1,
        });
      }
    },
  });

  const playAudio = () => {
    togglePlayPause();
  };

  if (!ready && !loading) {
    return (
      <div>
        <FaVolumeMute />
        <p className="font-primary text-xs">no audio to play</p>
      </div>
    );
  }
  if (loading) return <FaCircleNotch className="text-lg animate-spin" />;

  return (
    <button onClick={playAudio}>
      {playing ? (
        <FaPauseCircle className="text-xl text-emerald-300" />
      ) : (
        <FaVolumeUp className="text-xl text-secondary" />
      )}
    </button>
  );
};

export default AudioPlayer;
