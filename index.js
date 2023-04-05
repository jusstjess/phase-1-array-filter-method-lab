// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection,name){
    let driver = collection.filter(function(name1){
        return name1 === name || name.toLowerCase() === name1
})
        return driver
}


function fuzzyMatch(collection,letters){
  
            let firstLetterMatching =       
             collection.filter(function(name){
               
              return letters ===  name.slice(0,2)
          })
          
          return firstLetterMatching
}
        
function matchName(collection,name1){
    let nameMatches = collection.filter(function(el){
      return el.name === name1
    })
    return nameMatches
  }
  