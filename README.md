# Spring-React Authentication App

A *fullstack login/signup application* built with *Spring Boot* (backend) and *React* (frontend) using *Spring Security* and *JWT authentication*.

------------------------------------------------------------------------------------------------------------------------------------------------
## 📁 Project Structure
```bash spring-react-auth-app/ ├── backend/ │ ├── src/ │ │ ├── main/ │ │ │ ├── java/com/yourapp/ │ │ │ │ ├── controller/ │ │ │ │ ├── model/ │ │ │ │ ├── repository/ │ │ │ │ ├── security/ │ │ │ │ └── service/ │ │ │ └── resources/ │ │ │ ├── application.properties │ │ │ └── static/ │ │ └── test/ │ └── pom.xml │ ├── frontend/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── services/ │ │ └── App.js │ ├── package.json │ └── vite.config.js │ └── README.md ``` </pre>


## Features

- User registration and login
- JWT-based authentication
- Protected routes on frontend
- Password encryption with BCrypt

## Tech Stack

- *Backend:* Java, Spring Boot, Spring Security, PostgreSQL/MySQL (or H2)
- *Frontend:* React, React Router, Fetch, CSS
- *Authentication:* JWT, BCrypt
- *Build Tools:* Maven (backend), Node/npm (frontend)

## Setup Instructions

### 1. Clone the repository

bash
git clone https://github.com/your-username/spring-react-auth-app.git
cd spring-react-auth-app


2. Start Backend

cd backend
mvn clean install  --> no need to explicitely install maven if using intellij
mvn spring-boot:run

> The backend runs on http://localhost:8080.
> 

3. call the backend Api on frontend and use it accordingly

##Usage

1. Navigate to http://localhost:3000


2. Register a new user


3. Login to access protected pages

## Contact

Created by *Vedant Bhombe*.  
- GitHub: [vedant05bhombe-netizen](https://github.com/vedant05bhombe-netizen)  
- Email: vedant05bhomber@gmail.com

---

## Acknowledgements

- Spring Boot & Spring Security documentation  
- React documentation  

   



