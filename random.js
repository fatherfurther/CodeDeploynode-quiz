var random = module.exports = {
    randoms: [],
    calrandom: function(min,max) {
        /** 重複チェック用配列 */
        /** 重複チェックしながら乱数作成 */
        for(i = min; i <= max; i++){
            while(true){
                var tmp = intRandom(min, max);
                if(!random.randoms.includes(tmp)){
                    random.randoms.push(tmp);
                return tmp;
                break;
                }
            }
        }
    },
    resetandom: function() {
    random.randoms.splice(0);
    }
}

function intRandom(min, max){
    return Math.floor( Math.random() * (max - min + 1)) + min;
};