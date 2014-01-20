Template.ecom.events({
  'click input.ecom1': function () {
    console.log("ecom1");
    _gs('transaction', 'Transaction ID', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'Creme Egg',
    price: 1,
    quantity: 5,
    category: 'Food'
  },
  {
    name: 'iPhone',
    price: 768,
    category: 'Technology'
  }
]);
    mixpanel.track("ecom1");
  }
});

Template.ecom.events({
  'click input.ecom2': function () {
    console.log("ecom2");
    _gs('transaction', 'Transaction ID1', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'New Balance Trainers',
    price: 34,
    quantity: 3,
    category: 'Shoes'
  },
  {
    name: 'Coffee Table',
    price: 7983,
    category: 'Home Items'
  }
]);
    mixpanel.track("ecom2");
  }
});

Template.ecom.events({
  'click input.ecom3': function () {
    console.log("ecom3");
    _gs('transaction', 'Transaction ID2', {
  // revenue: 5.99,
  // quantity: 10,
  track: true
}, [
  {
    name: 'Wine',
    price: 12,
    quantity: 5,
    category: 'Booze'
  },
]);
    mixpanel.track("ecom3");
  }
});