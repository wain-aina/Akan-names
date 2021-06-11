function day (cc,yy,mm,dd){
  return  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
}
function dateakan() {
  var cc = (document.getElementById("Id1").value);
  var yy = (document.getElementById("Id2").value);
  var mm = (document.getElementById("Id3").value);
  var dd = (document.getElementById("Id4").value);
  var gender=(document.getElementById("Id5").value);
  var result=day(cc,yy,mm,dd).toFixed();
  var males = ["Kwasi", "kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (gender == "male" && result == 0) {
      alert("Your akan name is " + males[0]);
    } else if (gender == "male" && result == 1) {
      alert("Your akan name is " + males[1]);
    } else if (gender == "male" && result == 2) {
      alert("Your akan name is " + males[2]);
    } else if (gender == "male" && result == 3) {
      alert("Your akan name is " + males[3]);
    } else if (gender == "male" && result == 4) {
      alert("Your akan name is " + males[4]);
    } else if (gender == "male" && result == 5) {
      alert("Your akan name is " + males[5]);
    } else if (gender == "male" && result == 6) {
      alert("Your akan name is " + males[6]);
    } else if (gender == "female" && result == 0) {
      alert("Your akan name is " + females[0]);
    } else if (gender == "female" && result == 1) {
      alert("Your akan name is " + females[1]);
    } else if (gender == "female" && result == 2) {
      alert("Your akan name is " + females[2]);
    } else if (gender == "female" && result == 3) {
      alert("Your akan name is " + females[3]);
    } else if (gender == "female" && result == 4) {
      alert("Your akan name is " + females[4]);
    } else if (gender == "female" && result == 5) {
      alert("Your akan name is " + females[5]);
    } else if (gender == "female" && result == 6) {
      alert("Your akan name is " + females[6]);
    } else {
      alert("invalid. Please try again and enter all details");
    }

}
