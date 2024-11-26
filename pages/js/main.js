const form = document.querySelector("form");

form.onsubmit = async (e) => {
    e.preventDefault();
    const bodyForm = {
        id: e.target.id.value,
        title: e.target.title.value
    }

    try {
        const res = await fetch("http://localhost:8000/api/posts/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })

        const data = await res.json();
        if (res.status === 400) {
            console.log(res.statusText)
            const err = JSON.stringify(data, 2, null)
            alert(err)
        } else if (res.status === 201) {
            console.log(res.statusText)
            console.log(data)
        }
    } catch (err) {
        console.log(err)
    }
}