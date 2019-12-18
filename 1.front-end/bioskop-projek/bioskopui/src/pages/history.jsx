import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 


class History extends Component {
    state = {  }
    render() { 
        if (this.props.UserRole === 'admin') {
            return <Redirect to={'/pagenotfound'} />
        }
        return (
            <div>
                INI HISTORY
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        AuthLog: state.Auth.login,
        UserRole: state.Auth.role,
    }
}
 
export default connect(mapStateToProps) (History);