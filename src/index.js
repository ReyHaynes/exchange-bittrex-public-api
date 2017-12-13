import "babel-polyfill"
import axios from 'axios'
import querystring from 'querystring'

export default class BittrexPublicAPI {
  constructor({ baseURL } = { baseURL: 'https://bittrex.com/api/v1.1' }) {
    this.api = axios.create({ baseURL })
  }

  getMarkets() {
    return getRequest({
      api: this.api,
      path: '/public/getmarkets'
    })
  }

  getCurrencies() {
    return getRequest({
      api: this.api,
      path: '/public/getcurrencies'
    })
  }

  getTicker(pair) {
    return getRequest({
      api: this.api,
      path: '/public/getticker',
      query: { market: pair }
    })
  }

  getMarketSummaries() {
    return getRequest({
      api: this.api,
      path: '/public/getmarketsummaries'
    })
  }

  getMarketSummary(pair) {
    return getRequest({
      api: this.api,
      path: '/public/getmarketsummary',
      query: { market: pair }
    })
  }

  getOrderBook(pair, type) {
    return getRequest({
      api: this.api,
      path: '/public/getorderbook',
      query: { market: pair, type }
    })
  }

  getMarketHistory(pair) {
    return getRequest({
      api: this.api,
      path: '/public/getmarkethistory',
      query: { market: pair }
    })
  }

  getEndpoint(path, query = {}) {
    return getRequest({
      api: this.api,
      path,
      query
    })
  }
}

/*
 *  Private Function(s)
 * * * * */

const getRequest = async ({ api, path, query = {} }) => {
  try {
    const { data } = await api.get(path + '?' + querystring.stringify(query))
    return {
      success: true,
      result: data.result
    }
  } catch ({ response }) {
    return {
      success: false,
      result: response.data
    }
  }
}
