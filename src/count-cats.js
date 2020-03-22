module.exports = function countCats(arr){
  let res = 0;
  for (let i=0; i < arr.length; i++)
  {
   for (let j=0; j < arr[i].length; j++)
   if (arr[i][j]=='^^') res +=1; 
  }
  return(res);
}