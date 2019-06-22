import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './home.module.less';
import { IcardData } from '../stores/home/index';


const { Sider } = Layout;
interface Iprops {
  menuInfo: IcardData[]
}
export default class HomeLayout extends React.Component<Iprops>{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { menuInfo } = this.props;
    console.log('%cmenuInfo: ', 'font-size:15px;background-color: rgb(135, 208, 104);', menuInfo);
    return (
      <Layout className={styles.layout}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={styles.sider}>
          <div className={styles.logo}>WEB 前端导航</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {menuInfo.map((item,index) => {
              const { menuIcon, menuName } = item;
              return (
                <Menu.Item key={index}>
                  <Icon type="user" />
                  <span>{menuName}</span>
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout>
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}
