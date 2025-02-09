const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001501828/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())


export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findCourseById=(courseId)=>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json())
    // let course={}
    // findAllCourses().then(c=> {
    //     console.log(c)
    //     course=c
    //
    // })
    // course.filter(function (x) {
    //     return x._id!== courseId})
    // console.log(course)

    // fetch(`${COURSES_URL}/${courseId}`, {
    //     method: 'GET',
    //     body: JSON.stringify(course),
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())


export default {
    findCourseById:findCourseById,
    findAllCourses:findAllCourses,
    deleteCourse: deleteCourse,
    createCourse:createCourse,
    updateCourse: updateCourse,


}