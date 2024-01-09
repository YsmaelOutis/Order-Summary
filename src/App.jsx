import './App.css'

function App() {

  return (
    <main>
      <div className="card">
        <img src="illustration-hero.svg" alt="" className='illustration'/>
        <article>
          <h1>Order Summary</h1>
          <p className='paragraph-summary'>You can now listen to million of songs, audiobooks and podcasts on any device anywhere you like!</p>
          <div className="plan-container">
            <div className="price-container">
              <img src="icon-music.svg" alt="" className='icon-music'/>
              <div>
                <p className='plan'>Annual Plan</p>
                <p className="price">$59.99/year</p>
              </div>
            </div>
            <a className="change-button">Change</a>
          </div>
          <button className="proceed-button">Proceed to Payment</button>
          <a href="" className="cancel">Cancel Order</a>
          {/* <button className="cancel-button">Cancel Order</button> */}
        </article>
      </div>
    </main>
  )
}

export default App
