// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { setActiveFiter } from './filters';

const filtersElement = document.getElementById('filters');

filtersElement.addEventListener('click', e => {
  if (!e.target.classList.contains('task-filter')) return;
  setActiveFiter(e.target);
});
