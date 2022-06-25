import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Character from "./card";
import Pagination from "./pagination";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const API_URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (API_URL) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
    goToTop();
  };

  const onNext = () => {
    fetchCharacters(info.next);
    goToTop();
  };

  useEffect(() => {
    fetchCharacters(API_URL);
  }, []);

  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Rick and Morty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container">
        <Character character={characters} />
        <Pagination
          prev={info.prev}
          onPrevious={onPrevious}
          next={info.next}
          onNext={onNext}
        />
      </div>
    </div>
  );
}
