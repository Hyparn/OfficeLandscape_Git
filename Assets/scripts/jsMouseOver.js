#pragma strict

var a : String;
var b : String;

function OnMouseOver()
{
	GameObject.Find("ExplainText").GetComponent(GUIText).text = a+" ("+b+")";
}