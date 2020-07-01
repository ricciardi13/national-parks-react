import React from 'react';

function Loading( props ){

    if( props.loading ){
        return(
            <img src="https://thumbs.gfycat.com/ElasticHalfAbyssiniancat-size_restricted.gif" alt="Loading" />
        )
    }
    else{
        return(<></>)
    }

    
}

export default Loading;