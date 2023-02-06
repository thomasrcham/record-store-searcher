import $ from "jquery";

import stores from "./stores/stores.js";

export default function Site() {
  console.log(stores.length);

  const search = (array, term) => {
    let query = term.split(" ").join("+");
    loadSource(`https://10000hzrecords.com/`);
    // array.forEach((s) => {
    //   let searchStr = s.Search === 1 ? "search?q=" : s.Search;
    //   window.open(`${s.Website}${searchStr}${query}`);
    // });
  };

  function loadSource(url) {
    $.ajax({
      url: url,
    }).done(function (html) {
      console.log(html); // append the html to the element with the ID 'vid'
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search(stores, e.target.search.value);
      }}
    >
      <input type="text" name="search"></input>
      <input type="submit" value="Submit" />
    </form>
  );
}
