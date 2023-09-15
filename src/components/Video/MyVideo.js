import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";
import train from "./train.png";
import pole from "./pole.png";

export const MyVideo = () => {
  const scene = {
    fps: 30,
    durationInFrames: 30,
    startFrame: 0,
    endFrame: 29,
    images: [
      {
        version: "4.0",
        name: "vertical_product_1",
        layerNumber: 1,
        opacity: 1,
        rotate: 0,
        id: "mkSJlaLnONqDJCfzcocfg",
        type: "image",
        layerType: "product",
        top: 200,
        left: 10,
        scaleX: 1.0975609756097562,
        scaleY: 1.0975609756097562,
        hidden: false,
        url: train,
        orientation: "vertical",
        translateX: {
          start: 0,
          end: 1000,
        },
      },
      {
        version: "4.0",
        name: "pole",
        layerNumber: 1,
        opacity: 1,
        rotate: 0,
        id: "mkSJlaLnONqDJCfzcocfg",
        type: "image",
        layerType: "product",
        top: 100,
        left: 500,
        scaleX: 1.0975609756097562,
        scaleY: 1.0975609756097562,
        hidden: false,
        url: pole,
        orientation: "vertical",
      },
    ],
    version: "v1",
    id: "Z9LrskYRk4vH1L1-V_iMQ",
    canvasBgColor: "rgb(255, 255, 255)",
    dimensions: {
      id: 5,
      width: 1080,
      height: 1080,

      durationInFrames: 500,
    },
  };
  const frame = useCurrentFrame();

  const getTranslateX = (val) => {
    if (val) {
      const translateX = interpolate(frame, [0, 200], [0, 1000]);
      return `translateX(${translateX}px)`;
    } else return "";
  };

  const getTranslateY = (val) => {
    if (val) {
      const translateY = interpolate(frame, [0, 200], [0, 1000]);
      return `translateY(${translateY}px)`;
    } else return "";
  };

  return (
    <>
      <AbsoluteFill>
        {scene.images?.map((layer) => {
          return (
            <AbsoluteFill
              style={{
                top: `${layer?.top}px`,
                left: `${layer?.left}px`,
                transform:
                  getTranslateX(layer.translateX) +
                  getTranslateY(layer.transalteY),
              }}
            >
              <Img width={200} src={layer?.url} />
            </AbsoluteFill>
          );
        })}
      </AbsoluteFill>
    </>
  );
};
