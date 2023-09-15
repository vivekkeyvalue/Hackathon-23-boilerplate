import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import train from "./train.png";

export const MyVideo = () => {
  const testData = {
    fps: 30,
    scenes: [
      {
        durationInFrames: 30,
        startFrame: 0,
        endFrame: 29,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 0,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 30,
        endFrame: 59,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 100,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ2",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 60,
        endFrame: 89,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 200,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ3",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 90,
        endFrame: 119,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 300,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ3",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 120,
        endFrame: 149,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 400,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ3",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 150,
        endFrame: 179,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 500,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ3",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 180,
        endFrame: 209,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 600,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ3",
        canvasBgColor: "rgb(255, 255, 255)",
      },
      {
        durationInFrames: 30,
        startFrame: 210,
        endFrame: 239,
        layers: [
          {
            version: "4.0",
            name: "vertical_product_1",
            layerNumber: 1,
            opacity: 1,
            rotate: 0,
            id: "mkSJlaLnONqDJCfzcocfg",
            type: "image",
            layerType: "product",
            top: 438.0934732,
            left: 700,
            scaleX: 1.0975609756097562,
            scaleY: 1.0975609756097562,
            hidden: false,
            url: train,
            orientation: "vertical",
          },
        ],
        version: "v1",
        id: "Z9LrskYRk4vH1L1-V_iMQ3",
        canvasBgColor: "rgb(255, 255, 255)",
      },
    ],
    version: "v1",
    dimensions: {
      id: 5,
      width: 1080,
      height: 1080,
    },
    durationInFrames: 500,
  };

  const sample = [
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
      left:10,
      scaleX: 1.0975609756097562,
      scaleY: 1.0975609756097562,
      hidden: false,
      url: train,
      orientation: "vertical",
    }
  ]

  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
	const translateX = interpolate(
		frame,
		[0, 200],
		[0, 1000]
	);
  return (
    <>
    <AbsoluteFill style={{backgroundColor: 'red'}}>

          {sample?.map((layer) => {
            return (
              <AbsoluteFill
                style={{ top: `${layer?.top}px`, left: `${layer?.left}px`,
                transform: `translateX(${translateX}px)`  }}
              >
                <Img width={200} src={layer?.url} />
              </AbsoluteFill>
            );
          })}
    </AbsoluteFill>
    </>
  );
};
