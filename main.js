let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","Joe","Lassie","Balto"]

function findWords(dogString, dogNames){
    for ( element in dogString ){
        
        if (element in dogNames){
            return "Matched dog_name"
        }  else {
            return "No matches"
        } 
    }
}

console.log(findWords(dog_string, dog_names))

function findWords2(n,s){
    if (n.filter( element => s.includes(element) )){
        return "matched dog_name"
    } else {
        return "no Matches"
    }
}

console.log(findWords2(dog_names,dog_string))




let random_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(r_arr){
    for(let i = 0; i < r_arr.length; i++){
        if (i % 2 == 0){
           r_arr.splice(i,1, 'even index')
        }
    }
    return r_arr
}

console.log(replaceEvens(random_arr))