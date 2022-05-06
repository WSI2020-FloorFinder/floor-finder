let directionsRenderer;

// eslint-disable-next-line no-unused-vars
function initMap() {
  const { google } = window;
  directionsRenderer = new google.maps.DirectionsRenderer();
  const iit = new google.maps.LatLng(41.836895, -87.627276);
  const mapOptions = {
    zoom: 14,
    center: iit,
  };
  const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
}

function showInstructions(directionResult) {
  const oldTextNav = document.querySelector('#text-nav');
  if (oldTextNav) {
    oldTextNav.remove();
  }
  const route = directionResult.routes[0].legs[0];
  const textNav = document.createElement('ol');
  textNav.id = 'text-nav';
  route.steps.forEach(({ instructions }) => {
    const instructionEl = document.createElement('li');
    instructionEl.innerHTML = instructions;
    textNav.append(instructionEl);
  });
  document.querySelector('#map').after(textNav);
}

function startNavigate() {
  const { google } = window;
  const origin = document.querySelector('#origin').value;
  const destination = document.querySelector('#destination').value;

  if (origin !== destination) {
    const request = {
      origin,
      destination,
      travelMode: document.querySelector('#mode').value,
    };
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function (result, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        showInstructions(result);
      }
    });
  } else {
    const error = document.createElement('p');
    error.id = 'error';
    error.textContent =
      'The two offices are the same. Please select a different office!';
    document.querySelector('.navigation').append(error);
  }
}

document.querySelector('#go').addEventListener('click', function (e) {
  e.preventDefault();
  const error = document.querySelector('#error');
  if (error) {
    error.remove();
  }
  startNavigate();
});
