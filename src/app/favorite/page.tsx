"use client";

import { Character, Location, Episode } from "@/interfaces";
import { useAppStore } from "../../stores/store";
import CharacterCard from "@/components/characterCard";
import { useEffect, useState } from "react";
import LocationCard from "@/components/locationCard";
import EpisodeCard from "@/components/episodeCard";

export default function App() {
  const { favoriteCharacters, favoriteEpisodes, favoriteLocations } = useAppStore();

  if (!favoriteCharacters) return <p>No profile data</p>;

  return (
    <>
      <div>Personagens Favoritos </div>
      <ul>
        {favoriteCharacters?.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>

      <div>Locais Favoritos </div>
      <ul>
        {favoriteLocations?.map((location: Location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </ul>

      <div>Epsodios Favoritos </div>
      <ul>
        {favoriteEpisodes?.map((episode: Episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </ul>
    </>
  );
}
