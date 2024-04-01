export async function loginCall(credentials) {
    return fetch("http://localhost:5000/authenticate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(data => data.text());
}

export async function registerCall(credentials) {
    return fetch("http://localhost:5000/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(data => data.text());
}