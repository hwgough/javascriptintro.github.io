const myImage = document.querySelector("img")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1646785217990.jpg") {
        myImage.setAttribute("src", "images/1652726133041.jpg");
    } else {
        myImage.setAttribute("src", "images/1646785217990.jpg");
    }
};

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h3");

function setReason() {
    const myReason = prompt("Please tell me what you're up to.");
    localStorage.setItem("reason", myReason);
    myHeading.textContent = `${myReason}, is that really all?`;
  }

  if (!localStorage.getItem("reason")) {
	setReason();
} else {
	const storedReason = localStorage.getItem("reason");
	myHeading.textContent = `The last person here was up to ${storedReason}...`;
};

myButton.onclick = () => {
	setReason();
};
