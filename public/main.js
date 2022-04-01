const footer = document.querySelector('footer');
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

const aboutItem = ul.firstElementChild;

const viewMobileMenu = () => {
  nav.classList.remove('menu-items');
  nav.className = 'modal';
  ul.removeChild(ul.lastElementChild);
  ul.insertBefore(li, firstListItem);
  ul.className = 'modal-list';
  document.body.style.overflow = 'hidden';
  if (footer.className === 'footer') {
    aboutItem.style.color = '#ec5242';
  } else if (footer.className === 'about-footer') {
    aboutItem.className = '';
    aboutItem.style.color = '#fff';
    a.style.color = '#ec5242';
  }
};

const closeMobileMenu = () => {
  nav.classList.remove('modal');
  nav.className = 'menu-items';
  ul.removeChild(ul.childNodes[0]);
  ul.classList.remove('modal-list');
  ul.appendChild(lastListItem);
  document.body.style.overflow = 'auto';
};

const closeMobileMenuOnDsktopView = (e) => {
  const width = e.target.outerWidth;
  if (width > '767') {
    nav.classList.remove('modal');
    nav.className = 'menu-items';
    ul.classList.remove('modal-list');
    ul.appendChild(lastListItem);
    document.body.style.overflow = 'auto';
  }
};

menuIcon.addEventListener('click', viewMobileMenu);

closeButton.addEventListener('click', closeMobileMenu);

window.addEventListener('resize', (e) => {
  closeMobileMenuOnDsktopView(e);
});

/* Feature Singers */

const singers = [
  {
    name: 'Pax Choir Knust',
    image: './public/assets/images/pax-choir.png',
    occupation: 'Activity: Singing',
    details: 'They sing melodious hymnals & Choral music',
  },
  {
    name: 'Lawyer Nti',
    image: './public/assets/images/lawyer-nti.jpeg',
    occupation: 'Activity: Comedy',
    details: 'Mr. Richmond Xavier Amoakoh who starred in the popular TV show Kejetia '
             + 'VS Makola was a lawyer for Kegetia law school will grace the occation '
             + 'with some wonderful performances.',
  },
  {
    name: 'Aba.the.poet',
    image: './public/assets/images/aba.the.poet.jpg',
    occupation: 'Activity: Poetry and Spoken word',
    details: "Miss Francisca Aba Baffoe as she's formally called has always trilled "
            + 'her audience with great inspiring poems.',
  },
  {
    name: 'GHAMSU Choir',
    image: './public/assets/images/ghamsu-choir.jpg',
    occupation: 'Activity: Singing',
    details: 'They sing melodious hymnals & Choral music',
  },

  {
    name: 'Heralds of Honour',
    image: './public/assets/images/heralds-of-honour.jpeg',
    occupation: 'Activity: Drama & Choreography',
    details: 'They are well known for their various creative plays when preaches the '
           + 'word of God to the audience.',
  },
];

const section = document.createElement('section');
section.className = 'feature-singers';

const title = document.createElement('h2');
title.className = 'feature-title';
title.textContent = 'Featured Performers';

const span = document.createElement('span');
span.className = 'border-span';

const cardDiv = document.createElement('div');
cardDiv.className = 'singers-container';

section.append(title, span);

const screenWidth = window.matchMedia('(min-width: 768px)');

const main = document.querySelector('main');

const moreButton = document.createElement('button');
moreButton.className = 'more-button';
moreButton.type = 'button';
moreButton.textContent = 'MORE';

const downArrowIcon = document.createElement('i');
downArrowIcon.className = 'fas fa-angle-down';

moreButton.appendChild(downArrowIcon);

const addSinger = () => {
  singers.forEach((singer) => {
    const outerDiv = document.createElement('div');
    outerDiv.className = 'singer-container';
    const innerDiv = document.createElement('div');
    innerDiv.className = 'singer-details';
    const imgDiv = document.createElement('div');
    imgDiv.className = 'performer-image-container';
    const image = document.createElement('img');
    image.className = 'performer-image';
    const name = document.createElement('h2');
    const details = document.createElement('p');
    const occupation = document.createElement('span');
    occupation.className = 'performer-activity';
    const borderBottom = document.createElement('span');
    borderBottom.className = 'performer-bottom-border';
    occupation.textContent = singer.occupation;
    details.textContent = singer.details;
    name.textContent = singer.name;
    image.src = singer.image;
    image.alt = singer.name;
    innerDiv.append(name, occupation, borderBottom, details);
    imgDiv.appendChild(image);
    outerDiv.append(imgDiv, innerDiv);
    if (screenWidth.matches) {
      cardDiv.appendChild(outerDiv);
    } else if (singers.indexOf(singer) < 2) {
      cardDiv.appendChild(outerDiv);
    }
  });
};

addSinger();

window.addEventListener('resize', () => {
  if (moreButton.style.display === 'none') {
    // do nothing
  } else if (cardDiv.childElementCount === 0) {
    addSinger();
  } else if (cardDiv.childElementCount === 2) {
    while (cardDiv.firstChild) {
      cardDiv.firstChild.remove();
    }
    addSinger();
  } else if (cardDiv.childElementCount === singers.length && !screenWidth.matches) {
    while (cardDiv.firstChild) {
      cardDiv.firstChild.remove();
    }
    addSinger();
  }
});

const addMoreSingers = () => {
  if (cardDiv.childElementCount === 2) {
    singers.forEach((singer) => {
      if (singers.indexOf(singer) >= 2) {
        const outerDiv = document.createElement('div');
        outerDiv.className = 'singer-container';
        const innerDiv = document.createElement('div');
        innerDiv.className = 'singer-details';
        const imgDiv = document.createElement('div');
        imgDiv.className = 'performer-image-container';
        const image = document.createElement('img');
        image.className = 'performer-image';
        const name = document.createElement('h2');
        const details = document.createElement('p');
        const occupation = document.createElement('span');
        occupation.className = 'performer-activity';
        const borderBottom = document.createElement('span');
        borderBottom.className = 'performer-bottom-border';
        occupation.textContent = singer.occupation;
        details.textContent = singer.details;
        name.textContent = singer.name;
        image.src = singer.image;
        image.alt = singer.name;
        innerDiv.append(name, occupation, borderBottom, details);
        imgDiv.appendChild(image);
        outerDiv.append(imgDiv, innerDiv);
        cardDiv.appendChild(outerDiv);
      }
    });
  }
};

moreButton.addEventListener('click', () => {
  addMoreSingers();
  moreButton.style.display = 'none';
});

section.appendChild(cardDiv);
section.appendChild(moreButton);

if (footer.className === 'footer') {
  main.insertBefore(section, footer);
}
