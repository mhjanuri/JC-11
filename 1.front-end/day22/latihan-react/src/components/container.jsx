import React, { Component } from 'react';

class Container extends Component {
    state = {  }
    
    render() { 
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
 
export default Container;