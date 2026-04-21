var xhr = new XMLHttpRequest();
xhr.open("GET", "./rockbands.json");
xhr.send();
var responseData;
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    responseData = JSON.parse(xhr.responseText);

    Object.keys(responseData).forEach(bandName => {
      let option = document.createElement("option");
      option.textContent = bandName;
      option.value = bandName;
      bandSelect.appendChild(option);
    });
  }
});

bandSelect.addEventListener('change', (e) => {
  artistSelect.innerHTML = '<option value="" disabled selected>Please select</option>';

  const selectedBand = e.target.value;
  var listOfArtists = responseData[selectedBand];
  listOfArtists.forEach(artist => {
    let option = document.createElement("option");
    option.textContent = artist.name;
    option.value = artist.value;
    artistSelect.appendChild(option);
  });

});

artistSelect.addEventListener('change', (e) => {
  const url = e.target.value;
  
  if (url) {
    window.open(url, "_blank", "width=800,height=600");
  }
});