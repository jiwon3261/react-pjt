import React, {Component} from 'react';

class PostsForm extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        };
        this.onChange = this.onChange.bind(this);
        
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const post ={
          title:this.state.title,
          body:this.state.body
        }
    /* 전송방식은 post */
        fetch('https://jsonplaceholder.typicode.com/posts',{
          method :"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
      }

    render(){
        const {title,body} = this.state;
        const {onChange} = this;

        return(
            <div>
                <h4>새로운 입력</h4>
                <form action="">
                    <span>title : </span> <input type="text" name="title" value={title} onChange={onChange}/>
                    <br></br>                   
                    <span>body : </span><input type="text" name="body" value={body} onChange={onChange}/>
                    <br></br><button type="submit">전송</button>
                </form>
            </div>
        );
    }
    
}
export default PostsForm;