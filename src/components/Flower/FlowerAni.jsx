import React from 'react';
import './Flower.styles.css';
/* Credits: https: //codepen.io/Shruti-Ag/pen/wVyYWm  */


function FlowerAni(props) {
    return (
        <div className="container">
            <div className="sun">
                <div className="sunrays"></div>
                <div className="circle"></div>
            </div>
            <div className="shadow"></div>
            <div className="pot"></div>
            <div className="water-jar"></div>
            <div className="water"></div>
            <div className="flower">
                <div className="stem"></div>
                <div className="leaf"></div>
                <div className="petal petal-1"></div>
                <div className="petal petal-2"></div>
                <div className="petal petal-3"></div>
                <div className="petal petal-4"></div>
                <div className="petal petal-5"></div>
                <div className="petal petal-6"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
}

export default FlowerAni;