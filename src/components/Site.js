import { useEffect } from "react";

import stores from "./stores/stores.js";

export default function Site() {
  console.log(stores.length);

  const search = (array, term) => {
    let query = term.split(" ").join("+");
    array.forEach((s) => {
      let searchStr = s.Search === 1 ? "search?q=" : s.Search;
      window.open(`${s.Website}${searchStr}${query}`);
    });
  };

  // function loadSource(url) {
  //   $.ajax({
  //     url: url,
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     type: "POST" /* or type:"GET" or type:"PUT" */,
  //     dataType: "json",
  //     data: {},
  //   }).done(function (html) {
  //     console.log(html); // append the html to the element with the ID 'vid'
  //   });
  // }

  // const axiosSearch = (url, term) => {
  //   axios
  //     .getJSON("https://10000hzrecords.com/search?q=the+beatles")
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search(stores, e.target.search.value);
        }}
      >
        <input type="text" name="search"></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
