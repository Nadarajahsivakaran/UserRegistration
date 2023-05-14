import axios from "axios";

export const authRegister = async (userdata) => {
  const date = new Date(userdata.dob);
  const formattedDate = date.toISOString().slice(0, 10);
  userdata.dob = formattedDate;
  const response = await axios.post(
    "https://mditest.elifeamerica.com/api/v1/register",
    userdata
  );
  return response.data.result;
};

export const authLogin = async (userdata) => {
  userdata.client_id = 4;
  userdata.client_secret = "sfQfhp6tDeGvEp7ZhVwk0MjbpaP55tJ1oJAKuZAE";
  userdata.grant_type = "password";
  const response = await axios.post(
    "https://mditest.elifeamerica.com/oauth/token",
    userdata
  );
  if (response.data.access_token) {
    localStorage.setItem("token", response.data.access_token);
  }
  return response.data;
};

export const authUser = async () => {
  const response = await axios.get(
    "https://mditest.elifeamerica.com/api/v1/auth/user",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.result;
};

export const authUpdate = async (userdata) => {
  const date = new Date(userdata.dob);
  const formattedDate = date.toISOString().slice(0, 10);
  userdata.dob = formattedDate;
  const response = await axios.put(
    "https://mditest.elifeamerica.com/api/v1/profile",
    userdata,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.result;
};
