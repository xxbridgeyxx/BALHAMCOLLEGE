function getAllStudents(){
    students = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Student/',
        success: function (data) {
            students = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return students;
}

function getStudent(id){
    student = null;
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Student/'+id,
        success: function (data) {
            student = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return student;
}

function getEnrolement(EnrolementID){
    enrolement = null;
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolement/'+EnrolementID,
        success: function (data) {
            enrolement = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return enrolement;
}