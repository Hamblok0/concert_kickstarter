import React from 'react';
import moment from 'moment';
moment().format();




class Campaign extends React.Component {
  constructor(props) {
    super(props)

    this.editCampaign = this.editCampaign.bind(this);
    this.returnToPage = this.returnToPage.bind(this);



  }

  editCampaign(e){
    html = (
      <section className="border">
        <span>
          <i className="fa fa-map-marker"></i>
          <input type="text" className="concertLoc" placeholder="City" />
        </span>
        <span>
          <i className="fa fa-calendar"></i>
          <input type="date" ref="date" />
        </span>
        <span>
          <i className="fa fa-ticket"></i>
          <input type="text" className="tix" />
        </span>
        <a href={`#band/${id}`}><input type="submit" className="saveBtn" value="Save" onClick={this.returnToPage}></input></a>
      </section>
    )
  }

  returnToPage(e){
    html= (
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
         </section>)

  }

  render () {
    html;
    id = this.props.bandId;
    date = this.props.concert.performance_date
    momentTime = moment(date).format('LL');
    price = "$" + this.props.concert.price;
    concertEdit;
    if (this.props.bandId === this.props.thisBandId) {
     concertEdit = <input className="concertEdit" type="button" value="Edit Campaign" onClick={this.editCampaign}></input>
    }
      html = (    <section className="border">
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
        </section>);


    return (
        {html}
    )
  }
}

export default Campaign  ;
