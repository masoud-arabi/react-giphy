import React, { Component } from 'react';

class gif extends Component{
    // constructor(props){
    //     super.props;
    //     this.props
    // }
    render(){
        const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
        return(
            <img src={src} alt="" className="gif"/>
        );
    }
}

export default gif;