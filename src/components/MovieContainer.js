import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import MovieList from './MovieList';

const { Content, Sider } = Layout;

export default class MovieContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['正在热映']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="正在热映">
              <HashRouter>
                <Link to="/movie/hot/1">
                  正在热映
                </Link>
              </HashRouter>
            </Menu.Item>
            <Menu.Item key="即将上映">
              <HashRouter>
                <Link to="/movie/soon/1">
                  即将上映
                </Link>
              </HashRouter>
            </Menu.Item>
            <Menu.Item key="Top250">
              <HashRouter>
                <Link to="/movie/top250/1">
                  Top250
                </Link>
              </HashRouter>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '10px 50px' }}>
          <HashRouter>
            <Switch>
              <Route path='/movie/:type/:page' component={MovieList}></Route>
            </Switch>
          </HashRouter>
        </Content>
      </Layout>
    )
  }
}
