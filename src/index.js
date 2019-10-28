import { selectChannel } from './selectChannel.js';
import { getAllChannels } from './getAllChannels.js';
import '../styles/reset.css';
import '../styles/style.css';

const channelsSelect = document.getElementById('channels-select');

channelsSelect.addEventListener('change', selectChannel);
getAllChannels();