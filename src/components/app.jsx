import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component{
    render(){
        const gifs =[
            {id: "9PlRQ45jVjFuTgw28E"},
            {id: "ToMjGpxfgCJQeVgO9NK/giphy"}
        ];
        return(
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif id="9PlRQ45jVjFuTgw28E"/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={gifs}/>
                </div>
            </div>
        );
    }
}
export default App;