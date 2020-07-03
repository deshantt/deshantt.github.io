function hitungSaldo (saldoawal = 0, pengeluaran = 0){
    let sisasaldo = saldoawal

    for (let i = 0; i < pengeluaran.length; i++) {
        sisasaldo -= pengeluaran[i]
    }

    if (sisasaldo === saldoawal){
        return document.getElementById("myform").innerHTML = 'Aman. Saldomu masih utuh'
    } else if (sisasaldo < 0) {
        return `OMG!!! Pengeluaranmu telah melebihi Saldo yang kamu miliki. Hutangmu bertambah Rp ${Math.abs(sisasaldo)}`
    } else {
        let prosentase = (sisasaldo/saldoawal) * 100

        if (prosentase < 30){
            return `Dihemat-hemat lagi ya. Saldomu tinggal Rp ${sisasaldo} lho!`
        } else {
            return `Aman. Saldomu masih Rp ${sisasaldo}`
        }
    }
}

// function createData (){
    // var x = document.createElement("FORM");
    // x.setAttribute("id", "myForm");
    // document.body.appendChild(x);
  
    // var y = document.createElement("INPUT");
    // y.setAttribute("type", "text");
    // y.setAttribute("value", "Donald");
    // document.getElementById("myForm").appendChild(y);
    // let output = document.getElementById("tambahkan").innerHTML;
    // document.getElementById("demo").innerHTML = output;
// }

function displayName(){
    document.getElementById('myname').innerHTML = document.getElementById('myname').innerHTML
}

document.getElementById('tambahkan').onclick = function() {
    let hasilHitung = Number(document.getElementById('amount').value) + Number(document.getElementById('amount').value);

    document.getElementById('demo').innerHTML = document.getElementById('mytitle').value;
    document.getElementById('demo2').innerHTML = document.getElementById('amount').value;
}

document.getElementById('btn1').onclick = function() {
    let hasilHitung = document.getElementById('saldoawal').value
    document.getElementById('saldoawal1').innerHTML = hasilHitung;
}

function displayInput() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "myFormss");
    document.body.appendChild(x);
  
    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    y.setAttribute("value", "Donald");
    document.getElementById("myFormss").appendChild(y);
  }