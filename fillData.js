async function getAndPutData() {
  const data = await fetch(
    "https://corbett-autofill-backend.herokuapp.com/users"
  );
  const result = await data.json();
  let len =
    document.getElementById("upl1").children[0].children[0].children.length - 1;
  console.log(len);

  for (let i = 0; i < Math.min(result.length, len); i++) {
    let val = i + 1;
    const prefix = "V" + val;
    document.getElementById(prefix + "Name").value = result[i].name;
    document.getElementById(prefix + "Gender").selectedIndex =
      result[i].gender == "male" ? 0 : 1;
    document.getElementById(prefix + "Age").value = result[i].age;
    document.getElementById(prefix + "ddlIDproof").selectedIndex = 1;
    document.getElementById(prefix + "tbIdProofNumber").value =
      result[i].documentNumber;
    document.getElementById(prefix + "mobileno").value = result[i].phone;
    // document.getElementById(prefix + "country").selectedIndex = result[i].age;
  }
  document.getElementById("TOC").checked = true;
}
getAndPutData();
