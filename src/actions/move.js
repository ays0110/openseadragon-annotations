import { ANNOTATIONS_UPDATE_LAST } from '../constants/actionTypes';
import { DRAW } from '../constants/modes';

export default function move(Dispatcher, Store, x, y) {
  switch (Store.getMode()) {

    case DRAW:
      if (Store.isActivityInProgress()) {
        const last = Store.getLast();
        if (last && last[0] === 'path') {
          const d = last[1].d;
          Dispatcher.dispatch({
            type: ANNOTATIONS_UPDATE_LAST,
            update: { d: `${d} L${x} ${y}` },
          });
        }
      }
      break;

  }
}
