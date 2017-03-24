/**
 * Created by agam on 23/3/17.
 */
import React from 'react';
import arr from './User'

export default class Display extends React.Component{
    constructor(){
        super();
        this.state={
            edit:false,
        }
      this.editt=this.editt.bind(this)
    }

    editt(){
        this.setState({
            edit:true,
        })
    }

    render(){
        return(

            <div className="container centeralign ">

                <table className="table table-striped shrink">
                    <thead>
                    <th> Task </th>
                    <th> Date </th>
                    <th> Status </th>
                    </thead>
                    <tbody>
                    {this.props.list.map((item,i) =>
                        <tr key={i}>
                            <td>{this.props.userinfo.task}</td>
                            <td>{item.date}</td>
                            <td>{item.status}</td>
                            <td><span className="glyphicon glyphicon-ok " onClick={this.props.stchange.bind(this,i)}> </span></td>

                            <td><span className="glyphicon glyphicon-edit" onClick={this.editt}> </span> </td>

                            <td><span className="glyphicon glyphicon-trash" onClick={this.props.trash.bind(this,i)}> </span></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}