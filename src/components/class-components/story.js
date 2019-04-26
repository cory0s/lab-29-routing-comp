import React from 'react';
import Details from './details.js';

class Story extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Details>
        <span>THIS </span>
        <span>IS </span>
        <span>AWESOME</span>
      </Details>
    );
  }
}

export default Story;