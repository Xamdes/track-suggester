$(function()
{
  $("#btn-toggle").click(function(){
    $("#track-list").toggle();
  });

  $("#btn-toggle-c").click(function(){
    $("#description-c").toggle();
  });

  $("#btn-toggle-java").click(function(){
    $("#description-java").toggle();
  });

  $("#btn-toggle-php").click(function(){
    $("#description-php").toggle();
  });

  $("#btn-toggle-ruby").click(function(){
    $("#description-ruby").toggle();
  });

  $("#btn-toggle-survey").click(function(){
    $("#form-one").toggle();
  });



  $("#btn-submit").click(function(){
    var businessType = parseInt($("input:radio[name=business-type]:checked").val());
    var interestType = parseInt($("input:radio[name=interest-type]:checked").val());
    var developerType = parseInt($("input:radio[name=developer-type]:checked").val());
    var languageType = parseInt($("input:radio[name=language-type]:checked").val());
    var specialType = parseInt($("input:radio[name=special-type]:checked").val());

    var total = businessType+interestType+developerType+languageType+specialType;



    event.preventDefault();
  });

});
