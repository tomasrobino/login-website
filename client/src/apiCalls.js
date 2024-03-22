export async function checkCredentials(credentials) {
    return fetch("http://localhost/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json());
}