class AppController {

    //home page - renders the dashboard
    async home(req, res) {
        try {
            res.render('index', { 
                title: 'SB Admin 2 - Dashboard'
            });
        } catch (err) {
            throw err;
        }
    }
    //404 page
    async notFound(req, res) {
        try {
            res.render('404', {
                title: 'SB Admin 2 - Not Found',
            });
        } catch (err) {
            throw err;
        }
    }
    //Blank page
    async blank(req, res) {
        try {
            res.render('blank', {
                title: 'SB Admin 2 - Blank Page',
            });
        } catch (err) {
            throw err;
        }
    }
    //Login page
    async login(req, res) {
        try {
            res.render('login', {
                title: 'SB Admin 2 - Login',
            });
        } catch (err) {
            throw err;
        }
    }
    //Register page
    async register(req, res) {
        try {
            res.render('register', {
                title: 'SB Admin 2 - Register',
            });
        } catch (err) {
            throw err;
        }
    }
    //Forgot Password page
    async forgotPassword(req, res) {
        try {
            res.render('forgot-password', {
                title: 'SB Admin 2 - Forgot Password',
            });
        } catch (err) {
            throw err;
        }
    }
    //Buttons page
    async buttons(req, res) {
        try {
            res.render('buttons', {
                title: 'SB Admin 2 - Buttons',
            });
        } catch (err) {
            throw err;
        }
    }
    //Cards page
    async cards(req, res) {
        try {
            res.render('cards', {
                title: 'SB Admin 2 - Cards',
            });
        } catch (err) {
            throw err;
        }
    }
    //Utilities Color page
    async utilitiesColor(req, res) {
        try {
            res.render('utilities-color', {
                title: 'SB Admin 2 - Utilities Color',
            });
        } catch (err) {
            throw err;
        }
    }
    //Utilities Border page
    async utilitiesBorder(req, res) {
        try {
            res.render('utilities-border', {
                title: 'SB Admin 2 - Utilities Border',
            });
        } catch (err) {
            throw err;
        }
    }
    //Utilities Animation page
    async utilitiesAnimation(req, res) {
        try {
            res.render('utilities-animation', {
                title: 'SB Admin 2 - Utilities Animation',
            });
        } catch (err) {
            throw err;
        }
    }
    //Utilities Other page
    async utilitiesOther(req, res) {
        try {
            res.render('utilities-other', {
                title: 'SB Admin 2 - Utilities Other',
            });
        } catch (err) {
            throw err;
        }
    }
    //Charts page
    async charts(req, res) {
        try {
            res.render('charts', {
                title: 'SB Admin 2 - Charts',
            });
        } catch (err) {
            throw err;
        }
    }
    //Tables page
    async tables(req, res) {
        try {
            res.render('tables', {
                title: 'SB Admin 2 - Tables',
            });
        } catch (err) {
            throw err;
        }
    }
    


}


module.exports = new AppController();