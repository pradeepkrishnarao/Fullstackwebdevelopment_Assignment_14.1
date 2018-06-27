window.addEventListener('online', function(e) { // loadData method gets Data.json data loaded if the user is online
// re-sync data with server
		console.log("You are online");
		Page.hideOfflineWarning();
		Arrivals.loadData();
		}, false);
// set knockout view model bindings
		ko.applyBindings(Page.vm);