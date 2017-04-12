import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Post from '../page1/Container';
import NewPost from '../page2/Container1';
import Posts from '../page3/Container2';

const Nav = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Posts</Link></li>
        <li><Link to="/newPost">NewPost</Link></li>
      </ul>
      <Route exact path="/" component={Posts} />
      <Route path="/newPost" component={NewPost} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
);


export default Nav;
