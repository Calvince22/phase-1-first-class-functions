function receivesAFunction(callback){
    callback()
}
function returnsANamedFunction(){
    function namedFunction(){
        return "I am named function"
    }
    return namedFunction
}
function returnsAnAnonymousFunction(){
    return function(){
        return "I'm anonymous"

    }
}