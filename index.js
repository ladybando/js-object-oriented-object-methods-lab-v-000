function boardMembers (name, homestate){
  this.name= name;
  this.homestate = homestate;
  this.sayHello = function(){
    console.log("Hello everybody!");
  }
}