let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll('.column');
    const originalColumns = Array.from(columns).map(col => col.cloneNode(true));

    function clearColumns() {
        columns.forEach(column => column.style.display = 'none');
    }

    function showImages() {
        clearColumns();

        // Show first row of 3 columns
        for (let i = 0; i < 3; i++) {
            if (i < columns.length) {
                columns[i].style.display = 'block';
                columns[i].innerHTML = originalColumns[i].innerHTML;
                columns[i].style.flex = '33%';
            }
        }

        // Show second row of 3 columns
        for (let i = 3; i < 6; i++) {
            if (i < columns.length) {
                columns[i].style.display = 'block';
                columns[i].innerHTML = originalColumns[i].innerHTML;
                columns[i].style.flex = '33%';
            }
        }

        // Show third row of 3 columns
        for (let i = 6; i < 9; i++) {
            if (i < columns.length) {
                columns[i].style.display = 'block';
                columns[i].innerHTML = originalColumns[i].innerHTML;
                columns[i].style.flex = '33%';
            }
        }

        // Show fourth row with single column
        if (columns.length >= 10) {
            columns[9].style.display = 'block';
            columns[9].innerHTML = originalColumns[9].innerHTML;
            columns[9].style.flex = '100%';
        }
    }

    window.one = function () {
        clearColumns();
        columns[0].style.display = 'block';
        columns[0].innerHTML = originalColumns[0].innerHTML;
        columns[0].style.flex = '100%';
    };

    window.two = function () {
        clearColumns();
        for (let i = 0; i < 2; i++) {
            if (i < columns.length) {
                columns[i].style.display = 'block';
                columns[i].innerHTML = originalColumns[i].innerHTML;
                columns[i].style.flex = '50%';
            }
        }
    };

    window.three = function () {
        showImages();
    };

    showImages(); // Default to showing the desired layout
});
