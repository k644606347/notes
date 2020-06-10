module.exports = {
    randomNumArr(len) {
        let arr = new Array(len);
    
        for (let i = 0; i < len; i ++) {
            arr[i] = Math.round((Math.random() * 20));
        }
    
        return arr;
    }
}