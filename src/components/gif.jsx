import React, { Component } from 'react';

class gif extends Component{
    // constructor(props){
    //     super.props;
    //     this.props
    // }
    handleClick = (e) => {
       return `${this.props.selectedGifFunc(e.target.src)}`;
    }
    render(){
        // const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
        return(
            <img src={this.handleClick} alt="" className="gif" onClick={this.handleClick}/>
        );
    }
}

export default gif;