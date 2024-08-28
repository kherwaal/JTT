// alert(
//   "Note:- Our travel agency will not be responsible for any accidents or incidents that may occur during your travels."
// );

let quotes = [
  '" ᱦᱟᱴ ᱯᱟᱛᱟ ᱫᱟᱲᱟᱱ ᱫᱚ ᱟᱞᱚ ᱨᱮᱯᱮ ᱢᱟᱱᱟᱭᱟ "',
  '" ᱫᱤᱥᱚᱢ ᱫᱟᱲᱟᱱ ᱢᱮ "',
  '" ᱫᱤᱥᱚᱢ ᱫᱟᱲᱟᱱ ᱦᱚᱲ ᱛᱤᱱᱟᱹᱜ ᱟᱭ ᱥᱟᱶ ᱮ ᱟᱹᱜᱩᱛᱚᱨᱟᱭ ᱛᱟᱦᱮᱸᱱᱟ "',
];

// Retrieve the previous number from localStorage, or initialize it to null if it doesn't exist
let previousNum = localStorage.getItem("previousNum")
  ? parseInt(localStorage.getItem("previousNum"))
  : null;

function generateRandomNumber() {
  let randomNum;

  // Keep generating a new number until it's different from the previous one
  do {
    randomNum = Math.floor(Math.random() * quotes.length);
  } while (randomNum === previousNum);

  // Update the quote text in the HTML
  document.getElementById("quotes").textContent = quotes[randomNum];

  // Store the new number in localStorage for the next refresh
  localStorage.setItem("previousNum", randomNum);

  // Update previousNum to the current number for the next comparison
  previousNum = randomNum;
}

// Generate the random number and update the quote on page load
generateRandomNumber();

function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let userId = getQueryParam("id");

// Ensure getUserById is available
if (typeof getUserById === "function") {
  let user = getUserById(userId);
  if (user) {
    let touristName = document.getElementsByClassName("TouristName");
    for (let i = 0; i < touristName.length; i++) {
      touristName[i].textContent = user.name;
    }
    document.getElementById("BookingReferenceNumber").textContent = user.refNum;
    document.getElementById("TransactionID").textContent = `xxxxxx${user.refNum}`;
  } else {
    // Redirect to error.html if the user is not found
    window.location.href = "error.html";
  }
} else {
  console.error("getUserById function is not defined");
}
