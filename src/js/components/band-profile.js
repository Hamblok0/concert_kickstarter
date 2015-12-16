import React from "react";
import $ from "jquery";
import { Link } from 'react-router';

import BandEdit from './band-edit';


class BandProfile extends React.Component {
  constructor(props) {
    super(props);

    this.goToEdit = this.goToEdit.bind(this);
    this.goToEdit2 = this.goToEdit2.bind(this);

    this.state = {
      band: {}
    }
  }

  componentDidMount(){
    $.ajax(`https://gigster-app.herokuapp.com/bands/${this.props.params.id}`).then( response => {
      let band = response
      this.setState({
        band
      });
      console.log(response);
      console.log(this.state);
    });
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

    let html;
    if (this.props.children) {
      html = React.cloneElement(this.props.children, {band: this.state.band});
    } else {
      html = (
        <div>
          <article className="cover coverEdit">
            <div className="title">
              <h1 className="bandName">{this.state.band.name}</h1>
              <h1 className="bandLoc">{this.state.band.location}</h1>
              <input type="button" className="editBtn" value="Edit Profile" onClick={this.goToEdit}/>
            </div>
            <div className="imgContainer">
              <img className="imgBox" src="images/tame.png"/>
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
                  <h3>{this.state.band.genre}</h3>
                </div>
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
              <a href={`#band/${this.props.params.id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
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
                <a href={`#band/${this.props.params.id}/fund`}><input type="submit" className="bringBtn" value="pledge"></input></a>
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
