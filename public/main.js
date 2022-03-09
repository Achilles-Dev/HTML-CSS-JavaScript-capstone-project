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
}

const closeMobileMenu = () => {
  nav.classList.remove('modal');
  nav.className = 'menu-items';
  ul.removeChild(ul.childNodes[0]);
  ul.classList.remove('modal-list');
  ul.appendChild(lastListItem);
}

menuIcon.addEventListener('click', viewMobileMenu);

closeButton.addEventListener('click', closeMobileMenu);