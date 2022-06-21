import React, { useEffect, useState } from "react";
import style from "./Search.module.css";

const Search = (props) => {
  const [searchTxt, setSearchtxt] = useState("");

  const handelchange = (e) => {
    setSearchtxt(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchTxt);
  }, [searchTxt]);

  return (
    <div className={style.searchbox}>
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
