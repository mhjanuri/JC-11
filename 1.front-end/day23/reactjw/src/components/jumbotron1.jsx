import React, { Component } from 'react';
import { FaPlay } from 'react-icons/fa'
import img1 from "./../img/img1.png"
import img2 from "./../img/img2.png"
import img3 from "./../img/img3.png"
import img4 from "./../img/img4.png"


class Jumbotron1 extends Component {
    state = {  }
    
    render() { 
        return (
            <div className="jumbroton">
                <div className="heading">
                    <div className="heading1">
                        <h1>Unlock the power of video delivery.</h1>
                        <p>Grow your business with JW Player's flexible platform of video services, <br /> powered by billions of signals from across our vast network.</p>
                        <button className="buttonstarted">Get Started &nbsp;<FaPlay/></button>
                    </div>
                </div>
                <div className="imgMiddle">
                    <div className="imgOne">
                        <img src={img1} alt="" />
                    </div>
                    <div className="imgTwo">
                        <img src={img2} alt="" />
                    </div>
                    <div className="imgThree">
                        <img src={img3} alt="" />
                    </div>
                    <div className="imgFour">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Jumbotron1;