import { StateCreator } from "zustand";
import { Episode, Info } from "@/interfaces";

export interface EpisodeStore {
  episodes: Info<Episode>;
  favoriteEpisodes: Episode[];
  saveEpisode: (product: Episode) => void;
  removeEpisode: (productId: number) => void;
  getEpisodes: () => void;
}

export const createEpisodeStore: StateCreator<EpisodeStore> = (set, get) => ({
  episodes: {},
  favoriteEpisodes: [],
  saveEpisode: (episode: Episode) => {
    const favoriteEpisodes = get().favoriteEpisodes;
    favoriteEpisodes.push(episode);
    set({ favoriteEpisodes });
  },
  removeEpisode: (episodeId: number) => {
    set({ favoriteEpisodes: get().favoriteEpisodes.filter((episode) => episode.id !== episodeId) });
  },
  getEpisodes: async () => {
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    set({ episodes: await res.json() });
  },
});
