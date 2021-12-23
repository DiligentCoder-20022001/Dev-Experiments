import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
class Post extends Component {
  state = {
    post: null
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.deletePost(this.props.post.id); // passing the id of post to the fucntion
    //redirect to home 
    this.props.history.push('/');
  }
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className='btn grey' onClick = {this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>

    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  //grab the single induvidual recrod
  //ownProps is the props given to the page before redux 
  let id = ownProps.match.params.post_id; // react router parameter -> remember!!
  return {
    post: state.posts.find(post => post.id === id)
  }
}

//to dispatch an action to make changes to the state
const mapDispatchToProps = (dispatch) => {
  //,no need to say store.dispatch anymore
  return {
    deletePost : (id) => {
      dispatch({type : 'DELETE_POST', id: id})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
