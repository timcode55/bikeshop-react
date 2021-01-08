import React from 'react'
import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">BIKES</h1>
              <span className="subtitle">
                SHOP NOW
              </span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WHEELS</h1>
              <span className="subtitle">
                SHOP NOW
              </span>
          </div>
        </div><div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
              <span className="subtitle">
                SHOP NOW
              </span>
          </div>
        </div><div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
              <span className="subtitle">
                SHOP NOW
              </span>
          </div>
        </div><div className="menu-item">
          <div className="content">
            <h1 className="title">ACCESSORIES</h1>
              <span className="subtitle">
                SHOP NOW
              </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage
