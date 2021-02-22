import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGIFs={this.fetchGIFs} />
            </div>
        )
    }

    fetchGIFs() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=tVBzIMaSu4uCRADceP9mC2eLT03e7v30')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: data.map( gif => ({ url: gif.images.original.url }) )
                })
            })
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}

export default GifListContainer;
