// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output = `
    <p>Come out Virginia, don't let me me wait</p>
    <p>You Catholic girls start much too late</p>
    <p>But sooner or later it comes down to fate</p>
    <p>I might as well be the one</p>
    <p>They showed you a statue and told you to pray</p>
    <p>They built you a temple and locked you away</p>
    <p>But they never told you the price that you pay</p>
    <p>For things that you might have done…</p>
    <p>Only the good die young</p>
    `                
    return output;
}
//I borrowed Corleans formating style


function verse2(){
    let output = `
    <p>You might have heard I run with a dangerous crowd</p>
    <p>We ain't too pretty we ain't too proud</p>
    <p>We might be laughing a bit too loud</p>
    <p>But that never hurt no one</p>
    <p>Come on Virginia show me a sign</p>
    <p>Send up a signal I'll throw you the line</p>
    <p>The stained-glass curtain you're hiding behind</p>
    <p>Never lets in the sun</p>
    <p>And only the good die young</p>
    `                
    return output;
}

function chorus1(){
    let output = `
    <p>You got a nice white dress and a party on your confirmation</p>
    <p>You got a brand new soul</p>
    <p>And a cross of gold</p>
    <p>But Virginia they didn't give you quite enough information</p>
    <p>You didn't count on me</p>
    <p>When you were counting on your rosary</p>
    `                
    return output;
}

function verse3(){
    let output = `
    <p>They say there's a heaven for those who will wait</p>
    <p>Some say it's better but I say it ain't</p>
    <p>I'd rather laugh with the sinners than cry with the saints</p>
    <p>Sinners are much more fun…</p>
    <p>And only the good die young</p>
    `                
    return output;
}

function verse4(){
    let output = `
    <p>You say your mother told you all that I could give you was a reputation</p>
    <p>She never cared for me</p>
    <p>But did she ever say a prayer for me?</p>
    `                
    return output;
}



function main(){
    let finalOutput = ''; // used to build lyrics string
    finalOutput = verse1() + "<br>" + verse2() + "<br>" + chorus1() + "<br>" + verse3() + "<br>" + verse4();
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}

