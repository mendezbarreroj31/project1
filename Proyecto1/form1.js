
const entry = document.getElementById('gral');

entry.addEventListener('submit', async (e) => {
    e.preventDefault();


let datosPersonales = ['nombre', 'apellido','cc','genero', 'edad', 'cel'];
let objRespuestas = {};
let rptaNombre = document.querySelectorAll("input[name=nombre]")[0].value;
let rptaApellido = document.querySelectorAll("input[name=apellido]")[0].value;
let rptaCC = document.querySelectorAll("input[name=cc]")[0].value;
let rptaGenero = document.querySelectorAll("input[name=genero]:checked")[0].value;
let rptaEdad = document.querySelectorAll("input[name=edad]")[0].value;
let rptaCel = document.querySelectorAll("input[name=numero]")[0].value;


    datosPersonales[0] = rptaNombre;
    datosPersonales[1] = rptaApellido;
    datosPersonales[2] = rptaCC;
    datosPersonales[3] = rptaGenero;
    datosPersonales[4] = rptaEdad;
    datosPersonales[5] = rptaCel;

    
    objRespuestas[0] = rptaNombre;
    objRespuestas[1] = rptaApellido;
    objRespuestas[2] = rptaCC;
    objRespuestas[3] = rptaGenero;
    objRespuestas[4] = rptaEdad;
    objRespuestas[5] = rptaCel;


    ccID = rptaCC;

    const respuesta= await db.collection('ppao2021').doc(ccID).set(objRespuestas)
    alert('Registro Exitoso');
    onclick(location.href='item1.html');
});
