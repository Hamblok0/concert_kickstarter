import React, { PropTypes } from 'react';
import $ from 'jquery';


class BandEdit extends React.Component {
  constructor(props) {
    super(props);

    this.editMode = this.editMode.bind(this);
    this.viewMode = this.viewMode.bind(this);
    this.viewCampaign = this.viewCampaign.bind(this);
  }

  editMode(e) {
    e.preventDefault();
    console.log('you clicked the edit btn!');

    let bandView = $('.cover');
    let bandEdit = $('.coverEdit');
    let infoView = $('.bandInfo');
    let infoEdit = $('.bandInfoEdit');
    let fundInfoBox = $('.fundInfoBox');

    bandView.toggleClass('hide');
    bandEdit.toggleClass('hide');
    infoView.toggleClass('hide');
    infoEdit.toggleClass('hide');
    fundInfoBox.toggleClass('hide');
  }

  viewMode(e) {
    e.preventDefault();
    console.log('you clicked the save btn!');

    let bandView = $('.cover');
    let bandEdit = $('.coverEdit');
    let infoView = $('.bandInfo');
    let infoEdit = $('.bandInfoEdit');
    let fundInfoBox = $('.fundInfoBox');

    bandView.toggleClass('hide');
    bandEdit.toggleClass('hide');
    infoView.toggleClass('hide');
    infoEdit.toggleClass('hide');
    fundInfoBox.toggleClass('hide');
  }

  viewCampaign(e) {
    e.preventDefault();
    console.log('you clicked the add a gig btn!');

    let gigView = $('.campBox');
    let gigEdit = $('.campBoxEdit');

    gigView.toggleClass('hide');
    gigEdit.toggleClass('hide');
  }


  render () {
    return(
      <div className="bandEdit">
        <article className="cover">
          <input type="button" className="editBtn" value="Edit Profile" onClick={this.editMode}/>
          <div className="title">
            <h1>Band Name | </h1>
            <h1>Location</h1>
          </div>
          <img src="images/tame.png"/>
        </article>

        <article className="coverEdit hide">
          <input type="button" className="editBtn" value="Save Changes" onClick={this.viewMode}/>
          <div className="title">
            <input type="text" placeholder="Band Name..." />
            <input type="text" placeholder="Your location..." />
          </div>
            <input type="text" placeholder="Upload cover photo..." />
            <input type="submit" value="Upload" />
            <img src="images/tame.png"/>
        </article>


        <section className="profile">
          <article className="bandInfo">
            <div className="soundCloud">
              <iframe width="100%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231073377&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
              </iframe>
            </div>
            <div className="youtube">
              <iframe width="420" height="300" src="https://www.youtube.com/embed/XFkzRNyygfk" allowfullscreen></iframe>
            </div>
            <section className="genBox">
              <div className="genre">
                <i className="fa fa-tag"></i>
                <h3>Post-Slow-Noise-Core-Wave</h3>
              </div>
            </section>
          </article>

          <article className="bandInfoEdit hide">
            <input type="text" placeholder="http://www.soundcloud.com/your_track" />
            <input type="text" placeholder="http://www.youtube.com/your_vid" />
            <section className="genBox">
                <input type="text" placeholder="Genre..." />
            </section>
          </article>

          <section className="fundInfoBox">
            <span className="fanSpan">
              <i className="fa fa-users"></i>
              <h3>900</h3>
              <p>fans</p>
            </span>
            <span className="fundSpan">
              <i className="fa fa-ticket"></i>
              <h3>12</h3>
              <p>tickets pledged of 100</p>
            </span>
            <span className="daysSpan">
              <i className="fa fa-calendar"></i>
              <h3>11</h3>
              <p>days to go</p>
            </span>
            <a href="#fund"><input type="submit" className="bringBtn" value="pledge" href="#fund"></input></a>
          </section>
        </section>

        <article className="campaignList">
          <h1>Campaigns</h1>
          <div className="campBox">
            <section className="border">
              <span>
                <i className="fa fa-map-marker"></i>
                <h3>Nashville</h3>
              </span>
              <span>
                <i className="fa fa-calendar"></i>
                <h3>Brovember 11th</h3>
              </span>
              <span>
                <i className="fa fa-ticket"></i>
                <h3>$6 - General Admission</h3>
              </span>
            </section>
            <input type="submit" className="bringBtn" value="Add a gig" onClick={this.viewCampaign}/>
          </div>

          <div className="campBoxEdit hide">
            <section className="border">
              <span>
                <i className="fa fa-map-marker"></i>
                <input type="text" placeholder="Enter show location..." />
              </span>
              <span>
                <i className="fa fa-calendar"></i>
                <input type="date" />
              </span>
              <span>
                <i className="fa fa-ticket"></i>
                <h3>Enter ticket price</h3>
              </span>
              <span className="currencyinput">$
                <input type="text" name="currency" placeholder="0.00" />
              </span>
            </section>
            <input type="submit" className="bringBtn" value="Save changes" onClick={this.viewCampaign} />
          </div>
        </article>
    </div>
    )
  }
}

export default BandEdit;
