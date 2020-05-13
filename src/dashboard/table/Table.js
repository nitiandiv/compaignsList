import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tableStyle.scss";
import tableHeaders from "../../static/tableHeaders";
import price from "../../assets/img/Price.png";
import stats from "../../assets/img/stats.png";
import file from "../../assets/img/file.png";
import calendar from "../../assets/img/calendar.png";


const imgHeight = '20px';

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
            <ImageTextPair text="View price" img={price}/>
              
          </Td>
          <Td>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap'}}>
              <ImageTextPair text="csv" img={file}/>
              <ImageTextPair text="Reports" img={stats}/>
              <ImageTextPair text="Schedule Again" img={calendar}/>
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


const ImageTextPair = (props) => <div style={{ display: 'flex', flexDirection: 'row',padding:'6px' }}>   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={props.img} alt="none" style={{ height: imgHeight }} /> </div><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',paddingLeft:'5px',fontSize:'12px' }}>{props.text}</div> </div>
              