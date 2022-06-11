import Player from '@vimeo/player';
import _ from 'lodash';

const _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTOREGEKEY = 'videoplayer-current-time';

player.on('timeupdate', _.throttle(timeFix, 1000));

function timeFix(e) {
  localStorage.setItem(LOCALSTOREGEKEY, e.seconds);
  console.log(localStorage.getItem(LOCALSTOREGEKEY));
}

player
  .setCurrentTime(JSON.parse(localStorage.getItem(LOCALSTOREGEKEY)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
    }
  });

  
