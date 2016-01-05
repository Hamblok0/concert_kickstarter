import React from 'react';
import $ from 'jquery';

import User from '../models/user';


class ShowEdit extends React.Component {
  constructor(props) {
    super(props)

    this.sendUpdate = this.sendUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      concert: {}
    }
  }

  componentDidMount() {

        $.ajax(`https://gigster-app.herokuapp.com/concerts/${this.props.params.id}`).then( response => {
          this.setState({
            concert: response
          });
        });
  }

  sendUpdate(e) {
    e.preventDefault();
    let location = this.refs.location.value;
    let date = this.refs.date.value;
    let price = this.refs.price.value;
    let tickets = this.refs.tickets.value;
    let url = `https://gigster-app.herokuapp.com/bands/${this.state.concert.band_id}/concerts/${this.state.concert.id}`;

      User.updateConcert (url, {
        funding_goal: tickets || this.state.concert.funding_goal,
        location: location,
        performance_date: date || this.state.concert.performance_date,
        venue: 'TBA',
        price: price || this.state.concert.price
     }, (error, data) => {
        if(!error) {
          this.props.history.pushState(null, 'band/' + data.band_id);
        } else {
          alert('There was an error with your information.' + error);
          console.log(error);
        }
      });
   }

   handleDelete(e){
     e.preventDefault();

     let data = null;
     let url = `https://gigster-app.herokuapp.com/bands/${this.state.concert.band_id}/concerts/${this.state.concert.id}`

     User.deleteConcert(url, data, (error) => {
       if(!error) {
         this.props.history.pushState(null, 'band/' + this.state.concert.band_id)
       } else {
         alert('Unable to delete campaign');
         console.log(error)
       }
     });
   }

  render () {
    return(
      <section className="profile">
        <article className="campaignList edit">
          <h1>Edit Campaign</h1>
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
                <input ref="date" type="date" placeholder={this.state.concert.performance_date} />
              </span>
              <span>
                <i className="fa fa-ticket"></i>
                <h3>Enter ticket price:</h3>
              </span>
              <span className="currencyinput">$
                <input ref="price" type="text" name="currency" placeholder={this.state.concert.price} />
              </span>
              <span>
                <h3>Select estimated minimum tickets to sell:</h3>
                  <select ref="tickets">
                    <option value="" disabled selected hidden>{this.state.concert.funding_goal}</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                  </select>
              </span>
              <input className="concertDelete" type="button" value="Delete Campaign" onClick={this.handleDelete}></input>
            </section>
            <input type="submit" className="bringBtn" value="Save changes" onClick={this.sendUpdate} />
          </div>
        </article>
      </section>
    )
  }
}

export default ShowEdit;
