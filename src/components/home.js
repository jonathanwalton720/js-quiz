import React from 'react';
import Category from './category';

export default class Home extends React.Component {
  render() {
    return <div>
          <ul className="list-unstyled">
          <Category />
      <Category />
      <Category />
      </ul>

      </div>;
  }
}
