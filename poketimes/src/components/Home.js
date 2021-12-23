import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import {connect} from 'react-redux';
class Home extends Component {
  //we ll be having a central store for data
  componentDidMount(){
  }
  render(){
    console.log(this.props);
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

//data from redux store is mappped to the props 
const mapStateToProps = (state) => {
  return {
    posts : state.posts,
  }
}
//connect is a function which returns a component
export default connect(mapStateToProps)(Home);