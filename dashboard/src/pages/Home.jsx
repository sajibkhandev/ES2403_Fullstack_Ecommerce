import React from 'react'
import { Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <Row>
      <Col span={4}><Dashboard/></Col>
      <Col span={20}>
        <Outlet/>
      </Col>
    </Row>
  )
   
}

export default Home