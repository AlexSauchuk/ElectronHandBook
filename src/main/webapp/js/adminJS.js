$(document).ready(function() {

    $('#tableList').on('click',function (event) {
        var id = event.target.parentNode.id;
        getAllTableElements(id)
    });

    /*    $('.col-lg-3').on('click', function(event) {
     var target = event.target;
     if(oldTarget!=null)
     oldTarget.closest('td').childNodes[0].classList.remove("animationColor");
     oldTarget = target;
     target.closest('td').childNodes[0].classList.add("animationColor");
     if(!target.closest('td')) return;

     var nameTable = target.closest('td').childNodes[0].value;
     NameTable = nameTable;
     getAllTableElements(nameTable);
     });*/
});


/*function decreaseDeep() {
    deep--;
    zIndex--;
    modalStrings.pop();
    objects.pop();
    Data = objects[deep];
    var exStr = '';
    for(var str in modalStrings)
        exStr+=modalStrings[str];

    $('#modalWindow').html(exStr);
    document.body.removeChild(document.getElementsByClassName('modal-backdrop fade in')[document.getElementsByClassName('modal-backdrop fade in').length-1]);
}

function recursionModals(data) {
    Data = data;
    var modalString = '<div id="modalWindow'+deep+'" class="modal fade in" style="z-index: '+zIndex+';display: block"><div class="modal-dialog" style="width: 90%" ><div class="modal-content"><div class="modal-header"  id="headID"><button class="close" onclick="decreaseDeep()" type="button" data-dismiss="modal">Close</button></div><div class="modal-body">custom</div><div  class="modal-footer" onclick="decreaseDeep()"><button class="btn btn-default"  id="closeBtn" type="button" data-dismiss="modal">Close</button></div></div></div></div>';
    childModal = '\'#modalWindow'+deep+'\'';
    deep++;
    parentModal = childModal;
    zIndex++;
    var headerString='';
    var table = '<table class="table table-bordered table-hover">HB</table>';
    var headers= '<thead><tr>header</tr></thead>';
    var bodyM = '<tbody><tr>bodys</tr></tbody>';
    var patternModal = /custom/;
    var patternHead = /header/;
    var patternBody = /bodys/;
    var patternTable = /HB/;

    for(var key in data) {
        headerString+='<th>'+key+'</th>';
    }
    var additionalString = '';

    for(var key in data) {

        if($.isPlainObject(data[key]))
        {
            additionalString +='<td><input type="button" style="width: 100%" value="'+(data[key])['id']+'" data-toggle="modal" data-target="#modalWindow'+deep+'" onclick="generateModals(this)"></td>';
        }else
            additionalString +='<td>'+data[key]+'</td>';
    }

    headers = headers.replace(patternHead,headerString);
    bodyM = bodyM.replace(patternBody,additionalString);
    table = table.replace(patternTable,headers + bodyM);
    modalString = modalString.replace(patternModal,table);
    modalStrings.push(modalString);
    var exStr = '';
    for(var str in modalStrings)
        exStr+=modalStrings[str];

    $('#modalWindow').html(exStr);
    document.getElementById("closeBtn").focus();

}

function generateModals(obj) {
    temporaryData = Data;
    if(deep==0 && objects.length==0)
        objects.push(temporaryData);
    var row = obj.closest("tr").rowIndex;
    var col = obj.closest("td").cellIndex;

    if(temporaryData instanceof window.Array)
        objects.push(temporaryData[row-1][Object.keys(temporaryData[row-1])[col]]);
    else
        objects.push(temporaryData[Object.keys(temporaryData)[col]]);

    recursionModals(objects[deep+1]);
}

function updateData(obj) {
    var editBody = $('#myModalUpdate').find('#mainForm');
    ($(editBody[0].lastElementChild).find("button")[0]).addEventListener("click",sendUpdateData);
    ($('#myModalUpdate').find('.btn.btn-default')[0]).addEventListener("click", getUpdatedData);
    ($('#myModalUpdate').find('.close')[0]).addEventListener("click", getUpdatedData);

    var arrayValues = new Array();
    $(obj).each(function(){
        $("td",this).each(function(){
            arrayValues.push(this)
        });
    });

    arrayValues.pop();
    arrayValues.pop();
    var i = 0;
    $(editBody).each(function(){
        $("div",this).each(function(){
            if(this.className=='col-sm-8') {
                if((this.firstElementChild).childNodes.length==0)
                    $(this.firstElementChild).val(arrayValues[i].innerHTML);
                i++;
            }
        });
    });

    if(Object.keys(arrayObj).length>0){
        var inputs = obj.getElementsByTagName('input');
        var i = 0;
        for(var arrayType in arrayObj){
            var j = 0;
            while(j!=arrayObj[arrayType].length) {
                console.log(arrayType);
                var number = (arrayObj[arrayType])[j].substr(0, (arrayObj[arrayType])[j].indexOf(" "));
                if ($(inputs[i]).val() == number)
                    $('select[name=id' + arrayType[0].toUpperCase() + arrayType.slice(1) + ']').val((arrayObj[arrayType])[j]);
                j++;
            }
            i++;
        }
    }
}

function clearInputs(editBody) {
    $(editBody).each(function(){
        $("div",this).each(function() {
            $(this.firstElementChild).val(null);
        });
    });
}

function getData(editBody) {
    var result = '';
    $(editBody).each(function(){
        $("div",this).each(function() {
            if(this.className=='col-sm-8') {
                var key = $(this.firstElementChild).attr('name');
                var value = $(this.firstElementChild).val();
                if(key == 'id' && value == ''){
                    value ="0";
                }else{
                    if($(this.firstElementChild).get(0).tagName == 'SELECT'){
                        value = value.substr(0,value.indexOf(' '))
                    }
                }
                result = result.concat('&',key,'=', value);
            }
        });
    });
    return result;
}

function getUpdatedData() {
    $('#myModalUpdate').find('.modal-footer > .btn').click();
    getAllTableElements(NameTable);
}

function sendUpdateData() {
    var editBodyUpdate = $('#myModalUpdate').find('#mainForm');

    $.ajax({
        type: 'POST',
        url: '/update?tableName='+NameTable + getData(editBodyUpdate),
        success: function (result) {
            if(result != null && result.length !=0){
                alert(result);
            }
        }});
}

function sendAddData() {
    var editBodyAdd = $('#myModalAdd').find('#mainForm');

    $.ajax({
        type: 'POST',
        url: '/add?tableName='+NameTable + getData(editBodyAdd),
        success: function (result) {
            console.log(result);
            if(typeof result == 'string'){
                alert(result);
            }else {
                Data = result;
                $('#myModalAdd').find('.modal-footer > .btn').click();
                setHtml();
            }
        }});
}*/

var NameTable = "";
var Data;
var futureQueryForID = {};
var temporaryData;
var zIndex = 1050;
var modalStrings = new Array();
var objects = new Array();
var deep = 0;
var parentModal = '';
var childModal = '#modalWindow0';
var arrayObj = {};
var oldTarget;

function deleteRow(obj) {
    $.ajax({
        type: 'DELETE',
        url: '/main/delete/' + NameTable + '?' + $.param({"ID": obj.id}),
        success:function(result){
            if(result==null || result.length == 0){
                Data.splice(obj.rowIndex - 2,1);
                $(obj).remove();
            }else {
                alert(result);
            }
        }
    });
}
/*
function formParams(rowIndex) {
    var resultParams='';
    var columnNames = $("#tableHotel").find("tr").first().children();
    for(var i=0; i< columnNames.length; i++){
        var currentObj = Data[rowIndex-1][columnNames[i].textContent];
        if($.isPlainObject(currentObj)){
            resultParams = resultParams.concat("id",columnNames[i].textContent[0].toUpperCase() + columnNames[i].textContent.slice(1),"=",currentObj["id"],"&");
        }else{
            resultParams = resultParams.concat(columnNames[i].textContent,"=",currentObj,"&");
        }
    }
    return resultParams.slice(0,resultParams.length-1);
}

function generateOption(arrayObj, value, arrayType) {
    var option = document.createElement("option");
    option.value = arrayObj[arrayType][value];
    option.text = arrayObj[arrayType][value];
    return option;
}

function generateChilds(arrayObj) {
    for(var arrayType in arrayObj) {
        var editBodyUpdate = $('#myModalUpdate').find('#id' + arrayType[0].toUpperCase() + arrayType.slice(1) +'');
        var editBodyAdd = $('#myModalAdd').find('#id' + arrayType[0].toUpperCase() + arrayType.slice(1) +'');
        if(editBodyUpdate[0].childElementCount==0)
            for(var value in arrayObj[arrayType]) {
                editBodyUpdate[0].appendChild(generateOption(arrayObj,value,arrayType));
                editBodyAdd[0].appendChild(generateOption(arrayObj,value,arrayType));
            }
    }
}

function formGetAllHeadersRequest() {
    var result='';
    for(var value in futureQueryForID) {
        result = result.concat('tableName=', mapStringTable[value], '&')
    }
    return result;
}

function generateSelectChilds() {
    var tables = formGetAllHeadersRequest();
    if(tables != '') {
        $.ajax({
            type: 'GET',
            url: '/get_headers?' + tables,
            success: function (data) {
                for (var value in futureQueryForID) {
                    arrayObj[value] = data[mapStringTable[value]];
                }
                generateChilds(arrayObj);
            }
        });
    }
}

function addData() {
    var editBodyAdd = $('#myModalAdd').find('#mainForm');
    clearInputs(editBodyAdd);
    ($(editBodyAdd[0].lastElementChild).find("button")[0]).addEventListener("click",sendAddData);
}*/

function buildObjStr(obj) {
    var result = '';
    for(var key in obj){
        if(key === 'id')
            result = obj[key] + ' ' + result;
        else
            result += obj[key] + ' ';
    }
    return result.trim();
}

function buildTableHead(tableName, data) {
    var columnTrString = '';
    var countColumn = 0;

    for(var key in data) {
        columnTrString+='<td id="'+key.toUpperCase()+'">'+key.toUpperCase()+'</td>';
        countColumn++;
    }
    if(typeof data !== 'undefined')
        columnTrString += '<td class="changeData">UPDATE</td><td class="changeData">DELETE</td>'

    var mainHeader = '<tr class="titleTr"><td class="titleTd">'+tableName.toUpperCase()+'</td><td colspan="'+countColumn+'"></td><td class="plusTd button"></td></tr>';
    mainHeader += '<tr class="headingTr">' + columnTrString + '</tr>';
    return '<thead>' + mainHeader + '</thead>';
}

function setHtml(){
    var countRows = Data.length;
    var bodyString = '';
    var j = 0;
    zIndex = 1050;

    while(j!=countRows){
        var strRow = '<tr id="'+Data[j].id+'">row</tr>';
        var patternRow = /row/;
        var additionalString = '';
        for(var key in Data[j]) {
            if($.isPlainObject(Data[j][key]))
            {
                futureQueryForID[key] = key;
                additionalString +='<td class="embeddedTd" id="'+(Data[j][key])['id']+'" data-toggle="modal" data-target="#modalWindow'+deep+'" onclick="generateModals(this)">'+ buildObjStr(Data[j][key])+'</td>';
            }else
                additionalString +='<td>'+Data[j][key]+'</td>';
            }

        additionalString+='<td class="changeTd" onclick="editRow(this.parentNode)"><div class="settingsIcon"><img src="/images/pencil32.png"/></div>' +
            '<td class="deleteTd" onclick="deleteRow(this.parentNode)"><div class="settingsIcon"><img src="/images/delete.png"/></div></td>';
        bodyString += strRow.replace(patternRow,additionalString);
        j++;
    }

//    generateSelectChilds();
    var body = '<tbody>'+ bodyString+ '</tbody>';
    $('.flatTable').html(buildTableHead(NameTable, Data[0]) + body);
}

function fillForm(rowIndex) {
    for (var key in Data[rowIndex]){
        $('#' + key).val(Data[rowIndex][key]);
    }
}

function getAllTableElements(nameTable) {
    $.ajax({
        type: 'GET',
        url: '/main/getall/'+nameTable,
        success: function(data) {
//            futureQueryForID = {};
//            arrayObj = {};
//            objects = new Array();
            Data = data;
            NameTable = nameTable;
            setHtml();
        }
    });
}

function editRow(obj) {
    $.confirm({
        'title' : 'Edit ' + NameTable,
        'template'  : NameTable.toLowerCase(),
        'row' : obj.rowIndex - 2,
        'buttons': {
            'Change': {
                'class': 'blue',
                'action': function () {
                    //                        elem.slideUp();
                }
            }
        }
    });
}

$(document).on('click', '.plusTd', function (event) {
    $.confirm({
        'title' : 'Add ' + NameTable,
        'template'  : NameTable.toLowerCase(),
        'buttons': {
            'Add': {
                'class': 'blue',
                'action': function () {
                    //                        elem.slideUp();
                }
            }
        }
    });
});
