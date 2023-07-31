// including Header

const includeheader = document.querySelector('.includeheader') 
fetch('/header/header.html')
.then(res=>res.text())
.then(data=>{
  includeheader.innerHTML=data
})

// including footer

const includefooter = document.querySelector('.includefooter')
fetch('/footer/footer.html')
.then(res=>res.text())
.then(data=>{
  includefooter.innerHTML=data
})