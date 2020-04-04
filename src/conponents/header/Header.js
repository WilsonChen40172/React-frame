import React, { Component }  from 'react';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

            sid: localStorage.getItem("sid"),

        }
    }
    componentDidMount(){
        
    }

    render() {
        return (
            <header>
                <h1>11</h1>
            </header>
        );
    }

}

export default Header;