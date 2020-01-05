import React, {Component} from 'react';
 
 class MyName extends Component{
 	constructor(props){
 		super(props);
 		this.state = {
 			name: "기본값"
 		}
 	}
 	render() {
 		return (
 			<div>제 이름은 <b>{this.props.name}</b> 입니다.</div>
 		);
 	}
 }

export default MyName;