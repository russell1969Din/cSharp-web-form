function formControl(o, regMask = "", min = 0) {
    
    var aFields = $("#content").val().split("|");
    //alert(aFields.length);
    for (var i = 0; i < aFields.length; ++i) {
        //alert(aFields[i]);
        aLine = aFields[i].split("~");
        //alert(aLine[0] + " >> " + aLine[1]);        
        
    }

    //for (var i = 0; i < data.collection[0].length; ++i) {
        //eval("o = "    }
}

function regMatch(id, regMask, min) {

    mobilPatern = /(\+[0-9]{3}|\+[0-9]{2}\(0\)|\(\+[0-9]{2}\)\(0\)|00[0-9]{2}|0)([0-9]{9}|[0-9\-\s]{9,18})/;
    datePattern = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

    var value = diaConvert($("#" + id).val());
    if (value.length < min && min > 0) {
        return 2;
    }

    regValue = "XXXXX"
    switch (regMask) {
        case "E": { regValue = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; break; }
        case "MVm": { regValue = /^[A-Z][a-z]+$/; break; }
        case "Mz": { regValue = /^[A-Z][a-z. A-Z.]+$/; break; }
        case "C": { regValue = /^[0-9]+$/; break; }
        case "Cd": { regValue = /[0-9][a-z]?/; break; }
        case "PSC": { regValue = /\d{3} \d{2}/; break; }
        case "D": { regValue = datePattern; break; }
        case "T": { regValue = mobilPatern; break; }
    }
    if (regValue.length == 0) { return (1); }

    if (regValue != "XXXXX") {
        if (regValue.test(value)) return (0); return (1);
    }
}

function diaConvert(text) {

    var convertText = "";
    var dia = "áäčďéíľĺňóôŕšťúýžÁČĎÉÍĽĹŇÓŠŤÚÝŽ";
    var nodia = "aacdeillnoorstuyzACDEILLNOSTUYZ";

    for (i = 0; i < text.length; i++) {

        if (dia.indexOf(text.charAt(i)) != -1) {

            convertText += nodia.charAt(dia.indexOf(text.charAt(i)));
        }
        else {
            convertText += text.charAt(i);
        }
    }

    return convertText;
}   

function getControlsElements() {
    
    $.get("htmlCollections.json", function (data) {
        var returnValue = comma = "";
        for (var i = 0; i < data.collection[0].desk_left.length; ++i) {
            if (data.collection[0].desk_left[i].id.indexOf("inp") == 0 ||
                data.collection[0].desk_left[i].id.indexOf("radio") == 0 ||
                data.collection[0].desk_left[i].id.indexOf("check") == 0 ||
                data.collection[0].desk_left[i].id.indexOf("cmb") == 0) {
                returnValue += comma + data.collection[0].desk_left[i].onkeyup + "~" + data.collection[0].desk_left[i].id;
                comma = "|";
            }
        }
        for (var i = 0; i < data.collection[0].desk_center.length; ++i) {
            if (data.collection[0].desk_center[i].id.indexOf("inp") == 0 ||
                data.collection[0].desk_center[i].id.indexOf("radio") == 0 ||
                data.collection[0].desk_center[i].id.indexOf("check") == 0 ||
                data.collection[0].desk_center[i].id.indexOf("cmb") == 0) {
                returnValue += comma + data.collection[0].desk_center[i].onkeyup + "~" + data.collection[0].desk_center[i].id;
                comma = "|";
            }
        }
        for (var i = 0; i < data.collection[0].desk_right.length; ++i) {
            if (data.collection[0].desk_right[i].id.indexOf("inp") == 0 ||
                data.collection[0].desk_right[i].id.indexOf("radio") == 0 ||
                data.collection[0].desk_right[i].id.indexOf("check") == 0 ||
                data.collection[0].desk_right[i].id.indexOf("cmb") == 0) {
                returnValue += comma + data.collection[0].desk_right[i].onkeyup + "~" + data.collection[0].desk_right[i].id;
                comma = "|";
            }
        }
        for (var i = 0; i < data.collection[0].desk_second_left.length; ++i) {
            if (data.collection[0].desk_second_left[i].id.indexOf("inp") == 0 ||
                data.collection[0].desk_second_left[i].id.indexOf("radio") == 0 ||
                data.collection[0].desk_second_left[i].id.indexOf("check") == 0 ||
                data.collection[0].desk_second_left[i].id.indexOf("cmb") == 0) {
                returnValue += comma + data.collection[0].desk_second_left[i].onkeyup + "~" + data.collection[0].desk_second_left[i].id;
                comma = "|";
            }
        }
        $("#content").val(returnValue);
    });
    //alert(returnValue);
}