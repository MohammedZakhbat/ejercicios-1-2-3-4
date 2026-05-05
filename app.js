// 4.1 Número mayor
    function mayor() {
      let n1 = parseInt(document.getElementById("num1").value);
      let n2 = parseInt(document.getElementById("num2").value);

      if (n1 > n2) {
        res1.innerText = "El mayor es: " + n1;
      } else if (n2 > n1) {
        res1.innerText = "El mayor es: " + n2;
      } else {
        res1.innerText = "Los dos números son iguales";
      }
    }

    // 4.2 Nivel de experiencia
    function nivel() {
      let nombre = document.getElementById("nombre").value;
      let años = parseInt(document.getElementById("años").value);
      let nivel = "";

      if (años < 2) nivel = "Principiante";
      else if (años <= 4) nivel = "Intermedio";
      else if (años <= 7) nivel = "Avanzado";
      else if (años <= 10) nivel = "Experto";
      else nivel = "Gurú";

      res2.innerText = nombre + " tiene nivel: " + nivel;
    }

    // 4.3 Palabra bonita
    function bonita() {
      let palabra = document.getElementById("palabra").value;

      let esBonita = (
        (palabra.length === 9 && palabra.startsWith("h")) ||
        (palabra.length === 5 && palabra.startsWith("p"))
      );

      if (esBonita) {
        res3.innerText = "La palabra es bonita según los estudios lingüísticos.";
      } else {
        res3.innerText = "La palabra no es considerada bonita.";
      }
    }

    // 4.4 Número a letras
    function convertir() {
      let num = parseInt(document.getElementById("numero").value);
      let letras = [ "cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez" ];

      if (num >= 0 && num <= 10) {
        res4.innerText = "El número " + num + " es: " + letras[num];
      } else {
        res4.innerText = "Número inválido. Introduce un valor entre 0 y 10.";
      }
    }