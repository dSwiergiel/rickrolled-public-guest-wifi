const wifi_details = {
  name: 'WIFI NAME',
  password: 'WIFI PASSWORD'
}

const activatePayload = () => {
  const videoPlayer = document.querySelector("video");
  const hero = document.querySelector("#hero");
  const wifiDetails = document.querySelector("#wifi-details");

  // update HTML with Wi-Fi details
  wifiDetails.innerHTML = `
    <p class="mb-1"><b>Network: </b>${wifi_details.name}</p>
    <p><b>Password: </b>${wifi_details.password}</p>
  `;

  videoPlayer.play();
  videoPlayer.hidden = false;
  hero.hidden = true;

  setTimeout(() => {
    copyPasswordToClipboard();
    wifiDetails.classList.add("show");
  }, 5000);

};

const copyPasswordToClipboard = () => {
  const textToCopy = wifi_details.password;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // show copied to clipboard toast message
      const toast = document.querySelector("#toast");
      toast.classList.add("show");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};