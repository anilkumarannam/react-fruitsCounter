import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mango = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
      bananas: prevState.bananas,
    }))
  }

  banana = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes,
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="fruit-box">
          <h1 className="heading">
            Bob ate {mangoes} mangoes {bananas} bananas
          </h1>

          <div className="fruits">
            <div className="fruit">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button type="button" className="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button type="button" className="button" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
