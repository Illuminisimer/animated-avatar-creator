"use client";

import { useState } from "react";
import { defaultAvatarState, AvatarState } from "../lib/avatarState";

export default function AvatarCanvas() {

  const [avatar, setAvatar] = useState<AvatarState>(defaultAvatarState);

  return (

    <div>

      <div
        id="avatar-canvas"
        style={{
          width: 300,
          height: 300,
          border: "1px solid #ccc",
          marginTop: 20,
          background:
            avatar.background.type === "transparent"
              ? "transparent"
              : avatar.background.value
        }}
      >

        <svg width="300" height="300">

          {/* Face */}
          <circle
            cx="150"
            cy="150"
            r="80"
            fill={avatar.faceColor}
          />

          {/* Eyes */}
          <circle cx="120" cy="140" r="10" fill={avatar.eyeColor} />
          <circle cx="180" cy="140" r="10" fill={avatar.eyeColor} />

          {/* Hair */}
          <rect
            x="70"
            y="60"
            width="160"
            height="50"
            fill={avatar.hairColor}
          />

        </svg>

      </div>

      <ColorControls avatar={avatar} setAvatar={setAvatar} />

    </div>

  );

}

function ColorControls({ avatar, setAvatar }: any) {

  return (

    <div style={{ marginTop: 20 }}>

      <h3>Colors</h3>

      Face:

      <input
        type="color"
        value={avatar.faceColor}
        onChange={(e) =>
          setAvatar({
            ...avatar,
            faceColor: e.target.value
          })
        }
      />

      Eyes:

      <input
        type="color"
        value={avatar.eyeColor}
        onChange={(e) =>
          setAvatar({
            ...avatar,
            eyeColor: e.target.value
          })
        }
      />

      Hair:

      <input
        type="color"
        value={avatar.hairColor}
        onChange={(e) =>
          setAvatar({
            ...avatar,
            hairColor: e.target.value
          })
        }
      />

    </div>

  );

}