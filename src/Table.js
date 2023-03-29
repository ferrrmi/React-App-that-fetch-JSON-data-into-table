import React from 'react';
import { Table, Container } from 'react-bootstrap';
import './MyTable.css';

function MyTable(props) {
    const sortedData = props.data.sort((a, b) => {
      const aUse = parseFloat(a.data[0].use);
      const bUse = parseFloat(b.data[0].use);
      if (props.sortColumn === "use") {
        if (props.sortOrder === "desc") {
          return aUse - bUse;
        } else {
          return bUse - aUse;
        }
      } else {
        return 0;
      }
    });
  
    return (
      <Container className="my-5">
        <h2 className="mb-4">Server Disk Usage</h2>
        <Table className="table-hover" striped bordered hover responsive>
          <thead>
            <tr>
              <th>Hostname</th>
              <th>Filesystem</th>
              <th>Type</th>
              <th>Size</th>
              <th>Used</th>
              <th>Avail</th>
              <th onClick={() => {
                  if (props.sortColumn === "use") {
                    if (props.sortOrder === "asc") {
                      props.setSortOrder("desc");
                    } else {
                      props.setSortOrder("asc");
                    }
                  } else {
                    props.setSortColumn("use");
                    props.setSortOrder("desc");
                  }
                }} >Use <span className="sort-icon">{props.sortOrder === "desc" ? "▲" : "▼"}</span></th>
              <th>Mount</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td>{item.hostname}</td>
                <td>{item.data[0].filesystem}</td>
                <td>{item.data[0].type}</td>
                <td>{item.data[0].size}</td>
                <td>{item.data[0].used}</td>
                <td>{item.data[0].avail}</td>
                <td>{item.data[0].use}</td>
                <td>{item.data[0].mount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }  

export default MyTable;
