import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#EFBD48",
    islogoTexture: true,
    isfullTexture: false,
    islocalDecal: "./threejs.png",
    isfulldecol: "./threejs.png",
})


export default state