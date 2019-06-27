import React, { useState, ReactElement } from 'react';
import { observer, inject } from 'mobx-react';
import { Layout, Icon, Dropdown, Button, Modal, Form, Menu, Input } from 'antd';
import { Client, createMenu, createCard, deleteCard, getCardData } from '../../../service/navigate';
import { FormComponentProps } from 'antd/lib/form/Form';
import styles from '../../navigate.module.less';
const { Header } = Layout;
interface IdropmenuClickParam {
	item: ReactElement;
	key: string;
	// keyPath;
	// domEvent;
}

interface InavHeader extends FormComponentProps {
	collapsed: boolean;
	toggle: () => void;
	NavigateStore?: any;
}

const createMenuField = [ { cn: '类目名称', en: 'menu_name' }, { cn: '类目图标', en: 'menu_icon' } ];

const createCardField = [
	{ cn: '所属类目', en: 'menu_name' },
	{ cn: '网站标题', en: 'card_title' },
	{ cn: '网站图标', en: 'card_icon' },
	{ cn: '网站简介', en: 'card_description' },
	{ cn: '网站链接', en: 'card_href' }
];
const deleteCardField = [ { cn: '网站标题', en: 'card_title' } ];

const NavHeader: React.FC<InavHeader> = inject('NavigateStore')(
	observer(({ collapsed, toggle, form, NavigateStore}) => {
		const [ visible, setVisible ] = useState<boolean>(false);
		const [ modalStyle, setModalStyle ] = useState<string>('');
		const [ modalTitle, setModalTitle ] = useState<string>('');

		const handleOk = (e: any) => {
			setVisible(false);
			form.validateFields((err, values) => {
				if (!err) {
					switch (modalStyle) {
						case 'createMenu':
							Client.request(createMenu, values).then((data) => {
								console.log(data);
							});
							break;
						case 'createCard':
							Client.request(createCard, values).then((data) => {
								console.log(data);
							});
							break;
						case 'deleteCard':
							Client.request(deleteCard, values).then((data) => {
								console.log(data);
							});
							break;
						default:
							break;
					}
					Client.request(getCardData).then((data) => {
                        console.log(data);
                        const { cardDatas } = data;
                        NavigateStore.init(cardDatas);
					});
				}
			});
		};

		const handleCancel = (e: any) => {
			console.log(e);
			setVisible(false);
		};

		const handleDropmenuClick = ({ item, key }: IdropmenuClickParam) => {
			setModalStyle(key);
			setModalTitle(item.props.children);
			setVisible(true);
		};

		const renderDropmenu = () => {
			return (
				<Menu onClick={handleDropmenuClick}>
					<Menu.Item key="createMenu">新建类目</Menu.Item>
					<Menu.Item key="createCard">新建卡片</Menu.Item>
					<Menu.Item key="deleteCard">删除卡片</Menu.Item>
				</Menu>
			);
		};

		const renderModal = (modalStyle: string) => {
			const { getFieldDecorator } = form;
			let modalFiled: any[] = [];
			switch (modalStyle) {
				case 'createMenu':
					modalFiled = createMenuField;
					break;
				case 'createCard':
					modalFiled = createCardField;
					break;
				case 'deleteCard':
					modalFiled = deleteCardField;
					break;
				default:
					break;
			}
			return (
				<Form>
					{modalFiled.map((item) => {
						return (
							<Form.Item label={`${item.cn}`} key={item.en}>
								{getFieldDecorator(`${item.en}`, {
									rules: [ { required: true, message: `请输入${item.cn}` } ]
								})(<Input placeholder="请输入" />)}
							</Form.Item>
						);
					})}
				</Form>
			);
		};

		return (
			<Header style={{ background: '#fff' }}>
				<Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
				<Dropdown overlay={renderDropmenu}>
					<Button className={styles.editIcon}>
						<Icon type="edit" />编辑
					</Button>
				</Dropdown>
				<Modal title={modalTitle} visible={visible} onOk={handleOk} onCancel={handleCancel}>
					{renderModal(modalStyle)}
				</Modal>
			</Header>
		);
	})
);

export default Form.create<InavHeader>()(NavHeader);
