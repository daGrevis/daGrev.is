$(function() {
    $("#body article section a").each(function() {
	var $anchor = $(this)
	var href = $anchor.attr("href")
	var link = href.split("//")[1] || null
	if (link && link.indexOf("dagrev.is") !== 0) {
	    $anchor.attr("target", "_blank")
	}

    })
})
