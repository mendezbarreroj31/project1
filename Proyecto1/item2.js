
const it_2 = document.getElementById('item2');

const it21 =  document.getElementById('rd1');
const it2_1 = it21.value;
const it22 = document.getElementById('rd2');
const it2_2 = it22.value;
const it23 = document.getElementById('rd3');
const it2_3 = it23.value;
const it24 = document.getElementById('rd4');
const it2_4 = it24.value;
const it25 = document.getElementById('rd5');
const it2_5 = it25.value;
const it26 = document.getElementById('rd6');
const it2_6 = it26.value;
const it27 = document.getElementById('rd7');
const it2_7 = it27.value;


it_2.addEventListener('submit', async (e) => {
    e.preventDefault();

if (it21.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_1
   });
 } else if (it22.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_2
    })}
else if (it23.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_3
    })}
else if (it24.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_4
    })
}
else if (it25.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_5
    })
}
else if (it26.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_6
    })
}
else if (it27.checked == true) {
    const rta= await db.collection('general').doc().set({
        it2_7
    })
}

else {alert("Por favor selecciona una de las 7 opciones disponibles")}
onclick(location.href='item3.html');

});

