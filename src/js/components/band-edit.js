import React from "react";


class BandEdit extends React.Component {
  render () {
    return(
      <div>
        <article className="cover">
          <div>
            <input type="text" placeholder="Band Name..."></input>
            <input type="text" placeholder="City..."></input>
          </div>
          <input type="text" placeholder="Upload cover photo..."></input>
        </article>
        <article className="bandInfo">
          <input type="text" placeholder="Soundcloud embed"></input>
          <input type="text" placeholder="Youtube embed"></input>

          <section className="locGenBox">
            <div className="genre">
              <i className="fa fa-tag"></i>
              <input type="text" placeholder="Genre..."></input>
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
      </article>
    </div>
    )
  }
}

export default BandEdit;
