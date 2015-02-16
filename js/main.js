var toggled = false;
var hamburgerCross = {
		url : 'svg/hamburger.svg',
		animation : [
			{
				el : '#upper-line',
				animProperties : {
                    from : { val : '{"path" : "M23.4,77h252.2"}' },
					to : { val : '{"path" : "M15,280L287,21"}' }				}
			},
			{
				el : '#middle-line',
				animProperties : {
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' },
					to : { val : '{"opacity" : 0}' }
				}
			},
			{
				el : '#bottom-line',
				animProperties : {
					from : { val : '{"path" : "M23.4,235.5h252.2"}' },
					to : { val : '{"path" : "M15,21l272,259"}' }
				}
			}
		]
    };
var snapCanvas;
document.addEventListener("DOMContentLoaded",function(){

    var svgElem = document.getElementById("hamburger-menu");
    snapCanvas = Snap(svgElem);
    Snap.load("hamburger.svg", function(frame){
        var group = frame.select("g");
        snapCanvas.append(group);
    });

    svgElem.addEventListener("click", toggle);
});

var toggle = function(){
    for( var i = 0; i < hamburgerCross.animation.length; i++ ) {
        var a = hamburgerCross.animation[ i ];
        var el = snapCanvas.select( a.el );
        var animProp = toggled ? a.animProperties.from :
                    a.animProperties.to;
        var val = animProp.val;

        if( animProp.before ) {
            el.attr( JSON.parse( animProp.before ) );
        }
        el.attr( JSON.parse( val ) );
    }/*  for loop*/
    toggled = !toggled;
}
