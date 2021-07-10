import React from 'react'
import { CarouselComponent } from '../components/common/CarouselComponent';
import { Layout, Menu, Icon } from "antd";
import { Accordian } from '../components/common/Accordian';

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
    return (
        <div>
            <Content style={{ padding: '25px 0'}}>
            <CarouselComponent />
            </Content>
            <Content>
            <Accordian />
            </Content>
        </div>
    )
  }

  export default Dashboard;