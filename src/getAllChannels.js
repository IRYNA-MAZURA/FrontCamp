import { myApiKey } from './constants.js';

const channelsSelect = document.getElementById('channels-select');

export function getAllChannels() {
    fetch(`https://newsapi.org/v2/sources?apiKey=${myApiKey}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            res.sources.forEach((channel) => {
                let option = document.createElement("option");
                option.value = channel.id;
                option.text = channel.name;
                channelsSelect.appendChild(option);
            });
        });
}