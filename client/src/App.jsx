// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Profile from './views/Profile/Profile';
import UpdateSkills from './views/UpdateSkills/UpdateSkills';
// import CourseList from './components/Courses/CourseList';
// import CourseDetail from './components/Courses/CourseDetail';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/user/:id" element={<UpdateSkills />} />
        {/* <Route path="/courses" component={CourseList} />
        <Route path="/courses/:courseId" component={CourseDetail} /> */}
      </Switch>
    </Router>
  );
}

export default App;
