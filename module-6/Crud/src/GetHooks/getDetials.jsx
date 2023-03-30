import { getDetails } from "../Api/AxiosRequest";
import { useEffect, useState } from "react";

export default (props) => {
  const [detailsbyid, setdetailsbyid] = useState({});
  const GetDetialsId = (requestid) => {
    console.log("request id", requestid);

    return getDetails(requestid).then((res) => {
      console.log(res);
      setdetailsbyid(res);
    });
  };
  useEffect(() => {
    GetDetialsId(props);
  }, []);

  return [detailsbyid];
};
