var API = require('../index.js')(process.env.WALMART_API_KEY, {protocol: 'http'});

API.getItem(10449075).then(function(item) {
  console.log(item.product.productName);
});

API.getItemByUPC("041100005373").then(function(item) {
  console.log(item.product.productName);
});

API.feeds.trending().then(function(data) {
  console.log("Trending found " + data.items.length + " items");
});
