function toggleDetails(event, detailsId) {
    event.preventDefault();
    var details = document.getElementById(detailsId);
    if (details.classList.contains('show')) {
        details.classList.remove('show');
    } else {
        var allDetails = document.querySelectorAll('.details-box');
        allDetails.forEach(function(detail) {
            detail.classList.remove('show');
        });
        details.classList.add('show');
    }
}
