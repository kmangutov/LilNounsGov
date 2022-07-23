
url = "./output.csv"
$.get(url, function(data) {
	console.log('data: ' + data)
})

var itemsVue = new Vue({
	el: '#app',
	data: {
		text: 'placeholder',
		proposals: []
	},
	mounted: function () {
		var self = this
		url = "./output.csv"
		$.get(url, function(data) {
			// console.log('data: ' + data)
			self.text = "" + data
			var items = data.split('\n')
			var finalItems = []

			for(var item of items) {
				var itemsArr = item.split(',')
				console.log(itemsArr[0])

				var timestampHuman =
					new Date(1000 * itemsArr[0]).toDateString() + ' ' +
					new Date(1000 * itemsArr[0]).toTimeString() 

				var obj = {
					timestamp: itemsArr[0],
					timestampHuman: timestampHuman, //new Date(1000 * itemsArr[0]).toDateString(),
					title: itemsArr[3],
					url: itemsArr[2]
				}
				finalItems.push(obj)
			}

			finalItems.sort(function (a,b) {
				return b.timestamp - a.timestamp
			})
			self.proposals = finalItems
		})
	}
});