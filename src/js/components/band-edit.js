
import React, { PropTypes } from 'react';
import createLocation from 'history/lib/createLocation';
import $ from 'jquery';

import User from '../models/user';

class BandEdit extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

    this.state = {
      band: {}
    }
  }

  componentDidMount() {
    let element = this.refs.filepicker;
    filepicker.constructWidget(element);
    element.addEventListener('change', this.handleFilePickerChange, false);
    $.ajax(`https://gigster-app.herokuapp.com/bands/${this.props.params.id}`).then( response => {
      this.setState({
        band: response
      });
    });
  }

  componentWillUnmount() {
    let element = this.refs.filepicker;
    element.removeEventListener('change', this.handleFilePickerChange, false);
  }

  handleSave(e){
    e.preventDefault();
    console.log('you clicked the save btn!');

    let name = this.refs.name.value;
    let location = this.refs.location.value;
    let avatar_url = this.refs.filepicker.value;
    let genre = this.refs.genre.value;
    let audio_url = this.refs.track.value;
    let video_url = this.refs.video.value;

    console.log(name, location, avatar_url, audio_url, genre, video_url);

    if(name && location && genre) {
      User.updateProfile({
        name: name,
        location: location,
        avatar_url: avatar_url,
        genre: genre,
        video_url: video_url,
        audio_url: audio_url,
        public: true
     }, (error, data) => {
        if(!error) {
          this.props.history.pushState(null, 'band/' + data.id);
        } else {
          alert('There was an error with your information.' + error);
          console.log(error);
        }
      });
    } else if((!name || !location || !genre ) && (this.props.band.name !== null && this.props.band.location !== null && this.props.band.genre !== null)) {
      User.updateProfile({
        name: name || this.props.band.name,
        location: location || this.props.band.location,
        avatar_url: avatar_url || this.props.band.avatar_url,
        genre: genre || this.props.band.genre,
        video_url: video_url || this.props.band.video_url,
        audio_url: audio_url || this.props.band.audio_url,
        public: true
     }, (error, data) => {
        if(!error) {
          this.props.history.pushState(null, 'band/' + data.id);
        } else {
          alert('There was an error with your information.' + error);
        }
      });
  } else {
      alert('Name, location, and genre are required.')
    }
  }

  handleFilePickerChange(data) {
    let url = data.fpfile.url;
    let imgBox = $('.imgBox');
    let divHide = $('.textBox');

    imgBox.attr('src', 'https://process.filepicker.io/l5uQ3k7FQ5GoYCHyTdZV/crop=dim:[0,0,1800,300]/resize=h:300/' + url);
    divHide.hide();
  }

  render () {
    return(
      <div className="bandEdit">
        <article className="cover coverEdit">
          <input type="button" className="editBtn" value="Save Changes"
            onClick={this.handleSave}/>
          <div className="title titleEdit">
            <input ref="name" type="text" placeholder={this.props.band.name} />
            <input ref="location" type="text" placeholder={this.props.band.location} />
          </div>
          <p>Update cover photo:</p>
          <input ref="filepicker" type="filepicker" data-fp-apikey="AHqgbWUAATSCgbyRYc8Sbz" />
          <div className="imgContainer">
            <img className="imgBox" src="images/camera.jpg"/>
          </div>
          <div className="textBox">
            <p className="pic" onClick={this.editMode}>Upload a cover photo.</p>
          </div>
        </article>
        <section className="profile">
          <article className="bandInfo bandInfoEdit">
            <label>Upload a track from SoundCloud: </label>
            <input ref="track" type="text" placeholder={this.props.band.audio_url} />
            <label>Add a music video from YouTube: </label>
            <input ref="video" type="text" placeholder={this.props.band.video_url} />
            <label>Add a genre to describe your music: </label>
            <input ref="genre" type="text" placeholder={this.props.band.genre} />
          </article>
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
            <a href={`#band/${this.props.params.id}/edit2`}><input type="submit" className="bringBtn addGig" value="Add a gig" /></a>
          </div>
        </article>
    </div>
    )
  }
}

export default BandEdit;
