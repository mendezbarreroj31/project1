

const it = document.getElementById('item1');

const it21 =  document.getElementById('rd1');
const it1_1 = it21.value;
const it22 = document.getElementById('rd2');
const it1_2 = it22.value;
const it23 = document.getElementById('rd3');
const it1_3 = it23.value;
const it24 = document.getElementById('rd4');
const it1_4 = it24.value;
const it25 = document.getElementById('rd5');
const it1_5 = it25.value;
const it26 = document.getElementById('rd6');
const it1_6 = it26.value;
const it27 = document.getElementById('rd7');
const it1_7 = it27.value;


it.addEventListener('submit', async (e) => {
    e.preventDefault();

if (it21.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_1
   });
 } else if (it22.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_2
    })}
else if (it23.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_3
    })}
else if (it24.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_4
    })
}
else if (it25.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_5
    })
}
else if (it26.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_6
    })
}
else if (it27.checked == true) {
    const rta= await db.collection('general').doc().set({
        it1_7
    })
}

else {alert("Por favor selecciona una de las 7 opciones disponibles")}
onclick(location.href='item2.html');

});

