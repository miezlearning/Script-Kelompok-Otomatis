var data = [
    [NIM, "NAMA LENGKAP"],
];

function onEdit(e) {  
  var range = e.range;
  var sheet = range.getSheet();
  var inputan_kolom = range.getColumn();
  var awal_kolom = 6; //awal kolom yang di track
  var akhir_kolom = 55; //terakhir kolom yang di track.



  // Skrip Anda yang ada sebelumnya
  if (inputan_kolom === 4 && range.getRow() >= awal_kolom && range.getRow() <= awal_kolom + akhir_kolom) {
    var inputValue = range.getValue();
    if (inputValue === "") {
      sheet.getRange(range.getRow(), 5).clearContent(); // Kosongkan kolom D jika input kosong
    } else if (inputValue >= 0 && inputValue < 1000) {
    //         Ganti Disini Angkatannya
      var nimFull = "2209106" + inputValue.toString().padStart(3, '0');
      sheet.getRange(range.getRow(), 4).setValue(nimFull);
      var nama = carinama(nimFull, data);
      if (nama !== null) {
        sheet.getRange(range.getRow(), 5).setValue(nama);  // Value akan terisi di kolom E
      }
    }
  }
}



// Template Kelompok
// https://docs.google.com/spreadsheets/d/1mxStezLOWMkMrgqvJhhGbzVcOPxTdgS9aM6HitPETkk/edit?usp=sharing


function carinama(nim, data) {
  var nimString = nim.toString(); 
  for (var i = 0; i < data.length; i++) {
    if (data[i][0].toString() === nimString) {
      return data[i][1];
    }
  }
  return nim; 
}
