import React, { Component } from 'react';   

class Pagenotfound extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {/* 404 PAGE NOT FOUND */}
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>404</h1>
                        </div>
                        <h2>Oops, The Page you are looking for can't be found!</h2>
                        <br/>
                        <a href="/"><span className="arrow" />Return To Homepage</a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Pagenotfound;