import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props) {
        super()
        this.state = {
            query: ""
        }

    }

    sendFetch = (event) => {
        event.preventDefault()
        this.props.fetchDataFromApi(this.state.query)
    }

    handleChange = (event) => {
    event.persist()
    this.setState({
        query: event.target.value
    })
    console.log(this.state.query)
    }

    render() {
        return (
            <div>
                Enter a Search Term
                <form onSubmit={this.sendFetch} >
                    <input name="search"  placeholder="type here" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
