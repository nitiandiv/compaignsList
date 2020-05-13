import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tableStyle.scss";
import tableHeaders from "../../static/tableHeaders";

export default function TableExample(props) {
  console.log(
    "Object.values(tableHeaders : ",
    Object.values(tableHeaders).map(item => item.value)
  );
  return (
    <Table id="customers">
      <Thead>
        <Tr>
          {Object.values(tableHeaders).map((item, indx) => (
            <Th>{item.label}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>item 1</Td>
          <Td>
            <CampDetail />
          </Td>
          <Td>item 2</Td>
          <Td>item 2</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

const CampDetail = props => {
  return <div>hii</div>;
};
