import React from 'react';

import Notice from './Notice'
const notices = [
  "Interview schedule for P1 volunteers",
  "Selected list of core team from E2",
  "Events Sceduled for tommorrow",
  "Auroshi event on Tuesday",
  "Fund Raising event on Sunday",
  "Certificate Distribution"
]

class Main extends React.Component {
  state = {
    searchdata: ""
  }
  onSearch = (e) => {
    this.setState({ searchdata: e.target.value })
  } 

  render() {
    const { searchdata } = this.state;
    const serachlist = notices.filter(eachitem => eachitem.toLowerCase().includes(searchdata));
    return (
    <center>
      <input type='search' onChange={this.onSearch} value={searchdata} placeholder="Search notices here..." className="inputfield" />
      {/* <h3>search input:{searchdata}</h3> */}
      {serachlist.map((eachitem) => <Notice item={eachitem} />)} 
      </center>
    );
  }
}
 
export default Main;
