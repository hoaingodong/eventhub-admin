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
        }).then(({ json }) => ({ data: {...params.data, id: json.id} })),

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({
            data: {...params.data, id: json.id},
        })),
    // {
    //     let formData = new FormData();
    //     console.log(formData)
    //     formData.append("files", params.data.files.rawFile);
    //     formData.append("title", params.data.title);
    //     formData.append("price", params.data.price);
    //     formData.append("startDate", params.data.startDate);
    //     formData.append("endDate", params.data.endDate);
    //     formData.append("introduction", params.data.introduction);
    //     formData.append("topics[]", params.data.topics);
    //     formData.append("organizer", params.data.organizer);
    //     formData.append("longitude", params.data.longitude);
    //     formData.append("latitude", params.data.latitude);
    //     formData.append("address", params.data.address);
    //
    //     return httpClient(`${apiUrl}/${resource}`, {
    //         method: "POST",
    //         body: formData,
    //     }).then(({ json }) => ({
    //         data: { ...params.data, id: json.id },
    //     }));
    // },
    //

    getMany: (resource, params) => {
        const { ids } = params; // Assuming the IDs of the resources are provided in params.ids

        // Create an array of promises for each ID
        const promises = ids.map((id) =>
            httpClient(`${apiUrl}/${resource}/${id}`).then(({ json }) => json)
        );

        // Use Promise.all to resolve all promises
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
            return httpClient(url, { method: 'DELETE' }).then(({ json }) => json);
        });

        return Promise.all(deleteItemPromises)
            .then(() => ({ data: params.ids }));
    },
};

