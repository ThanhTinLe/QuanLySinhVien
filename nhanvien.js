export class nhanvien {
    maNhanVien = '';
    tenNhanVien = '';
    soDienThoai = '';
    email = '';

    constructor(name) {
        this.tenNhanVien = name;
    }
    tinhluong() {
        return 1000;
    }
}



let laoCong = new LaoCong('Tín');
console.log('luong', laoCong.tinhluong());