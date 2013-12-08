Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscrbe('players');}
});

Router.map(function() {
	this.route('postsList', {path: '/'});
});