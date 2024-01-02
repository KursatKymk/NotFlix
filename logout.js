document.getElementById('downArrow').addEventListener('click', function () {
    var searchInput = document.getElementById('logoutButton');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
      searchInput.focus();
    } else {
      searchInput.value = '';
    }
});
  


function logout() {
    
    window.location.href = "index.html";
}
