import React from "react";
import cls from "classnames";
import { FaSearch } from "react-icons/fa";
import Button from "../../general/button/Button";

const Search = ({ searchRef }) => {
  return (
    <div
      className={cls(
        `fixed inset-0 bg-gray-500 bg-opacity-90 z-50 md:pt-24 pt-10`
      )}
    >
      <div
        ref={searchRef}
        className="p-4 md:w-1/2 w-11/12 mx-auto bg-primary rounded"
      >
        <div className="flex items-center justify-between">
          <FaSearch size={20} className="mx-2" />
          <input
            className="font-primary text-sm p-4 bg-primary w-full focus:outline-none"
            name="query"
            placeholder="Cari..."
            // value={query}
            // autoFocus={true}
            // onChange={(event) => setQuery(event.target.value)}
          />
          <div className="flex items-center space-x-2">
            <Button type="button">search</Button>
          </div>
        </div>
        {/* <div className="mt-4 max-h-96 mx-auto overflow-auto w-full">
              {results.length > 0 ? (
                <>
                  <p className="font-primary text-xs text-left mb-4">
                    <span className="font-bold">{results.length}</span> artikel
                    ditemukan
                  </p>
                  <div className="flex flex-col w-full space-y-2">
                    {results.map(result => (
                      <Link
                        to={result.path}
                        className="py-4 px-4 font-primary text-sm bg-secondary rounded transition duration-1000 hover:bg-tertiary"
                        key={result.strapiId}
                      >
                        {result.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {searchKeyword !== "" ? (
                    <p className="font-primary text-sm text-left">
                      Hasil tidak ditemukan :(
                    </p>
                  ) : (
                    <p className="font-primary text-sm text-left text-tertiary">
                      Apa yg ingin anda cari?...
                    </p>
                  )}
                </>
              )}
            </div> */}
      </div>
    </div>
  );
};

export default Search;
