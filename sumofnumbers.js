const list = [1,2,3,4];

function sumFor(list){

  let total = 0;
  for (let item of list) {
    total += item;
  }
   return total;
}
console.log(sumFor(list));
function sumWHile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}
console.log(sumWHile(list));

function sumRecursion(list) {

  if (list.length === 0) {
    return 0;
  } else {
    return list[0] + sumRecursion(list.slice(1,list.length));
  }
}
console.log(sumRecursion(list));

function sumTheEasyWay(list) {
  return _.reduce(list, function(memo,num) { return memo + num; }, 0);
}
console.log(sumTheEasyWay(list));
