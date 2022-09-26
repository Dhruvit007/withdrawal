import './index.css'
import {Component} from 'react'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="container">
        <div className="contain-container">
          <div className="name-container">
            <p className="name-icon">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-instruction">Your Balance</p>
            <div>
              <h1 className="balance">1150</h1>
              <p className="currency">In rupee</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <p className="withdrawal-instruction">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            <li className="list-item">50</li>
            <li className="list-item">50</li>
            <li className="list-item">50</li>
            <li className="list-item">50</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
