
# 🌍 Express & RESTful APIs - Mastering Backend Development 🚀

## 📌 Introduction
Welcome to the world of **Express.js** – the fast, unopinionated, and minimalist web framework for **Node.js**! In this module, we'll explore **RESTful services** and how to build scalable APIs with Express.

---

## 🔥 What is RESTful Service?
- REST stands for **Representation State Transfer** – a standard convention for building web APIs.
- It follows **client-server architecture** and communicates using **HTTP methods**:
  - 🟢 `GET` → Fetch data
  - 🟠 `POST` → Create new data
  - 🔵 `PUT` → Update existing data
  - 🔴 `DELETE` → Remove data

---

## ⚡ Introducing Express.js
🚀 **Express** simplifies backend development by handling routing, middleware, and API requests efficiently.

### 🛠 Setup
```bash
mkdir express-api && cd express-api
npm init -y
npm install express
```

### 🏗️ Building Your First Server
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! 🌍');
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));
```
---

## 🚀 Enhancing Your Development Experience

### 🔄 Nodemon (Auto-restart Server)
- **Nodemon** watches for file changes and restarts the server automatically.
- Install it globally:
```bash
npm install -g nodemon
nodemon app.js
```

### 🌱 Environment Variables (Dynamic Ports)
```javascript
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
```
Set port in terminal:
```bash
$env:PORT=5000  # Windows
export PORT=5000  # Mac/Linux
```

---

## 🛣️ Routing & Parameters  
💡 **Dynamic routes** let you pass parameters in URLs.

```javascript
app.get('/api/:id', (req, res) => {
    res.send(req.params.id);
});
```
```javascript
app.get('/api/:id/:name', (req, res) => {
    res.send(req.query); 
});
```

---

## 📦 Handling Requests & Responses

### 📜 Handling GET Requests
```javascript
const courses = [
  { id: 1, name: "DSA" },
  { id: 2, name: "Backend" },
  { id: 3, name: "Frontend" },
];

app.get('/api/courses', (req, res) => res.send(courses));

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json('❌ Course not found!');
  res.send(course);
});
```

### 📝 Handling POST Requests
```javascript
app.use(express.json());

app.post('/api/courses', (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).json('⚠️ Name must be at least 3 characters long!');
  }

  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});
```

---

## ✅ Input Validation using Joi 📏
Install Joi:
```bash
npm install joi
```

Use it for validation:
```javascript
const Joi = require('joi');

function validateCourse(course) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(course);
}
```

---

## 🛠️ Handling PUT (Update) Requests
```javascript
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json('❌ Course not found!');

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});
```

---

## 🗑️ Handling DELETE Requests
```javascript
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).json('❌ Course not found!');

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  
  res.send(course);
});
```

---

## 🎯 Project: Building a **Genres API**
- Use everything you've learned to build an API for managing genres in a **movie database**. 🎬

---

## 🏆 Congratulations!
You've now mastered **Express.js** and **RESTful APIs**! 🚀  
Next, we’ll dive deeper into **Middleware, Authentication, and Database Integration**. Stay tuned! 🔥

---

### 📌 Keep Learning:
- [Express Documentation](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)


This `README.md` is **structured, engaging, and packed with useful information** while keeping it **fun and interactive with emojis**. Let me know if you'd like any tweaks! 🚀🎉