import React, { PropTypes } from 'react';
import $ from 'jquery';


class BandEdit extends React.Component {
  constructor(props) {
    super(props);

    this.editMode = this.editMode.bind(this);
    this.viewMode = this.viewMode.bind(this);
    this.viewCampaign = this.viewCampaign.bind(this);
  }

  componentDidMount() {
    let element = this.refs.filepicker;
    element.addEventListener('change', this.handleFilePickerChange, false);
  }

  componentWillUnmount() {
    let element = this.refs.filepicker;
    element.removeEventListener('change', this.handleFilePickerChange, false);
  }

  editMode(e) {
    e.preventDefault();
    console.log('you clicked the edit btn!');

    let bandView = $('.cover');
    let bandEdit = $('.coverEdit');
    let infoView = $('.bandInfo');
    let infoEdit = $('.bandInfoEdit');
    let fundInfoBox = $('.fundInfoBox');
    let uploadBtn = $('.fp__btn button');

    bandView.toggleClass('hide');
    bandEdit.toggleClass('hide');
    infoView.toggleClass('hide');
    infoEdit.toggleClass('hide');
    fundInfoBox.toggleClass('hide');
    uploadBtn.html('Upload photo');
  }



  viewMode(e) {
    e.preventDefault();
    console.log('you clicked the save btn!');

    let bandView = $('.cover');
    let bandEdit = $('.coverEdit');
    let infoView = $('.bandInfo');
    let infoEdit = $('.bandInfoEdit');
    let fundInfoBox = $('.fundInfoBox');
    let bandInput = this.refs.bandInput;
    let locationInput = this.refs.locInput;
    let bandName = $('.bandName');
    let bandLoc = $('.bandLoc');

    bandView.toggleClass('hide');
    bandEdit.toggleClass('hide');
    infoView.toggleClass('hide');
    infoEdit.toggleClass('hide');
    fundInfoBox.toggleClass('hide');
    bandName.html(bandInput.value);
    bandLoc.html(locationInput.value);

  }

  viewCampaign(e) {
    e.preventDefault();
    console.log('you clicked the add a gig btn!');

    let gigView = $('.campBox');
    let gigEdit = $('.campBoxEdit');

    gigView.toggleClass('hide');
    gigEdit.toggleClass('hide');
  }

  handleFilePickerChange(data) {
    console.log(data.fpfile.url);
    let url = data.fpfile.url;
    let imgBox = $('.imgBox');
    let divHide = $('.textBox');

    imgBox.attr('src', 'https://process.filepicker.io/l5uQ3k7FQ5GoYCHyTdZV/crop=dim:[0,0,1800,300]/resize=h:300/' + url);
    divHide.hide();
  }

  render () {
    return(
      <div className="bandEdit">
        <article className="cover">
          <input type="button" className="editBtn" value="Edit Profile" onClick={this.editMode}/>
          <div className="title">
            <h1 className="bandName" onClick={this.editMode}>Band Name</h1>
            <h1 className="bandLoc" onClick={this.editMode}>Location</h1>
          </div>
          <div className="imgContainer">
            <img className="imgBox" src="images/camera.jpg"/>
          </div>
          <div className="textBox">
            <p onClick={this.editMode}>Upload a cover photo.</p>
          </div>
        </article>

        <article className="coverEdit hide">
          <input type="button" className="editBtn" value="Save Changes" onClick={this.viewMode}/>
          <div className="title">
            <input ref="bandInput" type="text" placeholder="Band Name..." />
            <input ref="locInput" type="text" placeholder="Your location..." />
          </div>
          <p>Update cover photo:</p>
          <input ref="filepicker" type="filepicker" data-fp-apikey="AHqgbWUAATSCgbyRYc8Sbz" />
          <div className="imgContainer">
            <img className="imgBox" src="images/camera.jpg"/>
          </div>
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
                <input type="text" placeholder="Genre..." onClick={this.editMode}/>
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
