// classes
class students {
    constructor(name, age, school) {
      this.name = name;
      this.age=age
      this.school=school
      this.hobby=function(){
        return "I love praying"

      }
    }
  }
  var firstStudent=new students("Lucy",23,"AkiraChix");
  console.log(firstStudent.school)
  console.log(firstStudent.hobby())