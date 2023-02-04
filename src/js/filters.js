const allFilters = [...document.querySelectorAll('.task-filter')];

const setActiveFiter = currentFilter => {
  allFilters.forEach(filter => filter.classList.remove('task-filter--active'));
  currentFilter.classList.add('task-filter--active');
};

export { setActiveFiter };
