import React, {Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state ={
        title:this.props.data.title,
        desc:this.props.data.desc
      }
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value})
    }
    render(){
      console.log(this.props.data);
      return(
        <article>  
            <h2>Update</h2>
              <form action="/create_process" method="post" onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value  
                );
                alert("submit")
              }.bind(this)}>
                <legend></legend>
                <p><input 
                  value={this.state.title}
                  onChange={this.inputFormHandler.bind(this)}
                  type="text" 
                  name="title" 
                  placeholder="title"/> 
                </p>
                <p><textarea name="desc" plaplaceholder="description" value={this.state.desc} onChange={this.inputFormHandler.bind(this)}>
                </textarea></p>
                <p><input type="submit"/> </p>
              </form>
        </article>
      );
    }
  }
  
  export default UpdateContent;
