const STRAPI_HOST = "http://localhost:1337"
const STRAPI_TOKEN = "80713317e953d527b9ff9add679846584edabcb9d31b0bd0b581a729bcc106ae2fd83ee87ab2d3ec3a7dc5e8d3aaed0862a2e1397540eb18a133b17058d7101a9bf4cd32951b1a0d6ae8105cec42020d4f02ecb997d65caf6ee61e17aeaf4932165943e8be0c5ae8e427d90bad810f05aa76e80c19987ebda09a22112b41b8f6"

export function query(url) {
    return fetch(`${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    }).then(res => res.json());
}