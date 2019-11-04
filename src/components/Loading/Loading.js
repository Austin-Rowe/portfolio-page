import React from 'react';

import './Loading.css';


const Loading = (props) => {
    let {loading, color, comment} = props;
    return ( 
        <div id="loading-cover" className={color? "color":"grayscale"} style={loading? {}:{display: "none"}}>
          <h1 id="loading-text" className="grayscale-text">{comment}</h1>
        </div>
    );
}
 
export default Loading;