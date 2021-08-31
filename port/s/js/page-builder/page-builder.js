function createLink(count, linkUrl){
	var template = '' + 
	'<a href="' + linkUrl + '.html" class="prjct-pgs__link" data-name="' + linkUrl + '">' +
		'<span class="prjct-pgs__count">' +
			'<span>' +
				(count + 1) +
			'</span>' +
		'</span>' +
		'<strong class="prjct-pgs__ttl">' +
			'<span>' +
				linkUrl +
			'</span>' +
		'</strong>' +
	'</a>';

	return template;
}

var count = 0;

var linksgroupCount = linksArray.length / 2;

for (var i = 0; i < linksgroupCount; i++){
	$('.firstColumm').append(createLink(count, linksArray[count]))
	count++
	console.log(count)
}

if (linksgroupCount % 1 != 0){
	linksgroupCount = linksgroupCount - 1
}

for (var i = 0; i < linksgroupCount; i++){
	$('.secondColumm').append(createLink(count, linksArray[count]))
	count++
}