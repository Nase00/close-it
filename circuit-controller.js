import raspi from 'raspi-io';
import five from 'johnny-five';

import { CIRCUIT_PIN, CIRCUIT_SWITCH_DURATION } from './constants';

const circuitController = {
  initialize() {
    this.board = new five.Board({
      io: new raspi()
    });

    this.board.on('ready', () => {
      console.log(`Board ready, assigning circuit to ${CIRCUIT_PIN}`);
      this.circuit = new five.Pin(CIRCUIT_PIN);
      this.circuit.low();
    });
  },

  press() {
    const duration = CIRCUIT_SWITCH_DURATION / 1000;
    console.log(`Closing circuit for ${duration} seconds`);
    this.circuit.high();

    setTimeout(() => {
      console.log('Opening circuit');
      this.circuit.low();
    }, CIRCUIT_SWITCH_DURATION);
  }
};

export default circuitController;
