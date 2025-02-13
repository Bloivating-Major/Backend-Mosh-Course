const Joi = require("joi");

const express = require("express");

const app = express();

app.use(express.json()); // it is a middleware

const courses = [
  { id: 1, name: "DSA" },
  { id: 2, name: "Backend" },
  { id: 3, name: "Frontend" },
];

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const {error} = validateCourse(req.body);
  // If invalid return 400 - Bad Request
  if (error) {
    // 400 bad request
    return res.status(400).json(error.details[0].message);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name, // you have to enable parsing of json to use this
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  // 1st look up the course
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json("Course not found");
  // if not exists return 404
  // Validate
  // const schema = Joi.object({
  //   name: Joi.string().min(3).required(),
  // });
  // const result = schema.validate(req.body); instead of this we will use something like
  const {error} = validateCourse(req.body);
  // If invalid return 400 - Bad Request
  if (error) {
    // 400 bad request
    return res.status(400).json(error.details[0].message);
  }
  // Update Course
  course.name = req.body.name;
  // Return updated course
  res.send(course);
});

// as we have duplicated our logic to validate the course now we can extract it into another function to reuse it again and again.

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

app.delete("/api/courses/:id", (req, res) => {
  // 1st look up the course --> Not Exist return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json("Course not found");
  // Delete it
  // find it using index
  const index = courses.indexOf(course);
  // use splice method to remove an object from course
  courses.splice(index, 1);
  // Return the deleted course
  res.send(course);
})

// app.get('/api/:id/:name', (req, res)=>{
//     res.send(req.params); // req.params.id is used to access the dynamic ID
// })

// app.post();
// app.put();
// app.delete();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
