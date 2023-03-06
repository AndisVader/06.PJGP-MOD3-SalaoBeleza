import '../../components/template/Nav/BtnMobile'
import '../../components/template/Nav/Nav'

function Evento() {
  const btn = document.querySelector(".MenuMobile")
    btn.onclick = function () {
      const navbar = document.querySelector(".navbar")
      navbar.classList.toggle("active")
    }
}

export default Evento