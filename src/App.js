import './App.css';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { getPostList } from './modules/saga/getPostsSaga'

function App({ loadingState, getPostListResp }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
  }, [])

  return (
    <>
      <div>
        <ul>
          {/* {posts.map(post => {
            return <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </li>
          })} */}
        </ul>
      </div>
    </>
  )
}

export default connect(({ apiGetPostListResp, loadingState }) => ({
  loadingState: loadingState['posts/GET_POSTS'],
  getPostListResp: apiGetPostListResp.getPostListResp
}),
  {
    getPostList
  })(App)
