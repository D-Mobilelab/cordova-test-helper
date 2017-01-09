export default class SplashScreenMock {
    install(){
        window.splashscreen = {
            hide: function(){
                return true;
            },
            show: function(){
                return true;
            }
        };
    }

    uninstall(){
        delete window.splashscreen;
    }
}
