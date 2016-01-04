import React from 'react';

import Campaign from './campaign';

class CampaignList extends React.Component {
  render () {

    if (!this.props.band.concerts.length){
      return (
        <section className="border">
          <h1>No Campaigns At This Time</h1>
        </section>
        )
    }

    let campaigns = this.props.band.concerts.map(concert => {
      return (
        <Campaign key={concert.id} concertId={concert.id} concert={concert} bandId={this.props.band.id} thisBandId={this.props.thisBand.band_id}/>
      )
    });

    return (
      <div className="campBox">
        {campaigns}
      </div>
    )
  }

}

export default CampaignList;
