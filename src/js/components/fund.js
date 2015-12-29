import React, { PropTypes } from 'react';
import moment from 'moment';
moment().format();

import User from '../models/user';

class Fund extends React.Component {
  constructor(props) {
    super(props);
    this.processPledge = this.processPledge.bind(this);
  }

  componentDidMount() {
    let pledgeCounter;
  }


  processPledge(e) {
    if (this.props.band.id === this.props.thisBand.band_id) {
      alert("Sorry, you cannot pledge to your own show")
      return;
    } else if (this.props.thisBand.type_of_user === "Band") {
      alert("Sorry, you cannot pledge to other bands as a band, please register as a fan to continue")
      return;
    } else {
      if(!User.isLoggedIn()) {
        alert('You must be logged in to pledge.')
        this.props.history.pushState(null, 'login');
        return
      }
      alert("pledge complete");
      console.log(this.refs.qty.value);
      let price = this.props.band.concerts[this.props.band.concerts.length-1].price;
      let pledgeCounter = this.refs.qty.value;
      let totalFunds = pledgeCounter * price;
      console.log('$' + totalFunds + ' has been added to total_funds key.');

      if(pledgeCounter) {
        let concert = this.props.band.concerts[this.props.band.concerts.length-1];
        console.log('props: ',this.props);
        User.pledge({
          count: pledgeCounter,
          concertId: concert.id
       }, (error, data) => {
          if(!error) {
            this.props.history.pushState(null, '/');
          } else {
            alert('There was an error with your information.' + error);
          }
        });
      } else {
        alert('Please select a number of tickets.');
      }
      //make a PUT request to the current concert:
        //update the 'pledge_key' with running total of tickets
        //update the 'total_funds' with running total of money.
    //write another function (or do it in here):
        //after everytime 'total_funds' is updated,
        //compare 'total_funds' to 'funding_goal'.
        //if they are equal, update 'successful' key to true.
    }
  }
  handleTotal(e) {
    e.preventDefault();
    let totalTix= this.refs.qty.value;
    let total = totalTix * price;
    console.log(total);
  }

  render () {
    let show = this.props.band.concerts[this.props.band.concerts.length-1];
    let date = show.performance_date;
    let momentTime = moment(date).format('LL');
    let deadline = moment(momentTime).subtract(60, 'days').format('LL');
    let price = '$' + show.price;
    console.log(price);
    let total = price;

    return(
      <section className="fund">
        <div className="campBox">
          <h1>Confirm your tickets</h1>
          <section className="border">
            <span>
              <i className="fa fa-bolt"></i>
              <h3 className="title">{this.props.band.name}</h3>
            </span>
            <span>
              <i className="fa fa-map-marker"></i>
              <h3>{this.props.band.location}</h3>
            </span>
            <span>
              <i className="fa fa-calendar"></i>
              <p className="bandDate">{momentTime}</p>
            </span>
            <span>
              <i className="fa fa-ticket"></i>
              <p className="tickets">{price}</p>
              <p className="tickets"> - General Admission</p>
            </span>
            <div className="deadBox">
              <p className="warn">Funding Deadline:</p>
              <p>{deadline}</p>
            </div>
            <div className="pledge">
              <select ref="qty" onChange={this.handleTotal}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <p>{price}</p>
              <p>- General Admission</p>
              <p>Total:</p>
              <p>{total}</p>
            </div>
          </section>
          <input type="submit" className="bringBtn" value="confirm" onClick={this.processPledge}></input>
        </div>
      </section>
    )
  }
}

export default Fund;
