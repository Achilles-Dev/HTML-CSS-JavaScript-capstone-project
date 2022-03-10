/* Mobile Menu */

const menuIcon = document.querySelector('.menu-icon');

const closeButton = document.querySelector('.close');

const nav = document.querySelector('.menu-items');

const ul = document.querySelector('.menu-items > ul');

const firstListItem = ul.firstChild;

const lastListItem = ul.lastElementChild;

const li = document.createElement('li');
const a = document.createElement('a');
a.href = './index.html';
a.textContent = 'Home';
a.style.textDecoration = 'none';
a.style.color = 'white';
li.appendChild(a);

const viewMobileMenu = () => {
  nav.classList.remove('menu-items');
  nav.className = 'modal';
  ul.removeChild(ul.lastElementChild);
  ul.insertBefore(li, firstListItem);
  ul.className = 'modal-list';
  document.body.style.overflow = 'hidden';
};

const closeMobileMenu = () => {
  nav.classList.remove('modal');
  nav.className = 'menu-items';
  ul.removeChild(ul.childNodes[0]);
  ul.classList.remove('modal-list');
  ul.appendChild(lastListItem);
  document.body.style.overflow = 'auto';
};

menuIcon.addEventListener('click', viewMobileMenu);

closeButton.addEventListener('click', closeMobileMenu);

/* Feature Singers */

const singers = [
  {
    name: 'Pax Choir Knust',
    image: './public/assets/images/pax-choir.png',
    details: 'Melodious hymnals & Choral music'
  },
  {
    name: 'Dr. Filfree',
    image: './public/assets/images/drfilfree1.png',
    details: 'Comedy'
  },
  {
    name: 'Aba.the.poet',
    image: './public/assets/images/aba.the.poet.jpg',
    details: 'Poetry'
  },
  {
    name: 'GHAMSU Choir',
    image: './public/assets/images/ghamsu-choir.jpg',
    details: 'Melodious hymnals & Choral music'
  },

  {
    name: 'Heralds of Honour',
    image: './public/assets/images/heralds-of-honour.jpeg',
    details: 'Drama & Choreography'
  }
];

const section = document.createElement('section');
section.className = 'feature-singers';
const title = document.createElement('h2');
title.className = 'feature-title';
title.textContent = 'Featured Performers';
const span = document.createElement('span');
const cardDiv = document.createElement('div');
cardDiv.className = 'singers-container';
span.className = 'border-span';
section.append(title, span, );

const footer = document.querySelector('.footer');
const main = document.querySelector('main');


singers.forEach((singer) => {
  const outerDiv = document.createElement('div');
  outerDiv.className = 'singer-container';
  const innerDiv = document.createElement('div');
  innerDiv.className = 'singer-details';
  const image = document.createElement('img');
  const name = document.createElement('h2');
  const details = document.createElement('p');

  details.textContent = singer.details;
  name.textContent = singer.name;
  image.src = singer.image;
  image.alt = singer.name;
  innerDiv.append(name, details);
  outerDiv.append(image, innerDiv);
  cardDiv.appendChild(outerDiv)
});

section.appendChild(cardDiv);

if (footer !== null) {
  main.insertBefore(section, footer);
}




//addDetailsSection();



