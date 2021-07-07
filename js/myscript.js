var name = new Array();
var city = new Array();
var prov = new Array();
var contact = new Array();


var tier_level = new Array();
var desc = new Array();
var  price = new Array();

var part = new Array();
var  model = new Array();
var item_num = new Array();
var rowID;

$(document).ready(function() {
  console.log("in doc ready");

  $.getJSON("dataFiles/midterm.json", function(data) {
    $("#display").html("");
    for (let x=0; x < data.part.length; x++) {
      part[x] = data.part;

      $("#display").append(
        `
          <li id='${x}'>
            <a href='Detail.html'>
              ${data.part[x]}
            </a>
            <hr>
          </li>
        `      
      );
    }

    localStorage.setItem("name", JSON.stringify(namew));
    localStorage.setItem("city", JSON.stringify(city));
    localStorage.setItem("prov", JSON.stringify(prov));
    localStorage.setItem("contact", JSON.stringify(contact));

    localStorage.setItem("tier_level", JSON.stringify(tier_level));
    localStorage.setItem("desc", JSON.stringify(desc));
    localStorage.setItem("price", JSON.stringify(price));

    localStorage.setItem("part", JSON.stringify(part));
    localStorage.setItem("model", JSON.stringify(model));
    localStorage.setItem("item_num", JSON.stringify(item_num));

  }); // end of .getJSON
});  //end of doc ready;

$(document).on("click", "#partList > li", function() {
  localStorage.setItem(
    "rowID",
    $(this).closest("li").attr("id")
  );
});
