$("#languageSwitcher").on('mouseenter',function(){
    $(this)[0].size=$(this).find("option").length;
  });
  $("#languageSwitcher").on('click',function(){
     $(this)[0].size=0;
  });
  $("#languageSwitcher").on('mouseleave', function (){
     $(this)[0].size=0;
  })