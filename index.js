let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, date){
    this.name = name;
    this.startDate = new Date(date);
  }
  
  yearsExperienceFromBeginningOf(year){
    console.log(year - this.startDate.getFullYear())
  }
  
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  avenueToIndex(avenue){
    eastWest.indexOf(avenue)
  }
  
  blocksTravelled(){
    //calculate street distance - vertical
  let street = parseInt(this.beginningLocation.vertical) - parseInt(this.beginningLocation.vertical)
    //calculate avenue distance - horizontal
    let avenue = this.avenueToIndex(this.beginningLocation.horizontal) -  this.avenueToIndex(this.beginningLocation.horizontal)
  }
    
  }
}