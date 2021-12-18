import './styles.scss';

import { tsParticles } from "tsparticles";

import { particlesConfig } from "./particles";

const main = document.getElementsByClassName("main")[0]! as HTMLElement;
const loading = document.getElementById("spinner-container")! as HTMLElement;

tsParticles.load("tsparticles", particlesConfig as any).then(() => {
    main.style.display = "flex";
    loading.style.display = "none";
});

console.log(`Hi 😊 if you want to take a look the source code is on this repo: https://github.com/auja-xyz/auja-xyz`);
