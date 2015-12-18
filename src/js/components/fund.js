
import React, { PropTypes } from 'react';


class Fund extends React.Component {


  render () {

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
              <p className="bandDate">{this.props.band.concerts[0].performance_date}</p>
            </span>
            <span>
              <i className="fa fa-ticket"></i>
              <p className="tickets">$6 - General Admission</p>
              <p className="tickets"> Remaining</p>
            </span>
            <div className="deadBox">
              <p className="warn">Funding Deadline:</p>
              <p>October 11th</p>
            </div>
            <div className="pledge">
              <select ref="qty">
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
              <p>$6 - General Admission</p>
              <p>Total:</p>
            </div>
          </section>
          <a href="#"><input type="submit" className="bringBtn" value="confirm" onClick={this.onClick}></input></a>
        </div>
      </section>
    )
  }
}

export default Fund;
