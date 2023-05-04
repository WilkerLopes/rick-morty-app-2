"use client";

import { useRouter } from "next/router";

export default function CharacterView() {
  const router = useRouter();
  const id = router.query.idCharacter;

  return (
    <>
      <h1>View {id}</h1>
    </>
  );
}
