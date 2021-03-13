async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("input[name='post-title']").value;

    const url = window.location.toString().split("/");
    const id = url[url.length - 1];

    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector(".edit-post-form").addEventListener("submit", editFormHandler);