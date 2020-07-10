import axios from "axios";

export default {
// Get Routes
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
    table: function(postData) {
        return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/table',
            credentials : 'same-origin',
            data: postData
        })
    },
// Post Routes
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