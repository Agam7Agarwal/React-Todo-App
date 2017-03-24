/**
 * Created by agam on 23/3/17.
 */

import React from 'react';

export default class Head extends React.Component {

    constructor() {
        super();

    }


    render() {

        return (


            <div className="container-fluid cen">

                <button className="btn btn-danger navbar-btn " onClick={this.props.showform}>ADD TASK</button>
                <br/>
                <hr/>
            </div>


        );
    }
}