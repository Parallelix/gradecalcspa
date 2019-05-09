//example subjectgroup for testing:
let s1 = "Parallele Programmierung";
let ws1 = 0.25;
let g1 = 5.5;
let s2 = "Funktionale Programmierung";
let ws2 = 0.188;
let g2 = 6;
let s3 = "C# und .NET";
let ws3 = 0.312;
let g3 = -1;
let s4 = "Programmieren Java advanced";
let ws4 = 0.25;
let g4 = 4.5;

let s5 = "Software Architekturen";
let ws5 = 0.333;
let g5 = 5;
let s6 = "Objektorientiertes Design (OOD)";
let ws6 = 0.4;
let g6 = 5.5;
let s7 = "Kommunikation für verteilte Systeme";
let ws7 = 0.267;
let g7 = -1;

let s8 = "Web Engineering";
let ws8 = 0.5;
let g8 = -1;
let s9 = "Datenbanken Grundlagen";
let ws9 = 0.5;
let g9 = 6;

let s10 = "Project Automation";
let ws10 = 0.6;
let g10 = -1;
let s11 = "Interaction Design";
let ws11 = 0.4;
let g11 = 5.5;

let groupId = 0;
let subject = {groupId, s1, ws1, g1};

// map mit key=groupid / value=subject[]
let subjectGroups = new Map();
// map mit key=groupid / value=(float)wantedGrade
let groupsWantedGrade = new Map();


let createSubject = function(myGroupId = groupId, nameOfSubject = "no Name passed", weight = 0.1, grade = -1) {
    for (let [k, v] of subjectGroups) {
        if(k === myGroupId){
            if( Array.isArray(v)){
                v.push({myGroupId, nameOfSubject, weight, grade})
            }
        }
    }
}

let addGroup = function(){
    subjectGroups.set(groupId, []);
    groupsWantedGrade.set(groupId, 4)
    groupId ++;
}

// v = array[object, object, ...]
let updateGrades = function(subjectName, grade) {
    for (let [key, value] of subjectGroups) {
        //console.log("Key: " + key);
        // console.log("Value: " + value);
        for (let i = 0; i < value.length; i++) {
            //console.log("Value: " + value[i].nameOfSubject);

            if (value[i].nameOfSubject === subjectName) {
                //console.log("Match: " + value[i].nameOfSubject);
                value[i].grade = grade;
            }
        }
    }
}

let calculateGrades = function(subjectGroupID, desiredGrade){
    for (let [key, value] of subjectGroups) {
        if(key === subjectGroupID){
            let currentGrade = 0;
            let gradesLeft = 0;
            let weightLeft = 0;
            for(let i = 0; i < value.length; i++){
                if(value[i].grade != -1) {
                    //console.log("current Grade = " + currentGrade + ". now adding (" + value[i].grade + " * " + value[i].weight + ") " + (value[i].grade * value[i].weight));
                    currentGrade += value[i].grade * value[i].weight;
                }
                else{
                    gradesLeft++;
                    weightLeft += value[i].weight;
                    //console.log("Grades Left: " + gradesLeft +", weight left: "+ weightLeft);
                }
            }
            let gradeDifference = (desiredGrade - currentGrade) / weightLeft;
            //console.log("grades Difference: " + gradeDifference);

            if (gradeDifference <= 6){
                for(let i = 0; i < value.length; i++){
                    if(value[i].grade === -1) {
                        // store the result in array? print it?
                        console.log("Subject: " +value[i].nameOfSubject + ". Grade necessary: " + gradeDifference);
                    }
                }
            }
            else {
                let bestPossibleGrade = ((gradesLeft * 6) * weightLeft )+ currentGrade;
                console.log("Best possible grade: " + bestPossibleGrade)
            }
        }
    }
}
let calculateTestData = function(nrOfModules = 0, desiredGrade = 3.75){
    console.log("------------- Desired Grade: "+ desiredGrade +  " -------------")

    for(let i = 0; i <= nrOfModules; i++){
        calculateGrades(i, desiredGrade)
    }
}

let test1 = function(){
    addGroup()
    createSubject(0, s1, ws1, g1);
    createSubject(0, s2, ws2, g2);
    createSubject(0, s3, ws3, g3);
    createSubject(0, s4, ws4, g4);

    addGroup();
    createSubject(1, s5, ws5, g5);
    createSubject(1, s6, ws6, g6);
    createSubject(1, s7, ws7, g7);

    addGroup();
    createSubject(2, s8, ws8, g8);
    createSubject(2, s9, ws9, g9);

    addGroup();
    createSubject(3, s10, ws10, g10);
    createSubject(3, s11, ws11, g11);

    //addGroup();
    /*
    calculateGrades(0, 3.75)
    calculateGrades(1, 3.75)
    calculateGrades(2, 3.75)
    calculateGrades(3, 3.75)

     */
    calculateTestData(3, 5.25)
    calculateTestData(3, 3.75)

}

test1();

let addHTMLElements = function(){
    document.createTextNode('some text node');
    const newEl = document.createElement('<div>');
    //.id= 'createdButton';
    //newEl.textContent = 'Newly created Button';
    console.log("Button Created");
}

//addHTMLElements();
