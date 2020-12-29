import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import Ghiphy from 'giphy-api'
import giphyApi from 'giphy-api';


class App extends Component{
    constructor(props){
        super(props);
        this.state ;
        this.search("disney");
    }
    state = {
        gifs: [],
        selectedGif: "9PlRQ45jVjFuTgw28E"
    };
    search=(query)=>{
        giphyApi('Y7aCd9sFS3oEbwKsAhMVqMZDuQDKjkdk').search({
            q: query,
            rating: 'g',
            limit: 20
        }, (error, result) => {
            this.setState ({
            gifs: result.data
            });
        });

    }
    selectedGifFunc=()=>{
        this.setState({
             selectedGif: `${this.Gif.handleClick}`
        });
    }
    render(){
        // const gifs =[
        //     {id: "9PlRQ45jVjFuTgw28E"},
        //     {id: "ToMjGpxfgCJQeVgO9NK/giphy"}
        // ];
        return(
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search}/>
                    <div className="selected-gif">
                        <Gif id={this.selectedGifFunc}/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs}/>
                </div>
            </div>
        );
    }
}
export default App;