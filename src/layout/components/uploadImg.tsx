import React from 'react';
import { Upload, Icon, Modal } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';

interface Props {
	saveIconName: (args: string) => void;
}

interface State {
	previewVisible: boolean;
	previewImage: string;
	fileList: UploadFile[];
}

function getBase64(file: any) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

export default class UploadImg extends React.Component<Props, State> {
	state = {
		previewVisible: false,
		previewImage: '',
		fileList: []
	};

	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = async (file: any) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		this.setState({
			previewImage: file.url || file.preview,
			previewVisible: true
		});
	};

	handleChange = ({ file, fileList }: any) => {
		const { saveIconName } = this.props;
		saveIconName(file.name);
		this.setState({ fileList });
	};

	render() {
		const { previewVisible, previewImage, fileList } = this.state;
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		return (
			<div className="clearfix">
				<Upload
					action="/api/uploadimg"
					name="img"
					listType="picture-card"
					fileList={fileList}
					onPreview={this.handlePreview}
					onChange={this.handleChange}
				>
					{fileList.length >= 1 ? null : uploadButton}
				</Upload>
				<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
			</div>
		);
	}
}
