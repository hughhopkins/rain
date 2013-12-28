Template.leaderboard.players = function () {
  return Players.find({}, {sort: {score: -1, name: 1}});
  console.log("players.find");
};

Template.leaderboard.selected_name = function () {
  var player = Players.findOne(Session.get("selected_player"));
  return player && player.name;
  console.log("findOne");
};

Template.player.selected = function () {
  return Session.equals("selected_player", this._id) ? "selected" : '';
  console.log("session.equals");
};

Template.leaderboard.events({
  'click input.inc': function () {
    Players.update(Session.get("selected_player"), {$inc: {score: 5}});
    console.log("upvote - Template.leaderboard.events");
    _gs('event', 'Upvoted player');
    mixpanel.track("Upvoted");
  }
});

Template.leaderboard.events({
  'click input.inc2': function () {
    Players.update(Session.get("selected_player"), {$inc: {score: -5}});
    console.log("downvote - Template.leaderboard.events");
    _gs('event', 'Downvoted player');
    mixpanel.track("Downvoted");
  }
});

Template.player.events({
  'click': function () {
    Session.set("selected_player", this._id);
    console.log("mouseClick - Template.player.events");
  }
});