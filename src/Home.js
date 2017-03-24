/**
 * Created by agam on 23/3/17.
 */
import React from 'react';
import image1 from './images/image.png'

export default class Home extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
            <div className="container">
                <img src={image1} className="img"/>

            </div>
                <div className="marq">
                    <marquee ><b>Maintain Tasks.Keep Going</b></marquee>
                </div>
            </div>
        );
    }
}