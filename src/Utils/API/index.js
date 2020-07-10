import axios from "axios";

export default {
// Get Routes
    //Gets all names from the specfic table
    namesTables: function(postData) {
       return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: 'api/namesTables',
            credentials : 'same-origin',
            params: postData
        })
    },

// Post Routes
    //inputs new names the user submits to the database
    newNameTable: function(postData) {
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: 'api/newNameTable',
            credentials : 'same-origin',
            params: postData
        })
    }, 

};