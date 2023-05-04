"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppStore } from "@/stores/store";
import { Character } from "@/interfaces";

export default function CharacterView() {
  const router = usePathname();
  console.log(router.split("/").pop());
  const id = "1";

  const [character, setCharacter] = useState<Character>();

  const { getCharacter } = useAppStore();

  useEffect(() => {
    getCharacter(id).then((res) => {
      setCharacter(res);
    });
  }, []);

  return (
    <>
      <h1>View {character?.id}</h1>
    </>
  );
}
