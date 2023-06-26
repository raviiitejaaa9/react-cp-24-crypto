// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const modifiedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    console.log(modifiedData)
    this.setState({
      currencyList: modifiedData,
      isLoading: false,
    })
  }

  render() {
    const {currencyList, isLoading} = this.state

    console.log(currencyList[0])

    // console.log(currencyName)

    return (
      <div className="list-sec">
        <div className="headings">
          <div>
            <h1> Coin Type </h1>
          </div>
          <div className="usd-euro">
            <h1> USD </h1>
            <h1> Euro </h1>
          </div>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <ul className="list-container">
            {currencyList.map(eachItem => (
              <CryptocurrencyItem
                key={eachItem.id}
                currencyDetails={eachItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
