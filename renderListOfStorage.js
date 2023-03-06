const button = document.getElementById('button');
const listOfStorages = document.getElementById('listOfStorages');


button.addEventListener('click', () => {

    json = window.electronAPI.getJson();

    console.log(json);

    listOfStorages.innerHTML = "";

    fetch('listOfStorage.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(obj => {

        let div = document.createElement('div');
        div.className = "storageItem";
        div.myData = {
            name: obj.name,
            path: obj.path,
        };
        div.innerHTML = "Path: " + div.myData.path + "\n" + "Name: " + div.myData.name;
        console.log('Path:', obj.path);
        console.log('Name:', div.myData.name);
        console.log('-------------------');
        listOfStorages.append(div);
      });
    })
    .catch(error => {
      console.error('Error parsing JSON file:', error);
    });
  
  })

  listOfStorages.onclick = function(event) {
    let target = event.target; // где был клик?
  
    if (target.className != 'storageItem') return; // не на TD? тогда не интересует
  
    console.log("Хуй тебе, а не " + target.myData.name + " " + target.myData.path);
  };