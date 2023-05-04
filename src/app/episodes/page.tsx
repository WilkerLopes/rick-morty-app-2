"use client";

import { useEffect } from "react";
import type { Episode } from "@/interfaces";
import EpisodeCard from "@/components/episodeCard";
import { useAppStore } from "@/stores/store";

export default function EpisodesIndex() {
  const { episodes, getEpisodes } = useAppStore();

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      <h1>Epsódios ({episodes?.info?.count})</h1>

      <div className="grid">
        {episodes?.results?.map((episode: Episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      <div>
        <button> prev </button>
        {episodes?.info?.pages}

        <button> next </button>
      </div>
    </>
  );
}
