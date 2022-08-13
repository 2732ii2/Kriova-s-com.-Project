const api_url = "https://jsonplaceholder.typicode.com/users";
// const api_url="https://api.covid19api.com/summary";

function get_api_data(URL) {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => display_data(data))
    .catch((error) => console.log(error.message));
}
function display_data(API_data) {
  console.log(API_data);
  for (let i of API_data) {
    // console.log(i.id);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    td1.innerText = `${i.id}`;
    td2.innerText = `${i.name}`;
    td3.innerText = `${i.email}`;
    td4.innerText = `${i.phone}`;
    td5.innerText = `${i.address.city}`;
    td6.innerText = `${i.address.zipcode}`;
    td7.innerText = `${i.address.street}`;
    td8.innerText = `${i.website}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    document.getElementById("mytable").appendChild(tr);
  }
}

get_api_data(api_url);

// var a=document.getElementById('btn');
// a.addEventListener("click",get_api_data(api_url));
