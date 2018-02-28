var gR = document.getElementById("grades");
var aR = document.getElementById("avg_grades");
var fR = document.getElementById("final_grade");
var iR = document.getElementById('yourgrades');

function outputData(g,a,f){

 gR.innerHTML = g;
	aR.innerHTML = a.toFixed(1);
	fR.innerHTML = f;
}



function calculateGrade(allGrades){

	var totalGrade = 0;
	var avgGrade = 0;
	var finalGrades = ["A","B","C","D","F"];
	var finalGrade;

	for(var i = 0; i < allGrades.length; i++){
		totalGrade += parseInt(allGrades[i]);
		avgGrade = totalGrade / allGrades.length;
	}

	if(avgGrade >= 90){
		finalGrade = finalGrades[0];
		fR.className = "purple";
	} else if(avgGrade >= 80 && avgGrade < 90) {
		finalGrade = finalGrades[1];
		fR.className = "gray";
	} else if(avgGrade >= 70 && avgGrade < 80) {
		finalGrade = finalGrades[2];
		fR.className = "blue";
	} else if(avgGrade >= 60 && avgGrade < 70) {
		finalGrade = finalGrades[3];
		fR.className = "orange";
	} else {
		finalGrade = finalGrades[4];
		fR.className = "red";
	}

	outputData(allGrades, avgGrade, finalGrade);
	

}

function parseData(input){

	var grades = input.split(",");
	grades = grades.sort(function(a,b){return b-a});
	calculateGrade(grades);

}

function submit(){

	if(iR.value === ''){
		alert("You did not enter any grades");
	} else {
		parseData(iR.value);
	}

}


/* Below inputs data from a "mygrades.txt" file */

var myInputData = new XMLHttpRequest();
myInputData.open("GET","mygrades.txt");

myInputData.onreadystatechange = function(){
	if(myInputData.readyState == 4){
		if(myInputData.status == 200){
			console.log(myInputData.responseText);
			parseData(myInputData.responseText);
		}
	}
};

myInputData.send();