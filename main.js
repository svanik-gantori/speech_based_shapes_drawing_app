x=0;
y=0;

draw_circle="";
draw_rect="";

var SpeechRecogntion=window.webkitSpeechRecognition;

var recognition=new SpeechRecogntion();

function start()
{
    document.getElementById('status').innerHTML="System is listening, please speak";
    recognition.start();
}

recognition.onresult=function (event)
{
    console.log(event);

    var Content= event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("status").innerHTML="Speech has been recognised as: "+Content;

    if(Content=='circle')
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle";
        draw_circle="set";
    }
    if(Content=='rectangle')
    {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        draw_rect="set";
    }
}

function setup()
{
    canvas=createCanvas(900,600);
    canvas.center();
}

function draw()
{
    if(draw_circle=="set")
    {
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set")
    {
        width=Math.floor(Math.random()*200);
        height=Math.floor(Math.random()*200);

        rect(x,y,width,height);
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect="";
    }
}