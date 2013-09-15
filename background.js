
// Upon tab creation, grab the parent tab by its ID, and copy over the history.
function tabCreated(childTab) {
	// alert(childTab.openerTabId);
	// chrome.tabs.get(childTab.openerTabId, function(parentTab) {
		// chrome.webNavigation.getAllFrames({"tabId": childTab.openerTabId}, function(details) {
			// // alert(details[0].url);
			// // alert("asdf");
			// // alert(details.length);
			// var outStr = details.length+"\n";
			// for(var i = 0; i < details.length; i++) {
				// outStr += details[i].frameId + " " + details[i].parentFramId + " " + details[i].url + "\n";
			// }
			// alert(outStr);
		// });
	// });
}











chrome.tabs.onCreated.addListener(tabCreated);

