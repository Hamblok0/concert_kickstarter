import React from 'react';
import {Link} from 'react-router';

class Band extends React.Component {
  render () {
    return (
      <article className="bandItem">
        <Link to={`band/${this.props.id}`}><img src="http://lorempixel.com/115/115/abstract" height="115px" width="115px" className="bandAvatar"/></Link>
        <section className="bandInfo">
          <Link to={`band/${this.props.id}`}><h4 className="bandName">
            {this.props.name}
          </h4></Link>
          <p className="bandDate">December 11th - Nashvegas</p>
          <p className="bandStatus">Status: 5 years until show</p>
          <Link to={`band/${this.props.id}/fund`} className="pledgeBtn">Pledge</Link>
        </section>
      </article>
    )
  }
}

export default Band;
