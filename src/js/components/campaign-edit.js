import React from 'react';


class CampaignEdit extends React.Component {
  render () {
    return(
      <section className="profile">
        <article className="campaignList">
          <h1>Campaigns</h1>
          <div className="campBoxEdit">
            <section className="border">
              <span>
                <i className="fa fa-map-marker"></i>
                <h3>Select location: </h3>
                <select>
                  <option value="Nashville">Nashville</option>
                </select>
              </span>
              <span>
                <i className="fa fa-calendar"></i>
                <h3>Select date of gig:</h3>
                <input type="date" />
              </span>
              <span>
                <i className="fa fa-ticket"></i>
                <h3>Enter funding goal:</h3>
              </span>
              <span className="currencyinput">$
                <input type="text" name="currency" placeholder="00.00" />
              </span>
              <span>
                <h3>Select estimated minimum tickets to sell:</h3>
                  <select>
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
            <input type="submit" className="bringBtn" value="Save changes" onClick={this.viewCampaign} />
          </div>
        </article>
      </section>
    )
  }
}

export default CampaignEdit ;
