import { fetchUtils, Admin, Resource } from "react-admin";

const apiUrl = "https://event-booking-app.onrender.com/api/v1";

const httpClient = (
  url: string,
  options = {
    headers: false,
  }
) => {
  if (!options.headers) {
    // @ts-ignore
    options.headers = new Headers({ Accept: "application/json" });
  }

  let auth = localStorage.getItem("auth");
  auth = JSON.parse(auth);
  const token = auth.token;
  console.log(token);

  options.headers.set("Authorization", `bearer ${token}`);
  // @ts-ignore
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;

    const url = `${apiUrl}/${resource}?page=${page - 1}&perPage=${perPage}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: 10,
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...params.data, id: json.id } })),

  create: (resource, params) => {
    const { data } = params;

    if (data instanceof FormData) {
      // If the data is a FormData object, use it directly
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: data,
      })
          .then(({ json }) => ({
            data: { ...data.get('data'), id: json.id },
          }))
          .catch((error) => {
            console.error('Error creating item:', error);
            throw error;
          });
    } else {
      // If the data is not a FormData object, stringify it as JSON
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(data),
      })
          .then(({ json }) => ({
            data: { ...data, id: json.id },
          }))
          .catch((error) => {
            console.error('Error creating item:', error);
            throw error;
          });
    }
  },


  getMany: (resource, params) => {
    const { ids } = params;

    const promises = ids.map((id) =>
      httpClient(`${apiUrl}/${resource}/${id}`).then(({ json }) => json)
    );

    return Promise.all(promises).then((responses) => ({
      data: responses,
    }));
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const deleteItemPromises = params.ids.map((id) => {
      const url = `${apiUrl}/${resource}/${id}`;
      return httpClient(url, { method: "DELETE" }).then(({ json }) => json);
    });

    return Promise.all(deleteItemPromises).then(() => ({ data: params.ids }));
  },
};
