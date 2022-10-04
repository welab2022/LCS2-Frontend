const locations = [
   {
      name: "Tan Binh",
      address: "52-54 Bau Cat",
      class: "10",
      status: "Opening",
      lastView:"6/3/2022 4:38:29"
   },
   {
      name: "Bien Hoa",
      address: "123 Abc",
      class: "5",
      status: "Closed",
      lastView:"6/3/2022 4:38:29"
   },
   {
      name: "Tan Binh",
      address: "52-54 Bau Cat",
      class: "10",
      status: "Opening",
      lastView:"6/3/2022 4:38:29"
   },
   {
      name: "Dong Nai",
      address: "123 Abc",
      class: "0",
      status: "Closed",
      lastView:"6/3/2022 4:38:29"
   },
   {
    name: "TPHCM",
    address: "123 Abc",
    class: "20",
    status: "Closed",
    lastView:"6/3/2022 4:38:29"
 },
]

const users = [
 {
     "name": "Nguyen Van Admin",
     "role": "Admin",
     "desc": "A user has privileges to perform most, if not all, functions in the system",
     "enable": "Yes",
     "lastAccess": "6/10/22 2:37",
 },
 {
     "name": "Nguyen Van Hung",
     "role": "Others",
     "desc": "TBD",
     "enable": "No",
     "lastAccess": "6/10/22 2:37"
 },
 {
     "name": "Nguyen Van Phuoc",
     "role": "Others",
     "desc": "Perform Operations determined for a FO within the scope of established limits in Academic division",
     "enable": "Yes",
     "lastAccess": "6/10/22 2:37",
 }
 ,
 {
     "name": "Nguyen Van Phuoc",
     "role": "ABC",
     "desc": "Perform Operations determined for a FO within the scope of established limits in Academic division",
     "enable": "Yes",
     "lastAccess": "6/10/22 2:37",
 }
]
const students =[
   {
      "ID" : "1",
      "Name" : "Nguyen Van Thanh",
      "BirdDate" : "20/05/2004",
      "Gender" : "Male",
      "Email" : "Vanthanh@gmail.com",
      "PhoneNumber": "0952445462",
      "Note": ""
   },
   {
      "ID" : "2",
      "Name" : "Nguyen Van Thanh",
      "BirdDate" : "20/05/2004",
      "Gender" : "Male",
      "Email" : "Vanthanh@gmail.com",
      "PhoneNumber": "0952445462",
      "Note": ""
   },
   {
      "ID" : "3",
      "Name" : "Nguyen Van Thanh",
      "BirdDate" : "20/05/2004",
      "Gender" : "Male",
      "Email" : "Vanthanh@gmail.com",
      "PhoneNumber": "0952445462",
      "Note": ""
   },
   {
      "ID" : "4",
      "Name" : "Nguyen Van Thanh",
      "BirdDate" : "20/05/2004",
      "Gender" : "Male",
      "Email" : "Vanthanh@gmail.com",
      "PhoneNumber": "0952445462",
      "Note": ""
   },
   {
      "ID" : "5",
      "Name" : "Nguyen Van Thanh",
      "BirdDate" : "20/05/2004",
      "Gender" : "Male",
      "Email" : "Vanthanh@gmail.com",
      "PhoneNumber": "0952445462",
      "Note": ""
   }
]
const classes = [
   {"ClassID": "1",
      "Course": "American Deaf Culture",
      "Teacher": "Mr Vu",
      "Location": "Bau Cat, Tan Binh, HCM",
      "Class_title":"American Deaf Culture",
      "Class_date": "Weekday",
      "Class_time": "8am - 11am"
},
{"ClassID": "2",
"Course": "American Deaf Culture",
"Teacher": "Mr Vu",
"Location": "Bau Cat, Tan Binh, HCM",
"Class_title":"American Deaf Culture",
"Class_date": "Weekdays",
"Class_time": "8am - 11am"
},
{"ClassID": "3",
      "Course": "American Deaf Culture",
      "Teacher": "Mr Vu",
      "Location": "Bau Cat, Tan Binh, HCM",
      "Class_title":"American Deaf Culture",
      "Class_date": "Weekdays",
      "Class_time": "8am - 11am"
},
{"ClassID": "4",
      "Course": "American Deaf Culture",
      "Teacher": "Mr Vu",
      "Location": "Bau Cat, Tan Binh, HCM",
      "Class_title":"American Deaf Culture",
      "Class_date": "Weekdays",
      "Class_time": "8am - 11am"
}
]
const newClass ={
   "courses" : [{ "id": "1",
                  "title": "American Deaf Culture"}
                  ,{"id":"2",
                  "title":"Basic Conversation Topics"},
                  {"id": "3",
                  "title":"Intermediate Conversation Topics"}],
   "teachers":   [{ "id": "1",
                  "name": "Ms Phuong"}
                  ,{"id":"2",
                  "name":"Mr Thanh"},
                  {"id": "3",
                  "name":"Mr Vu"}],
   "locations":  [{ "id": "1",
                  "address": "Bau cat - Tan Binh"}
                  ,{"id":"2",
                  "address":"Bien Hoa - Dong Nai"}]
}
const updateClassData={
   "id": "1",
   "course": "1",
   "teacher": "2",
   "location": "2",
   "title": "American Deaf Culture",
   "date": "Weekdays",
   "time": "8am - 11am"
}
export {locations, users, students,classes, newClass,updateClassData};