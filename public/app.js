$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const API_URL = 'http://localhost:5000/api';

$.get(`${API_URL}/devices`)
.then(response => {
  response.forEach(device => {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});

$.get(`${API_URL}/devices`)
.then(response => {
  console.log(response);
})
.catch(error => {
  console.log(`Error: ${error}`);
});


$('#add-device').on('click', () => {
  const name = $('#name').val();
  const user = $('#user').val();
  const sensorData = [];

  const body = {
    name,
    user,
    sensorData
  };

  $.post(`${API_URL}/devices`, body)
  .then(response => {
    location.href = '/';
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

