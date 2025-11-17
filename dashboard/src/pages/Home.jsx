import React from 'react'
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <Row>
      <Col span={6}><Dashboard/></Col>
      <Col span={18}>
        <Outlet/>
      </Col>
    </Row>
  )
   
}

export default Home