import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const Redirect = () => {
	const [url, setUrl] = useState("");
	const { id } = useParams();

	try {
		(async (id) => {
			const response = await axios({
				method: "get",
				url: `/${id}`,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json;charset=UTF-8",
				},
			});

			setUrl(response.data.url);
		})(id);

		if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
			// window.location.replace(`${url}`);
			setTimeout(() => {
				return <Navigate to={url} replace='true' />;
			}, 5000);
		} else {
			// window.location.replace(`https://${url}`);
			setTimeout(() => {
				<Navigate to={`https://${url}`} replace='true' />;
			}, 5000);
		}
	} catch (error) {
		console.log(error);
	}

	return;
};

export default Redirect;
