/**
 * Created by David on 8/30/2016.
 */
"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function (transitions, params, query, callback) {
            if(!confirm('Are you sure you want to read a page that\'s this boring?')){
                transitions.about();
            } else {
                callback();
            }
        },
        willTransitionFrom: function (transitions, component) {
            if(!confirm('Are you sure you want to leave a page that\'s this exciting?')){
                transitions.about();
            }
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;