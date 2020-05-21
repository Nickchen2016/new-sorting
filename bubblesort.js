function bubbleSort(array) {
    for(let j=0;j<array.length;j++){
    for(let i=0;i<array.length;i++){
    if(!isInOrder(array,i))swap(array,i);
      console.log('compare',array[i],'with',array[i+1],'array be like' ,array)
    }
    }
    return array;
  }
  
  function isInOrder(array,index){
      if(index===array.length-1)return true;
      return array[index]<array[index+1];
  }
  
  function swap (array,index){
    let old = array[index];
    array[index]=array[index+1];
    array[index+1]=old;
  }