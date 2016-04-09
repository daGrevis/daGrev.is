$(function() {
    // Adds target=_blank to all links that don't start with dagrev.is.
    $("#body article section a").each(function() {
        var $anchor = $(this)
        var href = $anchor.attr("href")
        var link = href.split("//")[1] || null
        if (link && link.indexOf("dagrev.is") !== 0) {
            $anchor.attr("target", "_blank")
        }
    })

    // Written like this to avoid bots getting my... you know what.
    var dont = "dagrevis"
    var spam = ["om", ".c", "ail", "gm"].reverse().join("")
    $("#do-not-spam-this").html(
        dont + String.fromCharCode(Math.pow(4, 3)) + spam
    )
})
