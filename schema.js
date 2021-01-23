import {buildSchema} from "graphql";
const schema = buildSchema(
type, Course, {
id:ID,
courseName: string,
category : string,
price : int,
language : string,
email : string,
teachingAssists: [teachingAssist],
},
type, teachingAssist //custom datatypes
,{ 
firstName: string,
lastName: string,
experience : int,
},
type, Query,{
getCourse(id:ID):Course
}
  ,input ,CourseInput,{
id:ID,
courseName:string, // (!-- compulsory)
category : string,
price : int,
language : string,
email: string,
teachingAssists: [TeachingAssistInput]
},
input, teachingAssitInput,{
firstName: string,
experience : int,
},
type, Mutation // keyword storing the data
={
createCourse(input : CourseInput): Course
} //creates &takes input as Courseinput secion & throws Course as output.
) 

