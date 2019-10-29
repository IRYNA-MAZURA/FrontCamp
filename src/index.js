import selectChannel from './selectChannel';
import fillingAllChannels from './getAllChannels';
import '../styles/reset.less';
import '../styles/style.less';

const channelsSelect = document.getElementById('channels-select');

channelsSelect.addEventListener('change', selectChannel);
fillingAllChannels();
