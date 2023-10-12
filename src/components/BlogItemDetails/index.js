import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      title: data.title,
      avatarUrl: data.avatar_url,
      author: data.author,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  getBlogItemDetails = () => {
    const {blogData} = this.state
    const {id, title, avatarUrl, author, imageUrl, content} = blogData

    return (
      <div className="blog-item-container">
        <h1 className="blog-item-title">{title}</h1>
        <div className="blog-item-info">
          <img
            className="blog-item-avatar"
            src={avatarUrl}
            alt={`avatar${id}`}
          />
          <p className="blog-item-author">{author}</p>
        </div>
        <img className="blog-item-img" src={imageUrl} alt={title} />
        <p className="blog-item-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={40} width={40} />
        ) : (
          this.getBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
