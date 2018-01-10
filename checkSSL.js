/**
 * @author robiriondo
 * Description: Redirects all unsecure traffic to HTTPS by reloading the site.
 * .SSH injection is "by far" better but this solves the inconveniences of not having access to .SSH on your server.
**/

  function check_secure() {
  var httpsRE = /^https/i;
  if (!window.location.origin.match(httpsRE)) {
  window.location = "https://" + window.location.hostname + window.location.pathname + window.location.search;
  }}
  check_secure();
