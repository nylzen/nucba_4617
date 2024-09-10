const activeUser = JSON.parse(sessionStorage.getItem('activeUser'))

if(activeUser){
  window.location.href = './pages/home.html'
}