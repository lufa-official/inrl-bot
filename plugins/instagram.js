const {
	inrl,
	extractUrlsFromString
} = require('../lib');
const {
	BASE_URL
} = require('../config');
const axios = require('axios');

function isInstagramURL(url) {
	var pattern = /^https?:\/\/(www\.)?instagram\.com\/.*/i;
	return pattern.test(url);
}

inrl({
	pattern: 'insta ?(.*)',
	desc: 'download ig reels post',
	react: "😛",
	type: "download",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if (!match) return await message.send("_Give me an IG url_");
	const urls = extractUrlsFromString(match);
	if (!urls[0]) return await message.send('_Give me a Url_');
	if (!isInstagramURL(urls[0])) return await message.send('_Not a IG url_');
	let {
		data
	} = await axios(BASE_URL + 'api/insta?url=' + urls[0]);
	const {
		result
	} = data;
	if (!result[0]) return await message.send('*Not Found*');
	result.map(async (u) => await message.sendFromUrl(u).catch((e) => message.reply('*_request Filed With statusCode 503_*')));
});

inrl({
	pattern: 'story ?(.*)',
	desc: 'download ig story',
	react: "😉",
	type: "download",
}, async (message, match) => {
	match = match || message.reply_message.text;
	if (!match) return await message.send("_Give me an IG Story url_");
	const urls = extractUrlsFromString(match);
	if (!urls[0]) return await message.send('_Give me a Url_');
	if (!isInstagramURL(urls[0])) return await message.send('_Not a IG url_');
	let {
		data
	} = await axios(BASE_URL + 'api/insta?url=' + urls[0]);
	const {
		result
	} = data;
	if (!result[0]) return await message.send('*Not Found*');
	result.map(async (u) => await message.sendFromUrl(u).catch((e) => message.reply('*_request Filed With statusCode 503_*')))
});
