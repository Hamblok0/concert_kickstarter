import React from 'react';

import User from '../models/user';

class CampaignEdit extends React.Component {
  constructor(props) {
    super(props);

    this.handleConcertCreate = this.handleConcertCreate.bind(this);
  }

  handleConcertCreate(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    let date = this.refs.date.value;
    let price = this.refs.price.value;
    let tickets = this.refs.tickets.value;
    console.log('Congrats! You added a new concert! Here are the details. Date: ' + date + ' Location: ' + location + ' Ticket price: $' + price + ' Ticket goal: ' + tickets);

    if(location && date && price && tickets) {
      User.updateConcerts({
        funding_goal: tickets,
        location: location,
        performance_date: date,
        venue: 'TBA',
        price: price
     }, (error, data) => {
        if(!error) {
          this.props.history.pushState(null, 'band/' + data.id);
        } else {
          alert('There was an error with your information.' + error);
          console.log(error);
        }
      });
    } else {
      alert('Show location, date, ticket price, and ticket goal are required.')
    }
  }

  render () {
    return(
      <section className="profile">
        <article className="campaignList edit">
          <h1>Add A Campaign</h1>
          <div className="campBoxEdit">
            <section className="border">
              <span>
                <i className="fa fa-map-marker"></i>
                <h3>Select location: </h3>
                <select ref="location">
                  <option value="Nashville">Nashville</option>
                </select>
              </span>
              <span>
                <i className="fa fa-calendar"></i>
                <h3>Select date of gig:</h3>
                <input ref="date" type="date" />
              </span>
              <span>
                <i className="fa fa-ticket"></i>
                <h3>Enter ticket price:</h3>
              </span>
              <span className="currencyinput">$
                <input ref="price" type="text" name="currency" placeholder="00.00" />
              </span>
              <span>
                <h3>Select estimated minimum tickets to sell:</h3>
                  <select ref="tickets">
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                  </select>
              </span>
            </section>
            <input type="submit" className="bringBtn" value="Save changes" onClick={this.handleConcertCreate} />
          </div>
        </article>
      </section>
    )
  }
}

export default CampaignEdit ;
