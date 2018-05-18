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
            queryId: college.id,
            name: college.name,
            lat: college.lat,
            lon: college.lon
        };
        return axios.post("/api/colleges", collegeData);
    },

    // Gets a single user by id
    getUser: (id) => {
        return axios.get(`/api/user/${id}`);
    },
    // sign up a user to our service
    signUpUser: (username, password) => {
        return axios.post('api/user/signup', { username: username, password: password });
    }
};
