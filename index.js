// Soal No1
let dataBuah = [
    {namaBuah: "Nanas", warna:"kuning",biji:"tidak ada",harga:9000},
    {namaBuah: "Jeruk",warna:"oranye",biji:"ada",harga:8000},
    {namaBuah: "Pisang",warna:"kuning",biji:"tidak ada",harga:5000},
    {namaBuah: "Semangka",warna:"merah & hijau",biji:"ada", harga:10000},
] 
let bijiBuah = dataBuah.filter(buah => buah.biji === "ada");
console.log(bijiBuah);

// Soal no2
var arr1 = ['Aku','Sayang','Aku','Sama','Kamu']
arr1.splice(1,2,'sayang')
console.log(arr1.join(' '));

// Soal no3
var KataPertama = "Saya";
var KataKedua = "senang";
var KataKetiga = "belajar";
var kataKeempat = "javascript";
var res= KataPertama.concat[KataKedua, KataKetiga, kataKeempat];
console.log(KataPertama,KataKedua,KataKetiga,kataKeempat);

// Soal no4
const word = 'JavaScript';
const second ='is';
const third = 'awesome';
const OutputGabunganVariable = (`${word} ${second} ${third}`)
console.log(OutputGabunganVariable);

// Soal no5
let hello = `Hello`;
let world= `World`;
let Output = (`${hello} ${world}`);
console.log(Output);  