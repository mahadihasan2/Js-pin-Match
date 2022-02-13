function genaretPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    // console.log("get 3 digit and calling again", pin);
    return genaretPin();
  }
}

function genaretingPin() {
  const pin = genaretPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calInput = document.getElementById("typed-number");
  if (isNaN(number)) {
    if (number == "C") {
      calInput.value = "";
    }
  } else {
    const previousNumber = calInput.value;
    const newNumber = previousNumber + number;
    calInput.value = newNumber;
  }
});

function verifyPin() {
  //   console.log("going to verify");
  const genaratePin = document.getElementById("display-pin").value;
  const typed = document.getElementById("typed-number").value;
  const notifySuccessMessace = document.getElementById("notify-success");
  const notifyFailMessage = document.getElementById("notify-fail");
  if (genaratePin == typed) {
    notifySuccessMessace.style.display = "block";
    notifyFailMessage.style.display = "none";

    // console.log("success");
  } else {
    // console.log("ohhh");

    notifySuccessMessace.style.display = "none";
    notifyFailMessage.style.display = "block";
  }
}
