const yearSelect = document.getElementById('yearSelect');
const currentYear = new Date().getFullYear();
const startYear = currentYear - 2;
const endYear = currentYear + 2;

for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
}