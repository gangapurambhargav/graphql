import {nanoid} from "nanoid";
class Course{
constructor(id,{ 
CourseName, category,price, language, email ,stack , teachingAssits } )
{
this.id= id
this.CourseName=CourseName
this.category=category
this.price=price
this.price=language
this.email=email
this.stack=stack
this.teachingAssits=teachingAssits
}
}
const courseholder={}
const resolvers={
getCourse :({ id } ) => {
return new Course(id, courseholder [id])
},
CreateCourse : ({ input } ) => {
let id =nanoid()
courseholder[id]=input
return new Course(id,input)
}
}
export default resolvers;
