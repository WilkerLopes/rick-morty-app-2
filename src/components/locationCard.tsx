"use client";

import type { Location } from "@/interfaces";
import { useAppStore } from "@/stores/store";
import HeartFilled from "./icons/HeartFilled";
import HearttOutline from "./icons/HearttOutline";

interface PropsLocationCard {
  location: Location;
}

export default function LocationCard({ location }: PropsLocationCard) {
  const { favoriteLocations, saveLocation, removeLocation } = useAppStore();

  const isFavorite = favoriteLocations.find((locale) => locale.id == location.id);
  function favorite(location: Location) {
    if (favoriteLocations.find((locale) => locale.id == location.id)) {
      removeLocation(location.id);
      return;
    }
    saveLocation(location);
  }

  return (
    <>
      <li>
        <div>
          <button type="button" onClick={() => favorite(location)}>
            {isFavorite ? <HeartFilled /> : <HearttOutline />}
          </button>
          {location.name}
          {location.created}
          {location.type}
          {location.dimension}
        </div>
      </li>
    </>
  );
}

//
