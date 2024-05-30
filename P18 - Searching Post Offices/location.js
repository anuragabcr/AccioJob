let IP = ''
let LOC = ''
let POSTS = ''

async function onPageLoad() {
  await loadIP()
  await loadLocation()
  await loadMap()
  await loadMoreInfo()
  await loadPostOfice(POSTS)
}

async function loadIP() {
    const response = await fetch("https://api.ipify.org?format=json")
    const json = await response.json()
    IP = json.ip

    let ipAdd = document.getElementById("ipAdd")
    ipAdd.innerHTML = `Your Current IP Address is <span style="color: white;">${IP}</span>`
}

async function loadLocation() {
    const res = await fetch(`https://ipapi.co/${IP}/json/ `)
    LOC = await res.json()
    
    let location = document.getElementById("location")
    location.innerHTML = `
      <div class="col-sm-4 col-md-4 col-lg-4">Lat: <span style="color: white;">${LOC.latitude}</span></div>
      <div class="col-sm-4 col-md-4 col-lg-4">City: <span style="color: white;">${LOC.city}</span></div>
      <div class="col-sm-4 col-md-4 col-lg-4">Organisation: <span style="color: white;">${LOC.org}</span></div>
      <div class="col-sm-4 col-md-4 col-lg-4">Long: <span style="color: white;">${LOC.longitude}</span></div>
      <div class="col-sm-4 col-md-4 col-lg-4">Region: <span style="color: white;">${LOC.region}</span></div>
      <div class="col-sm-4 col-md-4 col-lg-4">Hostname: <span style="color: white;">${LOC.asn}</span></div>
    `
}

async function loadMap() {
    let map = document.getElementById("map")
    map.innerHTML = `
    <iframe src="https://maps.google.com/maps?q=${LOC.latitude}, ${LOC.longitude}&z=15&output=embed" width="800" height="400" frameborder="0" style="border:0"></iframe>
    `
}

async function loadMoreInfo() {
    let dateTime = new Date().toLocaleString("en-US", {timeZone: LOC.timezone})

    let res = await fetch(`https://api.postalpincode.in/pincode/${LOC.postal}`)
    let json = await res.json()
    POSTS = json[0].PostOffice

    let moreInfo = document.getElementById("moreInfo")
    moreInfo.innerHTML = `
      <p>Time Zone: <span style="color: white;">${LOC.timezone}</span></p>
      <p>Date And Time: <span style="color: white;">${dateTime}</span></p>
      <p>Pincode: <span style="color: white;">${LOC.postal}</span></p>
      <p>Message: <span style="color: white;">${json[0].Message}</span></p>
    `
}

async function loadPostOfice(data) {
    let pos = document.getElementById("pos")
    let cols = ''

    for (const post of data) {
        cols += `
            <div class="col-5 col-sm-5 col-md-5 col-lg-5 m-4 p-4" style="border-radius: 10px; background-color: #575A85; color: #B8BCCC;">
                <p>Name: <span style="color: white;">${post.Name}</span></p>
                <p>Branch Type: <span style="color: white;">${post.BranchType}</span></p>
                <p>Delivery Status: <span style="color: white;">${post.DeliveryStatus}</span></p>
                <p>District: <span style="color: white;">${post.District}</span></p>
                <p>Division: <span style="color: white;">${post.Division}</span></p>
            </div>
        `
    }
    pos.innerHTML = cols
}

function onSearch() {
    let search = document.getElementById("search").value
    let data = POSTS.filter(post => post.Name.toLowerCase().includes(search.toLowerCase()))
    loadPostOfice(data)
}

window.onload = onPageLoad