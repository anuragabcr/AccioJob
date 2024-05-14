/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((item) => {
        if (item.profession === 'developer') {
            console.log(item)
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item) => {
        if (item.profession === 'developer') {
            console.log(item)
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newItem = {id:4,name:"susan",age:"20",profession:"intern"} 
    arr.push(newItem)
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(item => item.profession !== 'admin')
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 11, name: "john2", age: "28", profession: "QA" },
        { id: 12, name: "jack2", age: "30", profession: "GCP" },
        { id: 13, name: "kare2", age: "29", profession: "LEAD" },
      ];
    arr = arr.concat(arr2)
    console.log(arr);
  }