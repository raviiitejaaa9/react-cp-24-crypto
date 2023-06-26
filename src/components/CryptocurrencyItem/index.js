// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props

  const {currencyName, usdValue, euroValue, currencyLogo, id} = currencyDetails
  console.log(currencyName)

  return (
    <li className="list-item">
      <div className="logo-name">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p> {currencyName} </p>
      </div>
      <div className="usd-euro">
        <p> {usdValue} </p>
        <p> {euroValue} </p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
