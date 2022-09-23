import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export const getClientById = ({ data, setUser }) => {
  api
    .get(`/client/${data.id}`, {
      headers: {
        authorization: `${data.token}`,
      },
    })
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
};

export const loginClient = ({ data, setUser }) => {
  api
    .post("client/login", data)
    .then(
      (res) => (
        localStorage.setItem("jwt", res.data.token),
        localStorage.setItem("id", res.data.client.id),
        getClientById({
          data: {
            id: res.data.client.id,
            token: localStorage.getItem("jwt"),
          },
          setUser,
        })
      )
    )
    .catch((err) => console.log(err));
};

export const signupClient = ({ data }) => {
  api
    .post("client", data)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const updateClient = ({ newData, setUser }) => {
  api
    .patch(`/client/${newData.id}`, newData, {
      headers: {
        authorization: `${newData.token}`,
      },
    })
    .then((res) => setUser(res.data))
    .catch((err) => console.log(err));
};
