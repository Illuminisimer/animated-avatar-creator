"use client";

export type AvatarState = {

  background: {
    type: "transparent" | "solid" | "library";
    value: string;
  };

  faceColor: string;
  eyeColor: string;
  hairColor: string;

};

export const defaultAvatarState: AvatarState = {

  background: {
    type: "transparent",
    value: "transparent"
  },

  faceColor: "#f2c7a5",
  eyeColor: "#000000",
  hairColor: "#2c2c2c"

};