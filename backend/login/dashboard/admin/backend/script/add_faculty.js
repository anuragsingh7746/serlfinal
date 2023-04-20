window.onload = function () {
  loadList();
};

function loadList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var mymain = document.getElementById('main');
      for (var i = 0; i < data.length; i++) {
        var section = document.createElement('section');
        section.className = 'about-section section-padding';
        section.innerHTML =
          '<div class="container"><div class="row"><div class="col-lg-6 col-md-5 col-12" style="padding-top:60px"><img src="../../../../../../images/portrait-volunteer-who-organized-donations-charity.jpg" class="about-image ms-lg-auto bg-light shadow-lg img-fluid" alt=""/></div> <div class="col-lg-5 col-md-7 col-12"> <div class="custom-text-block"> <h2 class="mb-0">' +
          data[i].name +
          '</h2> <p class="text-muted mb-lg-4 mb-md-4">' +
          data[i].designation +
          '</p> <p> <b>Address: </b><br /> ' +
          data[i].address +
          '</p> <p> <b>Contact Details:</b><br /> Phone: ' +
          data[i].phone +
          ' <br /> Email: ' +
          data[i].email +
          '<br /> </p> <ul class="social-icon mt-4"> <li class="social-icon-item"> <a href="' +
          data[i].site +
          '" class="social-icon-link bi-globe"></a> </li> <li class="social-icon-item"> <a href="#" class="social-icon-link bi-facebook"></a> </li> <li class="social-icon-item"> <a href="#" class="social-icon-link bi-instagram"></a> </li> </ul> </div> </div> </div> </div>';
        mymain.appendChild(section);
      }
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/load_faculty.php',
    true
  );
  xhttp.send();
}
