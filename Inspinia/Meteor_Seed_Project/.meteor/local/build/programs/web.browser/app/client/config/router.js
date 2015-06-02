(function(){Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/search', function () {
    this.render('search');
    this.layout('layout2');
});

Router.route('/search1', function () {
    this.render('search1');
    this.layout('layout2')
});

Router.route('/', function () {
	  this.render('homepage');
    this.layout('layout2');
});

Router.route('/codeEditor', function () {
    this.render('codeEditor');
    this.layout('layout2')
});

})();
