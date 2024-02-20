import React from 'react'

export class AdmitCard extends React.Component {
  render() {
    return (
      <div className='admitCardouter'>
        <div className='admitCard'>
          <div className='admitCardTop'>
            <img src='/images/sunbeam_logo.jpg' alt='logo' />
            <div className='schooldetails'>
              <h2>Sunbeam Institute of Information Technology</h2>
              <h4>{this.props.examination}</h4>
            </div>
          </div>

          <div className='admitCardMiddle'>
            <h3 style={{ textAlign: 'center' }}>Student Details</h3>
            <div className='details'>
              <div className='left-details'>
                <p>Name</p>
                <p>Course</p>
                <p>Roll No</p>
              </div>
              <div className='right-details'>
                <p>{this.props.name}</p>
                <p>{this.props.classname}</p>
                <p>{this.props.rollno}</p>
              </div>
              <img src={this.props.image} alt='' />
            </div>
          </div>
          <div className='admitCardBottom' style={{ textAlign: 'center' }}>
            <h4>This ID is valid till: 13th August 2024</h4>
            {/* <h4>In case any problem occurs, contact your school.</h4> */}
          </div> 
        </div>
      </div>
    )
  }
}
export default AdmitCard
