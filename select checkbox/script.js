var jsonData = {
  "VOLVO": "Volvo-en",
  "SAAB": "Saab-en",
  "MERCEDES": "Mercedes-en",
  "AUDI": "Audi-en"
};

var jsonData2 = {
  "VOLVO": "Volvo-se",
  "SAAB": "Saab-se",
  "MERCEDES": "Mercedes-se",
  "AUDI": "Audi-se"
};

$(document).ready(function() {
  $('.testselect2').SumoSelect();
  $("button#translate").on("click", translate);
  $("button#translate2").on("click", translate2);
  $("button#reload").on("click", function() {
    $("form").submit()
  });

});

function translate() {
  $('option').each(function(index, element) {
    var $thisOption = $(this);
    var translationKey = $thisOption.attr("data-text-translate-key");
    var orgText = $thisOption.attr("data-org-text");
    $thisOption.text(orgText + " (" + jsonData[translationKey] + ")");
    $thisOption.closest("select")[0].sumo.reload();
  });
}

function translate2() {
  $('option').each(function(index, element) {
    var $thisOption = $(this);
    var translationKey = $thisOption.attr("data-text-translate-key");
    var orgText = $thisOption.attr("data-org-text");
    $thisOption.text(orgText + " (" + jsonData2[translationKey] + ")");
    $thisOption.closest("select")[0].sumo.reload();
  });
}
