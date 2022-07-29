function suarez(){
    var n1 = document.getElementById ('num1').value;
    var n2 = document.getElementById ('num2').value;
    var n3 = document.getElementById ('num3').value;
    var n4 = document.getElementById ('num4').value;
    if(n1==n2 & n2==n3 & n3==n4){
        alert("Todos son iguales");
    }
    if (n1>n2 & n2>n3 & n3>n4){
       alert("Elmayor es:"+n1+"\nel segundo es:"+n2+"\nel terceo es:"+n3+"\nel ultimo es:"+n4);
    }
    if(n1==n2 & n2==n3 & n3>n4){
        alert("El primero:"+n1+"\nel segundo:"+n2+"\nel tercero:"+n3+"son igual y mayores"+"\nel menor es:"+n4);
    }
    if(n1==n2 & n2==n3 & n3<n4){
        alert("El primero:"+n1+"\nel segundo:"+n2+"\nel tercero:"+n3+"son igual y menores"+"\nel mayor es:"+n4);
    }
    if(n1==n2 & n2>n3 & n3==n4){
        alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/mayores \n\nel tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales menores");
    }
    if(n1==n2 & n2<n3 & n3==n4){
        alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/menores \n\nel tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales mayores");
    }
    if(n1>n2 & n2==n3 & n3==n4){
        alert("El primero es el mayor:"+n1+"\nel segundo:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales menores");
    }
    if(n1<n2 & n2==n3 & n3==n4){
        alert("El primero es el menor:"+n1+"\nel segundo:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales mayores");
    }
    if(n1>n2 & n2>n3 & n3==n4){
        alert("El primero es el mayor:"+n1+"\nel segundo:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales menores");
    }
    if(n1==n2 & n2>n3 & n3>n4){
        alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/mayores \n\nel intermedio es:"+n3+"\ny el menor es:"+n4);
    }
    if(n1==n2 & n2<n3 & n3<n4){
        alert("El primero:"+n1+"\ny segundo:"+n2+"\nson iguales/menores \n\nel intermedio es:"+n3+"\ny el mayor es:"+n4);
    }
    if(n1<n2 & n2<n3 & n3==n4){
        alert("El primero es el menor:"+n1+"\nel segundo es intermedio:"+n2+"\n el tercero:"+n3+"\ny el cuarto:"+n4+"\nson iguales mayores");
    }
    if(n1>n4 & n4>n3 & n3==n2){
        alert("El primero es el mayor:"+n1+"\nel segundo:"+n4+"\n el tercero:"+n3+"\ny el segundo:"+n2+"\nson iguales menores");
    }
    if(n1<n2 & n2==n3 & n3<n4){
        alert("El cuarto es el mayor:"+n4+"\nel primero:"+n1+"\nes menor\n\nel cuarto:"+n4+"\ny el tercero:"+n3+"\nson iguales menores");
    }
    if(n1==n4 & n4>n3 & n3>n2){
        alert("El primero:"+n1+"Y el cuarto:"+n4+"\nson iguales mayores \n\nel intermedio es:"+n3+"\nel menor es:"+n2);
    }
    if(n3>n2 & n2>n4 & n4==n1){
        alert("el mayor es:"+n3+"\nel intermedio es:"+n2+"\nel primero:"+n1+"\ny el cuarto:"+n4+"\nson iguales/menores");
    }
    if(n1<n3 & n3<n2 & n2==n4){
        alert("El cuarto:"+n4+"\ny el segundo:"+n2+"son iguales/mayores \n\nel intermedio es:"+n3+"\nel menor es:"+n1);
    }
    if(n1==n3 & n3>n2 & n2==n4){
        alert("El primero:"+n1+"\ny el tercero:"+n3+"\nson mayores/iguales \n\nel segundo:"+n2+"\ny el cuarto:"+n4+"\nson menores/iguales");
    }
    if(n1==n3 & n3<n2 & n2==n4){
        alert("El primero:"+n1+"\ny el tercero:"+n3+"\nson menores/iguales \n\nel segundo:"+n2+"\ny el cuarto:"+n4+"\nson mayores/iguales");
    }
    if(n1==n4 & n4>n2 & n2==n3){
        alert("El primero:"+n1+"\ny el cuarto"+n4+"\nson mayores/iguales \n\nel segundo:"+n2+"y el tercero:"+n3+"\nson menores/iguales");
    }
    if(n1==n4 & n4>n2 & n2==n3){
        alert("El primero:"+n1+"\ny el cuarto"+n4+"\nson menores/iguales \n\nel segundo:"+n2+"y el tercero:"+n3+"\nson mayores/iguales");
    }
}

