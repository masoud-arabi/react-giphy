import React, { Component } from 'react';

class searchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: '' }
    }
    // -- one way binding( old function version type) --
            // handleUpdate(event){
            //     this.setState ({ term: event.target.value});
            //     this.props.searchFunction(event.target.value);
            // }
            // render(){
            //     return(
            //         <input value={this.state.term} type="text" className="form-control form-search" onChange={this.handleUpdate.bind(this)}/>
            //     );
            // }

    // -- second way binding( arrow function version type) --
    handleUpdate = (event) => {
        this.setState ({ term: event.target.value});
        this.props.searchFunction(event.target.value);
    }
    componentDidMount(){
        console.log("did mount")
    }
    componentWillMount(){
        console.log("will mount")
        
    }
    render(){
        console.log("render")
        return(
            <input value={this.state.term} type="text" className="form-control form-search" onChange={this.handleUpdate}/>
        );
    }
}

export default searchBar;
