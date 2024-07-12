chrome.storage.local.get([location.hostname], function(result) {
  const credentials = result[location.hostname];
  if (credentials) {
      const usernameField = document.querySelector('input[type="text"], input[type="email"]');
      const passwordField = document.querySelector('input[type="password"]');

      if (usernameField && passwordField) {
          usernameField.value = credentials.username;
          passwordField.value = credentials.password;

          // Trigger input events to make sure the website detects the changes
          usernameField.dispatchEvent(new Event('input', { bubbles: true }));
          passwordField.dispatchEvent(new Event('input', { bubbles: true }));
      }
  }
});
