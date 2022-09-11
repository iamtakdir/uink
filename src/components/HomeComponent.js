import { Button, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import getData from "../utils/shortLink";

const HomeComponent = () => {
	const [data, setData] = useState(null);
	const currentUrl = window.location.href;

	const [loading, setLoading] = useState(false);

	const onFinish = async (values) => {
		const resp = await getData(values);
		setData(resp.data);

		setLoading(false);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		setLoading(false);
	};

	console.log(data);

	return (
		<div key={data}>
			<div style={{ marginTop: "70px" }}>
				<div className='h-100 d-flex align-items-center justify-content-center'>
					<div>
						<div className='text-center mb-4 '>
							<h1 className='display-4'>Welcome to Uink</h1>
							<p>SHORT YOUR LINK EASILY </p>
						</div>

						<div className='card'>
							<div className='card-body'>
								<h5 className='card-title m-3'>Shorten your link</h5>
								<Form
									name='basic'
									labelCol={{
										span: 6,
									}}
									wrapperCol={{
										span: 16,
									}}
									initialValues={{
										remember: true,
									}}
									onFinish={onFinish}
									onFinishFailed={onFinishFailed}
									autoComplete='off'>
									<Form.Item
										label='URL'
										name='url'
										rules={[
											{
												required: true,
												message: "Please input URL!",
											},
										]}>
										<Input />
									</Form.Item>

									<Form.Item
										wrapperCol={{
											offset: 6,
											span: 16,
										}}>
										<Button
											onClick={() => setLoading(true)}
											block
											type='primary'
											htmlType='submit'
											loading={loading}>
											Submit
										</Button>
									</Form.Item>
								</Form>
								{data && (
									<h5 className='mt-4'>
										{" "}
										Your Link :{" "}
										<a
											href={`${currentUrl}${data}`}>{`${currentUrl}${data}`}</a>
									</h5>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
