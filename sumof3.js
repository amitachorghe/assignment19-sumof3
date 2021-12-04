// sum of 3 numbers 
//go to consloe to see result of sum 

let a = function(param1) {
    let b = function(param2) {
        let c = function(param3) {
            let add = param1 + param2 + param3;
            console.log(add);
        }
        return c;
    }
    return b;

}
a(23)(50)(39);