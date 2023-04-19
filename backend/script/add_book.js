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
        link.href = data[i].link;
        link.target = '_blank';
        link.innerHTML = data[i].title;
        listItem.appendChild(link);
        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open('GET', '../../backend/script/load_book.php', true);
  xhttp.send();
}

