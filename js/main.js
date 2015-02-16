var toggled = false;
var hamburgerCross = {
		url : 'svg/hamburger.svg',
		animation : [
			{
				el : 'path:nth-child(1)',
				animProperties : {
                    from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' },
					to : { val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}' }				}
			},
			{
				el : 'path:nth-child(2)',
				animProperties : {
					from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' },
					to : { val : '{"opacity" : 0}' }
				}
			},
			{
				el : 'path:nth-child(3)',
				animProperties : {
					from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' },
					to : { val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}' }
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
