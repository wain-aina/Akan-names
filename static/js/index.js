function day(cc, yy, mm, dd) {
  return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) mod 7
}

function dateakan() {
  var cc = (document.getElementById("Id1").value);
  var yy = (document.getElementById("Id2").value);
  var mm = (document.getElementById("Id3").value);
  var dd = (document.getElementById("Id4").value);
  var gender = (document.getElementById("Id5").value);
  var result = day(cc, yy, mm, dd).toFixed();
  let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let female = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
  if (day > 31 || day <= 0) {
    alert("Invalid day!");
  } else if (month > 12 || month <= 0) {
    alert("Invalid month");
  } else if (gender === "male" && result === 0) {
    alert("Your Akan name is " + male[0]);
  } else if (gender === "male" && result === 1) {
    alert("Your Akan name is " + male[1]);
  } else if (gender === "male" && result === 2) {
    alert("Your Akan name is " + male[2]);
  } else if (gender === "male" && result === 3) {
    alert("Your Akan name is " + male[3]);
  } else if (gender === "male" && result === 4) {
    alert("Your Akan name is " + male[4]);
  } else if (gender === "male" && result === 5) {
    alert("Your Akan name is " + male[5]);
  } else if (gender === "male" && result === 6) {
    alert("Your Akan name is " + male[6]);
  } else if (gender === "female" && result === 0) {
    alert("Your Akan name is " + female[0]);
  } else if (gender === "female" && result === 1) {
    alert("Your Akan name is " + female[1]);
  } else if (gender === "female" && result === 2) {
    alert("Your Akan name is " + female[2]);
  } else if (gender === "female" && result === 3) {
    alert("Your Akan name is " + female[3]);
  } else if (gender === "female" && result === 4) {
    alert("Your Akan name is " + female[4]);
  } else if (gender === "female" && result === 5) {
    alert("Your Akan name is " + female[5]);
  } else if (gender === "female" && result === 6) {
    alert("Your Akan name is " + female[6]);
  } else {
    alert("null");
  }
}
