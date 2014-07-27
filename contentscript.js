var pingStatus = null;
var uberRating = '(' + function () {
	if(window.Uber.pingData) { 
		var div = document.createElement('div');
		div.id = 'uberRatingDisplay';
		// div.style.height = '200px'
		// div.style.width = '300px';
		div.style.background = "#fff";
		div.style.color = "#000";
		div.style.opacity = '.9';
		div.style.position = "absolute";
		div.style.zIndex = '10000';
		div.style.top = '45px';
		div.style.border = '1px solid #000';
		div.style.right = '5px';
		div.style.padding = "20px"
		div.innerHTML = '<b>Name</b>: ' + window.Uber.pingData.client.firstName + ' ' + window.Uber.pingData.client.lastName + '<br/><b>Email</b>: ' + window.Uber.pingData.client.email + '<br/><b>Number</b>:' + window.Uber.pingData.client.mobile +'<br/><b>Rating</b>: ' + window.Uber.pingData.client.rating;
		alert('Name : ' + window.Uber.pingData.client.firstName + ' ' + window.Uber.pingData.client.lastName + '\nEmail : ' + window.Uber.pingData.client.email + '\nPassenger Rating: ' + window.Uber.pingData.client.rating)
		document.body.appendChild(div);
		var removeDiv = document.createElement('div');
		removeDiv.id = 'removeRatingDisplay';
		removeDiv.innerHTML = "<b>x</b>";
		removeDiv.style.position = 'absolute';
		removeDiv.style.top = '0px';
		removeDiv.style.right = '290px';
		removeDiv.style.cursor = 'hand';
		removeDiv.style.cursor = 'pointer';
		removeDiv.style.fontSize = '18px';
		removeDiv.onclick = function() {
			this.parentNode.remove();
		};
		div.appendChild(removeDiv);
	}

} + ')();';

var script = document.createElement('script');
script.textContent = uberRating;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);

//injectScript(uberRating());