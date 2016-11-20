module.exports = function(router) {
    
    // CHANGE ME TO THE VERSION YOURE WORKING ON
    var version = "1-0-0"

    router.get('/' + version + '/makaton-gallery-redirect', function(req, res) {
       res.redirect(301, "/" + version + "/makaton-gallery") ;
    });

    router.get('/' + version + '/index-redirect', function(req, res) {
       res.redirect(301, "/" + version + "/index") ;
    });

    // router.post('/' + version + '/known-facts', function (req, res) {
    //     res.redirect(301, '/' + version + '/select-user');
    // });

};