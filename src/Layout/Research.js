import React, { Component } from 'react'

import '../Style/Research.css'

export default class Research extends Component {
  constructor() {
    super()
    this.state = {
      // hi
    }
  }

  render() {
    const study = (
      <>
        <div className="study-title">Study Title</div>
        <div className="study-container">
          <p className="study-body">Lorem ipsum dolor sit amet, an facer velit fierent eam. Aperiri labores percipitur eu eos, diceret feugait eloquentiam qui cu, sit diceret pericula eu. Vocent assueverit deterruisset ei vel, ad cum quem iudico. Vix iuvaret phaedrum an, erant intellegat temporibus an per.</p>
          <button className="study-button">Take Survey</button>
        </div>
      </>
    )

    return (
      <>
        <div className="research-container">
          {study}
          {study}
          {study}
          {study}
          {study}
          {study}
        </div>
      </>
    )
  }
}
