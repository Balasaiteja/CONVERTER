document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){

        document.getElementById('output').style.visibility = 'visible';
        let lbs = e.target.value;
        document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
       document.getElementById('kgOutput').innerHTML = lbs/2.2046;
       document.getElementById('ozOutput').innerHTML = lbs*16;
});

document.getElementById('output1').style.visibility = 'hidden';
document.getElementById('mtInput').addEventListener('input', function(e){

        document.getElementById('output1').style.visibility = 'visible';
        let mt = e.target.value;
       document.getElementById('ftOutput').innerHTML = mt*3.28084;
       document.getElementById('cmOutput').innerHTML = mt*100;
       document.getElementById('inOutput').innerHTML = mt*39.37;
       document.getElementById('yOutput').innerHTML = mt*1.09361;
});

document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('TempInput').addEventListener('input', function(e){

        document.getElementById('output2').style.visibility = 'visible';
        let temp = e.target.value;


       document.getElementById('FOutput').innerHTML = (temp*(9/5))+32;
       document.getElementById('KOutput').innerHTML = parseFloat(temp) + (273.15);

});

document.getElementById('output3').style.visibility = 'hidden';
document.getElementById('JInput').addEventListener('input', function(e){

        document.getElementById('output3').style.visibility = 'visible';
        let j = e.target.value;


       document.getElementById('kcOutput').innerHTML = j/4184;
       document.getElementById('kwhOutput').innerHTML = j/(3.6e+6);
       document.getElementById('evOutput').innerHTML = j*(6.242e+18);


});

document.getElementById('output4').style.visibility = 'hidden';
document.getElementById('CInput').addEventListener('input', function(e){

        document.getElementById('output4').style.visibility = 'visible';
        let c = e.target.value;


       document.getElementById('DOutput').innerHTML = c*0.013;
       document.getElementById('EOutput').innerHTML = c*0.011;
       document.getElementById('YOutput').innerHTML = c*1.50;
       document.getElementById('ChOutput').innerHTML = c*0.086;
       document.getElementById('UdOutput').innerHTML = c*0.049;


});
