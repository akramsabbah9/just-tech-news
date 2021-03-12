async function upvoteClickHandler(event) {
    event.preventDefault();

    const url = window.location.toString().split("/");
    const id = url[url.length - 1];

    const response = await fetch("/api/posts/upvote", {
        method: "PUT",
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector(".upvote-btn").addEventListener("click", upvoteClickHandler);