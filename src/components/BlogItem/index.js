import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="item">
        <img className="item-img" src={imageUrl} alt={`item${id}`} />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img className="avatar-img" src={avatarUrl} alt={`avatar${id}`} />
            <p className="item-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
