import './App.css';
import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomeContainer from './components/HomeContainer';
import MovieContainer from './components/MovieContainer';
import AboutContainer from './components/AboutContainer';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      category: 'home'
    }
  }

  componentWillMount(){
    console.log(window.location.hash.split('/')[1])
    debugger
  }

  render(){
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
            <Menu.Item key="home">
              <HashRouter>
                <Link to='/home'>首页</Link>
              </HashRouter>
            </Menu.Item>
            <Menu.Item key="movie">
              <HashRouter>
                <Link to='/movie'>电影</Link>
              </HashRouter>
            </Menu.Item>
            <Menu.Item key="about">
              <HashRouter>
                <Link to='/about'>关于</Link>
              </HashRouter>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['正在热映']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="正在热映">正在热映</Menu.Item>
              <Menu.Item key="即将上映">即将上映</Menu.Item>
              <Menu.Item key="Top250">Top250</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '10px 50px' }}>
            <HashRouter>
              <Switch>
                <Route exact path='/home' component={HomeContainer}></Route>
                <Route exact path='/movie' component={MovieContainer}></Route>
                <Route exact path='/about' component={AboutContainer}></Route>
              </Switch>
            </HashRouter>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default App;
