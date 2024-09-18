// added an item in a list with js 
const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahartoli';
placesList.appendChild(li);


// added a section in a parent section with js 
const mainContainer = document.getElementById('head-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food list';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li1');
li1.innerText = 'chocolate';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'ice cream';
ul.appendChild(li2);


section.appendChild(ul);
mainContainer.appendChild(section);


// added a section directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Favourite Dresses </h1>
`
mainContainer.appendChild(sectionDress);

const favouriteSigaret = document.createElement('section');
favouriteSigaret.innerHTML = `
<h1> My favourite sigaret </h1>
<ol>
    <li>Royal ls </li>
    <li> gold leaf </li>
    <li> benson </li>
</ol>
`
mainContainer.appendChild(favouriteSigaret);