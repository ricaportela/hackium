module.exports = function(hackium, interception) {
  const response = interception.response;
  response.body += `;window.interceptedVal = 'interceptedVal';`
  return response;
}