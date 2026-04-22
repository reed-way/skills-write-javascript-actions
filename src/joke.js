import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    Headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
    },
    json: true,
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

export default getJoke;