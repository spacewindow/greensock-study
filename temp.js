var K = document.querySelector("#K");
var E = document.querySelector("#E");
var N = document.querySelector("#N");
var N2 = document.querySelector("#N2");
var E2 = document.querySelector("#E2");
var D = document.querySelector("#D");
var Y = document.querySelector("#Y");

var A = document.querySelector("#A");
var N3 = document.querySelector("#N3");
var D2 = document.querySelector("#D2");

var COE = document.querySelector("#COE");

var staggerKennedy = [E,N,N2,E2,D,Y,A,N3,D2];


function normalizeSVGOrigin(element, offset) {
    var bounds = element.getBBox();
    if (typeof offset !== "object") {
        offset = {x:0, y:0};
    }
/*    return (offset.x - bounds.x) + "px " + (offset.y - bounds.y) + "px";*/
  return bounds
}

 console.log(normalizeSVGOrigin(K));
 console.log(normalizeSVGOrigin(COE));

var introTimeline = new TimelineLite()
introTimeline.staggerTo(staggerKennedy, 1,  {opacity:0}, 0.1)

            // And now I want to animate #K to absolute location x=245
            // and #COE to absolute location x=300

            // doesn't work
            //.to(K, 1.0, {x:242, ease:Quad.easeOut}, "-=.75")
            //.to(COE, 1.0, {x:300, ease:Quad.easeOut}, "-=0.9")

            // left doesn't work at all
            //.to(K, 1.0, {left:245, ease:Quad.easeOut}, "-=.75")
            //.to(COE, 1.0, {left:300, ease:Quad.easeOut}, "-=0.9")

            // attr doesn't work at all ??
            //.to(K, 1.0, {attr:{cx:245}, ease:Quad.easeOut}, "-=0.9")
            //.to(COE, 1.0, {attr:{cx:300}, ease:Quad.easeOut}, "-=0.9")


            // BUT if I use modification of JACK'S FUNCTION to return bounds then it works as if absolute coordinates

            // :: And now that getBBox is returning coords, if I send the element somewhere else as a relative tween, the normalizeSVGOrigin function acts as if referencing an absolute location(s) (as expected I guess since now dealing with individual element's ref points)
            // UNCOMMENT NEXT LINE TO add to existing timeline to see relative tween followed by absolute behavior
            //.to(COE, 1.0, {x:500, ease:Quad.easeOut}, "-=1.0")

           .to(K, 1.0, {x:245-normalizeSVGOrigin(K).x, ease:Quad.easeOut}, "-=.75")
           .to(COE, 1.0, {x:300-normalizeSVGOrigin(COE).x, ease:Quad.easeOut}, "-=0.9")




