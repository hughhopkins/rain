/*to track events in GoSquared*/

Template.event2.events({
  'click input.inc6': function () {
    alert("boom");
    console.log("something is being clikced");
    _gs('event', 'Clicked a button - event number 2');
    mixpanel.track("clicked a button 2");
  }
});

