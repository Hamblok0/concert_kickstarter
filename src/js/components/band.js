import React from 'react';
import {Link} from 'react-router';
let moment = require('moment');
moment().format();

class Band extends React.Component {
  render () {
    let momentTime = moment(this.props.band.concerts.performance_date).fromNow();
    let location = this.props.band.concerts.reduce((total, concert) => {
      let date = concert.performance_date ? concert.performance_date  : 'TBD';
      return `${date} – ${concert.location}`;
    }, 'Location TBD');

    return (
      <article className="bandItem">
        <Link to={`band/${this.props.band.id}`}>
          <img src={this.props.band.avatar_url} alt="Band Photo" height="115px" width="115px" className="bandAvatar"/>
        </Link>
        <section className="bandInfo">
          <Link to={`band/${this.props.band.id}`}><h4 className="bandName">
            {this.props.band.name}
          </h4></Link>
        <p className="bandDate">{location}</p>
          <p className="bandStatus">Status: 5 years until show</p>
          <Link to={`band/${this.props.band.id}`} className="pledgeBtn">Pledge</Link>
        </section>
      </article>
    )
  }
}

export default Band;
