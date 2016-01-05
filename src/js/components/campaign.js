import React from 'react';
import moment from 'moment';
moment().format();



class Campaign extends React.Component {



  render () {
    let concertDelete;
    let concertEdit;
    let id = this.props.bandId;
    let date = this.props.concert.performance_date
    let momentTime = moment(date).format('LL');
    let price = "$" + this.props.concert.price;
    if (this.props.bandId === this.props.thisBandId) {
     concertEdit = <a href={`#band/${this.props.concert.id}/editcampaign`}><input className="concertEdit" type="button" value="Edit Campaign" ></input></a>
  }
    return (
      <section className="border">
        {concertEdit}
        <span>
          <i className="fa fa-map-marker"></i>
          <h3>{this.props.concert.location}</h3>
        </span>
        <span>
          <i className="fa fa-calendar"></i>
          <h3>{momentTime}</h3>
        </span>
        <span>
          <i className="fa fa-ticket"></i>
          <i>{price}</i>
          <h3> - General Admission</h3>
        </span>
        <a href={`#band/${id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
      </section>
    )
  }
}

export default Campaign  ;
