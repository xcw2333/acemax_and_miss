function isNotANumber(inputData) {
    let truss=true
    for(let i=0;i<inputData.length;i++){
        if(isNaN(inputData[i])==true){
            truss=false
            continue
        }
    }
    if(truss){
        return true
    }else{
        return false
    }
}

export default isNotANumber