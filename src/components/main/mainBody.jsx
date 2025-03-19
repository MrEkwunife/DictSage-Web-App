import newWindowIcon from "../../assets/images/icon-new-window.svg";

/**
 * Renders the main body of the call to the dictionary API arranging the texts
 * according to the visuals of the the provided designs
 * @param {*} meaning:  array of: 1. definition object (contains different definitions) 2. synonyms array (contains similar text)
 * @param {*} sourceUrls: array of hyperlink that links to sources
 * @returns
 */

const MainBody = ({ meanings, sourceUrls }) => {
  const meaningsArray = meanings.map((meaning) => {
    return (
      <li className="flex flex-col gap-4">
        {/* Part of Speech */}
        <h2 className="flex items-center gap-4">
          <span className="text-xl sm:text-2xl font-bold">
            {meaning.partOfSpeech}
          </span>
          <span className="flex-1 bg-[#E9E9E9] h-0.5"></span>
        </h2>

        {/* Meanings With example usage*/}
        <span className="text-lg sm:text-2xl text-[#757575]">Meaning</span>
        <ul className="list-disc list-inside pl-4 space-y-5 sm:text-xl">
          {meaning.definitions.map((def, index) => (
            <li
              key={index}
              className="marker:text-[#8F19E8] ml-6"
              style={{ textIndent: "-1.2rem" }}
            >
              <span className="text-[#2D2D2D] mb-1">{def.definition}</span>
              {def.example && (
                <span className="block text-[#757575] pl-3">
                  "{def.example}"
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Synonyms */}
        {meaning.synonyms && meaning.synonyms.length > 0 ? (
          <p className="pl-3.5 flex gap-6 text-lg">
            <span className="text-[#757575]">Synonyms</span>
            <span className="text-[#A445ED]">
              {meaning.synonyms.join(", ")}
            </span>
          </p>
        ) : null}
      </li>
    );
  });

  return (
    <article className="flex flex-col gap-8">
      <ul className="flex flex-col gap-10">{meaningsArray}</ul>
      <div className="h-0.5 bg-[#E9E9E9]"></div>
      <div>
        <span className="text-[#757575] text-lg mb-2">Source</span>
        <ul>
          {sourceUrls.map((source) => {
            return (
              <li className="flex flex-col gap-1.5">
                <a
                  href={source}
                  className="flex gap-2.5 items-center text-sm text-[#2D2D2D]"
                >
                  {source}
                  <img src={newWindowIcon} alt="definition source" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default MainBody;
