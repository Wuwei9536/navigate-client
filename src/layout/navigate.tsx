import React from 'react';
import { Layout, Menu, Icon} from 'antd';
import styles from './navigate.module.less';
import { IcardData } from '../stores/navigate';
import NavHeader from './components/navHeader';

const { Sider } = Layout;
// const { SubMenu } = Menu;
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_1259557_zsmza8iko9.js'
});

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
				<Sider trigger={null} collapsible collapsed={this.state.collapsed} className={styles.sider}>
					<div className={styles.logo}>WEB 前端导航</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '0' ]}>
						{menuInfo.map((item, index) => {
							const { menuIcon, menuName } = item;
							return (
								<Menu.Item key={index}>
									<a href={`#${menuName}`}>
										<IconFont type={menuIcon} />
										<span>{menuName}</span>
									</a>
								</Menu.Item>
							);
						})}
					</Menu>
				</Sider>
				<Layout style={{ paddingBottom: 20, position: 'relative' }}>
					<NavHeader collapsed={collapsed} toggle={this.toggle} />
					{this.props.children}
				</Layout>
			</Layout>
		);
	}
}
