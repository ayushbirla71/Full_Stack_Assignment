import React from 'react';
import './exchangeRate.css';

const FetchList = (props) => {
    return (
      <div  className="contaner" style={{display:"flex", overflowY:"auto"}}>
        <table className="tBody" >
        <h1>Fetch List</h1>
  
          <tr className="trTage" >
            <th>Rate</th>
            <th>Source</th>
          </tr>
          {props.fetchList.map((value, key)=>{
            return(
          <tr key={key}>
            <td>{value.rate}</td>
            <td>{value.source}</td>
      
          </tr>

            )
          })}
        </table>
      </div>
    );
}

export default FetchList
