import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogContent = () => {
    const {blogData} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="blog-content">
        <h1 className="blog-head">{title}</h1>
        <div className="profile-head">
          <img
            src={avatarUrl}
            alt={`blog avatar${id}`}
            className="profile-pic"
          />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-icon" />
        <p className="blog-desc">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-main-con">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogContent()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
