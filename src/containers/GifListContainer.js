import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'



export default class GifListContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            term: "",
            gifs: []
        }
    }



    changeInput = (query) => {
        this.setState({
            term: query
        })
        console.log("Typing", this.state.term)
    }

    fetchDataFromApi = (query) => {

        console.log("fetch sent")
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=3&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => this.setState({
            gifs: gifs.data
        }))
    }


    render() {
           const gifList = this.state.gifs.map ( (gif, index) => {
               return <GifList key={index} imageUrl={gif.images.original.url} alt="no image"/>
            })

        return (
            <div className="GifListContainer">
                <GifSearch fetchDataFromApi={this.fetchDataFromApi} changeInput={this.changeInput}/>
                {gifList}
            </div>
        )
    }
}
