function toggleDetails(event, detailsId) {
    event.preventDefault(); 
    var details = document.getElementById(detailsId); 
    if (details.classList.contains('show')) {
        details.classList.remove('show'); 
    } else {
        details.classList.add('show'); 
    }
}