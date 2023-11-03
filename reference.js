user = {
  username: '',
  id: '',
  car: '',
};

space = {
  id: '',
  isAvailable: false,
};

payment = {
  id: '',
  paymentRef: '',
  user: user.id,
};

ticket = {
  user: user.id,
  spaceCollected: space.id,
  payment: payment.id,
};
