// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(params) {
    const twoDrivers=drivers.slice(0,2);
    return twoDrivers;
    
}
function returnLastTwoDrivers(){
    const lastTwo=drivers.slice(2,4);
    return lastTwo;
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(){
    return function multiplier(num) {
     num=5;
      return num*num;    
    }
}
function fareDoubler(fare){
   fare=10;
   return fare*2;
}
function fareTripler(fare){
  fare=12;
  return fare*3;
}
function selectDifferentDrivers(drivers,callback){
     switch (callback) {
        case returnFirstTwoDrivers:
          return returnFirstTwoDrivers();
            
            break;
        case returnLastTwoDrivers:
            return returnLastTwoDrivers();    
     
        
     }
    }    