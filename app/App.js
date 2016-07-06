import './App.less';

import React, { Component } from 'react';
import { getCurrentRoute }  from '/router';
import version              from '/version';


/**
 * ## App
 *
 * main back office component
 *
 * @package Backoffice
 */
export default class App extends Component
{
    /**
     * ## constructor
     *
     * sets the inital state, binds functions, and sets the version
     *
     * @return _Void_
     */
    constructor()
    {
        super();

        this.getCurrentRoute    = getCurrentRoute;
        this.onRouteChange      = this.onRouteChange.bind( this );


        window.addEventListener( 'hashchange', this.onRouteChange.bind( this ) );

        Object.defineProperty( this, 'version', { value : version } );
    }


    /**
     * ## onRouteChange
     *
     * sets the route in the state. linked to 'hashchange'
     *
     * @return _Void_
     */
    onRouteChange()
    {
        this.setState( { route : this.getCurrentRoute() } );
    }


    /**
     * ## render
     *
     * renders the app.  contains the logic for what to show,
     * depending on whether or not you're logged in
     *
     * @return _JSX_
     */
    render()
    {
        return (
            <div class="js-test-div">
            </div>
        );
    }
}


Object.defineProperty( App, 'version', { value : version } );
