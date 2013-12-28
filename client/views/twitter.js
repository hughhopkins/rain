/*How many times people click on the foolow Hugh Hopkins twitter button*/

Template.twitter.events({
  'click input.twitter': function () {
    alert("boom");
    console.log("someone wnat to follow Hugh");
    _gs('event', 'Twitter hughhopkins');
    mixpanel.track("Twitter hughhopkins");
  }
});