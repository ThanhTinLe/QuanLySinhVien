import {
    nhanvien
} from './nhanvien'

class LaoCong extends nhanvien() {
    constructor(name) {
        super(name);
    }

    CongViec() {
        console.log('cong viec');
    }

    tinhluong() {
        return super.tinhluong() + 2000;
    }

}

export const arrSinhVien = [{
    ma: 1,
    ten: 'a'
}, {
    ma: 2,
    ten: 'b'
}];


export default LaoCong;