// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import CourseList from './components/Courses/CourseList';
import CourseDetail from './components/Courses/CourseDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/courses" component={CourseList} />
        <Route path="/courses/:courseId" component={CourseDetail} />
      </Switch>
    </Router>
  );
}

export default App;
