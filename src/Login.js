/**
 * Created by agam on 23/3/17.
 */
import React from  'react';


export default class Login extends React.Component{
    constructor(){
        super();

        this.state={
            name:"",
            password:"",
        }
        this.val=this.val.bind(this);
    }

    val(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }


    render(){
        return(
            <div className="back">
            <div className="container ">
                <h1>LOGIN FORM</h1>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name" onChange={this.val} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={this.val} />
                    </div>
                    <button type="button" className="btn btn-warning" onClick={this.props.logindetails.bind(this,this.state.name,this.state.password)}>Login</button>
                </form>
            </div>
            </div>
        );

    }


}