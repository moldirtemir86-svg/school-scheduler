document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const dutyPerson = document.getElementById('dutyPerson').value;

  const tbody = document.getElementById('scheduleTable');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${date}</td>
    <td>${dutyPerson}</td>
  `;

  tbody.appendChild(row);

  // Форманы тазалау
  document.getElementById('eventForm').reset();
});