const getResidentBtn = document.querySelector("button");

const btnClick = () => {
    axios.get("https://swapi.dev/api/planets/2")
    .then(res => {
        console.log(res);
        for (let i = 0; i < res.data.residents.length; i++) {
            let resArr = res.data.residents;
            console.log(resArr[i]);
            axios.get(resArr[i])
            .then(res => {
                let newH2 = document.createElement("h2");
                newH2.textContent = res.data.name;
                document.querySelector("body").appendChild(newH2);
            })
        }
    })
}

getResidentBtn.addEventListener("click", btnClick);