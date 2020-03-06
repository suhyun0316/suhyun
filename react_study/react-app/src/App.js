import React, {Component} from 'react';
import TOC from './componants/TOC';
import Subject from './componants/Subject';
import ReadContent from './componants/ReadContent';
import CreateContent from './componants/CreateContent';
import Control from './componants/Control';
import UpdateContent from './componants/UpdateContent';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state = {
      mode:'welcome',
      selected_content_id:2,
      subject:{title:"web", sub:"world wide web!"},
      welcome:{title:'welcome',desc:'hello, React!!'},
      contents:[ 
        {id:1, title:'HTML', desc:"HTML is information"},
        {id:2, title:'CSS', desc:"CSS is Design"},
        {id:3, title:'javaScript', desc:"javaScript is interactive"}
      ]
    }
  }
  getReadContent(){
    var i = 0;
      
      while( i <this.state.contents.length){
        var data=this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
          break;
        }
        i = i + 1; 
      }
  }
  getContent(){
    var _title,_desc, _article= null;
    if(this.state.mode === 'welcome'){
      _title =this.state.welcome.title;
      _desc =this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if(this.state.mode === 'read'){
      var _content=this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'create'){
      _article= <CreateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id+1;
       // this.state.contents.push(
       //   {id:this.max_content_id, title:_title, desc:_desc}
      //);
      {/*var _contents =this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc}
      )*/}
      var newContents =Array.from(this.state.contents);
      newContents.push({id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          contents:newContents
        });
      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode === 'update'){
      _content=this.getReadContent();
      _article= <UpdateContent data={_content} onSubmit={function(_title, _desc){
        console.log(_title, _desc)
        this.max_content_id = this.max_content_id+1;
       // this.state.contents.push(
       //   {id:this.max_content_id, title:_title, desc:_desc}
      //);
      {/*var _contents =this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc}
      )*/}
      var newContents =Array.from(this.state.contents);
      newContents.push({id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          contents:newContents
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render(){
    
    return(
       <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={function(){this.setState({mode:'welcome'})}.bind(this)}></Subject>
        
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
        });
        }.bind(this)}data={this.state.contents}></TOC>
        <Control onChangMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents= Array.from(this.state.contents);
              var i = 0;
              while( i < _contents.length){
                if(_contents[i].id=== this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          }else{
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}></Control>
        {this.getContent()}
       </div>
    );
  }
}
export default App;
