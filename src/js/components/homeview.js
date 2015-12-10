import React from "react";

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
        <section className="bandList">
          <div className="bandItem">
            <h4>
              The Arctic Donkeys
            </h4>
          <span>December 11th - Nashvegas</span>
          <span>Status: 5 years until show</span>
          </div>
          <div className="bandItem">
            <h4>
              Radiofoot
            </h4>
          <span>January 19th - Nashvegas</span>
          <span>Status: 2 months until show</span>
          </div>
          <div className="bandItem">
            <h4>
              Dr. Drake
            </h4>
          <span>September 21thst - Nashvegas</span>
          <span>Status: 11 months until show</span>
          </div>
        </section>
      </section>

    )
  }
}


export default HomeView;
