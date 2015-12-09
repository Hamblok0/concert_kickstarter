import React from "react";

class Band extends React.Component {
  render() {
    let html;
    if (this.props.children) {
      html = this.props.children
    } else {
      html = (<p1>
        Yo this that stuff that the user gonna see on da band page dawg
      </p1>)
    }
    return (
      <section>
        {html}
      </section>
    )
  }
}

export default Band;
