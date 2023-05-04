import { NodeBuilderFlags } from "typescript";

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Endpoints {
  character: string;
  location: string;
  episode: string;
}

export interface CharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  /**
   * 'Dead' | 'Alive' | 'unknown'
   */
  status?: string;
  /**
   * 'Female' | 'Male' | 'Genderless' | 'unknown'
   */
  gender?: string;
  page?: number;
}

export interface LocationFilter extends Pick<CharacterFilter, "name" | "type" | "page"> {
  dimension?: string;
}

export interface EpisodeFilter extends Pick<CharacterFilter, "name" | "page"> {
  /**
   * Filter by the given episode code.
   * i.e: `{ episode: "S01E01" }`
   */
  episode?: string;
}

export interface Character extends ResourceBase {
  status: "Dead" | "Alive" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface Location extends ResourceBase {
  type: string;
  dimension: string;
  residents: string[];
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}

export interface Info<T> {
  info?: {
    count: number;
    pages: number;
    next: string | NodeBuilderFlags;
    prev: string | null;
  };
  results?: T[];
}

export interface Favorites {
  favorite_characters: Character[];
  favorite_locations: Location[];
  favorite_episode: Episode[];
  saveCharacter: (character: Character) => void;
  remove: (type: string, id: string) => void;
}

export interface Icons {
  fill: string;
  filled: boolean;
  size: string;
  height: string;
  width: string;
  label: string;
}
