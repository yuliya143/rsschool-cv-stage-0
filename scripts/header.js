const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation');

const HEADER_HEIGHT = 80;

function addNavMenuListener() {
  menuButton.addEventListener('click', handleNavMenuToggle);
}

function handleNavMenuToggle() {
  navigation.classList.toggle('navigation_opened');
  menuButton.classList.toggle('menu-button_opened');
}

function addScrollListener() {
  window.addEventListener('scroll', handleSiteScroll);
}

function handleSiteScroll() {
  window.pageYOffset > 100
    ? header.classList.add('header_scrolled')
    : header.classList.remove('header_scrolled');
}

function addNavListener() {
  navigation.addEventListener('click', handleNavLinkClicked);
}

function handleNavLinkClicked(e) {
  e.preventDefault();

  const isLinkClicked = e.target.classList.contains('navigation__link');
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  if (isLinkClicked) {
    scrollToSection(e.target);
  }

  if (isLinkClicked && !isDesktop) {
    handleNavMenuToggle();
  }
}

function scrollToSection(link) {
  const sectionId = link.getAttribute('href');
  const sectionOffsetTop = document.querySelector(sectionId).offsetTop;

  window.scrollTo({ top: sectionOffsetTop - HEADER_HEIGHT, behavior: 'smooth' });
}

function addResizeListener() {
  const desktop = window.matchMedia('(min-width: 768px)');

  desktop.addEventListener('change', closeNavIfOpen);
}

function closeNavIfOpen() {
  if (navigation.classList.contains('navigation_opened')) {
    handleNavMenuToggle();
  }
}

function addHeaderListeners() {
  addNavMenuListener();
  addScrollListener();
  addResizeListener();
  addNavListener();
}

export { addHeaderListeners };
