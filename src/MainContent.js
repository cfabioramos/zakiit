import React, { useState } from 'react';
import tempimage from './img/under_construction.gif';

function MainContent() {

  const [imageCaption] = useState("Under construction...");

  return (
      <div>
        <br />
        <img src={tempimage} alt={imageCaption} className="center"/>
      </div>
  );
}

export default MainContent;
