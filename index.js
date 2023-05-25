function getParameterByName(name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var url = window.location.href;
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  var value = decodeURIComponent(results[2].replace(/\+/g, " "));

  // Check if the value is enclosed by double quotes
  if (value.startsWith('"') && value.endsWith('"')) {
    // Remove the double quotes from the value
    value = value.slice(1, -1);
  }

  return value;
}

$(function () {
  $('.btn').click(function () {
    $('body').hasClass('open') ? $('body').removeClass('open') : $('body').addClass('open')
  })
})

$(function () {
  $(".picture")[0].src = getParameterByName("url")
  $(".lnk").text(getParameterByName("title"))
  console.log($(".picture")[0].src)
})
