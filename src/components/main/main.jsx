import MainHeader from "./mainHeader";
import MainBody from "./mainBody";

import { useState, useEffect } from "react";

const Main = ({ searchQuery }) => {
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.title === "No Definitions Found") {
          setWordData(null);
        } else {
          setWordData(data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchQuery]);

  if (!wordData) {
    return (
      <>{searchQuery ? <NoResultFoundMsg /> : <p>Type a word to search</p>}</>
    );
  }

  return (
    <>
      <MainHeader word={wordData[0]?.word} phonetics={wordData[0]?.phonetics} />
      <MainBody
        meanings={wordData[0]?.meanings}
        sourceUrls={wordData[0]?.sourceUrls}
      />
    </>
  );
};

const NoResultFoundMsg = () => {
  return (
    <div className="text-center sm:px-18 mt-6 flex flex-col gap-3">
      <span className="text-5xl">😕</span>
      <h3 className="text-xl font-bold">No Definition Found</h3>
      <p className="text-sm sm:text-lg">
        Sorry pal, we couldn't find definition for the word you were looking
        for. You can try the search again at a later time or head to the web
        instead
      </p>
    </div>
  );
};

export default Main;
