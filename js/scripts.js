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

    var php = 0;
    var ruby = 0;
    var java = 0;
    var cSharp = 0;

    //Increment  based of user slection of Question 1
    var comparison = businessType;
    if(comparison === 0)
    {
      php++;
    }
    else if (comparison === 1) {
      ruby++;
    }
    else if (comparison === 2) {
      cSharp++;
    }
    else if (comparison === 3) {
      java++;
    }

    //Increment  based of user slection of Question 2
    var comparison = interestType;
    if(comparison === 0)
    {
      //Nothing
    }
    else if (comparison === 1) {
      cSharp++;
    }
    else if (comparison === 2) {
      java++;
    }
    else if (comparison === 3) {
      php++;
    }
    else if (comparison === 4) {
      ruby++;
    }

    //Increment  based of user slection of Question 3
    var comparison = developerType;
    if(comparison === 0)
    {
      //Nothing
    }
    else if (comparison === 1) {
      php++;
      ruby++;
    }
    else if (comparison === 2) {
      java++;
      cSharp++;
    }
    else if (comparison === 3) {
      cSharp++;
    }
    //Increment  based of user slection of Question 4
    var comparison = languageType;
    if(comparison === 0)
    {
      //Nothing
    }
    else if (comparison === 1) {
      ruby++;
    }
    else if (comparison === 2) {
      java++;
      cSharp++;
      php++;
    }
    //Increment  based of user slection of Question 5
    var comparison = specialType;
    if(comparison === 0)
    {
      //Nothing
    }
    else if (comparison === 1) {
      ruby++;
      php++;
    }
    else if (comparison === 2) {
      java++;
      cSharp++;
    }




    event.preventDefault();
  });

});


function revealTrack(which)
{
  //Reaveal Ruby/Rails
  if(which === 0)
  {
    $("#track-ruby-rails").show();
  }
  //Reaveal CSS/React
  else if (which === 1) {
    $("#track-css-react").show();
  }
  //Reaveal C#/.NET
  else if (which === 2) {
    $("#track-c-sharp-dot-net").show();
  }
}
