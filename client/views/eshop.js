Template.eshop.events({
  'click input.eshop1': function () {
    alert("Boom it's coming!");
    console.log("eshop1");
    analytics.track('Completed Order', {
      id: '50314b8e9bcf000000000000',
      total: 31.39,
      shipping: 3.47,
      tax: 2.93,
      products: [{
        id: '507f1f77bcf86cd799439011',
        sku: '45790-32',
        name: 'Monopoly: 3rd Edition',
        price: 18.99
  }, {
        id: '505bd76785ebb509fc183733',
        sku: '46493-32',
        name: 'Uno Card Game',
        price: 6.00
  }]
});
    _gs('transaction', 'Transaction ID5', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'Porsche Targa',
    price: 100000,
    quantity: 1,
    category: 'Cars and Stuff'
  },
]);
    mixpanel.track("eshop1");
  }
});
