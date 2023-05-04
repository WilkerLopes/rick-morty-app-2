import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createCharacterStore, CharacterStore } from "./character.store";
import { createLocationStore, LocationStore } from "./location.store";
import { createEpisodeStore, EpisodeStore } from "./episode.store";

type AppStore = CharacterStore & LocationStore & EpisodeStore;

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createCharacterStore(...a),
        ...createLocationStore(...a),
        ...createEpisodeStore(...a),
      }),
      { name: "appStore" }
    )
  )
);
