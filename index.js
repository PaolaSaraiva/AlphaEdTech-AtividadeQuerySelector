const myName = document.querySelector('#personal-name')
const myAge = document.querySelector('#age')
const myRegion = document.querySelector('#region')
const myPhoto = document.querySelector('#avatar')

myName.innerHTML = 'Paola Saraiva'
myAge.innerHTML = '20 Anos'
myRegion.innerHTML = 'Rio Grande do Sul'
myPhoto.setAttribute('src', './assets/images/my-photo.jpg')

const bandName = document.querySelector('#band-name')
const bandGenre = document.querySelector('#band-genre')
const bandLinksList = document.querySelector('#band-links')
const bandImagesList = document.querySelector('#band-images')
const favoriteMusicsList = document.querySelector('#favorites')

bandName.innerHTML = 'Angra'
bandGenre.innerHTML = 'Metal | Power Metal | Folk Metal'
bandLinksList.innerHTML = `
<li><a href="http://www.angra.net/">Site do Angra</a></li>
<li><a href="https://pt.wikipedia.org/wiki/Angra_(banda)">Wikipedia</a></li>
`
bandImagesList.innerHTML = `
<li>
    <img src="./assets/images/angra-1.jpg" />
</li>
<li>
    <img src="./assets/images/angra-2.jpg" />
</li>
<li>
    <img src="./assets/images/angra-3.jpg" />
</li>
`

favoriteMusicsList.innerHTML = `
<li>Carry On</li>
<li>Rebirth</li>
<li>Nova Era</li>
`
