# Async Weather Tracker 🌤️

**Course:** Web Development II (Advanced JS & React)
**Unit:** Unit 2 – Asynchronous JavaScript
**Assignment:** Lab Assignment 2
**Technology:** HTML, CSS, Vanilla JavaScript

---

## 📌 Project Overview

The **Async Weather Tracker** is a web application that demonstrates the use of **asynchronous programming in JavaScript**.
It allows users to search for weather information for any city using a public weather API and displays the results dynamically.

The project focuses on concepts such as:

* Async/Await
* Promises
* Event Loop behavior
* API requests using Fetch
* Error handling
* Local Storage

This assignment helps understand how JavaScript handles asynchronous operations in real-world applications.

---

## 🎯 Learning Objectives

* Understand **asynchronous JavaScript execution**
* Use **Fetch API with async/await**
* Handle promises using **.then() and .catch()**
* Implement **error handling with try...catch**
* Observe **JavaScript runtime behavior using console logs**
* Store and retrieve data using **Local Storage**
* Analyze **event loop and execution order**

---

## 🛠️ Technology Stack

* **HTML5** – Page structure
* **CSS3** – Styling and animations
* **Vanilla JavaScript** – Application logic
* **OpenWeather API** – Weather data source

⚠️ No frameworks or external UI libraries were used.

---

## ⚙️ Features

### 1️⃣ Weather Search

* Users can enter a **city name**
* Click **Search** or press **Enter**
* Displays:

  * City name
  * Temperature
  * Weather condition
  * Humidity
  * Wind speed
  * Weather icon

### 2️⃣ Asynchronous API Handling

* Uses **Fetch API**
* Implemented with **async/await**

Example:

```javascript
const data = await fetchWeatherData(city);
```

---

### 3️⃣ Error Handling

Handles different error cases:

* Invalid city names
* Network errors
* Invalid API responses

Implemented using:

* `try...catch`
* `.then()` / `.catch()`

---

### 4️⃣ Search History (Local Storage)

* Stores previously searched cities
* Displays **recent searches**
* Clicking a previous city automatically fetches weather again
* Keeps the **last 5 searches**

---

### 5️⃣ Event Loop Demonstration

Console logs demonstrate execution order:

```
[Sync] 1. Function handleSearch called
[Sync] 2. Before Async Fetch Call
[Sync] 3. After Async Fetch Call (Event Loop continues)
[Promise] 4. Response received
[Async] 5. Data received, updating UI
```

This shows how **JavaScript handles asynchronous operations without blocking the main thread.**

---

## 📂 Project Structure

```
weather-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ▶️ How to Run the Project

1. Download or clone the project
2. Get a free API key from the weather service
3. Add the API key in `script.js`

Example:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

4. Open **index.html** in your browser
5. Enter a city name and click **Search**

---

## 💾 Example Cities to Test

```
London
Delhi
Mumbai
New York
Tokyo
```

---

## 📸 UI Highlights

* Modern glassmorphism design
* Animated background shapes
* Weather icons
* Loader animation while fetching data
* Responsive layout

---

## 📚 Concepts Demonstrated

* JavaScript **Event Loop**
* **Promises**
* **Async/Await**
* **Fetch API**
* **Local Storage**
* **DOM Manipulation**
* **Error Handling**

---

## 👨‍💻 Author

**Student Name:** Himanshu Chaudhary
**Course:** Web Development II
**Assignment:** Async Weather Tracker Lab

---

## ✅ Conclusion

This project demonstrates how asynchronous JavaScript works in real-world applications. It integrates API communication, error handling, and browser storage while maintaining a clean and responsive user interface.
