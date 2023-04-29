import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#ffffff",
  isLogoTexture: true,
  isFullTexture: false,
  // logoDecal: "./threejs.png",
  // fullDecal: "./threejs.png",
  logoDecal: "./im.png",
  fullDecal: "./im.png",
});

export default state;
