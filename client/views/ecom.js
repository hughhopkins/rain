Template.ecom.events({
  'click input.ecom1': function () {
    console.log("ecom1");
    _gs('transaction', 'Transaction ID', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'Product 1',
    price: 1,
    quantity: 5
  },
  {
    name: 'Product 2',
    price: 50054832793000,
    category: 'Test Products'
  }
]);
    mixpanel.track("ecom1");
  }
});

Template.ecom.events({
  'click input.ecom2': function () {
    console.log("ecom2");
    _gs('transaction', 'Transaction ID', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'Product 3',
    price: 100435434000,
    quantity: 5
  },
  {
    name: 'Product 4',
    price: 50000,
    category: 'Test Products'
  }
]);
    mixpanel.track("ecom2");
  }
});