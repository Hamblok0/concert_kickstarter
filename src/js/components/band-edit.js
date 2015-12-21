
import React, { PropTypes } from 'react';
import createLocation from 'history/lib/createLocation';
import $ from 'jquery';

import User from '../models/user';

class BandEdit extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    let element = this.refs.filepicker;
    filepicker.constructWidget(element);
    element.addEventListener('change', this.handleFilePickerChange, false);
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
    } else {
      alert('Name, location, and genre are required.')
    }
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
        <article className="cover coverEdit">
          <input type="button" className="editBtn" value="Save Changes"
            onClick={this.handleSave}/>
          <div className="title titleEdit">
            <input ref="name" type="text" placeholder="Band Name..." />
            <input ref="location" type="text" placeholder="Your location..." />
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
            <input ref="track" type="text" placeholder="http://soundcloud.com/band-name/track-name" />
            <input ref="video" type="text" placeholder="http://www.youtube.com/your_vid" />
            <section className="genBox">
                <input ref="genre" type="text" placeholder="Genre..." />
            </section>
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
            <a href={`#band/${this.props.params.id}/edit2`}><input type="submit" className="bringBtn" value="Add a gig" /></a>
          </div>
        </article>
    </div>
    )
  }
}

export default BandEdit;
