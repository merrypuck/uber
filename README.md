Uber Passenger Rating
===

#About
Uber Rating is a chrome plugin to find your Uber passenger rating.

#To use Chrome Extenstion:

1) Grab latest source

git clone https://github.com/Aaln/uber.git

2) Enable Chrome Extension in your Chrome browser install

Open Chrome.
Navigate to Settings... Tools... Extensions.
Click + on "Developer mode"
Click "Load unpacked extensions..."
Go to where you cloned Uber.

Iconic extention should appear on the top right of chrome.
Click to make the Uber magic happen.

#Run Manually

1. Login at http://m.uber.com

2. When page loads, open console.

3. Paste code.
```javascript
if(window.Uber.pingData === false) { location.reload(); } else { alert("Name : " + window.Uber.pingData.client.firstName + " " + window.Uber.pingData.client.lastName + "\nEmail : "+ window.Uber.pingData.client.email + "\nPassenger rating is : "+ window.Uber.pingData.client.rating); }
```

4. If browser refreshes, keep console open and paste code again.

5. Magic.
