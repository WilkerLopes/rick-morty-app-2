import { StateCreator } from "zustand";
import { Character, Info, CharacterFilter } from "@/interfaces";

export interface CharacterStore {
  characters: Info<Character>;
  favoriteCharacters: Character[];
  saveCharacter: (product: Character) => void;
  removeCharacter: (productId: number) => void;
  getCharacters: () => void;
  getCharacter: (id: string) => Promise<Character>;
}

export const createCharacterStore: StateCreator<CharacterStore> = (set, get) => ({
  characters: {},
  favoriteCharacters: [],
  saveCharacter: (character: Character) => {
    const favoriteCharacters = get().favoriteCharacters;
    favoriteCharacters.push(character);
    set({ favoriteCharacters });
  },
  removeCharacter: (characterId: number) => {
    set({ favoriteCharacters: get().favoriteCharacters.filter((character) => character.id !== characterId) });
  },
  getCharacters: async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    set({ characters: await res.json() });
  },
  getCharacter: async (id: string) => {
    const res = await fetch("https://rickandmortyapi.com/api/character/" + id);
    return await res.json();
  },
});
