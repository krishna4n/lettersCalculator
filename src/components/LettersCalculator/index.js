import {Component} from 'react'
import './index.css'

class Letters extends Component {
  state = {count: 0, inputValue: ''}

  render() {
    const {count, inputValue} = this.state
    this.calculateLetters = event => {
      this.setState({
        count: event.target.value.length,
      })
    }

    return (
      <div className="container">
        <div className="calculation-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-text">Enter the phrase</label>
          <div>
            <input
              type="text"
              className="input-field"
              id="input-text"
              value={inputValue}
              placeholder="Enter the phrase"
              onChange={this.calculateLetters}
            />
            <button className="button" type="button">
              <p>No.of letters: {count}</p>
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default Letters
