document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('saveCredentialsForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const website = document.getElementById('website').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      chrome.storage.local.set({ [website]: { username, password } }, function() {
          alert('Credentials saved!');
          console.log('Saved credentials for', website);
      });
  });
});
