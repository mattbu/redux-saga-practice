import './App.css';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux'

import { initPostListResp, getPostList } from './modules/saga/getPostsSaga'

function App({ getPostList, loadingState, initPostListResp, getPostListResp }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const a = getPostList()

    console.log(a, '?');
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
    getPostList,
    initPostListResp
  })(App)
