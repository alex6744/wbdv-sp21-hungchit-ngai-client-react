
import CourseManager from "./components/course-manager";
import './App.css';
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor/course-editor";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import AttemptsList from "./components/quizzes/attempts/attempts-list";


function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true}>
                    <Home/>
                </Route>
                <Route path="/courses/:layout" exact={true} >
                    <CourseManager/>
                </Route>
                <Route path={[
                    "/courses/:layout/edit/:courseId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"
                    ]}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}>

                </Route>
                <Route path="/courses/:courseId/quizzes" exact={true}>
                    <QuizzesList/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
                    <Quiz/>
                </Route>
                <Route path="/courses/:courseId/quizzes/:quizId/attempts" exact={true}>
                    <AttemptsList/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
