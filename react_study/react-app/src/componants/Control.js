import React, {Component} from 'react';

class Control extends Component {
    render(){
      return(
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" onClick={function(e){
            e.preventDefault();
            this.props.onChangMode('delete');
          }.bind(this)}/>delete</li>
        </ul>
      );
    }
  }
  export default Control;
