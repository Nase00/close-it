import Raspi from 'raspi-io';
import five from 'johnny-five';

import { CIRCUIT_PIN } from './constants';

const circuitController = {
  initialize() {
    this.board = new five.Board({
      io: new Raspi()
    });
  },

  press() {
    this.board.on('ready', () => {
      console.log('Circuit closed');
      (new five.Led(CIRCUIT_PIN)).strobe();
    });
  }
};

export default circuitController;
