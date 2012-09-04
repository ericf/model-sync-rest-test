YUI().use('model', 'model-sync-rest', 'view', function (Y) {

Y.User = Y.Base.create('user', Y.Model, [Y.ModelSync.REST], {root: '/users/'});

Y.UserView = Y.Base.create('userView', Y.View, [], {
    initializer: function () {
        this.get('user').after('change', this.render, this);
    },

    render: function () {
        var container = this.get('container'),
            content   = Y.one(Y.config.doc.createDocumentFragment()),
            user      = this.get('user');

        content.append('<p>Username: ' + user.get('username') + '</p>');
        content.append('<p>First Name: ' + user.get('firstname') + '</p>');
        content.append('<p>Last Name: ' + user.get('lastname') + '</p>');

        container.setHTML(content);
        return this;
    }
});

var user = new Y.User({id: '1'});

user.load(function () {
    var userView = new Y.UserView({user: user});
    userView.render().get('container').appendTo('body');
});

});
