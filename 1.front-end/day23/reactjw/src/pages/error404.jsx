import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Error404 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <video autoPlay muted loop id="myVideo404" onclick="myFunction()">
                    <source src="https://cdn.jwplayer.com/videos/EUijQ1Ay-St99WDS4.mp4" type="video/mp4" />
                </video>
                <div className="content-404">
                    <div className="center-box-404">
                        <div>
                            <h1>404: Page Not Found</h1> <br/>
                            <p>We couldn't find that page, but here are some jellyfish.</p> <br />
                            <button className="myBtn404" style={{textDecoration:"none",color:"white"}}>
                                <Link to={'/'} className="link-myBtn404">
                                    Go Home
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Error404;