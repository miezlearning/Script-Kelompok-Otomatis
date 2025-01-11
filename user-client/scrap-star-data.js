const divMahasiswa = document.querySelectorAll('.col-xxl-3.col-md-4.col-ed-4');
const mhs = [];

divMahasiswa.forEach(div => {
    const elemenNIM = div.querySelector('.social-details h5 a');
    const nim = elemenNIM ? elemenNIM.textContent : 'N/A';
    
    const elemenNama = div.querySelector('.social-details span.f-light');
    const nama = elemenNama ? elemenNama.textContent : 'N/A';
    
    mhs.push({ nim, nama });
});

const isiFile = mhs.map(mahasiswa => `${mahasiswa.nim} ${mahasiswa.nama}`).join('\n');

const blobData = new Blob([isiFile], { type: 'text/plain' });
const urlBlob = URL.createObjectURL(blobData);

const linkDownload = document.createElement('a');
linkDownload.href = urlBlob;
linkDownload.download = 'mhs.txt';

document.body.appendChild(linkDownload);
linkDownload.click();

document.body.removeChild(linkDownload);
URL.revokeObjectURL(urlBlob);