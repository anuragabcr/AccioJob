function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude
      
      const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=API_KEY`)
      const result = await response.json()
      const add = result.results[0]

      let currAdd = document.getElementById("currAdd")
      currAdd.innerHTML = `
        <div class="address">
          <p>Name of Time Zone: ${add.timezone.name}</p>
          <div>
            <span>Lat: ${latitude}</span>
            <span>Long: ${longitude}</span>
          </div>
          <p>Offset STD: ${add.timezone.offset_STD}</p>
          <p>Offset STD Seconds: ${add.timezone.offset_STD_seconds}</p>
          <p>Offset DST: ${add.timezone.offset_DST}</p>
          <p>Offset DST Seconds: ${add.timezone.offset_DST_seconds}</p>
          <p>Country: ${add.country}</p>
          <p>Postcode: ${add.postcode}</p>
          <p>City: ${add.city}</p>
        </div>
      `
    })
  }
}

async function onSubmit() {
  let address = document.getElementById("address").value;
  let seaAdd = document.getElementById("seaAdd")
  if (address.trim() === "") {
    seaAdd.innerHTML = `
      <div class="error">Enter a Valid Address</div>
    `
  } else {
    const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=API_KEY`)
    const result = await response.json()
    if (result.features[0].properties) {
      const add = result.features[0].properties;
      seaAdd.innerHTML = `
        <div class="address">
          <p>Name of Time Zone: ${add.timezone.name}</p>
          <div>
            <span>Lat: ${add.lat}</span>
            <span>Long: ${add.lon}</span>
          </div>
          <p>Offset STD: ${add.timezone.offset_STD}</p>
          <p>Offset STD Seconds: ${add.timezone.offset_STD_seconds}</p>
          <p>Offset DST: ${add.timezone.offset_DST}</p>
          <p>Offset DST Seconds: ${add.timezone.offset_DST_seconds}</p>
          <p>Country: ${add.country}</p>
          <p>Postcode: ${add.postcode}</p>
          <p>City: ${add.city}</p>
        </div>
      `
    } else {
      seaAdd.innerHTML = `
        <div class="error">Enter a Valid Address</div>
      `
    }
  }
}

window.onload = getLocation