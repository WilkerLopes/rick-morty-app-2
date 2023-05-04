"use client";

import Image from "next/image";
import type { Character } from "@/interfaces";
import Link from "next/link";
import { useAppStore } from "@/stores/store";

import HeartFilled from "./icons/HeartFilled";
import HearttOutline from "./icons/HearttOutline";

import style from "@/styles/CharacterCard.module.scss";

import { Card, Grid, Button } from "@nextui-org/react";
import { HeartIcon } from "./icons/Heart";

interface PropsCharacterCard {
  character: Character;
}

export default function CharacterCard({ character }: PropsCharacterCard) {
  const { favoriteCharacters, saveCharacter, removeCharacter } = useAppStore();

  const isFavorite: any = favoriteCharacters.find((char) => char.id == character.id);
  function favorite(character: Character) {
    if (isFavorite) {
      removeCharacter(character.id);
      return;
    }
    saveCharacter(character);
  }

  return (
    <Card css={{ background: "$colorCard" }}>
      <Card.Body>
        <Grid.Container gap={2}>
          <Grid>
            <Image className={style.cover} src={character.image} alt={character.name} width={150} height={150} />
          </Grid>
          <Grid>
            <div className={style.side}>
              <div className={style.info}>
                <h2>{character.name}</h2>
                <div className={style.status}> {character.status} </div>

                <div>
                  <span>Gênero</span>
                  <div>
                    {character.species}-{character.gender}
                  </div>
                </div>

                <div>
                  <span>Visto por último:</span>
                  <div>{character.location.name}</div>
                </div>
              </div>
              <div className={style.actions}>
                <Link href={`/characters/${character.id}`}>Ver mais</Link>

                <Button auto color="error" icon={<HeartIcon filled={isFavorite} />} onClick={() => favorite(character)} />
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}

//
