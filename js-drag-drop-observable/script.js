let parent = document.getElementById('parent');
let widget = document.getElementById('widget');
let mouseDowns = Observable.fromEvent(widget, 'mousedown');
let parentMouseMoves = Observable.fromEvent(parent, 'mousemove');
let parentMouseMoveUps = Observable.fromEvent(parent, 'mouseup');
let drags = mouseDowns.
  map(function(e){
    return parentMouseMoves.
      takeUntil(parentMouseUps);}).
  concatAll();
let subscription = drags.forEach(
  function(e){
  widget.style.left = e.clientX + 'px';
  widget.style.top = e.clientY + 'px';
}, function onError(error) {
}, function onCompleted() {
});