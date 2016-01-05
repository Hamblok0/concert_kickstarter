import React, { PropTypes } from 'react';
import $ from 'jquery';
import moment from 'moment';
moment().format();

import User from '../models/user';

class Fund extends React.Component {
  constructor(props) {
    super(props);
    this.processPledge = this.processPledge.bind(this);
    this.state = {
      displayBandMsg: false,
      displaySelfMsg: false,
      displayFanMsg: false,
      displayFanErrorMsg: false
    }
  }

  componentDidMount() {
    let pledgeCounter;
  }


  processPledge(e) {
    if (this.props.band.id === this.props.thisBand.band_id) {
      this.setState({
        displaySelfMsg: true
      })
      return;
    } else if (this.props.thisBand.type_of_user === "Band") {
      this.setState({
        displayBandMsg: true
      })
      return;
    } else {
      if(!User.isLoggedIn()) {
        alert('You must be logged in to pledge.');
        this.props.history.pushState(null, 'login');
        return;
      }

      let price = this.props.band.concerts[this.props.band.concerts.length-1].price;
      let pledgeCounter = this.refs.qty.value;
      let totalFunds = pledgeCounter * price;

      if(pledgeCounter) {
        let concert = this.props.band.concerts[this.props.band.concerts.length-1];

        User.pledge({
          quantity: pledgeCounter,
          concertId: concert.id
       }, (error, data) => {
          if(!error) {
            this.setState({
              displayFanMsg: true
            });
            console.log('pledge was successful!');
            // this.props.history.pushState(null, '/');
          } else {
            this.setState({
              displayFanErrorMsg: true
            })
          }
        });
      } else {
        alert('Please select a number of tickets.');
      }
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

    if (!show) {
      return (<div>Loading...</div>)
    }

    let location = show.location;
    let date = show.performance_date;
    let momentTime = moment(date).format('LL');
    let deadline = moment(momentTime).subtract(60, 'days').format('LL');
    let price = '$' + show.price;
    let total = price;

    let bandMsg;
    let fanMsg;
    let selfMsg;
    let fanErrorMsg;

    if (this.state.displayBandMsg) {
      bandMsg = (
        <div className="pledgeMsg bandMsg">
          <i className="fa fa-exclamation-circle"></i><p>Sorry, but you may only pledge a show if you are logged in as a fan. Please log in as a fan to continue.</p>
        </div>
      );
    }

    if (this.state.displayFanMsg) {
      fanMsg = (
        <div className="pledgeMsg fanMsg">
          <i className="fa fa-check-circle"></i><p>Congratulations! You have pledged to attend this show. You will be notified two months before the show with further details.</p>
          <br></br>
          <a href="#/"><p className="return">Return home </p><i className="fa fa-long-arrow-right"></i></a>
        </div>
      );
    }

    if (this.state.displaySelfMsg) {
      selfMsg = (
        <div className="pledgeMsg selfMsg">
          <i className="fa fa-exclamation-circle"></i><p>Sorry, but you may not pledge to attend your own show.</p>
        </div>
      );
    }

    if (this.state.displayFanErrorMsg) {
      fanErrorMsg = (
        <div className="pledgeMsg fanErrorMsg">
          <i className="fa fa-exclamation-circle"></i><p>Sorry, but there was an error. Try again.</p>
        </div>
      );
    }

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
              <h3>{location}</h3>
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
          {bandMsg}
          {selfMsg}
          {fanMsg}
          {fanErrorMsg}
        </div>
      </section>
    )
  }
}

export default Fund;
