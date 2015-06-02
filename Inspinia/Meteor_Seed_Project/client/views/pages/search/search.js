Template.search.rendered = function(){

    // Initialize codeMirror plugin

    var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true,
        theme:"ambiance"
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code3"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    });
    var editor_two = CodeMirror.fromTextArea(document.getElementById("code4"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    });
}

Template.search1.rendered = function(){
    var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    });
}