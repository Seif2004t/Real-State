document.addEventListener('DOMContentLoaded', function () {
    
    const blogList = document.getElementById('blogList');
    const blogDetails = document.getElementById('blogDetails');

    
    blogDetails.style.display = 'none';

   
    document.querySelectorAll('.readMore').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide blog list and show blog details
            blogList.style.display = 'none';
            blogDetails.style.display = 'block';
        });
    });

   
    document.getElementById('backToBlog').addEventListener('click', function (event) {
        event.preventDefault();

        // Show blog list and hide blog details
        blogList.style.display = 'block';
        blogDetails.style.display = 'none';
    });
})