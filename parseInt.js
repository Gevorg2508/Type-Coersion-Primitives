function myParseInt(str){
    let res = '';
    for(let i = 0 ; i< str.length ; i++){
        if(str[i] == '.'){
            if(+str[i+1] <= 0 || +str[i] > 0){
                res = res + str[i] + str[i+1];
                break;
            }else
                break;
            }
            if(+str[i] <= 0 || +str[i] > 0){
                res+=str[i];
            }else break;
            }
    return res === 0 ? NaN : +res
}