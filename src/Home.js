import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMONS } from "./GraphQL/Queries";
import Card from "./Components/Card";

function Home() {
  const { data, loading } = useQuery(LOAD_POKEMONS, {
    variables: { first: 151 },
  });
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons);
    }
  }, [data]);
  return (
    <>
      <h1 className="heading text-center">pokemon characters </h1>
      {loading && <h5 className="text-center">LOADING ...</h5>}
      <div>{pokemons.length && <Card data={pokemons} />}</div>
    </>
  );
}

export default Home;
