const ob = {
    colors : ["red", "blue", "green", "yellow"],
    bind : function() {
        document.querySelector("#button").addEventListener("click", () => {
            const body = document.querySelector("body");
            this.colors.forEach(color => {
                const div = document.createElement("div");
                div.style.width = "100px";
                div.style.height = "100px";
                div.style.border = "1px solid #333";
                div.style.display = "inline-block";
                div.style.backgroundColor = color;
                body.appendChild(div);
            });
        });
    }
}

ob.bind();