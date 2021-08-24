var after=""


function fetchMemes(){

    if (document.getElementById("memes")){
        document.getElementById("memes").remove()
    }

    let fatherdiv = document.createElement("div")
    fatherdiv.id="memes"
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
    .then(response => response.json())
    .then(body => {
        after = body.data.after
        console.log(after)
        for(let i = 0; i < body.data.children.length; i++ ){
            if (body.data.children[i].data.post_hint === "image") {
                let div = document.createElement("div")
                let h4 = document.createElement("h4")
                let image = document.createElement("img")
                let score =  document.createElement("p")
                image.src = body.data.children[i].data.url_overridden_by_dest
                h4.textContent = body.data.children[i].data.title
                score.textContent = "Likes: " + body.data.children[i].data.score
                div.appendChild(h4)
                div.appendChild(image)
                div.appendChild(score)
                fatherdiv.appendChild(div)
            }
        }
        document.body.appendChild(fatherdiv)
    })
}