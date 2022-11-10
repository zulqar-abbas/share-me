import React, { useState, useEffect } from "react";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import { client } from "../client";
import { searchQuery, feedQuery } from "../utils/data";
const Search = ({ user, searchTerm }) => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  useEffect(() => {
    setLoading(true);
    if (searchTerm) {
      const query = searchQuery(searchTerm);
      client.fetch(query).then((data) => {
        setLoading(false);
        setPins(data);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setLoading(false);
        setPins(data);
      });
    }
  }, [searchTerm]);

  if (loading) {
    return <Spinner message="Gathering search results!" />;
  }

  if (pins?.length === 0) {
    return <h3>No pin available!</h3>;
  }

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Search;
