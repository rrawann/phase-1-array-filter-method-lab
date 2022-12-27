// Code your solution here


function findMatching(drivers, name ){
    return drivers.filter(item => item.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(drivers, name){
    return drivers.filter(item => item.startsWith(name) )
}



function matchName(drivers,name){
    {
        return drivers.filter(item => item.name === name)
    }
} 
