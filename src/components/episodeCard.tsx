"use client";

import type { Episode } from "@/interfaces";
import { useAppStore } from "@/stores/store";
import HeartFilled from "./icons/HeartFilled";
import HearttOutline from "./icons/HearttOutline";

interface PropsEpisodeCard {
  episode: Episode;
}

export default function EpisodeCard({ episode }: PropsEpisodeCard) {
  const { favoriteEpisodes, saveEpisode, removeEpisode } = useAppStore();

  const isFavorite = favoriteEpisodes.find((ep) => ep.id == episode.id);
  function favorite(episode: Episode) {
    if (favoriteEpisodes.find((ep) => ep.id == episode.id)) {
      removeEpisode(episode.id);
      return;
    }
    saveEpisode(episode);
  }

  return (
    <>
      <li>
        <div>
          <button type="button" onClick={() => favorite(episode)}>
            {isFavorite ? <HeartFilled /> : <HearttOutline />}
          </button>
          {episode.name}
          {episode.episode}
          {episode.air_date}
        </div>
      </li>
    </>
  );
}

//
