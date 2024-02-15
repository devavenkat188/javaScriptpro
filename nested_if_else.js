let totalMarks=42;
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
    if(collegeStudent && totalMarks < 60) {
        grade="Re-Evaluation";
    }
    else if (totalMarks <= 40) {
        grade="Re-Appear F grade."
    }
    else {
        grade="F grade";
    }
    
}

console.log(grade);

/*
Re-Evaluation
 */