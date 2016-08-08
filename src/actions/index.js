import Dispatcher from '../dispatcher/Dispatcher';
import Store from '../store/Store';

// TODO: improve this!

import click from './click';
import cleanCanvas from './cleanCanvas';
import fillCanvasWith from './fillCanvasWith';
import leaveCanvas from './leaveCanvas';
import move from './move';
import press from './press';
import release from './release';
import selectMode from './selectMode';
import zoom from './zoom';
import initialize from './initialize';

const bindedClick = click.bind(null, Dispatcher, Store);
const bindedCleanCanvas = cleanCanvas.bind(null, Dispatcher);
const bindedFillCanvasWith = fillCanvasWith.bind(null, Dispatcher);
const bindedLeaveCanvas = leaveCanvas.bind(null, Dispatcher, Store);
const bindedMove = move.bind(null, Dispatcher, Store);
const bindedPress = press.bind(null, Dispatcher, Store);
const bindedRelease = release.bind(null, Dispatcher, Store);
const bindedSelectMode = selectMode.bind(null, Dispatcher, Store);
const bindedZoom = zoom.bind(null, Dispatcher, Store);
const bindedInitialize = initialize.bind(null, Dispatcher);

export {
  bindedClick as click,
  bindedCleanCanvas as cleanCanvas,
  bindedFillCanvasWith as fillCanvasWith,
  bindedLeaveCanvas as leaveCanvas,
  bindedMove as move,
  bindedPress as press,
  bindedRelease as release,
  bindedSelectMode as selectMode,
  bindedZoom as zoom,
  bindedInitialize as initialize,
};
