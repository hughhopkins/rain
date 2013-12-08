Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscrbe('posts');}
});

Router.map(function() {
	this.route('postsList', {path: '/'});
});