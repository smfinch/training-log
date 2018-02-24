import React, { Component } from 'react';

class Activities extends Component {
  render() {
    return (
      <div className="container">
        <h1>Activies</h1>
        <div className="row">
          <div className="col s12 m12">
            <div className="card-panel">
              <table className="highlight">
                <thead>
                  <tr>
                      <th>Name</th>
                      <th className="center">Type</th>
                      <th className="right">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Easy Run</td>
                    <td className="center">RR</td>
                    <td className="right">5</td>
                  </tr>
                  <tr>
                    <td>Riverside Tempo</td>
                    <td className="center">TR</td>
                    <td className="right">12</td>
                  </tr>
                  <tr>
                    <td>10X400</td>
                    <td className="center">RI</td>
                    <td className="right">10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
