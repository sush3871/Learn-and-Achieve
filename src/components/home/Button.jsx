import React from 'react'

function Button(props) {
    const {
        name = 'Click Me'
    } = props;
  return (
    <div className="btn_group">
        <div className="button_wrapper">
            <a href="#!" className="main-btn">
                <span>{name}</span>
                <span className="dot"></span>
                <span className="curve">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                        <path d="M16 26C15.2 14 5 3.66667 0 0H43.5L43 42C35 31.5 21.5 27 16 26Z" fill="#F6821F">
                        </path>
                    </svg>
                </span>
            </a>
        </div>
    </div>
  )
}

export default Button