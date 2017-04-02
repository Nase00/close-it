export const deskPreset = {
  pin: 'P1-12', // GPIO18/PWM0
  mode: 3,
  defaultState: 'high',
  route: 'desk'
};

export const deskRaise = {
  pin: 'P1-15', // GPIO21
  mode: 1,
  defaultState: 'low',
  route: 'desk'
};

export const deskLower = {
  pin: 'P1-13', // GPIO27
  mode: 1,
  defaultState: 'low',
  route: 'desk'
};

export const buzzInput = {
  pin: 'GPIO19',
  mode: 1,
  defaultState: 'low',
  route: 'buzz'
};
