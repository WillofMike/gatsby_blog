import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h2>Create a Post</h2>
    <form>
      <label>
        Blog Title:
        <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
      <label>
        <br />
        Blog Description:
        <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
    </form>
    <Link
      to="/"
      style={{
        textDecoration: 'none',
      }}
    >Go back to the homepage</Link>
  </div>
)

export default SecondPage
