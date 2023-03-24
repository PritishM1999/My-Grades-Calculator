function calculateGrade(){

    let sub1 = parseInt(document.getElementById("sub1").value);
    let sub2 = parseInt(document.getElementById("sub2").value);
    let sub3 = parseInt(document.getElementById("sub3").value);
    let sub4 = parseInt(document.getElementById("sub4").value);
    let sub5 = parseInt(document.getElementById("sub5").value);

    let myerr = false;

    if(sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100){
        let err = document.getElementById('error');
        err.innerHTML = 'Marks can not be greater than 100';
        let myerr = true;
    }
    else if(sub1 < 35 || sub2 < 35 || sub3 < 35 || sub4 < 100 || sub5 < 100){
        let err = document.getElementById('error');
        err.innerHTML = 'Can generate grades you got fail';
        let myerr = true;
    }

    let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;

    let avgMarks = totalMarks/5;

    let grade;
    if(avgMarks >= 90){
        grade = "A"
    } else if(avgMarks >= 80){
        grade = "B"
    } else if(avgMarks >= 70){
        grade = "C"
    } else if(avgMarks >= 60){
        grade = "D"
    } else if(avgMarks < 60){
        grade = "F"
    }

    // let result = document.getElementById('totalcard');
    // result.innerHTML = "Total Marks: " + totalMarks;

    let marks = document.getElementById("myTotalMarks");
    let avg = document.getElementById("myAvdMarks");
    let grades = document.getElementById("myGradeMarks");

    if(myerr){
        marks.innerHTML = "Total Marks " + totalMarks;
        avg.innerHTML = "Your Average marks are " + avgMarks;
        grades.innerHTML = "You Got " + grade + " grade";
    }
}
