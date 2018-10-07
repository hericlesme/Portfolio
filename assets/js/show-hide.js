
function changeState( project ) {
  
  let element = $(project);
  let flag = true;

  if (element.css('display') != 'none') {
    element.hide(300);
    flag = false;
  } else {
    $('#projects div').each(function(i){
      this.style.display = 'none';
    });

    element.show(400).css("display", "inline-block");
  }
}