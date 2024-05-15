import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NavBar from './nav-bar';
import Home from './home';

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/posts/:postID" element={<Post />} /> */}
          <Route path="*" element={<FallBack />} />
          {/* <Route path="/posts/search/:queryString" element={<SearchResults />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
