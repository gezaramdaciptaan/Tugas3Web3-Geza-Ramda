import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
//import { Card } from 'antd';
import logo from './logo.svg';
import './App.css';
import { Card, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Geza Ramda Ciptaan",
    job : "Mahasiswa"
  },
  {
    nama : "Adeeva Inara Afsheena",
    job : "Dokter"
  },
  {
    nama : "Muhammad Wafi Djilham",
    job : "Dokter Gigi"
  },
    
  
]

function App() {
  
 

  return (
    

    <div className="App">
      
          <Row gutter={16}>
            {
        cardData.map( data =>
          <Col span={8}>
        <Card title="Nama" bordered={false}>
         {data.nama  }
        </Card>
      </Col>
    
    
      )
      
     
     
        } 
    </Row>
    
    

    </div>
  )
}

export default App;
