import Raspi from 'raspi-io';
import five from 'johnny-five';

import { DEFAULT_PIN_TIMEOUT } from './constants';
import * as pinProps from './pin-properties';

const circuitController = {
  pins: {},

  initialize() {
    this.board = new five.Board({
      io: new Raspi()
    });

    const initializePins = () => Object.keys(pinProps).forEach((pinPropKey) => {
      const pinProperties = this.getPinProperties(pinPropKey);
      const pin = new five.Pin(pinProperties);

      pin[pinProperties.defaultState]();

      this.pins[pinPropKey] = pin;
    });

    this.board.on('ready', initializePins);
  },

  getPinProperties(pinPropKey) {
    return pinProps[pinPropKey];
  },

  handle(ctx) {
    const timeout = ctx.request.headers.timeout;
    const pinPropKey = ctx.request.headers.pinpropkey;

    if (pinPropKey) {
      const pinProperties = this.getPinProperties(pinPropKey);
      const pin = this.pins[pinPropKey];
      const invertedState = pinProperties.defaultState === 'high' ? 'low' : 'high';

      pin[invertedState]();

      setTimeout(() => pin[pinProperties.defaultState](), timeout || DEFAULT_PIN_TIMEOUT);

      ctx.body = 200;
    } else {
      ctx.body = 503;
    }
  }
};

export default circuitController;
