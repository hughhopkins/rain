Template.eshop.events({
  'click input.eshop1': function () {
    alert("Boom it's coming!");
    console.log("eshop1");
    _gs('transaction', 'Transaction ID5', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'Beer',
    price: 2,
    quantity: 3,
    category: 'Booze'
  },
]);
    mixpanel.track("eshop1");
  }
});