# ⏳ Asynchronous JavaScript

## 📌 1. Introduction to Asynchronous Programming
- 🔄 JavaScript is single-threaded and synchronous by default
- 🚫 Long-running operations can block the main thread
- ✨ Asynchronous programming enables non-blocking code execution
- 🎯 Common use cases: API calls, file operations, timers

## 🔄 2. Callback Pattern
```javascript
console.log('Before');
getUser(1, (user) => {
    console.log(user);
    getRepositories(user.name, (repos) => {
        console.log(repos);
    });
});
console.log('After');
```
- ⚠️ Can lead to "Callback Hell" or "Christmas Tree Problem"
- 🔍 Difficult to handle errors
- 📦 Hard to make code reusable

## 🤝 3. Promises
- ✅ Represents eventual completion of an async operation
- 3️⃣ States: Pending, Fulfilled, Rejected

```javascript
const promise = new Promise((resolve, reject) => {
    // Async work
    setTimeout(() => {
        resolve({ id: 1, name: 'John' });
        // reject(new Error('Error message'));
    }, 2000);
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

## ⚡ 4. Creating Settled Promises
```javascript
// Already resolved promise
Promise.resolve(1);

// Already rejected promise
Promise.reject(new Error('Reason for rejection'));
```

## 🔄 5. Parallel Promises
```javascript
Promise.all([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));

Promise.race([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

## 🌟 6. Async/Await
- 🎯 Cleaner syntax for working with promises
- 🔍 Better error handling with try/catch
- 📝 Makes async code look synchronous

```javascript
async function displayRepositories() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.name);
        console.log(repos);
    } catch (error) {
        console.log(error);
    }
}
```

## 🛠️ 7. Error Handling
```javascript
// Using Promise
asyncOperation()
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Using Async/Await
async function handleOperation() {
    try {
        const result = await asyncOperation();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```

## 🔄 8. Common Async Patterns

### 8.1 Sequential Execution
```javascript
async function sequence() {
    const result1 = await asyncOp1();
    const result2 = await asyncOp2(result1);
    return result3(result2);
}
```

### 8.2 Parallel Execution
```javascript
async function parallel() {
    const [result1, result2] = await Promise.all([
        asyncOp1(),
        asyncOp2()
    ]);
    return [result1, result2];
}
```

## 🎯 9. Best Practices
- ✅ Always handle errors in async operations
- 🚫 Avoid mixing callbacks with promises
- 📝 Use meaningful variable names for promises
- 🔄 Consider using Promise.all() for parallel operations
- ⚡ Use async/await for cleaner code
- 🎭 Remember that async functions always return promises

## 🎓 10. Exercise: Building an Async API
Create a simple async API that:
1. Fetches user data
2. Gets user's repositories
3. Gets commits for each repository
4. Handles errors appropriately

## 📚 Further Reading
- [MDN Web Docs - Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [JavaScript Promises - A Complete Guide](https://www.javascripttutorial.net/es6/javascript-promises/)
- [Async/Await - JavaScript.info](https://javascript.info/async-await)

---

Happy Coding! 🚀