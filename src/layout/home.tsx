import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './home.module.less';
import { IcardData } from '../stores/home/index';

const { Sider } = Layout;
const { SubMenu } = Menu;
const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_1259557_zsmza8iko9.js'
});
interface Iprops {
	menuInfo: IcardData[];
}
export default class HomeLayout extends React.Component<Iprops> {
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
		return (
			<Layout className={styles.layout}>
				<Sider trigger={null} collapsible collapsed={this.state.collapsed} className={styles.sider}>
					<div className={styles.logo}>WEB 前端导航</div>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '0' ]}>
						<SubMenu
							key="Navigation"
							title={
								<span>
									<Icon type="appstore" />
									<span>Navigation</span>
								</span>
							}
						>
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
						</SubMenu>
						<SubMenu
							key="Management"
							title={
								<span>
									<Icon type="appstore" />
									<span>Management</span>
								</span>
							}
						/>
					</Menu>
				</Sider>
				<Layout style={{ paddingBottom: 20 }}>{this.props.children}</Layout>
			</Layout>
		);
	}
}
