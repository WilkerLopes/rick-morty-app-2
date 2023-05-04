"use client";

import { useEffect } from "react";
import { Container, Text, Pagination } from "@nextui-org/react";
import type { Character } from "@/interfaces";
import CharacterCard from "@/components/characterCard";
import { useAppStore } from "@/stores/store";

export default function CharactersIndex() {
  const { characters, getCharacters } = useAppStore();

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container xl={true}>
      <Text
        h1
        size={50}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="black"
      >
        Personagens
      </Text>
      ({characters?.info?.count})
      <div className="grid">
        {characters?.results?.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination total={characters?.info?.pages || 1} initialPage={1} />
    </Container>
  );
}

//
