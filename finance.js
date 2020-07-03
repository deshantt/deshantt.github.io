function hitungSaldo (saldoawal, pengeluaran = 0){
    let sisasaldo = saldoawal

    for (let i = 0; i < pengeluaran.length; i++) {
        sisasaldo -= pengeluaran[i]
    }

    if (sisasaldo === saldoawal){
        return 'Aman. Saldomu masih utuh'
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

let saldoawal = 0
let jajan = []
let nama = ''
let nomor = 0

function displayName(){
    nama = document.getElementById('myname').innerHTML
    document.getElementById('myname').innerHTML = nama

}

document.getElementById('tambahkan').onclick = function() {
    if(!nama){
        window.alert('Isi dulu namamu')
    } else if (saldoawal === 0){
        window.alert('saldo awal tidak boleh kosong')   
    } else if (!(document.getElementById('mytitle').value)){
        window.alert('Judul transaksi tidak boleh kosong')
    } else if (!(document.getElementById('amount').value)){
        window.alert('Jumlah transaksi tidak boleh kosong')
    } else {
        let input = [document.getElementById('mytitle').value, document.getElementById('amount').value, document.getElementById('saldoawal1').value]

        nomor ++
        let myElement = document.createElement('p')
        let myText = document.createTextNode(`${nomor}. ${input[0]} Rp ${input[1]}`)
        let myBox = document.getElementById('datadisplay')
    
        document.getElementById('mytitle').value = ''
        document.getElementById('amount').value = ''
    
        myElement.appendChild(myText)
        myBox.appendChild(myElement)
    
        jajan.push(input[1])
        document.getElementById('saldoakhir').innerHTML = hitungSaldo(saldoawal, jajan)
    
    }
}

document.getElementById('btnname').onclick = function(){
    document.getElementById('namauser').innerHTML = document.getElementById('myname').value
    nama = document.getElementById('myname').value

    document.getElementById("myname").style.visibility = "hidden";
    document.getElementById("btnname").style.visibility = "hidden";
}

document.getElementById('btn1').onclick = function() {
    if (!(document.getElementById('saldoawal').value)){
        window.alert('saldo awal tidak boleh kosong')   
    } else{
        let hasilHitung = document.getElementById('saldoawal').value
        document.getElementById('saldoawal1').innerHTML = `Saldo Awalmu adalah Rp ${hasilHitung}`;
        saldoawal = hasilHitung    
        document.getElementById('saldoawal').disabled = true;
    }
}