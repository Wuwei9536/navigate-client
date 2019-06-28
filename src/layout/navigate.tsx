import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './navigate.module.less';
import { IcardData } from '../stores/navigate';
import NavHeader from './components/navHeader';

const { Sider } = Layout;
interface Iprops {
	menuInfo: IcardData[];
}

export default class NavigateLayout extends React.Component<Iprops> {
	state = {
		collapsed: false
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const { menuInfo } = this.props;
		const { collapsed } = this.state;
		return (
			<Layout className={styles.layout}>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					theme="light"
					className={styles.sider}
				>
					<div className={styles.logo}>WEB 前端导航</div>
					<Menu theme="light" mode="inline" defaultSelectedKeys={[ '0' ]}>
						{menuInfo.map((item, index) => {
							const { menuIcon, menuName } = item;
							return (
								<Menu.Item key={index}>
									<a href={`#${menuName}`}>
										<img src={`/img/${menuIcon}`} className={styles.menuImg} alt={`${menuIcon}`} />
										<span>{menuName}</span>
									</a>
								</Menu.Item>
							);
						})}
					</Menu>
				</Sider>
				<Layout className={styles.contentLayout}>
					<NavHeader collapsed={collapsed} toggle={this.toggle} />
					{this.props.children}
				</Layout>
			</Layout>
		);
	}
}
