import React from "react";

import BandList from "./band-list";


class HomeView extends React.Component {
  render() {
    return (
      <section>
        <article className="homeBanner">
          <h1>
            GIGSTARTER
          </h1>
          <h3>
            Give your show a gig start
          </h3>
        </article>
        <BandList/>
      </section>

    )
  }
}


export default HomeView;
