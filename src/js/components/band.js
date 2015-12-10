import React from "react";

class Band extends React.Component {
  render() {
    let html;
    if (this.props.children) {
      html = this.props.children
    } else {
      html = (
        <article className="cover">
          <div>
            <h1>Your Band | Your City</h1>
          </div>
          <img src="http://antikhobi.com/wp-content/uploads/2014/07/img_placeholder21.png"/>
        </article>
      )
    }
    return (
      <section>
        {html}
      </section>
    )
  }
}

export default Band;
