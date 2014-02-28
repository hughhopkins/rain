Template.phones.events({
  'click input.phones1': function () {
    alert("Boom an iPhone is coming!");
    console.log("phones");
    analytics.track('Completed Order', {
      id: '2',
      total: 699,
      shipping: 10,
      tax: 15.5,
      products: [{
        id: '465',
        sku: '65',
        name: 'iPhone 5',
        price: 699
  }]
});
  }
});
