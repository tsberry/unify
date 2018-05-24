import axios from "axios";
import AuthService from "../components/AuthService";
const auth = new AuthService();

axios.defaults.headers.common['Authorization'] = `Bearer ${auth.getToken()}`;

export default {
    // Get list of all schools in the government data
    getSchoolList: function() {
        return axios.get("/api/collegescoreboard/list");
    },

    // Get colleges within distance radius of zip
    searchColleges: function (id, state, zip, distance) {
        return axios.get(`/api/collegescoreboard/search/${id}/${state}/${zip}/${distance}`);
    },

    // Get the college with the given id
    getCollege: function (id) {
        return axios.get(`/api/collegescoreboard/schools/${id}`);
    },

    // Save the given college to the database
    saveCollege: function (college) {
        let collegeData = {
            queryId: college.id,
            name: college.name,
            city: college.city,
            state: college.state,
            students: college.students,
            size: college.size,
            type: college.type,
            location: college.location,
            ownership: college.ownership,
            lat: college.lat,
            lon: college.lon
        };
        return axios.post("/api/colleges", collegeData);
    },

    getSavedCollege: (collegeId) => {
        return axios.get(`/api/colleges/${collegeId}`);
    },

    saveUser: (userId, collegeId) => {
        return axios.post(`/api/colleges/${collegeId}/${userId}`);
    },

    deleteUser: (userId, collegeId) => {
        return axios.delete(`/api/colleges/${collegeId}/${userId}`);
    },

    getColleges: (id) => {
        return axios.get(`/api/user/${id}`);
    },
    


    saveQuestion: (question, userId, collegeId) => {
        return axios.post('/api/question', { question: question, userId: userId, collegeId: collegeId });
    },



    saveAnswer: (answer, questionId, userId, collegeId) => {
        return axios.post('/api/answer', { answer: answer, questionId: questionId, userId: userId, collegeId: collegeId });
    },

    saveRating: (userId, collegeId, faculty, food, campuslife, transport, security) => {
        return axios.post('/api/rate', {userId: userId, collegeId: collegeId, faculty: faculty, food: food, campuslife: campuslife, transport: transport, security: security});
    },

    // sign up a user to our service
    signUpUser: (username, type, school, email, password) => {
        const user = { username: username, type: type, associatedSchoolId: school, email: email, password: password }
        return axios.post('api/user/signup', user);
    }
};
