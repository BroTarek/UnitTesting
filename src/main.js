function checknm(nm){
    if(+nm>0){
        return nm
    }else if(+nm<0){
        return nm
    }
    return 0
}

function sayHello(name){
  return `Hello ${name} , how are you`
}
function getNames(){
  return ["Ali","Tarek","Mostafa"]
}
// you should check the excution paths o f the unit you are tetsing , here there are 3 excution paths. There must be at least a test for each paths 

module.exports={
    checknm,sayHello,getNames
}