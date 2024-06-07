import { API_URL } from "../../Constant";


async function FetchPostData(endPoint, requestData, method) {
  try {
    // console.log("FetchPostData",requestData);
    const response = await fetch(`${API_URL}${endPoint}`, {
      method,
      headers: {
        "content-type": "application/json",
      },
     
      body: JSON.stringify({...requestData}),
    });
    const result = await response.json();
    // console.log("response", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
async function FetchUpdateData(endPoint, requestData, method) {
  try {
    const response = await fetch(`${API_URL}${endPoint}`, {
      method,
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        ...requestData
      }),
    });
    const result = await response.json();
    //console.error("response", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
async function FetchDeleteData(endPoint, requestData, method) {
  try {
    const response = await fetch(`${API_URL}${endPoint}`, {
      method,
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        ...requestData,
      }),
    });
    const result = await response.json();
    // console.log("response", result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function FetchGetData(endPoint, queryString, method) {
  try {
    // console.log("response");
    const response = await fetch(
      `${API_URL}${endPoint}${queryString ? queryString : ""}`,
      {
        method,
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    // console.log("response", result);
    return result;
  } catch (err) {
    console.error(err);
  }
  
}
async function GetData(endPoint, method) {
  try {
    // console.log("response");
    const response = await fetch(
      `${API_URL}${endPoint}`,
      {
        method,
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await response.json();
    // console.log("response", result);
    return result;
  } catch (err) {
    console.error(err); 
  }
  
}
export { FetchPostData, FetchGetData, FetchUpdateData, FetchDeleteData,GetData };
