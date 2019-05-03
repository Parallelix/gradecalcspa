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
let ws5 = 0.5;
let g5 = 6;
let s6 = "haskel";
let ws6 = 0.25;
let g6 = 5;

let groupId = 0;

// subject contains s = name, ws = weight, g = grade
let subject = {groupId, s1, ws1, g1};

/*
// probably has to be a map with key=name / value=subjectarray
// subjectGroup containing an array of subjectgroups, containing several subjects, the sum of their weight has to be 1 (100%)
 let subjectGroups = [[], [],[]];

let createSubject = function(myGroupId = groupId, name = "no Name passed", weight = 0.1, grade = 1) {
    if(myGroupId === 0 && subjectGroups === null){
        subjectGroups[0] = [{myGroupId, name, weight, grade}]
    }
    else if(myGroupId == 0){
        subjectGroups[0].push({myGroupId, name, weight, grade});
    }
    else{
        subjectGroups[1].push({myGroupId, name, weight, grade});
    }
    //  subjectGroups.push( {myGroupId, name, weight, grade});
}
*/
// let subjectGroups = new Map([[0, []], [1, []], [2, []] ]);
let subjectGroups = new Map();

let createSubject = function(myGroupId = groupId, name = "no Name passed", weight = 0.1, grade = 1) {
    //for ( var k of subjectGroups.key()){
    console.log(groupId);
    for (let [k, v] of subjectGroups) {
        if(k === myGroupId){
            if( Array.isArray(v)){
                v.push({myGroupId, name, weight, grade})
            }
        }
    }
}

let addGroup = function(){
    //console.log(groupId);
    subjectGroups.set(groupId, []);
    groupId ++;
}

addGroup()
createSubject(0, s1, ws1, g1);
createSubject(0, s2, ws2, g2);
createSubject(0, s3, ws3, g3);
addGroup();
createSubject(1, s4, ws4, g4);
createSubject(1, s5, ws5, g5);
createSubject(1, s6, ws6, g6);

console.log(subjectGroups);

/*
for (let [k, v] of subjectGroups) {
    {console.log(k);}
    {console.log(v);}
}*/

/*
let gradesAndWeights = new Map();

gradesAndWeights.set(s1, ws1);
gradesAndWeights.set(s2, ws2);
gradesAndWeights.set(s3, ws3);

let subjectGropus = new Map();

gradesAndWeights.set();
gradesAndWeights.get();
gradesAndWeights.size;


for (var key of gradesAndWeights.keys()) {
    console.log(key);
}
for (var value of gradesAndWeights.values()) {
    console.log(value);
}
for (var [key, value] of gradesAndWeights.entries()) {
    console.log(key + ' = ' + value);
}

let subjectGroupes = [];

*/
