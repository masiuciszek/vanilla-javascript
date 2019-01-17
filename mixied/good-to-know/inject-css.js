function injectStyle(rule) {
    let div = $("<div />", {
        html: '&shy;<style>' + rule + '</style'
    }).appendTo("body")
}