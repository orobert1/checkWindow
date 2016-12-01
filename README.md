# checkWindow#

## * A library that abstracts away some of the mess that is caused by implementing scroll triggered events in building an application. *

###registerElement
This function simply takes an element on the page and a function that takes that element as an argument and does something to that element. For example a registerElement call might look something like
  * checkWindow.registerElement( document.getElementById( "id" ) , function(el){
      el.style.opacity = 1;
      el.style.marginLeft = "0px";
    }) *

###run
This function is bound to the window scrollEvent and simply checks how far each of the registered elements are from the top of the page. If the element is less than 200 pixels away from the top the elements function is triggered and the element is removed from the registry.
