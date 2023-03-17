import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props

  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link to={`/blogs/${id}`} className="blog-link-item">
      <li className="blog-item">
        <div className="img-container">
          <img src={imageUrl} alt={`icon${id}`} className="blog-image" />
        </div>
        <div className="details-con">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-con">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
