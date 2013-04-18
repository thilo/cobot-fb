
  window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId: '108253272618609',
      status: true,
      cookie: true,
      xfbml: false
    });
    FB.Canvas.setSize();
  };
  
  function addToPage(space_id) {
    var obj = {
      method: 'pagetab',
      redirect_uri: 'https://cobot-fb.herokuapp.com'
    };
    FB.ui(obj, function(response) {
      if (response != null && response.tabs_added != null) {
        $.each(response.tabs_added, function(page_id) {
          $.post('/spaces',{page_id: page_id, space_id: space_id});
        });
      }
    });
  }
  
  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
