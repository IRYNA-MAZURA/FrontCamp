import { getAllChannels } from './api';
import 'babel-polyfill';

const channelsSelect = document.getElementById('channels-select');

export default async function fillingAllChannels() {
  const channels = await getAllChannels();

  channels.sources.forEach((channel) => {
    const option = document.createElement('option');
    option.value = channel.id;
    option.text = channel.name;
    channelsSelect.appendChild(option);
  });
}
