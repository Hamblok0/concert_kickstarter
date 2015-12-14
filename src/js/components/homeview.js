import React from "react";

import BandList from "./band-list";


class HomeView extends React.Component {
  render() {
    return (
      <section className="home">
        <article className="homeHero">
          <div className="textBox">
          <h1>
            Gigster
          </h1>
          <p>Give your show a gig start.</p>
          </div>
        </article>
        <BandList/>
      </section>

    )
  }
}


export default HomeView;
