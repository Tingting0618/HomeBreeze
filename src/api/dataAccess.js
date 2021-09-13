import { firebaseConfig } from "../apiKeys";

const requestUrl = `https://${firebaseConfig.projectId}-default-rtdb.firebaseio.com`;

export const api = {
  // Get all objects from a table
  getRequest: function (resource) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}.json`)
        .then((response) => response.json())
        .then((data) => {
          res(data);
        });
    });
  },
  // Get one object using a paramater
  getSingleRequest: function (resource, param, value) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}.json?${param}=${value}`)
        .then((response) => response.json())
        .then((data) => {
          res(data);
        })
        .catch(() => {
          return "Nope";
        });
    });
  },
  // Add to a table
  postRequest: function (resource, info) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          res(data);
        });
    });
  },
  // Update a single object in a table
  putRequest: function (resource, dataId, info) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}/${dataId}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          res(data);
        });
    });
  },
  // Delete a single object from a table
  deleteRequest: function (resource, dataId) {
    return new Promise((res) => {
      return fetch(`${requestUrl}/${resource}/${dataId}.json`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {});
    });
  },
};