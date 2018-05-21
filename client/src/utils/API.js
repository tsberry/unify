import axios from "axios";

export default {
    // Get colleges within distance radius of zip
    searchColleges: function (zip, distance) {
        return axios.get(`/api/collegescoreboard/search/${zip}/${distance}`);
    },

    // Get the college with the given id
    getCollege: function (id) {
        return axios.get(`/api/collegescoreboard/schools/${id}`);
    },

    // Save the given college to the database
    saveCollege: function (college) {
        let collegeData = {
            id: college.id,
            name: college.name,
            city: college.city,
            state: college.state,
            students: college.students,
            size: college.size,
            years: college.type,
            location: college.location,
            ownership: college.ownership,
            lat: college.lat,
            lon: college.lon
        };
        return axios.post("/api/colleges", collegeData);
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
    
    // sign up a user to our service
    signUpUser: (username, email, password) => {
        return axios.post('api/user/signup', { username: username, email: email, password: password });
    }
};
