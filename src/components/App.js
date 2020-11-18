import NavBar from './NavBar'

import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar color='black' title="Giphy Search" />
                <GifListContainer />
            </div>
        )
    }
}
