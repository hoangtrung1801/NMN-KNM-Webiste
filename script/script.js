window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > window.innerHeight * 0.75 ) {
    document.querySelector('.navbar-wrapper').style.opacity = '1';
  } else {
    document.querySelector('.navbar-wrapper').style.opacity = '0';
  }
}

// // Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
// const btn = document.getElementById("myBtn");
const roomBtn = document.querySelectorAll('.room-filter');

// Get the <span> element that closes the modal
const closeModal = document.querySelector('#closeModal');

// When the user clicks on the button, open the modal
roomBtn.forEach(e => {
  e.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";

    document.querySelector('#modal-name').textContent = e.target.getAttribute('data-name');
    document.querySelector('#modal-phone').textContent = "SĐT: " + e.target.getAttribute('data-phone');
    document.querySelector('#modal-created-at').textContent = "Ngày đăng: " + e.target.getAttribute('data-created-at');
  })
})

// When the user clicks on <closeModal> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}