import React from "react";
import $ from "jquery";
import { Link } from 'react-router';


import User from '../models/user';
import BandEdit from './band-edit';
import CampaignList from './campaign-list';


class BandProfile extends React.Component {
  constructor(props) {
    super(props);

    this.goToEdit = this.goToEdit.bind(this);
    this.goToEdit2 = this.goToEdit2.bind(this);
    this.handleMe = this.handleMe.bind(this);
    this.trackId = this.trackId.bind(this);
    this.videoId = this.videoId.bind(this);

    this.state = {
      trackId: null,
      band: {
        concerts: []
      },
      thisBand: {}
    }
  }

  componentDidMount(){
    $.ajax(`https://gigster-app.herokuapp.com/bands/${this.props.params.id}`).then( response => {
      let band = response;
      console.log();
      this.setState({
        band,
        concerts: band.concerts[0]
      });
      const Client_ID = '16184569b31c47388a9b9e9c358a0f9d';
      let trackUrl = this.state.band.audio_url;
      let videoUrl = this.state.band.video_url;
      let url = `http://api.soundcloud.com/resolve.json?url=${this.state.band.audio_url}&client_id=${Client_ID}`;
      let url2 = `https://www.youtube.com/oembed?url=${this.state.band.video_url}&format=json`;
      this.trackId(url);
      this.videoId(videoUrl);
    })

  User.getMe(this.handleMe)
}

  handleMe(response) {
    this.setState({
      thisBand: response
    });
  }

  trackId(url) {
    $.ajax(url).then( response => {
      this.setState({trackId: response.id})
    })
  }

  videoId(videoUrl) {
    let newString = videoUrl.substring(videoUrl.lastIndexOf("v=")+2);
    this.setState({videoId: newString})
  }

  goToEdit(e){
    this.props.history.pushState(null, `band/${this.props.params.id}/edit`);
  }

  goToEdit2(e){
    this.props.history.pushState(null, `band/${this.props.params.id}/edit2`);
  }

  // handleSave(data).then(response => {
  //     data.setState = response;
  //     done(null, response);
  //   })


  render() {
    let concerts = this.state.band.concerts;
    console.log(concerts);
    let html;
    let edit;
    let edit2;
    let campList;
    var start = moment.get('date')
    console.log(start);
    if (this.state.band.id === this.state.thisBand.band_id) {
      edit2 = <a href={`#band/${this.props.params.id}/edit2`}><input type="submit" className="bringBtn" value="add a gig"></input></a>;
      edit = <input type="button" className="editBtn" value="Edit Profile" onClick={this.goToEdit}/>;
    }

    if (this.props.children) {
      html = React.cloneElement(this.props.children, {band: this.state.band, thisBand: this.state.thisBand});
    } else {

      html = (
        <div>
          <article className="cover coverEdit">
            <div className="title">
              <h1 className="bandName">{this.state.band.name}</h1>
              <h1 className="bandLoc">{this.state.band.location}</h1>
              {edit}
            </div>
            <div className="imgContainer">
              <img className="imgBox" src={this.state.band.avatar_url}/>
            </div>
          </article>
          <section className="profile">
            <article className="bandInfo">
              <div className="soundCloud">
                <iframe width="100%" height="150" scrolling="no" frameborder="no" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.state.trackId}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`}>
                </iframe>
              </div>
              <div className="youtube">
                <iframe width="420" height="300" src={`https://www.youtube.com/embed/${this.state.videoId}`} allowfullscreen></iframe>
              </div>
              <section className="genBox">
                <div className="genre">
                  <i className="fa fa-tag"></i>
                  <h3>{this.state.band.genre}</h3>
                </div>
              </section>
            </article>

            <section className="fundInfoBox">
              <span className="fanSpan">
                <i className="fa fa-users"></i>
                <h3>{this.state.band.fanship}</h3>
                <p>fans</p>
              </span>
              <span className="fundSpan">
                <i className="fa fa-ticket"></i>
                <h3>12</h3>
                <p>tickets pledged of {this.props.band.concerts[0].funding_goal}</p>
              </span>
              <span className="daysSpan">
                <i className="fa fa-calendar"></i>
                <h3></h3>
                <p>days to go</p>
              </span>
              <a href={`#band/${this.props.params.id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
            </section>
            </section>
            <article className="campaignList">
              <h1>Campaigns</h1>
              <div className="campBox">
                <CampaignList band={this.state.band} />
                {edit2}
              </div>
            </article>
        </div>
      )
    }
    return (
      <section className="bandProfile">
        {html}
      </section>
    )
  }
}

export default BandProfile;
