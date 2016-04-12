/*module.exports = {
    data: [{
        user_Id: '1',
        first_Name: 'Saurav',
        last_Name: 'Verma',
        location_name: 'Mumbai',
        address: 'Miles india 201 Trade Avnue Building Andhri East',
        created_by: 'Saurav',
        created_on: '2016-10-10',
        date_of_Birth: '1992-10-06',
        date_of_Joining: '2015-05-25',
        deleted: null,
        email_Alias: "",
        email_address: 'saurav.verma@mile.in',
        middle_Name: 'kumar',
        password: '123456',
        personal_Email: 'saurav02262@gmail.com',
        primary_phone_number: "9874563210",
        role_Id: null,
        secondary_phone_numbers: null,
        image: "http://res.cloudinary.com/miles-no/image/upload/c_fill,f_auto,g_face:center,h_260,w_260/v1435923545/people/saurav-verma.jpg",
        userfeature: [{
            name: "git",
            status: "A"
        }, {
            name: "slack",
            status: "A"
        }],
        welcome_email: 'Welcome to Miles'


    }, {
        user_Id: '1',
        first_Name: 'Saurav',
        last_Name: 'Verma',
        location_name: 'Mumbai',
        address: 'Miles india 201 Trade Avnue Building Andhri East',
        created_by: 'Saurav',
        created_on: '2016-10-10',
        date_of_Birth: '1992-10-06',
        date_of_Joining: '2015-05-25',
        deleted: null,
        email_Alias: "",
        email_address: 'saurav.verma@mile.in',
        middle_Name: 'kumar',
        password: '123456',
        personal_Email: 'saurav02262@gmail.com',
        primary_phone_number: "9874563210",
        role_Id: null,
        secondary_phone_numbers: null,
        image: "http://res.cloudinary.com/miles-no/image/upload/c_fill,f_auto,g_face:center,h_260,w_260/v1435923545/people/saurav-verma.jpg",
        userfeature: [{
            name: "git",
            status: "A"
        }, {
            name: "slack",
            status: "A"
        }],
        welcome_email: 'Welcome to Miles'


    }, {
        user_Id: '1',
        first_Name: 'Saurav',
        last_Name: 'Verma',
        location_name: 'Mumbai',
        address: 'Miles india 201 Trade Avnue Building Andhri East',
        created_by: 'Saurav',
        created_on: '2016-10-10',
        date_of_Birth: '1992-10-06',
        date_of_Joining: '2015-05-25',
        deleted: null,
        email_Alias: "",
        email_address: 'saurav.verma@mile.in',
        middle_Name: 'kumar',
        password: '123456',
        personal_Email: 'saurav02262@gmail.com',
        primary_phone_number: "9874563210",
        role_Id: null,
        secondary_phone_numbers: null,
        image: "http://res.cloudinary.com/miles-no/image/upload/c_fill,f_auto,g_face:center,h_260,w_260/v1435923545/people/saurav-verma.jpg",
        userfeature: [{
            name: "git",
            status: "A"
        }, {
            name: "slack",
            status: "A"
        }],
        welcome_email: 'Welcome to Miles'


    }, {
        user_Id: '1',
        first_Name: 'Saurav',
        last_Name: 'Verma',
        location_name: 'Mumbai',
        address: 'Miles india 201 Trade Avnue Building Andhri East',
        created_by: 'Saurav',
        created_on: '2016-10-10',
        date_of_Birth: '1992-10-06',
        date_of_Joining: '2015-05-25',
        deleted: null,
        email_Alias: "",
        email_address: 'saurav.verma@mile.in',
        middle_Name: 'kumar',
        password: '123456',
        personal_Email: 'saurav02262@gmail.com',
        primary_phone_number: "9874563210",
        role_Id: null,
        secondary_phone_numbers: null,
        image: "http://res.cloudinary.com/miles-no/image/upload/c_fill,f_auto,g_face:center,h_260,w_260/v1435923545/people/saurav-verma.jpg",
        userfeature: [{
            feature_Name: "DROPBOX",
            subscribed_By: "",
            "subscribed_On": "1460030166000",
            "status": "D",
            "system_Identifier":" ",
            "additional_Info":""
        }, {
            feature_Name: "SLACK",
            subscribed_By:" ",
            subscribed_On: "1460030135000",
            status: "D",
            system_Identifier:" ",
            additional_Info:""
        }, {
            feature_Name: "SOCIALCAST",
            subscribed_By:" ",
            subscribed_On: "1460030167000",
            status: "A",
            system_Identifier: 1921771,
           additional_Info:""
        }, {
            feature_Name: "TRELLO",
            subscribed_By:" ",
            subscribed_On: "1460030166000",
            status: "D",
            system_Identifier: "dsfgdfdsfgdfg",
            additional_Info:""
        }, {
            feature_Name: "WIKI",
            subscribed_By:" ",
            subscribed_On: "1460030136000",
            status: "D",
            system_Identifier:" ",
            additional_Info:""
        }],
        welcome_email: 'Welcome to Miles'


    }]
};*/

var $ = jquery = require('jquery');
var Fetch = function() {
    var result = "";
    $.ajax({
        url: "http://localhost:8080/hellomiles/listEmpDetails",
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
}

module.exports = Fetch();
