export async function checkCredentials(credentials) {
    return fetch("http://localhost:5000/authenticate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    }).then(data => data.text());
}