import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios';



class SecondPage extends React.Component {
  constructor() {
    super()
    this.state = {
      title: null,
      description: null,
    }
  }

  setTitle = (event) => this.setState({ title: event.target.value })
  setDesc = (event) => this.setState({ description: event.target.value })
  submit = () => {
    const data = {...this.state}
    axios.post(`https://gatsby-api.herokuapp.com/post`, data)
      .then(res => console.log('the res', res))
      .catch(err => console.log('error!', err))
  }
  render() {
    console.log('the state', this.state)
    return (
      <div>
        {/* { this.props.data.mongodbGatsbyBlogUser.title } */}
        <h2>Create a Post</h2>
          <label>
            Blog Title:
            <input type="text" name="title" onChange={this.setTitle} />
          </label>
          <label>
            <br />
            Blog Description:
            <textarea name="description" onChange={this.setDesc} />
          </label>
          <button onClick={this.submit}>SUBMIT</button>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          >
            Go back to the homepage
        </Link>
      </div>
    );
  }
}

export default SecondPage
