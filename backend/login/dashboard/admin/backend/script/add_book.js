window.onload = function () {
  loadList();
};

function loadList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var myList = document.getElementById('my-list');
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var content = document.createElement('span');
        link.href = data[i].link;
        link.target = '_blank';
        link.innerHTML = data[i].title;
        content.innerHTML = '<button class="social-icon-link bi-trash" style="line-height: 0px; border: none" onclick="delList(' +
        data[i].id +
        ')"></button>';
        listItem.appendChild(link)
        listItem.appendChild(content);
        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/load_book.php',
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
        '../../../../../../backend/login/dashboard/admin/resource.html';
    }
  };
  xhttp.open(
    'GET',
    '../../../../../../backend/login/dashboard/admin/backend/script/del_book.php?id=' +
      id,
    true
  );
  xhttp.send();
}
