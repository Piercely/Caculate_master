const EXCHANGE_RATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

const CURRENCY_DATA = [
  { id: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { id: 'USD', name: 'US Dollar', symbol: '$' },
  { id: 'EUR', name: 'Euro', symbol: '€' },
  { id: 'GBP', name: 'British Pound', symbol: '£' },
  { id: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { id: 'KRW', name: 'Korean Won', symbol: '₩' },
];

const RATE_MAP = {};

async function fetchExchangeRates() {
  try {
    const response = await wx.request({ url: EXCHANGE_RATE_API_URL });
    if (response.statusCode === 200 && response.data.success) {
      return response.data.rates;
    } else {
      throw new Error('Invalid response received from server.');
    }
  } catch (err) {
    console.error('Error while fetching exchange rates.', err);
    return null;
  }
}

function setExchangeRateMap(rates) {
  for (let key in rates) {
    if (!Object.prototype.hasOwnProperty.call(rates, key)) continue;

    const rate = rates[key];
    for (const entry of CURRENCY_DATA) {
      if (entry.id == key) {
        RATE_MAP[`${entry.id}-USD`] = rate;
      } else if (entry.id == 'USD') {
        RATE_MAP[`USD-${entry.id}`] = 1 / rate;
      } else {
        RATE_MAP[`${entry.id}-${key}`] = rate / RATE_MAP['USD-' + key];
      }
    }
  }
}

Page({
  data: {
    currencyList: CURRENCY_DATA, // list of available currencies
    fromIndex: 0, // index of selected currency in "from" picker
    toIndex: 1, // index of selected currency in "to" picker
    denomination: '', // input denomination
    outputDenomination: '', // output denomination
  },

  async onLoad() {
    const rates = await fetchExchangeRates();
    if (rates !== null) {
      setExchangeRateMap(rates);
      this.calculateOutputDenomination();
    }
  },

  calculateOutputDenomination() {
    const { fromIndex, toIndex, denomination } = this.data;
    const fromId = this.data.currencyList[fromIndex].id;
    const toId = this.data.currencyList[toIndex].id;

    if (+denomination > 0) {
      const output = +denomination * RATE_MAP[`${fromId}-${toId}`];
      this.setData({ outputDenomination: `${output.toFixed(2)} ${this.data.currencyList[toIndex].symbol}` });
    } else {
      this.setData({ outputDenomination: '' });
    }
  },

  bindFromChange(e) {
    this.setData({ fromIndex: e.detail.value, denomination: '' });
    this.calculateOutputDenomination();
  },

  bindDenominationInput(e) {
    this.setData({ denomination: e.detail.value });
    this.calculateOutputDenomination();
  },

  bindToChange(e) {
    this.setData({ toIndex: e.detail.value, denomination: '' });
    this.calculateOutputDenomination();
  },
});