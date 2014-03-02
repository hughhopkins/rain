/* 

var contacts = {
	"addressBooks" : [
		{
			"name": "Hugh Hopkins",
			"Twitter": "@hughopkins"
		},
		{
			"name": "Jonathan Craven",
			"Twitter": "@jonocraven"
		},
		{
			"name": "Elise Girdler",
			"Twitter": "@elgirdler"
		},
		{
			"name": "Verity Ramsay",
			"Twitter": "@verityramsay"
		}

	]
};

var object = contacts.addressBooks,
	contactsCount = object.length,
	target = document.getElementsByTagName("footer")[0],
	i;

if(contactsCount > 0) {
	for (i = 0; i < contactsCount; i = i + 1) {
		var item = object[i],
			name = item.name,
			Twitter = item.Twitter;

		target.innerHTML += '<p>name + Twitter</a>';

	}
}

})(); 

*/