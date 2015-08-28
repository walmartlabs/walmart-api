Walmart Open API
================

This is a wrapper library around the [WalmartLabs Developer Library](https://developer.walmartlabs.com).
To access this library you will need a developer key.

## Installation

To install the library:

```
% npm install walmart --save
```

## Usage

First include the library:

```
var walmart = require('walmart')(apiKey);
```

The `apiKey` is the API key that you got from WalmartLabs when you registered.

Once you have the `walmart` object you can make these requests.

This is a promise based library, so requests will look like this:

```
walmart.getItem(10449075).then(function(item) {
  console.log(item.product.productAttributes.productName);
});
```

The `then` function is called when the item data is returned.

You can see more examples in `examples/simple.js`.

### walmart.getItem(itemID)

This returns the item information for a specific product based on it's WalmartLabs product ID.

### walmart.getItemByUPC(upcCode)

Returns the product by the upcCode, the barcode on a product is the UPC so you should send that
directly to the API.

### walmart.search(term, extras)

Returns a list of products that match the search term.

### walmart.taxonomy()

Returns our category taxonomy.

### recommendations(itemID)

Returns recommended products based on the item ID.

### walmart.reviews(itemID)

Returns customer reviews for the specific WalmartLabs Item ID.

### walmart.stores.byPosition(lat, lon)

Returns a list of stores by the specified GPS latitude and longitude.

### walmart.stores.byCity(city)

Returns a list of stores by the specified city name.

### walmart.stores.byZip(zip)

Returns a list of stores by the specified zip code.

### walmart.stores.search(store, query, extras)

Returns a list of products that match the `query` in the specified `store`.

### walmart.feeds.items(categoryId)

Returns an array of items on the specified category.

### walmart.feeds.bestSellers(categoryId)

Returns an array of items of the best-sellers on the specified category.

### walmart.feeds.preOrder()

Returns an array of items of the available pre-orders.

### walmart.feeds.rollback(categoryId)

Returns an array of items of the rollbacks on the specified category.

### walmart.feeds.clearance(categoryId)

Returns an array of items of the clearance items on the specified category.

### walmart.feeds.specialBuy(categoryId)

Returns an array of items of the special buy items on the specified category.

### walmart.feeds.valueOfTheDay(categoryId)

Returns an array of items of the value of the day items on the specified category.

### walmart.feeds.trending(categoryId)

Returns an array of items of the trending items on the specified category.
