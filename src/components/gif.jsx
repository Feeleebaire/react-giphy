import React, {Component} from 'react';

class Gif extends Component{

  render(){
    let src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className= "gif"/>
    );
  }
}

export default Gif;
