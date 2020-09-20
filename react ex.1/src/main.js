import './css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

 render() {
  const {liked} = this.state;
  return (
    <div onClick={() =>{this.setState({liked: !liked})},
    `${liked ? 'liked' : 'unliked'}`}>
      
    </div>
  );
}
}

const domContainer = document.querySelector('#like');
ReactDOM.render(React.createElement(Like), domContainer);
