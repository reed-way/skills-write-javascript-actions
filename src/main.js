import getJoke from "./joke.js";
import * as core from "@actions/core";

async function run() {
    const joke = await getJoke();
    console.log(joke);
    core.setOutput("joke", joke);
}

run();