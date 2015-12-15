import React from 'react';

class Band extends React.Component {
  render () {
    return (
      <article className="bandItem">
        <a href="#band/1"><img src="http://lorempixel.com/115/115/abstract" height="115px" width="115px" className="bandAvatar"/></a>
        <section className="bandInfo">
          <a href="#band/1"><h4 className="bandName">
            {this.props.name}
          </h4></a>
          <p className="bandDate">December 11th - Nashvegas</p>
          <p className="bandStatus">Status: 5 years until show</p>
          <a className="pledgeBtn" href={`#band/${this.props.params.id}/fund`}>Pledge</a>
        </section>
      </article>
    )
  }
}

export default Band;
