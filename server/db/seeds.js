use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
   name: "John Smith",
   email: "JS@email.com",
   check_in: "check in"
  },
  {
    name: "Adam Henderson",
    email: "AH@email.com",
    check_in: "checked out"
   }, 
   {
    name: "Sally Sitwell",
    email: "SS@email.com",
    check_in: "Hotel was a piece of SHIT"
   }
])
