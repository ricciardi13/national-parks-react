import React, { Component } from 'react';
import ApiContext from './ApiContext';

class Loading extends Component {
    static contextType = ApiContext;
    render(){
        if( this.context.loading ){
            return(
                <img src="https://thumbs.gfycat.com/ElasticHalfAbyssiniancat-size_restricted.gif" alt="Loading" />
            )
        }
        else{
            return(<></>)
        }    
    }

    
    
}

export default Loading;