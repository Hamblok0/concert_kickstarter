import React from 'react';


class CampaignEdit extends React.Component {
  render () {
    return(
      <section>
        <form>
          <h3>
            Select Location:
          </h3>
          <select>
            <option value="Nashville">Nashville</option>
          </select>
          <h3>
            Select Date of Gig:
          </h3>
          <input type="date"></input>
          <h3>
            Enter funding goal:
          </h3>
          <input type="text" placeholder="$..."></input>
          <h3>
            Select estimated minimum tickets to sell:
          </h3>
          <select>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>

        </form>

      </section>
    )
  }
}

export default CampaignEdit ;
