// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyData

  return (
    <li className="currency-container">
      <div className="currency-logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value">
        <p className="usd-euro-value">{usdValue}</p>
        <p className="usd-euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
