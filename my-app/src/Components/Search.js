import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchTxt, setSearchtxt] = useState("");

  const handelchange = (e) => {
    setSearchtxt(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchTxt);
  }, [searchTxt]);

  return (
    <div className="searcbox">
      <form>
        <input
          type="text"
          placeholder="Search coin"
          value={searchTxt}
          onChange={handelchange}
        />
      </form>
    </div>
  );
};

export default Search;
