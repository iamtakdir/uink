import axios from "axios";

const getData = async (url) => {
	try {
		const response = await axios({
			method: "POST",
			url: "/create",
			data: url,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=UTF-8",
			},
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

export default getData;
