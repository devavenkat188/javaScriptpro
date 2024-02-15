let totalMarks=40;
let collegeStudent=true;
let grade;

if(totalMarks >= 90 && totalMarks <= 90) {
    grade="A grade";
}
else if (totalMarks >=80) {
    grade="B grade";
}
else if(totalMarks >=70) {
    grade="C grade";
}
else if (totalMarks >=60) {
    grade="D grade";
}
else {
    if(collegeStudent) {
        grade="Re-Appear";
    }
    else if (totalMarks <= 40) {
        grade=`Re-Appear ${grade} grade.`
    }
    grade="F grade";
}

console.log(grade);