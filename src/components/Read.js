import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

// let jasonData = await fetch(myurl);
// let data = await jasonData.json();
const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://64318147d4518cfb0e62f291.mockapi.io/contacts`)
      .then((response) => {
        setAPIData(response.data);
        console.log("data:", response.data);
        // console.log("data:", APIData);
      });
  }, []);
  return (
    <div className="table__container">
      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add User
              </Button>
              <Button size="small">Approve</Button>
              <Button disabled size="small">
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default Read;
