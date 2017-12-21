# Bittrex Public API (Node)

[![Build Status](https://travis-ci.org/ReyHaynes/exchange-bittrex-public-api.svg?branch=master)](https://travis-ci.org/ReyHaynes/exchange-bittrex-public-api)

This package interacts with the public REST API endpoints for the Bittrex Exchange that require no authentication using `Promises`.

With this package, you should be able to get access to:
* Cryptocurrency Pair Quotes
* Market Metadata
* 24-Hour Market Summary
* Order Flow & Market History

API requiring authentication has been decoupled, and will be created in an additional package as an add-on.

## Installation

`exchange-bittrex-public-api` is available from npm and yarn:

```
npm install exchange-bittrex-public-api

- or -

yarn add exchange-bittrex-public-api
```

## Usage

### Getting Started

1. `require()` or `import` module:
```
const Bittrex = require('exchange-bittrex-public-api')
```
or
```
import Bittrex from 'exchange-bittrex-public-api'
```

- Create a new Bittrex `Object`:
```
const bittrex = new Bittrex()
```

- Use any method needed to get the desired data.
All methods return a promise so you can use `await/async` with `try {} catch() {}` or `.then().catch()`

### Responses

Responses should return a `success` and `result` property. Successful responses from the API should return as `true`.

```
{
  "success": true,  // @bool
  "result": <data>  // @array or @object
}
```

### Methods Available

| Method | Description |
| -- | -- |
| `getMarkets()` | Used to get the open and available trading markets at Bittrex along with other meta data. |
| `getCurrencies()` | Used to get all supported currencies at Bittrex along with other meta data. |
| `getTicker(pair)` | Used to get the current tick values for a market.<li>`pair` - `@string` Market Pair (ex: BTC-LTC)</li> |
| `getMarketSummaries()` | Used to get the last 24 hour summary of all active exchanges. |
| `getMarketSummary(pair)` | Used to get the last 24 hour summary of a pair.<li>`pair` - `@string` Market Pair (ex: BTC-LTC)</li> |
| `getOrderBook(pair, type)` | Used to get retrieve the order-book for a given market.<li>`pair` - `@string` Market Pair (ex: BTC-LTC)</li><li>`type` - `@string` Buy / Sell / Both</li> |
| `getMarketHistory(pair)` | Used to retrieve the latest trades that have occurred for a specific market.<li>`pair` - `@string` Market Pair (ex: BTC-LTC)</li> |
| `getEndpoint(path, query)` | Used to get any additional endpoint that might get added in the future.<li>`path` - `@string` Custom path to an endpoint (ex: `/public/markets`)</li><li>`query` - `@object` Custom parameters to include (ex: `{ market: 'BTC-LTC' }`)</li> |

### Contribute

Please...if you find any issues or improvements needed, feel free to submit your improvements!
