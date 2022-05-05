landingPageImage = document.getElementById("mainContent--image")
landingPageImage.onclick = () => {location.href = "./index.html"}

selectionPage = () => {
    planetWater = document.getElementById("water")
    planetFire = document.getElementById("fire")
    planetIce = document.getElementById("ice")
    planetEarth = document.getElementById("earth")
    planetAir = document.getElementById("air")

    selectPlanet = () => {
        
        water.onclick = () => {return 'water'}
        fire.onclick = () => {return 'fire'}
        ice.onclick = () => {return 'ice'}
        earth.onclick = () => {return 'earth'}
        air.onclick = () => {return 'air'}
        
    }
    console.log(selectPlanet())
}