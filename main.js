import {
  getDatabase,
  set,
  get,
  update,
  ref,
  child,
  remove,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

var namev, emailv, password, conf_pass;
var name_1, ema_1, pass_1;
function readData() {
  namev = document.getElementById("n").value;
  emailv = document.getElementById("e").value;
  password = document.getElementById("p").value;
  conf_pass = document.getElementById("cp").value;
  console.log(namev, emailv, password, conf_pass);
}

document.getElementById("sb").addEventListener("click", function () {
  readData();
  // from here the main work is started
  if(password==conf_pass)
  {
    set(ref(getDatabase(), "data/" + namev), {
      Name: namev,
      Email: emailv,
      Password: password,
      Confirm_password: conf_pass,
    })
      .then(() => {
        alert("Account is created successfully");
      })
      .catch((error) => {
        alert("unsuccestful", error);
      });
  }
  else{
    alert("account is not created cause of confirm password");
  }

  //clearing the data
  clearData();
});

// this is for login inboxes reading
function readData2() {
  name_1 = document.getElementById("ema0").value;
  ema_1 = document.getElementById("ema").value;
  pass_1 = document.getElementById("ema1").value;

  if (name_1 == "") {
    alert("first fill the data");
  } else {
    console.log(name_1, ema_1, pass_1);
    Submitdata();
  }

  // const dref=ref(getDatabase());
  // get(child(dref,"data/"+name_1)).then((snapshot)=>{
  //     if (snapshot.exists())
  //     {
  //         console.log(snapshot.val().Name);
  //     }
  //
}

function Submitdata() {
  // alert("hi");

  const dbref = ref(getDatabase());
  // var a=(get(child(dbref, "data/"+rollv)));

  get(child(dbref, "data/" + name_1))
    .then((snapshot) => {
      if (snapshot.exists()) {
        name_1 = snapshot.val().Name;
        console.log(snapshot.val().Name);
        document.getElementById("ema").value = snapshot.val().Email;
        document.getElementById("ema1").value = snapshot.val().Password;
        console.log(snapshot.val().Password);
        // clearing the data at time
        setTimeout(function () {
          document.getElementById("ema0").value = "";
          document.getElementById("ema").value = "";
          document.getElementById("ema1").value = "";
        }, 500);
        location.href = "./data.html";
        setTimeout(function () {
          document.getElementById("ema0").value = "";
          document.getElementById("ema").value = "";
          document.getElementById("ema1").value = "";
        }, 500);

        //   Rollbox.value = snapshot.val().rollNo;
      } else {
        alert("No account with this name");
        document.getElementById("ema0").value = "";
        document.getElementById("ema").value = "";
        document.getElementById("ema1").value = "";
      }
    })
    .catch((error) => {
      alert("uns", error);
    });
}

document.getElementById("en").onclick = readData2;

function clearData() {
  namev = document.getElementById("n").value = "";
  emailv = document.getElementById("e").value = "";
  password = document.getElementById("p").value = "";
  conf_pass = document.getElementById("cp").value = "";
}
