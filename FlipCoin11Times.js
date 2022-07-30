const IS_HEAD = 1;
const IS_TAIL =0;
let head = 0;
let tail = 0;
let i = 0;
while(i < 11){
    let flip = Math.floor(Math.random() * 2)
    if( flip == IS_HEAD){
        console.log("Heads!");
        head++;
        i++;
    } else {
        console.log("Tails!");
        tail += 1;
        i++;
    }
}