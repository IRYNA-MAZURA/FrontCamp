import selectChannel from './api/selectChannel';
import fillingAllChannels from './api/getAllChannels';
import '../styles/reset.less';
import '../styles/style.less';

const channelsSelect = document.getElementById('channels-select');

channelsSelect.addEventListener('change', selectChannel);
fillingAllChannels();
