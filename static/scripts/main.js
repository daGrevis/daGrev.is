$(function() {
    $("#body article section a").each(function() {
	var $anchor = $(this)
	var href = $anchor.attr("href")
	var link = href.split("//")[1] || null
	if (link && link.indexOf("dagrev.is") !== 0) {
	    $anchor.attr("target", "_blank")
	}
    })

    // Written like this to avoid bots getting my... you know what.
    var dont = "me"
    var spam = "dagrev.is"
    $("#do-not-spam-this").html(
	dont + String.fromCharCode(Math.pow(4, 3)) + spam
    )
})
