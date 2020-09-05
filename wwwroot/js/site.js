
function DataToForm() {
    if (confirm("Načítať dáta do formulára zo súboru ?")) {
        $.get('Data/' + $("#cmbFromDir").val(), function (data) {
            var lines = data.split("\n");
            for (let i = 0; i < lines.length; ++i) {
                aLine = lines[i].split("~");
                if (document.getElementById(aLine[0])) {
                    if ($("#" + aLine[0]).is("input")) {
                        $("#" + aLine[0]).val(aLine[1]);
                        $('#' + aLine[0]).css("background-color", "#c4face");
                    }
                    if ($("#" + aLine[0]).is("select")) {
                        $("#" + aLine[0]).val(aLine[1].trim()).change();
                        $('#' + aLine[0]).css("background-color", "#c4face");
                    }
                    if (aLine[0] == "pictPhotos") {
                        $("#" + aLine[0]).css("background-image", 'url("/photos/' + aLine[1].trim() + '")');
                    }
                    if ($('#' + aLine[0]).attr('type') == "checkbox") {
                        if (aLine[1].indexOf("True") == 0) {
                            $('#' + aLine[0]).prop("checked", true);
                            $('#_' + aLine[0]).css("background-color", "#c4face");
                        }
                    }
                    if ($('#' + aLine[0]).attr('type') == "radio") {
                        if (aLine[1].indexOf("True") == 0) {
                            $('#' + aLine[0]).prop("checked", true);
                            $('#_' + aLine[0]).css("background-color", "#c4face");
                        }
                    }
                    
                }
            }
        });
        $(".desk_last_left").css("display", "none");
        $(".desk_last_right").css("display", "none");
        $(".buttonRemove").css("display", "inline");
        

    } 
}

function removeForm() {
    if (confirm("Naozaj chcete vymazať formulár ?")) {
        var oForm = document.forms[0];
        for (var j = 0; j < oForm.length; ++j) {
            var oElement = oForm.elements[j];
            if (document.getElementById(oElement.id)) {
                if ($("#" + oElement.id).is("input")) {
                    $("#" + oElement.id).val("");
                    $('#' + oElement.id).css("background-color", "#fff");
                }
                if ($("#" + oElement.id).is("select")) {
                    $("#" + oElement.id).val("");
                    $('#' + oElement.id).css("background-color", "#fff");
                }
                if ($('#' + oElement.id).attr('type') == "radio") {
                    $('#' + oElement.id).prop("checked", false );
                    $('#_' + oElement.id).css("background-color", "#f0f0f0");
                    
                }
                if ($('#' + oElement.id).attr('type') == "checkbox") {
                    $('#' + oElement.id).prop("checked", false);
                    $('#_' + oElement.id).css("background-color", "#f0f0f0");
                }
            }
        }
        $("#pictPhotos").css("background-image", 'none');

        $(".desk_last_left").css("display", "inline");
        $(".desk_last_right").css("display", "inline");
        $(".buttonRemove").css("display", "none");
    }
}

function insertPhoto() {
    if ($("#cmbPhotos").val() != null) {
        $("#pictPhotos").css("background-image", 'url("/photos/' + $("#cmbPhotos").val().trim() + '")');
    }
}

 

function removeFile() {
    $("#action").val("removeFile~" + $(inpLastName).val() + " " + $(inpName).val() + " " + $(inpBirthDay).val() + ".txt");
    //alert($("#action").val());

    document.forms["formix"].submit();
}