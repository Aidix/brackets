module.exports = function check(str, bracketsConfig) {
  // your solution
  var strr = str.split(''),
      stack = [],
      open = [],
      close = [],
      openI, closeI, openII;

      for (var i=0; i < bracketsConfig.length; i++){
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
      }

      for(i=0; i < strr.length; i++){

        openI = open.indexOf(strr[i]);
        closeI = close.indexOf(strr[i])

        if(openI !== -1){
          openII = stack[stack.length-1];
          if(openII !== closeI){
            stack.push(openI);
            continue;
          }
        }

        if(closeI !== -1){
          openI = stack.pop();
          if(closeI !== openI){
            return false;
          }
        }
      }
      
      if(stack.length !== 0){
        return false;
      }
      return true;
}



