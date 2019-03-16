/*const fs = require('fs');
const util = require('util');
const separators  = [';', ',', '\t', '|'];

var data = '';
var arrStrings = [];
var separatorMain = '';
var responce = [];
*/
console.log("Hello world");
/*
var readStream = fs.createReadStream('test.csv', 'utf8');

readStream.on('data', function(chunk) {  
    data += chunk;
    if(data.indexOf('\n') != -1){
        let tempData = data;
        if(data.lastIndexOf('\n') != data.length - 1){
            data = data.substr(data.lastIndexOf('\n') + 1, data.length - 1);
            tempData = tempData.substr(0, tempData.lastIndexOf('\n'));
        }
        tempData.split('\n').forEach(element => {
            arrStrings.push(element)
        });
    }else if(data.indexOf('\r\n') != -1){
        let tempData = data;
        if(data.lastIndexOf('\r\n') != data.length - 1){
            data = data.substr(data.lastIndexOf('\r\n'), data.length - 1);
            tempData = tempData.substr(0, tempData.lastIndexOf('\r\n'));
        }
        tempData.split('\r\n').forEach(element => {
            arrStrings.push(element)
        });
    }
    if(arrStrings.length > 10){ 
        if(separatorMain == '') GetSeparator();
        convertToObjects();
        arrStrings = [];
    }
}).on('end', function() {
    arrStrings.push(data);
    if(separatorMain == '') GetSeparator();
        convertToObjects();
        arrStrings = [];
});

function GetSeparator(){
    var keyValue = [];
    arrStrings.forEach(elem =>{
        separators.forEach(separator =>{
            if( keyValue[separator] == undefined) keyValue[separator] = 0;
            keyValue[separator] += elem.split(separator).length - 1;
        });
        
        //console.dir(keyValue);
    }); 

    var amountOfSeparators = [];
    separators.forEach(separator =>{
        //find separator
        if(amountOfSeparators[separator] == undefined) amountOfSeparators[separator] = 0;
            amountOfSeparators[separator]+=keyValue[separator];
        // keyValue.forEach(keyval =>{
        //   console.dir(keyValue);
        //   console.dir(amountOfSeparators);
        // });
    });

    var maxValue = 0;
    var tempSeparetor = '';
    
    separators.forEach(separator =>{
        if(maxValue < amountOfSeparators[separator] && amountOfSeparators[separator] != 0){
            tempSeparetor = separator;
            maxValue = amountOfSeparators[separator];
        }
    });
    separatorMain = tempSeparetor;
}


Transformer = function(){
  this.data = '';
  this.arrStrings = [];
  this.separatorMain = '';
  this.responce = [];
};

Transformer.prototype.transformation = function(chunk){
  filestream.on('data', function(chunk) {  
    this.data += chunk;
    if(this.data.indexOf('\n') != -1){
        let tempData = this.data;
        if(this.data.lastIndexOf('\n') != this.data.length - 1){
            this.data = this.data.substr(this.data.lastIndexOf('\n') + 1, this.data.length - 1);
            tempData = tempData.substr(0, tempData.lastIndexOf('\n'));
        }
        tempData.split('\n').forEach(element => {
            this.arrStrings.push(element)
        });
    }else if(this.data.indexOf('\r\n') != -1){
        let tempData = this.data;
        if(this.data.lastIndexOf('\r\n') != this.data.length - 1){
            this.data = this.data.substr(this.data.lastIndexOf('\r\n'), this.data.length - 1);
            tempData = tempData.substr(0, tempData.lastIndexOf('\r\n'));
        }
        tempData.split('\r\n').forEach(element => {
            this.arrStrings.push(element)
        });
    }
    if(this.arrStrings.length > 10){ 
        if(this.separatorMain == '') GetSeparator();
        convertToObjects();
        this.arrStrings = [];
    }
}).on('end', function() {
    this.arrStrings.push(this.data);
    if(this.separatorMain == '') GetSeparator();
        convertToObjects();
        this.arrStrings = [];
});
}

Transformer.prototype.convertToObjects = function(){
    this.responce = [];
    this.arrStrings.forEach(strOne => {
      let oneObject = [];
        strOne.split(this.separatorMain).forEach(strPart=>{
            oneObject.push(strPart);
        });
        this.responce.push(oneObject);
    });
}

Transformer.prototype.GetSeparator() = function(){
  var keyValue = [];
    this.arrStrings.forEach(elem =>{
        separators.forEach(separator =>{
            if( keyValue[separator] == undefined) keyValue[separator] = 0;
            keyValue[separator] += elem.split(separator).length - 1;
        });
        
        //console.dir(keyValue);
    }); 

    var amountOfSeparators = [];
    separators.forEach(separator =>{
        //find separator
        if(amountOfSeparators[separator] == undefined) amountOfSeparators[separator] = 0;
            amountOfSeparators[separator]+=keyValue[separator];
        // keyValue.forEach(keyval =>{
        //   console.dir(keyValue);
        //   console.dir(amountOfSeparators);
        // });
    });

    var maxValue = 0;
    var tempSeparetor = '';
    
    separators.forEach(separator =>{
        if(maxValue < amountOfSeparators[separator] && amountOfSeparators[separator] != 0){
            tempSeparetor = separator;
            maxValue = amountOfSeparators[separator];
        }
    });
    this.separatorMain = tempSeparetor;
}*/