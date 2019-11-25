import React from 'react' ;

class Navbar extends React.Component {
    state = {
        nama:null,
        umur:12,
        mobil:['avanza','grabwheel', 'ambulance','tank']
    }
    componentDidMount() {
        var nama=this.state.nama + '1'
        this.setState({nama:'boba'})
    }

    render() {
        if (this.state.nama!=='') {
            return (
                <div>
                    {this.state.nama}
                </div>
                );
        } else {
            return<div>loading...</div>
        }
    }
}

export default Navbar;