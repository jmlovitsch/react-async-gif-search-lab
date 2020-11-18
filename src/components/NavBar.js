import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor(props){
       super()
       this.state = {
        colors: {
            black: 'navbar-inverse',
            white: 'navbar-default'
       }
    };
}

    render() {
        const {black, white} = this.state.colors
        return (
         <nav className= {this.props.color==='black'? black : white}>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <a className='navbar-brand'>
                  {this.props.title}
                </a>
              </div>
            </div>
          </nav>
        )
    }
}
