import React from 'react';
import {Row} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class LoginComponent extends React.Component{
    constructor(props){
        super(props);

        this.inputUser = React.createRef();
        this.inputPass = React.createRef();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        let valUser = this.inputUser.current.value;
        let valPass = this.inputPass.current.value;

        if(valUser==="" || valPass===""){
            alert("Please fill the details");
            event.preventDefault();
            return;
        }

        var obj = {
            username : valUser,
            password : valPass
        }

        fetch("http://localhost:8000/login",{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(obj)
        }).then((response) => response.json())
        .then((result) => {
            //Check if the result.Ok is set or not 
            if(result.Ok === "Login Successful"){
                window.localStorage.LoggedIn = "true";
                return this.props.history.push("/user");
            }  
            else{
                alert("Invalid username or password");
            }}
        );
        event.preventDefault();
    }

    render(){
        if(window.localStorage.LoggedIn==="true"){
            window.location.href="/user";
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-md-6 offset-md-3 my-5">
                        <Row className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username" ref={this.inputUser} required/>
                        </Row>

                        <Row className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" ref={this.inputPass} required/>
                        </Row>

                        <Row className="form-group">
                            <button className="btn btn-primary" onClick={this.handleClick}>Login</button>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginComponent);