window.onload = function () {
  loadList();
  loadList2();
};

function loadList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var myList = document.getElementById('my-list');
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML =
          data[i].name +
          ' (Ph.d. - ' +
          data[i].year +
          ') ' +
          '<b>' +
          '(' +
          data[i].topic +
          ')' +
          '</b>' + '<button class="social-icon-link bi-trash" style="line-height: 0px; border: none" onclick="delList(' +
          data[i].id +
          ')"></button>';

        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/load_phdproject.php',
    true
  );
  xhttp.send();
}

function delList(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      console.log(data);
      window.location.href =
        '../../../../../../backend/login/dashboard/admin/project.html';
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/del_phdproject.php?id=' +
      id,
    true
  );
  xhttp.send();
}


function loadList2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var myList = document.getElementById('my-list2');
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML =
          data[i].name +
          ' (M.tech. - ' +
          data[i].year +
          ') ' +
          '<b>' +
          '(' +
          data[i].topic +
          ')' +
          '</b>' + '<button class="social-icon-link bi-trash" style="line-height: 0px; border: none" onclick="delList2(' +
          data[i].id +
          ')"></button>';
        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/load_mtechproject.php',
    true
  );
  xhttp.send();
}


function delList2(id) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      console.log(data);
      window.location.href =
        '../../../../../../backend/login/dashboard/admin/project.html';
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/del_mtechproject.php?id=' +
      id,
    true
  );
  xhttp.send();
}
