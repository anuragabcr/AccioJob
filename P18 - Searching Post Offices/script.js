let IP = ''
async function getLocation() {
  const response = await fetch("https://api.ipify.org?format=json")
  const json = await response.json()
  IP = json.ip

  let ipAdd = document.getElementById("ipAdd")
  ipAdd.innerHTML = `Your Current IP Address is <span style="color: white;">${IP}</span>`
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(async position => {
  //     let latitude = position.coords.latitude
  //     let longitude = position.coords.longitude
      
  //     const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=d728a6b1c6374584b2e4cf2059d796fe`)
  //     const result = await response.json()
  //     const add = result.results[0]

  //     let currAdd = document.getElementById("currAdd")
  //     currAdd.innerHTML = `
  //       <div class="address">
  //         <p>Name of Time Zone: ${add.timezone.name}</p>
  //         <div>
  //           <span>Lat: ${latitude}</span>
  //           <span>Long: ${longitude}</span>
  //         </div>
  //         <p>Offset STD: ${add.timezone.offset_STD}</p>
  //         <p>Offset STD Seconds: ${add.timezone.offset_STD_seconds}</p>
  //         <p>Offset DST: ${add.timezone.offset_DST}</p>
  //         <p>Offset DST Seconds: ${add.timezone.offset_DST_seconds}</p>
  //         <p>Country: ${add.country}</p>
  //         <p>Postcode: ${add.postcode}</p>
  //         <p>City: ${add.city}</p>
  //       </div>
  //     `
  //   })
  // }
}

function onSubmit() {
  location.href = "location.html"  
}

window.onload = getLocation