function fromJSon() {
    $.get("htmlCollections.json", function (data) {
        for (var i = 0; i < data.collection[0].desk_left.length; ++i) {
            if (data.collection[0].desk_left[i].id.indexOf("lab") == 0) {
                $("#desk_left").append('<div class="' +
                    data.collection[0].desk_left[i].class + '">' +
                    data.collection[0].desk_left[i].note +
                    '</div>');
            }
            if (data.collection[0].desk_left[i].id.indexOf("inp") == 0) {
                $("#desk_left").append('<input ' +
                    'id="' + data.collection[0].desk_left[i].id + '" ' +
                    'name="' + data.collection[0].desk_left[i].id + '" ' +
                    'class="' + data.collection[0].desk_left[i].class + '" ' +
                    'value="' + data.collection[0].desk_left[i].value + '" ' +
                    'onkeyup ="' + data.collection[0].desk_left[i].onkeyup + '" ' +
                    ' autocomplete="off" />');
            }
        }

        for (var i = 0; i < data.collection[0].desk_center.length; ++i) {

            if (data.collection[0].desk_center[i].id.indexOf("X") == 0) {
                $("#desk_center").append('<div  ' +
                    'id="_' + data.collection[0].desk_center[i].id + '" ' +
                    'class="' + data.collection[0].desk_center[i].class + '" ' +
                    "></div>");

            }

            if (data.collection[0].desk_center[i].id.indexOf("radio") == 0) {
                $("#desk_center").append('<div  ' +
                    'id="_' + data.collection[0].desk_center[i].id + '" ' +
                    'class="' + data.collection[0].desk_center[i].class + '" ' +
                    "></div>");
                $("#_" + data.collection[0].desk_center[i].id).append('<input type="radio" ' +
                    'id="' + data.collection[0].desk_center[i].id + '"' +
                    'name="' + data.collection[0].desk_center[i].id + '"' +
                    'value="' + data.collection[0].desk_center[i].value + '"' +
                    'onclick="' + data.collection[0].desk_center[i].onclick + '"' +
                    ' />' + data.collection[0].desk_center[i].note);
            }
            if (data.collection[0].desk_center[i].id.indexOf("check") == 0) {
                $("#desk_center").append('<div   ' +
                    'id="_' + data.collection[0].desk_center[i].id + '" ' +
                    'class="' + data.collection[0].desk_center[i].class + '" ' +
                    "></div>");
                $("#_" + data.collection[0].desk_center[i].id).append('<input type="checkbox" ' +
                    'id="' + data.collection[0].desk_center[i].id + '"' +
                    'name="' + data.collection[0].desk_center[i].id + '"' +
                    'value="' + data.collection[0].desk_center[i].value + '"' +
                    'onclick="' + data.collection[0].desk_center[i].onclick + '"' +
                    ' />' + data.collection[0].desk_center[i].note);
            }
        }
        for (var i = 0; i < data.collection[0].desk_right.length; ++i) {
            if (data.collection[0].desk_right[i].id.indexOf("pict") == 0) {
                $("#desk_right").append('<div   ' +
                    'id="' + data.collection[0].desk_right[i].id + '" ' +
                    'class="' + data.collection[0].desk_right[i].class + '" ' +
                    '"></div>');
            }
            if (data.collection[0].desk_right[i].id.indexOf("cmb") == 0) {
                $("#desk_right").append('<div   ' +
                    'id="_' + data.collection[0].desk_right[i].id + '" ' +
                    'class="' + data.collection[0].desk_right[i].class + '" ' +
                    '">' + data.collection[0].desk_right[i].note + '</div>');
                $("#desk_right").append('<select ' +
                    'id="' + data.collection[0].desk_right[i].id + '"' +
                    'name="' + data.collection[0].desk_right[i].id + '"' +
                    'class="' + data.collection[0].desk_right[i].class + '"' +
                    'onchange="' + data.collection[0].desk_right[i].onchange + '"></select>');
                $('#' + data.collection[0].desk_right[i].id).append(
                    '<option value=""></option>');
                if (typeof data.collection[0].desk_right[i].options == "object") {
                    for (var j = 0; j < data.collection[0].desk_right[i].options.length; ++j) {
                        $('#' + data.collection[0].desk_right[i].id).append(
                            '<option value="' + data.collection[0].desk_right[i].options[j].value + '"> ' +
                            data.collection[0].desk_right[i].options[j].note + '</option>'
                        );
                    }
                } else {
                    let aOptions = $("#" + data.collection[0].desk_right[i].options).val().split("|");
                    for (var j = 0; j < aOptions.length; ++j) {
                        $('#' + data.collection[0].desk_right[i].id).append(
                            '<option value="' + aOptions[j] + '"> ' +
                            aOptions[j] + '</option>');
                    }
                }
            }
        }
        for (var i = 0; i < data.collection[0].desk_second_left.length; ++i) {
            $("#desk_second_left").append('<select ' +
                'id="' + data.collection[0].desk_second_left[i].id + '"' +
                'name="' + data.collection[0].desk_second_left[i].id + '"' +
                'class="' + data.collection[0].desk_second_left[i].class + '"' +
                'size="' + data.collection[0].desk_second_left[i].size + '"' +
                'onchange="' + data.collection[0].desk_second_left[i].onchange + '"></select>');
            for (var j = 0; j < data.collection[0].desk_second_left[i].options.length; ++j) {
                $('#' + data.collection[0].desk_second_left[i].id).append(
                    '<option value="' + data.collection[0].desk_second_left[i].options[j].value + '"> ' +
                    data.collection[0].desk_second_left[i].options[j].note + '</option>'
                );
            }
        }
    });
}

