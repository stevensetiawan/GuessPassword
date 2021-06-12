function PassPossibility(){
    let password = ''
    let passlength = 0
    let zeroDigit = ''
    let correctPassAmount = 0
    let adjacent_digit = false

   loopCounter: for(counter=153517; counter <=630395; counter+=1){
       password = counter.toString();
       passlength = password.length
       adjacent_digit=false
       zeroDigit = ''
       if(passlength<6){
        for(let len =6 ; len>passlength; len-=1){
              zeroDigit +='0'
        }  
            password = zeroDigit + password
      }
      passlength = password.length
        for(i=0; i<passlength-1; i++){
            if(password[i] > password[i+1]){
                continue loopCounter
            }
            else if(password[i] == password[i+1]){
                adjacent_digit=true
            }
        }
        if(adjacent_digit==true){
            correctPassAmount += 1
        }
        console.log(password, correctPassAmount, " ini password & correct pass amount ")
    }
    return correctPassAmount
}

console.log(PassPossibility())