window.onload = function () {
  loadList();
  loadList2();
  loadList3();
};

window.onload = function() {
  loadList();
};

function loadList() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);

      var myList = document.getElementById('my-list');
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        var content = document.createElement('span');
        var mentor = document.createElement('b');
        var breaks = document.createElement('p');

        var names = data[i].names.split(', '); // Split the names into an array
        var ids = data[i].id.split(', '); // Split the ids into an array

        if (names.length === ids.length) {
          for (var j = 0; j < names.length; j++) {
            var nameLink = document.createElement('a');
            var queryString = '?name=' + encodeURIComponent(names[j] + ' (' + ids[j] + ')');
            nameLink.href = '../../hello.html' + queryString;
            nameLink.target = '_blank';
            nameLink.innerHTML = names[j];

            listItem.appendChild(nameLink);

            if (j < names.length - 1) {
              listItem.appendChild(document.createTextNode(', '));
            }
          }
        }

        var titleLink = document.createElement('a');
        titleLink.href = data[i].link;
        titleLink.target = '_blank';
        titleLink.innerHTML = '<b>' + '"' + data[i].title + '"' + '</b>';

        mentor.innerHTML = data[i].mentor + ' ';
        content.innerHTML = data[i].content;

        listItem.appendChild(mentor);
        listItem.appendChild(titleLink);
        listItem.appendChild(content);
        listItem.appendChild(breaks);

        myList.appendChild(listItem);
      }
    }
  };

  xhttp.open('GET', '../../backend/script/load_publication.php', true);
  xhttp.send();
}

// Call the loadList function to fetch and populate the list




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
  xhttp.open('GET', '../../backend/script/load_international.php', true);
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
  xhttp.open('GET', '../../backend/script/load_national.php', true);
  xhttp.send();
}
