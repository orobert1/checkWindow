
function checkWindow(){
  this.elements = [];
}

checkWindow.prototype.registerElement = function( element, fun ){
  let toReg = {
    element: element,
    func: fun
  }
  this.elements.push( toReg );
}

checkWindow.prototype.run = function(){
  let top = window.scrollY;
  for( var i = 0 ; i < this.elements.length; i++ ){
    let el = this.elements[i];
    let elTop = el.element.offsetTop;
    if( top > elTop - 200 ){
      el.func( el.element );
      this.elements.splice( i, 1 );
    }
  }
}
