function numberJoinerWhile (start, finish) {
    var joinedNums = '';
    while (start < finish) {
        return joinedNums += start++ + "_";
        
    }
    console.log(joinedNums);
}

numberJoinerWhile (1,10);
