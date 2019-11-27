import React, { Component } from 'react';
import logo from "./../img/img1.png"

class Jumbotron1 extends Component {
    state = {  }
    
    render() { 
        return (
            <div className="jumbroton">
                <div className="heading">
                    <div className="heading1">
                        <h1>Unlock the power of video delivery.</h1>
                        <p>Grow your business with JW Player's flexible platform of video services, <br /> powered by billions of signals from across our vast network.</p>
                        <button className="buttonstarted">Get Started &nbsp;<i className="fas fa-play-circle" /></button>
                    </div>
                </div>
                <div className="imgMiddle">
                    <div className="imgOne">
                        <img src="img/img1.png" alt="" />
                    </div>
                    <div className="imgTwo">
                        <img src="img/img2.png" alt="" />
                    </div>
                    <div className="imgThree">
                        <img src="img/img3.png" alt="" />
                    </div>
                    <div className="imgFour">
                        <img src="img/img4.png" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Jumbotron1;