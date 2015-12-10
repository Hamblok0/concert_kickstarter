import React from "react";

class BandProfile extends React.Component {
  render() {
    let html;
    if (this.props.children) {
      html = this.props.children
    } else {
      html = (

          <div>
            <article className="cover">
              <div>
                <h1>Your Band | Your City</h1>
                <button name="Edit Profile"></button>
              </div>
              <img src="http://antikhobi.com/wp-content/uploads/2014/07/img_placeholder21.png"/>
            </article>
            <article className="bandInfo">
              <div className="soundCloud"><iframe width="100%" height="100" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/231073377&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe></div>
              <div className="youtube"><iframe width="420" height="315" src="https://www.youtube.com/embed/XFkzRNyygfk" frameborder="0" allowfullscreen></iframe></div>

              <section className="locGenBox">
                <div className="genre">
                  <i className="fa fa-tag"></i>
                  <h3>Post-Slow-Noise-Core-Wave</h3>
                </div>
              </section>

              <section className="fundInfoBox">
                <span className="fanSpan">
                  <h3>Over 9000</h3>
                  <p>True Fans</p>
                </span>
                <span className="fundSpan">
                  <h3>£12</h3>
                  <p>pledged of £1000</p>
                </span>
                <span className="daysSpan">
                  <h3>11</h3>
                  <p>days to go</p>
                </span>
                <button className="bringBut" name="Bring This Band"></button>
              </section>

              <article className="campaignList">
                <h1>CAMPAIGNS</h1>
                <div className="campBox">
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
                  <button className="bringBut" name="Bring This Band"></button>
                </div>

            </article>
          </article>
        </div>
      )
    }
    return (
      <section>
        {html}
      </section>
    )
  }
}

export default BandProfile;
