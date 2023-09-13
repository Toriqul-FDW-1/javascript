function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    let data = `Input Data
    <br> Nama : ${nama}
    <br> Pekerjaan : ${pekerjaan}
    <br> Hobby : ${hobby}
    `;
    document.getElementById('hasil').innerHTML = data;
}



// kalkulator latihan 13
function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;
    frm.hasil.value = total;
}
function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;
    frm.hasil.value = total;
}
function bagi(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;
    frm.hasil.value = total;
}
function kali(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;
    frm.hasil.value = total;
}
function pangkat(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 ** a2;
    frm.hasil.value = total;
}


