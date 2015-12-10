import React from 'react'

class Fund extends React.Component {
  render () {
    return(
      <div>
        <div className="showInfo">
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
          </div>

          <div className="deadBox">
            <span>Funding Deadline:</span>
            <span>October 11th</span>
          </div>
        </div>

        <div className="pledge">
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <span>$6 - General Admission</span>

        <button name="Pledge"></button>
        </div>
      </div>
    )
  }
}

export default Fund;
