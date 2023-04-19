window.onload = function () {
  loadList();
  loadList2();
  loadList3();
};

function loadList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var myList = document.getElementById('my-list');
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var content = document.createElement('span');
        var mentor = document.createElement('b');
        var link = document.createElement('a');
        var breaks = document.createElement('p');
        listItem.innerHTML = data[i].names + ', ';
        mentor.innerHTML = data[i].mentor + ' ';
        link.href = data[i].link;
        link.target = '_blank';
        link.innerHTML = '<b>' + '"' + data[i].title + '"' + '</b>';
        content.innerHTML = data[i].content;
        listItem.appendChild(mentor);
        listItem.appendChild(link);
        listItem.appendChild(content);
        listItem.appendChild(breaks);
        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open('GET', '../../backend/script/load_publication.php', true);
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
        var content = document.createElement('span');
        var mentor = document.createElement('b');
        var link = document.createElement('a');
        var breaks = document.createElement('p');
        listItem.innerHTML = data[i].names + ', ';
        mentor.innerHTML = data[i].mentor + ' ';
        link.href = data[i].link;
        link.target = '_blank';
        link.innerHTML = '<b>' + '"' + data[i].title + '"' + '</b>';
        content.innerHTML = data[i].content;
        listItem.appendChild(mentor);
        listItem.appendChild(link);
        listItem.appendChild(content);
        listItem.appendChild(breaks);
        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open('GET', '../../backend/script/load_publication.php', true);
  xhttp.send();
}

function loadList3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var myList = document.getElementById('my-list3');
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var content = document.createElement('span');
        var mentor = document.createElement('b');
        var link = document.createElement('a');
        var breaks = document.createElement('p');
        listItem.innerHTML = data[i].names + ', ';
        mentor.innerHTML = data[i].mentor + ' ';
        link.href = data[i].link;
        link.target = '_blank';
        link.innerHTML = '<b>' + '"' + data[i].title + '"' + '</b>';
        content.innerHTML = data[i].content;
        listItem.appendChild(mentor);
        listItem.appendChild(link);
        listItem.appendChild(content);
        listItem.appendChild(breaks);
        myList.appendChild(listItem);
      }
    }
  };
  xhttp.open('GET', '../../backend/script/load_publication.php', true);
  xhttp.send();
}
