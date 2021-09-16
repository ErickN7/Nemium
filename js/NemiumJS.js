function changeCSS(cssFile, imgFolder) {
  var element_loading = document.getElementById("loading");
  element_loading.classList.add("loading-open");
  element_loading.classList.remove("loading-close");

  var oldlink = document.getElementsByClassName('styles')[0];
  oldlink.removeAttribute('href');
  oldlink.setAttribute('href', cssFile);

  var imgGoogleChrome = document.getElementById('google_chrome_image');
  imgGoogleChrome.removeAttribute('src');
  imgGoogleChrome.setAttribute('src', imgFolder + '/google-chrome.png');

  var imgVSCode = document.getElementById('vs_code_image');
  imgVSCode.removeAttribute('src');
  imgVSCode.setAttribute('src', imgFolder + '/visual-studio-code.png');

  var imgFigma = document.getElementById('figma_image');
  imgFigma.removeAttribute('src');
  imgFigma.setAttribute('src', imgFolder + '/figma.png');

  var imgGitHub = document.getElementById('github_image');
  imgGitHub.removeAttribute('src');
  imgGitHub.setAttribute('src', imgFolder + '/github.png');

  var imgInstagram = document.getElementById('instagram_image');
  imgInstagram.removeAttribute('src');
  imgInstagram.setAttribute('src', imgFolder + '/instagram.png');

  var imgFacebook = document.getElementById('facebook_image');
  imgFacebook.removeAttribute('src');
  imgFacebook.setAttribute('src', imgFolder + '/facebook.png');

  var imgTwitter = document.getElementById('twitter_image');
  imgTwitter.removeAttribute('src');
  imgTwitter.setAttribute('src', imgFolder + '/twitter.png');

  setTimeout(function() {
    element_loading.classList.add("loading-close");
    element_loading.classList.remove("loading-open");
  }, 3000);
}