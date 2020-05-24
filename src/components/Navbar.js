import React from 'react';
import {withRouter} from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        window.localStorage.LoggedIn = "false";
        window.location.href="/";
    }

    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand">Enjoy</div>
                <button className="ml-auto btn btn-primary" onClick={this.handleClick}>Sign Out</button>
            </nav>
        );
    }
}

export default withRouter(Navbar);