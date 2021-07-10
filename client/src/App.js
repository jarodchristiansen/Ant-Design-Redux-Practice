import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "antd/dist/antd.css";
import Dashboard from './views/Dashboard';
import Second from './views/Second';
import {Counter} from './components/common/Counter';
import  SignUp  from './views/SignUp';
import './App.css';


const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;


class App extends Component {
  render() {
    return(
      <div>
        <Router>
        <Layout>
          <div>
            <Header>
              <h1 className="logo-holder">This Would Be the Logo</h1>
            </Header>
            <Header>
             <Menu theme="dark" 
             defaultSelectedKeys={["1"]} 
             mode="horizontal"
             >
               <Menu.Item key="1">
                 <span>Dashboard</span>
                 <Link to="/" />
               </Menu.Item>
               <Menu.Item key="2">
                 <span>Second</span>
                 <Link to="/meseros" />
               </Menu.Item>
               <Menu.Item key="3">
                <span>Sign Up</span>
                 <Link to="/signup" />
               </Menu.Item>
               <Menu.Item key="4">
                <span>Sign In</span>
                 <Link to="/signin" />
               </Menu.Item>
               <Menu.Item key="5">
                <span>Counter</span>
                 <Link to="/counter" />
               </Menu.Item>
                <SubMenu title="SubMenu" key="sub1">
                <Menu.Item key="submenu-1">
                  <span>SubMenuItem</span>
                  <Link to="submenuPage"/>
                  </Menu.Item>
                </SubMenu>
             </Menu>
          </Header>
          </div>
          <Content style={{ padding: '0 25px', width: '100%' }}>
          <Route exact path="/" component={Dashboard} />
          <Route path="/meseros" component={Second} />
          <Route path="/counter" component={Counter} />
          <Route path="/signup" component={SignUp} />

          </Content>
          <Footer>
         <div className="footerText">
           Footer Content from Jarod Christiansen @2021
          </div>
          </Footer>
        </Layout>
        </Router> 
      </div>
    )
  }
}



// class App extends Component {
//   state = {
//     collapsed: false
//   };

//   onCollapse = collapsed => {
//     this.setState({ collapsed });
//   };
//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   };

//   render() {
//     return (
//       <Router>
//         <Layout style={{ minHeight: "100vh" }}>
//           <Sider
//             collapsible
//             collapsed={this.state.collapsed}
//             onCollapse={this.onCollapse}
//           >
//             <div className="logo" />
//             <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//               <Menu.Item key="1">
//                 <Icon type="pie-chart" />
//                 <span>Deshboard</span>
//                 <Link to="/" />
//               </Menu.Item>
//               <Menu.Item key="2">
//                 <Icon type="desktop" />
//                 <span>Meseros</span>
//                 <Link to="/meseros" />
//               </Menu.Item>
//             </Menu>
//           </Sider>
//           <Layout>
//             <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
//               <Icon
//                 className="trigger"
//                 type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
//                 style={{ cursor: "pointer" }}
//                 onClick={this.toggle}
//               />
//             </Header>
//             <Content
//               style={{
//                 margin: "24px 16px",
//                 padding: 24,
//                 background: "#fff",
//                 minHeight: 280
//               }}
//             >
              // <Route exact path="/" component={Dashboard} />
              // <Route path="/meseros" component={Meseros} />
//             </Content>
//             <Footer style={{ textAlign: "center" }}>
//               Ant Design ©2016 Created by Ant UED
//             </Footer>
//           </Layout>
//         </Layout>
//       </Router>
//     );
//   }
// }

export default App;
