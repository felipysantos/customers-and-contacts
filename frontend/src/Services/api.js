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

export const loginClient = ({ data, setUser, toast }) => {
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
    .catch((err) =>
      toast({
        title: err.response.data.message,
        status: "error",
      })
    );
};

export const signupClient = ({ data, toast }) => {
  api
    .post("client", data)
    .then((res) =>
      toast({
        title: "Registered user",
        status: "success",
      })
    )
    .catch((err) =>
      toast({
        title: err.response.data.message,
        status: "error",
      })
    );
};

export const updateClient = ({ newData, setUser, toast }) => {
  api
    .patch(`/client/${newData.id}`, newData, {
      headers: {
        authorization: `${newData.token}`,
      },
    })
    .then(
      (res) => (
        setUser(res.data),
        toast({
          title: "Client updated",
          status: "success",
        })
      )
    )
    .catch((err) =>
      toast({
        title: err.response.data.message,
        status: "error",
      })
    );
};

export const getContacts = ({ data, setContacts }) => {
  api
    .get(`/client/${data.id}/contact`, {
      headers: {
        authorization: `${data.token}`,
      },
    })
    .then((res) => setContacts(res.data))
    .catch((err) => console.log(err));
};

export const createContact = ({ newData, toast }) => {
  api
    .post(`/client/${newData.id}/contact`, newData, {
      headers: {
        authorization: `${newData.token}`,
      },
    })
    .then((res) =>
      toast({
        title: "Registered contact",
        status: "success",
      })
    )
    .catch((err) =>
      toast({
        title: err.response.data.message,
        status: "error",
      })
    );
};

export const deleteContact = ({ dataContact, toast }) => {
  api
    .delete(`/client/${dataContact.data.id}/contact`, {
      headers: {
        authorization: `${dataContact.data.token}`,
      },
      data: { name: dataContact.name },
    })
    .then((res) =>
      toast({
        title: "Deleted contact",
        status: "success",
      })
    )
    .catch((err) =>
      toast({
        title: err.response.data.message,
        status: "error",
      })
    );
};
