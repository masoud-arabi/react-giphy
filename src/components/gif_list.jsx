import React,{ Component } from "react";
import Gif from "./gif.jsx"

class gifList extends Component{
    render(){
        return this.props.gifs.map(gif => {
            return <Gif id={gif.id} />
        });
    }
}

export default gifList;