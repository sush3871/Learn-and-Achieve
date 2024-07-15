import React from 'react';

function Usp_item({ title, desc, number, icon, lineColor, numberColor, bottomImageColor }) {
  return (
    <div className="usp_item mb-4 mb-lg-0">
      <div className="item_content">
        <div className="item_wrapper">
          <div className="usp_icon">
            {icon}
          </div>
          <h4 className="usp_title">{title}</h4>
          <p className="usp_desc">{desc}</p>
        </div>
        <div className="bottom_image" >
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="43" viewBox="0 0 45 43" fill="none">
                <path d="M27.6338 16.3868C28.4568 28.6723 38.8978 39.2479 44.0154 43L0.0154445 43.0158L-4.22401e-06 0.0158106C8.1899 10.7629 22.0055 15.365 27.6338 16.3868Z" style={{ fill: bottomImageColor }}/>
            </svg>
        </div>
      </div>
      <div className="usp_line" style={{ backgroundColor: lineColor }}>
        <div className="serial_number" style={{ backgroundColor: numberColor }}>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}

export default Usp_item;
