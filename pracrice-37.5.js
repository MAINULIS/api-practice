// 1.
const afranNesho = {
    name:'Afran Nesho',
  
    dramas:[ 'Muthophone','Punorjonmo', 'Morichika', 'Vai Prochur Dawat Khai'],
  
    Awards:{MerilProthomAlo1: '2015', SeraActor: '2018', MerilProthomAlo: 2021},
  
    review:function(movie){
      return `${this.name} performed first movie is ${movie} released on 2023`
    },
    isGoodPerson: true,
  };
  const latest = afranNesho.review('Surongo')
  // console.log(latest)
  
  // 2.
  const nesho =`${afranNesho.name} performed best thirl drame is ${afranNesho.dramas[1]}. He get Meril Prothom Alo awards ${afranNesho.Awards.MerilProthomAlo1} for ${afranNesho.dramas[0]} . ${afranNesho.review('Surongo')} .He is a good preson. It is ${afranNesho.isGoodPerson}`;
  
  // console.log(nesho);
  
  // 3.
  const math =()=> console.log(89)
  math()
  const r=() => {
    return 89;
  }
  console.log(r())
  
  // 4. 
  const doMath =(a) =>{
    const divide = a / 17;
    return divide
  };
  const result = doMath(28);
  console.log(result.toFixed(3))
  
  // 5. 
  const doMath2 = (x, y) =>{
    const sum = x + y;
    const result1 = sum /2;
    return result1
  }
  const result1 =doMath2(33, 5);
  // console.log(result1)
  
  // 6.
  const doMath3 =(a, b) =>{
    const sum1 = a + 7;
    const sum2 = b + 7;
    const sum = sum1+sum2;
    return sum
  };
  const result3  = doMath3(1,2);
  // console.log(result3);
  
  // 7.
  const divideBySeven =[7, 14, 21,28,35, 42, 49].map( x => x/7);
  console.log(divideBySeven)
  
  // 8.
  /* 
    .map() property:
    map() creates a new array from calling a function for every array element.Always output will be an array.
    map() doesn't execute the function for empty elements. map() doesn't change the original array.
  
    forEach:
        The forEach() method executes a provided function once for each element in an array. After executing the function for every array element, this method changes the values of the existing array elements according to the result of the provided function. Hence forEach() is a mutator method. Also, forEach method doesn’t return anything (undefined).
      syntax: array.forEach(element =>{console.log(element)})
  
      Find:
      find and filter property is very much the same thing. Find just find the first one who fullfil the condition.
  
      filter:
      filter filtered the all values and give an array of the satisfied values. Filter always gives an array if there is no array then it will give an empty array.
  
  */
  
  // 9. 
  const course = {
    name: 'Programming Hero',
    author: 'Jankar Mahbub',
    price: 5500,
    isPopular: true,
  
  };
  const {name} = course
  console.log(name)
  
  const webcoureseName = {
    name1: name,
    name2: 'hablu programmer',
    name3: 'udmey programmer'
  }
  console.log(webcoureseName)
  
  const tk =[4000, 5000, 7000];
  const[a, h, c] =tk;
  const balance = [1000, h, 7800, a]
  console.log(balance)