import React from 'react';
import {Link} from 'react-router-dom';

export default class Category extends React.Component {
  render() {
    return       <li className="media">
    <Link className="d-flex" to="/quiz">
      <img src="http://via.placeholder.com/64x64" alt="" />
    </Link>
    <div className="media-body">
      <h5>Quiz 1</h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo quos non, nam error repellendus? Laboriosam, nihil
      modi natus reiciendis accusamus eligendi soluta suscipit. Et quasi laboriosam dignissimos maxime iure.
    </div>
  </li>;
  }
}
