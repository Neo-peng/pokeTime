import React from 'react'
import {connect} from 'react-redux'

class Post extends React.Component {
  handleClick() {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    ) 
    return (
      <div className="container">
          {post}
          <div className='center'>
            <button className="btn grey" onClick={(e) => this.handleClick(e)}>DELETE POST</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return ({
    post: state.posts.find(post => post.id===parseInt(id))
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    deletePost: (id) => dispatch({type: "DELETE_POST", id: id})
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);