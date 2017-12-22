import { expect } from 'chai'
import Bittrex from '../src'

const bittrex = new Bittrex()

const WAITTIME = 1000
const TIMEOUT = 3000

/* istanbul ignore next */
const mochaAsync = (fn) => {
  return (done) => {
    fn.call().then(done, (e) => {
      done(e)
    })
  }
}

describe(`# Bittrex Public API Test (${WAITTIME}ms wait per test)`, function() {
  afterEach(function(done) {
    this.timeout(WAITTIME * 1.1)
    setTimeout(() => {
      done()
    }, WAITTIME)
  })

  it("Can get markets: getMarkets()",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getMarkets()

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Can get currencies: getCurrencies()",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getCurrencies()

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Can get ticker BTC-LTC pair: getTicker(pair)",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getTicker('BTC-LTC')

      expect(success).to.be.equal(true)
      expect(result).to.be.an('object')
    })
  ).timeout(TIMEOUT)

  it("Can get overall market summaries: getMarketSummaries()",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getMarketSummaries()

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Can get BTC-LTC pair market summary: getMarketSummary(pair)",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getMarketSummary('BTC-LTC')

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Can get 'buy' side BTC-LTC pair order book: getOrderBook(pair, type)",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getOrderBook('BTC-LTC', 'buy')

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Can get BTC-LTC pair market history: getMarketHistory(pair)",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getMarketHistory('BTC-LTC')

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Can get markets using explicit endpoint '/public/getmarkets': getEndpoint(path, query)",
    mochaAsync(async () => {
      const { success, result } = await bittrex.getEndpoint('/public/getmarkets')

      expect(success).to.be.equal(true)
      expect(result).to.be.an('array')
      expect(result.length).to.be.above(0)
    })
  ).timeout(TIMEOUT)

  it("Cannot get non-existent or errored endpoint '/public/getmarke': getEndpoint(path, query)",
    mochaAsync(async () => {
      const { success } = await bittrex.getEndpoint('/public/getmarke', { limit: 1 })

      expect(success).to.be.equal(false)
    })
  ).timeout(TIMEOUT)
})
