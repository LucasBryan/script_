function deleteChild() {
        var e = document.getElementById("tema");
        var first = e.firstElementChild;
        while (first) {
            first.remove();
            first = e.firstElementChild;
        }
  }

deleteChild();



div_checkbox = document.createElement('DIV');
div_checkbox.id = 'divCheckbox';
document.getElementById("tema").appendChild(div_checkbox);

var label_ = document.createElement('label');
label_.innerHTML = "<br>";
div_checkbox.appendChild(label_);


var check_fundo = document.createElement("INPUT");
check_fundo.id = "fundo";
check_fundo.type = "checkbox"
check_fundo.value = "yes"

var label1 = document.createElement('label');
label1.innerHTML = "Fundo";

var check_letra = document.createElement("INPUT");
check_letra.id = "letra";
check_letra.type = "checkbox"
check_letra.value = "yes"

var label2 = document.createElement('label');
label2.innerHTML = "Letra";

var check_users  = document.createElement("INPUT");
check_users.id = "users";
check_users.type = "checkbox"
check_users.value = "yes"

var label3 = document.createElement('label');
label3.innerHTML = "Users";


div_checkbox.appendChild(check_fundo);
div_checkbox.appendChild(label1);

div_checkbox.appendChild(check_letra);
div_checkbox.appendChild(label2);

div_checkbox.appendChild(check_users);
div_checkbox.appendChild(label3);

var label2_ = document.createElement('label');
label2_.innerHTML = "<br>";

div_checkbox.appendChild(label2_);

var gradiente  = document.createElement("BUTTON");
gradiente.id = "gradiente";
gradiente.style.backgroundColor = "#ff96ac";
gradiente.onclick = function(){
document.getElementById("limite").style.backgroundImage = "linear-gradient(to right top, #fb89ca, #ff96ac, #ffab9a, #ffc297, #f1d7a4, #ecddaf, #e8e2ba, #e6e7c6, #e7e2c6, #e6dec7, #e4dac8, #e1d7ca)";}
gradiente.style.height="15px";
gradiente.style.marginLeft="3px";

var gradiente2  = document.createElement("BUTTON");
gradiente.id = "gradiente";
gradiente2.style.backgroundColor = "#fff8a8";
gradiente2.onclick = function(){
document.getElementById("limite").style.backgroundImage = "linear-gradient(to right top, #fff8a8, #feec97, #fedf88, #ffd279, #ffc56c, #ffbe69, #ffb667, #ffaf65, #ffad6a, #ffab70, #ffa975, #ffa87a)";}
gradiente2.style.height="15px";
gradiente2.style.marginLeft="3px";


var gradiente3  = document.createElement("BUTTON");
gradiente3.id = "gradiente";
gradiente3.style.backgroundColor = "#b3a8ff";
gradiente3.onclick = function(){
document.getElementById("limite").style.backgroundImage = "linear-gradient(to right top, #b3a8ff, #cfa3f1, #e2a0e2, #f09fd1, #f7a1c2, #fca1b8, #fea3ae, #ffa5a5, #ffa59b, #ffa590, #ffa685, #ffa87a)";}
gradiente3.style.height="15px";
gradiente3.style.marginLeft="3px";

div_checkbox.appendChild(gradiente);
div_checkbox.appendChild(gradiente2);
div_checkbox.appendChild(gradiente3);


var img = document.createElement('img');
img.src = 'https://freepikpsd.com/file/2019/10/color-wheel-png-2-Transparent-Images.png';


img.style.height="30px"
img.style.width ="30px"
img.id = "img_pal"

img.style.marginTop='40px';
img.style.marginLeft='15px';

document.getElementById('tema').appendChild(img);

var x = document.createElement("INPUT");
x.id = "color";
x.style.position = "absolute";
x.style.marginTop = "10px";
x.style.marginLeft = "-100px";
x.style.cursor = "pointer";
x.style.height = "30px";
x.style.width = "30px";
x.style.borderRadius = "100%";
x.style.opacity='0';


img.style.position = "absolute"
img.style.marginLeft = "15px"
img.style.marginTop = "40px"

x.style.marginTop='55px';
x.style.marginLeft='15px';

x.style.backgroundImage = "url(https://freepikpsd.com/file/2019/10/color-wheel-png-2-Transparent-Images.png)";
x.style.backgroundSize = "100% 100%";


x.onchange=function(){
cor_ = x.value;
document.body.style.backgroundColor = cor_;
};

x.onkeyup = function(){cor_ = "#"+x.value;

if (check_fundo.checked == true) {
    document.getElementById("limite").style.backgroundColor = cor_;
}

if (check_letra.checked == true) {
    inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){inputs[i].style.color = cor_;};
    document.getElementById("chat").style.color = cor_;
    document.getElementById("tela").style.color = cor_;
}

if (check_users.checked == true) {
    document.getElementById("interacao").style.backgroundColor = cor_;
    document.getElementById("usuarios").style.backgroundColor = cor_;
    }

};


var options = {
    width: 300,
    height: 120,
    sliderSize: 20,
    position: 'top',
    insetColor: '#CCC',
    backgroundColor: 'black'
};

a = new jscolor(x,options);


document.getElementById('tema').appendChild(x);

