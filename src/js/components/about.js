import React from 'react';

export default (props) => (
  <section className="about">
    <h1>About</h1>
    <div>
      <p><span>GigStart</span> is a music business app that allows fans to pledge their concert attendance by purchasing tickets to a band's potential show.</p>

      <span className="number">1</span><p>Bands create a gig with a proposed date and city where they would like to play.</p>

      <span className="number">2</span><p>Fans pledge to buy tickets to see their favorite band play their city on proposed date.</p>

      <span className="number">3</span><p>On the preset deadline date, if the funding goal is not reached, the fan's money is refunded and the concert never happens. If the band's ticket sales goal is reached by the deadline, the fan's credit card is charged and the concert happens on the scheduled date.</p>

      <span className="number">4</span><p>At the time of funding, bands receive contact information for a venue correspondent, who then happily books the pre-funded event.</p>

      <p><strong>This project was built as our final group project at The Iron Yard. It was built using React.js on the front end and Ruby on Rails on the back end. To view the source code, click <a href="https://github.com/Hamblok0/concert_kickstarter">here.</a></strong></p>
    </div>
  </section>
)
