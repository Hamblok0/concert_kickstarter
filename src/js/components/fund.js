import React, { PropTypes } from 'react';
import moment from 'moment';
moment().format();

class Fund extends React.Component {

  handleTotal(e) {
    e.preventDefault();
    let totalTix= this.refs.qty.value;
    let total = totalTix * price;
    console.log(total);
  }

  render () {
    let date = this.props.band.concerts[this.props.band.concerts.length-1].performance_date;
    let momentTime = moment(date).format('LL');
    let deadline = moment(momentTime).subtract(60, 'days').format('LL');
    let price = '$' + this.props.band.concerts[this.props.band.concerts.length-1].price;
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
          <a href="#"><input type="submit" className="bringBtn" value="confirm" onClick={this.onClick}></input></a>
        </div>
      </section>
    )
  }
}

export default Fund;
