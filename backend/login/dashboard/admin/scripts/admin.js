document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let check = this.responseText;
        if (check == 'false') {
          window.location.href = '../../../../../backend/login/index.html';
        } else {
          console.log(check);
        }
      }
    };
    xmlhttp.open('GET', '../admin/scripts/admin.php', true);
    xmlhttp.send();
  }
};

function logout() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.location.href = '../../../../../backend/login/index.html';
    }
  };
  xmlhttp.open('GET', '../admin/scripts/logout.php', true);
  xmlhttp.send();
}
