// Write your code here
import {Component} from 'react'

import CryptocurrencyList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    count: 0,
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <h1 className="head"> Cryptocurrency Tracker </h1>

        <img
          className="bit-img"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
        />
        <CryptocurrencyList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
