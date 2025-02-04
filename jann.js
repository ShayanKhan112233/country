function gitdata(){
    let name = document.querySelector(".input").value
    let cName = document.querySelector(".cName")
    let img = document.querySelector(".img")
    let population = document.querySelector(".population")

    axios.get(`https://restcountries.com/v3.1/name/${name}`)
.then(function (response) {
// handle success
console.log(response.data[0].population);
cName.innerHTML = response.data[0].name.official
img.src = response.data[0].flags.png
population.innerHTML = response.data[0].population
})
.catch(function (error) {
// handle error
console.log(error);
})


}
