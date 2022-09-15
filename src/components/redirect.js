import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Layout } from "antd";
import axios from "axios";

const getUrl = async (id) => {
  const response = await axios({
    method: "get",
    url: `/${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return response.data.url;
};

const Redirect = () => {
  const { Footer } = Layout;
  const [url, setUrl] = useState("");
  const { id } = useParams();
  let newUrl = "";

  useEffect(() => {
    const resp = getUrl(id).then((data) => setUrl(data));
  }, []);

  if (url.indexOf("http://") == 0 || url.indexOf("https://") == 0) {
    // window.location.replace(`${url}`);
    newUrl = `${url}`;
  } else {
    // window.location.replace(`https://${url}`);
    newUrl = `https://${url}`;
  }

  return (
    <div className="center" style={{ marginTop: "150px" }}>
      {newUrl ? (
        <div className="">
          <h3 className="display-4"> Here is Your Link Click to go</h3>
          <a href={`${newUrl}`}>
            <Button size="large" type="primary" shape="round">
              {" "}
              Click Here{" "}
            </Button>
            <p className="lead m-3"> Your link is {newUrl}</p>
          </a>
        </div>
      ) : (
        <h2> Please wait </h2>
      )}
      <div className="fixed-bottom">
        <Footer style={{ textAlign: "center" }}>
          A Project of
          <a href="https://iamtakdir.xyz"> Takdirul Islam Shishir</a> Uink- URL
          Shortner.
        </Footer>
      </div>
    </div>
  );
};

export default Redirect;
