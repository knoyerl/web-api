const express = require('express')
const app = express()
const path = require("path");
 
app.use("/stocks", express.static(path.join(__dirname, "web/stocks/")));

// app.get('/stocks/watchlist', function (req, res) {
//   res.render(`./web/stocks/watch-list`);
// })

app.get('/api/stocks/watchlist', function (req, res) {
	const myWatchList = {
		items: [
			{
				name: "TSLA",
				price: "$1600.00"
			},
			{
				name: "AMZN",
				price: "$2500.00"
			},
			{
				name: "BTC",
				price: "$9,600.00"
			}
		]
	}

	setTimeout(() => { res.send(myWatchList) }, 1500)
})
 
app.listen(3000)