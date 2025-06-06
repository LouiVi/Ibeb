"use strict"

//Create a Home object.
function Home( path, layContent )
{
		var self = this;
		var anim = ["Rubberband", "Newspaper", "Tada", "Bounce", "FallRotate"];
    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) {
        	lay.Animate("FadeIn");
        	self.Tween1();
        	var i = setInterval(self.RunAnim, 3000);
        } else {
        	lay.Animate( "FadeOut" );
        }
    }
    
    this.Tween1 = function()
{
    var target = { x:0.5, y:0.5, sw:0.5, sh:0.5, rot:360 };
    img.Tween( target, 14500, "Elastic.InOut", 1, true, ()=>{img.Tween( target, 14500, "Bounce.InOut", 1, true, self.Tween2 )})
    
}

this.Tween2 = function()
{
    var target = { x: 0.8, y:[0.6,0.3,0.6], rot: 360*3 };
    img.Tween( target, 15000, "Bounce.InOut", 1, true, ()=>{img.Tween( target, 15000, "Elastic.InOut", 1, true, self.Tween1 )})
}

this.RunAnim = function(){
//	img.Animate( anim[utils.RandomIntegerRange(0, anim.length)] );
	img.SetImage("Img/Ibeb.png");// "Img/" + utils.RandomIntegerRange(1, 10) + ".png" );
	//self.Tween1();
}
    //Create layout for app controls.
    var lay = app.CreateLayout( "Linear", "FillXY,VCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var img = app.CreateImage( "Img/Ibeb.png", 0.75 );
	lay.AddChild( img );
	
	//Create a text with formatting.
    var text = "<p><h3><font color=#f48542><big>Bienvenido</big></font></h3></p>" + 
    "Baby yo se que estas loco por darme leche! </p>" + 
    "<p>A decir verdad yo quiero ordeñarte la  <a onclick='javascript:void(0);' href='alert(\"Espremirtelo papi hasta sacarte la ultima gota de leche\");'>maceta</a> y esprimirte ese bicho para tragarme hasta el ultimo mililitro de tu sabroso calcio/proteinico.</p>" +
    "";////"<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    //"left and choosing the <b>'New File'</b> option</font></p>";
    var txt = app.CreateText( text, 1, -1, "Html,Link" );
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 );
    txt.SetTextSize( 18 );
    txt.SetTextColor( "#4285f4" );
    txt.SetFontFile( "Misc/Limelight-Regular.ttf" );
    txt.SetTextShadow( 5, 2, 2, "#444444" )
    lay.AddChild( txt );
}