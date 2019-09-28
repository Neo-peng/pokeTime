import React from 'react'
import axios from 'axios'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    }
  }
  componentDidMount() {
    // 地址通过props传入组件
    const id = this.props.match.params.post_id
    axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => {
        console.log(res)
        this.setState({
          post: res.data,
        })
      })
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4>{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading now...</div>
    )
    return (
      <div className="container">
        <h4 className="center">
          {post}
        </h4>
      </div>
    )
  }
}

export default Post;