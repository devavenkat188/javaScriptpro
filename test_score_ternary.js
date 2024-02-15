let testScore = (Math.floor(Math.random()*100));
let grade;

grade = testScore >= 90 ? "A grade" : testScore >= 80 ? "B grade" : testScore >= 70 ? "C grade" : testScore >= 60 ? "D grade" : testScore >= 40 ? "Re-Evaluation" : "Fail";
console.log(grade +" "+ `${testScore}`);