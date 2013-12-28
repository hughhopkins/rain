var a = "hello"

var b = " and then "

var c = "a goodbye"

var d = b + c

var e = function() {
	if (d === " and then a goodbye") {
		console.log("something is going right!");
	} else {
		console.log("something has gone wrong");
	}
};

Template.simple.events({
  'click input.inc4': function () {
    alert("simple " + a + d);
  }
});