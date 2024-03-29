import './App.css';
import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomeContainer from './components/HomeContainer';
import MovieContainer from './components/MovieContainer';
import AboutContainer from './components/AboutContainer';
import testJson from './test.json'

const { Header, Footer } = Layout;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      category: 'home',
      data: 'home'
    }
  }

  componentWillMount(){
    let a = testJson
    debugger
    console.log(window.location.hash.split('/')[1])
  }

  render(){
    return (
      <Layout className="layout" style={{height: '100%'}}>
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
                <Link to='/movie/hot/1'>电影</Link>
              </HashRouter>
            </Menu.Item>
            <Menu.Item key="about">
              <HashRouter>
                <Link to='/about'>关于</Link>
              </HashRouter>
            </Menu.Item>
          </Menu>
        </Header>
        <HashRouter>
          <Switch>
            <Route path='/home' component={HomeContainer}></Route>
            <Route path='/movie' component={MovieContainer}></Route>
            <Route path='/about' component={AboutContainer}></Route>
          </Switch>
        </HashRouter>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default App;
