import { StateCreator } from "zustand";
import { Location, Info } from "@/interfaces";

export interface LocationStore {
  locations: Info<Location>;
  favoriteLocations: Location[];
  saveLocation: (product: Location) => void;
  removeLocation: (productId: number) => void;
  getLocations: () => void;
}

export const createLocationStore: StateCreator<LocationStore> = (set, get) => ({
  locations: {},
  favoriteLocations: [],
  saveLocation: (location: Location) => {
    const favoriteLocations = get().favoriteLocations;
    favoriteLocations.push(location);
    set({ favoriteLocations });
  },
  removeLocation: (locationId: number) => {
    set({ favoriteLocations: get().favoriteLocations.filter((location) => location.id !== locationId) });
  },
  getLocations: async () => {
    const res = await fetch("https://rickandmortyapi.com/api/location");
    set({ locations: await res.json() });
  },
});
