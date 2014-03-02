Router.configure({
	layoutTemplate: 'layout',
});

Router.map(function() {
	this.route('leaderboard', {path: '/'});
});

Router.map(function() {
	this.route('eshop', {path: '/eshop'});
});

Router.map(function() {
	this.route('about', {path: '/about'});
});

Router.map(function() {
	this.route('phones', {path: '/phones'});
});

Router.map(function() {
	this.route('addressBook', {path: '/addressBook'});
});