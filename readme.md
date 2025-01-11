Collecting workspace information

# Kelompok Otomatis - Google Spreadsheet Script 

📝 Automatic Fill NIM and Name Student Script for Google Spreadsheet.

## ⚙️ Setup Google Spreadsheet

1. Create a new Google Spreadsheet
2. Go to **Extensions** > **Apps Script**
3. Copy the code from `kelompok.gs` and paste it into the script editor
4. Configure the settings in the `KONFIGURASI` object:

```javascript
const KONFIGURASI = {
    kolom: {
        inputan: 4,    // Column D for NIM input
        nim: 4,        // Column D for full NIM display
        nama: 5        // Column E for student name
    },
    baris: {
        awal: 6,       // Starting row for data
        akhir: 55      // Ending row for data
    },
    prefix_nim_mhs: "2209106",  // NIM prefix (change according to your needs)
    panjang_angka: 3           // Length of NIM suffix
};
```

5. Save the script and refresh your spreadsheet

## ✅ Using the Web Data Structure Generator

To easily generate the student data array:

1. Open the Data Structure Generator web page **[click me](https://miezlearning.github.io/Script-Kelompok-Otomatis/)**
2. Input student data in the format:
```
2209106001 Student Name 1
2209106002 Student Name 2
```
     Or using tab-separated format from Excel/Sheets

3. Click **Generate** button
4. Click **Copy Output** to copy the generated data structure
5. Paste the generated code in the `data` array in your Apps Script:

```javascript
const data = [
        [2209106001, "Student Name 1"],
        [2209106002, "Student Name 2"]
];
```

## 🎁 Tips ^o^
### English
```py
1. Use the web generator to quickly convert student data from Excel/Sheets
2. Only input the last 3 digits of NIM in the spreadsheet (e.g., `001`/`1` for `2209106001`)
3. Names will automatically populate when valid NIM is entered
4. The script works for rows 6-55 in column D by default (free to edit)
5. Clearing the NIM input will also clear the name
```

### Bahasa Indonesia
```py
1. Gunakan web generator buat convert data mahasiswa dari Excel/Sheets
2. Cuma masukin 3 digit terakhir NIM di spreadsheet (contoh: `001`/`1` buat `2209106001`)
3. Nama bakal otomatis muncul kalo NIM valid dimasukin
4. Script ini jalan buat baris 6-55 di kolom D secara default (bisa di-edit)
5. Kosongin input NIM bakal kosongin juga namanya
```

## Spreadsheet Usage

### English
```py
1. Enter the last 3 digits of a student's NIM in column D
2. The full NIM and name will automatically populate
3. Leave the cell empty to clear the data
4. Only numbers 0-999 are valid inputs
```

### Bahasa Indonesia
```py
1. Masukin 3 digit terakhir NIM mahasiswa di kolom D
2. NIM lengkap dan nama bakal otomatis muncul
3. Kosongin sel buat hapus data
4. Cuma angka 0-999 yang valid
```