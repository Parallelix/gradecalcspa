//example subjectgroup for testing:
let s1 = "architektur";
let ws1 = 0.25;
let g1 = 4;
let s2 = "web";
let ws2 = 0.5;
let g2 = 5;
let s3 = "betriebssysteme";
let ws3 = 0.25;
let g3 = 4;

//example subjectgroup for testing:
let s4 = "java";
let ws4 = 0.25;
let g4 = 5;
let s5 = "csharp";
let ws5 = 0.25;
let g5 = 6;
let s6 = "haskel";
let ws6 = 0.25;
let g6 = 5;
let s7 = "python";
let ws7 = 0.25;
let g7 = 6;

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

const persons = [{ "name":"A", "salary":1200 }, { "name":"B", "salary": 1500 }];

persons.forEach(item => item.salary += 1000);

console.log(persons)


let addGroup = function(){
    subjectGroups.set(groupId, []);
    groupsWantedGrade.set(groupId, 4)
    groupId ++;
}



// v = array[object, object, ...]
let updateGrades = function(subjectName, grade) {
    for (let [key, value] of subjectGroups) {
        console.log("Key: " + key);
        // console.log("Value: " + value);
        for (let i = 0; i < value.length; i++) {
            console.log("Value: " + value[i].nameOfSubject);

            if (value[i].nameOfSubject === subjectName) {
                console.log("Match: " + value[i].nameOfSubject);
                value[i].grade = grade;
            }
        }
    }
}

let calculateGrades = function(subjectGroupID, desiredGrade){

}

// Test-data:
addGroup()
createSubject(0, s1, ws1, g1);
createSubject(0, s2, ws2, g2);
createSubject(0, s3, ws3, g3);
addGroup();
createSubject(1, s4, ws4, g4);
createSubject(1, s5, ws5, g5);
createSubject(1, s6, ws6, g6);
createSubject(1, s7, ws7, g7);

updateGrades(s1, 6)
console.log(subjectGroups);



