const STRAPI_HOST = ""
const STRAPI_TOKEN = ""

export function query(url) {
    return fetch(`${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    }).then(res => res.json());
}