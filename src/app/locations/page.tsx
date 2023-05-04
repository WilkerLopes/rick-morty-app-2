"use client";

import { useEffect } from "react";
import type { Location } from "@/interfaces";
import LocationCard from "@/components/locationCard";
import { useAppStore } from "@/stores/store";

export default function LocationsIndex() {
  const { locations, getLocations } = useAppStore();

  useEffect(() => {
    getLocations();
  }, []);
  return (
    <>
      <h1>Locais ({locations?.info?.count})</h1>
      <div className="grid">
        {locations?.results?.map((location: Location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>

      <div>
        <button> prev </button>
        {locations?.info?.pages}

        <button> next </button>
      </div>
    </>
  );
}
