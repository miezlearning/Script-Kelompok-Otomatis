const KONFIGURASI = {
  kolom: {
    inputan: 4,    // Kolom inputan untuk memasukkan NIM, A = 1, B = 2, C = 3, D = 4, E.......
    nim: 4,        // Tempat NIM Full
    nama: 5        // Tempat Nama Lengkap 
  },
  baris: { //Baris untuk pembatasan inputannya.
    awal: 6,       // Baris awal data
    akhir: 55      // Baris akhir data
  },
  prefix_nim_mhs: "2209106",  
  panjang_angka: 3        
};

class Mhs {
  constructor(dataMahasiswa) {
    this.dataMahasiswa = new Map(
      dataMahasiswa.map(([nim, nama]) => [nim.toString(), nama])
    );
  }
  cariNamaMahasiswa(nim) {
    return this.dataMahasiswa.get(nim.toString()) || nim;
  }
  formatNIM(nilaiMasukan) {
    return KONFIGURASI.prefix_nim_mhs + nilaiMasukan.toString().padStart(KONFIGURASI.panjang_angka, '0');
  }
  cekMasukanValid(nilai) {
    return nilai >= 0 && nilai < 1000;
  }
}

class PengelolaTabel {
  constructor(sheet, range, mhs) {
    this.sheet = sheet;
    this.range = range;
    this.mhs = mhs; 
  }
  ambilNilaiSel(baris, kolom) {
    return this.sheet.getRange(baris, kolom);
  }

  hapusIsiSel(baris, kolom) {
    this.ambilNilaiSel(baris, kolom).clearContent();
  }

  isiNilaiSel(baris, kolom, nilai) {
    this.ambilNilaiSel(baris, kolom).setValue(nilai);
  }

  // Memeriksa apakah edit berada dalam range yang valid
  cekRange() {
    const baris = this.range.getRow();
    const kolom = this.range.getColumn();
    
    return kolom === KONFIGURASI.kolom.inputan && 
           baris >= KONFIGURASI.baris.awal && 
           baris <= KONFIGURASI.baris.akhir;
  }

  prosesMasukan() {
    const nilaiMasukan = this.range.getValue();
    const baris = this.range.getRow();

    if (nilaiMasukan === "") {
      this.hapusIsiSel(baris, KONFIGURASI.kolom.nama);
      return;
    }

    if (this.mhs.cekMasukanValid(nilaiMasukan)) {
      const nimFormat = this.mhs.formatNIM(nilaiMasukan);
      this.isiNilaiSel(baris, KONFIGURASI.kolom.nim, nimFormat);
      
      const namaMahasiswa = this.mhs.cariNamaMahasiswa(nimFormat);
      this.isiNilaiSel(baris, KONFIGURASI.kolom.nama, namaMahasiswa);
    }
  }
}

function onEdit(e) {
  if (!e) return;
  const mhs = new Mhs(data);
  const pengelolaTabel = new PengelolaTabel(e.range.getSheet(), e.range, mhs);

  if (pengelolaTabel.cekRange()) {
    pengelolaTabel.prosesMasukan();
  }
}