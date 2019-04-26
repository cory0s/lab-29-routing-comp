import React from 'react';

class Details extends React.Component{
  
  render(){
    return(
      <>
        <div>
          {this.props.children}
        </div>
      </>
    )
  }

}

export default Details;