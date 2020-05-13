import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tableStyle.scss";
import tableHeaders from "../../static/tableHeaders";
import price from "../../assets/img/Price.png";
import stats from "../../assets/img/stats.png";
import file from "../../assets/img/file.png";
import calendar from "../../assets/img/calendar.png";

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
          <Td>
            <img src={price} alt="none" /> view price
          </Td>
          <Td>
            <div style={{display:'flex'}}>
              <div><img src={file} alt="none" /> csv</div>
              <div><img src={stats} alt="none" /> Reports</div>
              <div><img src={calendar} alt="none" /> Schedule Again</div>
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td>item 1</Td>
          <Td>
            <CampDetail />
          </Td>
          <Td>
            <img src={price} alt="none" /> view price
          </Td>
          <Td>
            <div style={{display:'flex'}}>
              <div><img src={file} alt="none" /> csv</div>
              <div><img src={stats} alt="none" /> Reports</div>
              <div><img src={calendar} alt="none" /> Schedule Again</div>
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

const CampDetail = props => {
  return <div>hii</div>;
};
