import React from 'react';
import {Link} from 'react-router';
// let moment = require('moment');
// moment().format();
// moment(date).fromNow();
import moment from 'moment';

class Band extends React.Component {
  render () {
    let soonestConcert = this.props.band.concerts.reduce((previous, concert) => {
      if (concert.performance_date) {
        let concertDate = moment(concert.performance_date);
        if (concertDate.isAfter(moment())) {
          if (!previous.performance_date) {
            return {location: concert.location, performance_date: concert.performance_date, successful: concert.successful};
          } else if (concertDate.isBefore(moment(previous.performance_date))) {
            return {location: concert.location, performance_date: concert.performance_date, successful: concert.successful}
          }
        }
      }
      return previous
    }, {location:null, performance_date: null, successful: false});
    let formattedDate = 'TBD';
    let status = 'No current concerts';
    if(soonestConcert.performance_date) {
      formattedDate = moment(soonestConcert.performance_date).fromNow();
    }
    if(soonestConcert.successful === false) {
      status = 'Currently Funding';
    } else if (soonestConcert.successful === true) {
      status = 'Successfully Funded';
    }

    return (
      <article className="bandItem">
        <Link to={`band/${this.props.band.id}`}>
          <img src={this.props.band.avatar_url} alt="Band Photo" height="115px" width="115px" className="bandAvatar"/>
        </Link>
        <section className="bandInfo">
          <Link to={`band/${this.props.band.id}`}><h4 className="bandName">
            {this.props.band.name}
          </h4></Link>
        <p className="bandDate"> {soonestConcert.location || 'Location TBD'} • Deadline {formattedDate}</p>
          <p className="bandStatus">Status: {status}</p>
          <Link to={`band/${this.props.band.id}`} className="pledgeBtn">Pledge</Link>
        </section>
      </article>
    )
  }
}

export default Band;
