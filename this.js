class Person {
     constructor(name, age){
          this.name = name;
          this.age = age;
     }

sleep(){
     console.log(`Sleeping now${this.name}`)

}
activity(){
     this.sleep();
}
}
// class Person {
//      constructor(name, age){
//           this.name = name;
//           this.age = age;
//      }

// sleep(){
//      console.log(`Sleeping now${this.name}`)

// }
// activity(){
//      this.sleep();
// }
// }