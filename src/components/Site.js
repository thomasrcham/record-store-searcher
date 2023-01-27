import { useState, useEffect } from "react";

export default function Site() {
  const [stores, setStores] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/sites/`)
      .then((r) => r.json())
      .then((d) => {
        setStores(d);
      });
  }, []);

  let searchable = stores ? stores.filter((s) => s.Search !== 1) : null;

  const search = (array, term) => {
    let query = term.split(" ").join("+");
    array.map((s) => window.open(`${s.Website}search?q=${query}`));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search(searchable, e.target.search.value);
      }}
    >
      <input type="text" name="search"></input>
      <input type="submit" value="Submit" />
    </form>
  );
}
