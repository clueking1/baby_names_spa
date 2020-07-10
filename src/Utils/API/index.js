import axios from "axios";

export default {
// Get Routes
    //Gets all names from the specfic table
    names: function(postData) {
        return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/names',
            credentials : 'same-origin',
            data: postData
        })
      },
     
// Post Routes
    //inputs new names the user submits to the database
    newName: function(postData) {
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/newName',
            credentials : 'same-origin',
            data: postData
        })
},  
 
};