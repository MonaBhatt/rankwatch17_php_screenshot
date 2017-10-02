var page = require('webpage').create();

page.viewportSize = {width: 1024, height: 768};





page.open('https://aapkatrade.com', function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit(1);
    }

    
    page.evaluate(function() {
                    /* This will set the page background color */
            if (document && document.body) {
                document.body.bgColor = '#fff';
            }
        
            });

    setTimeout(function() {
            page.render('capture/59d185db44192.png');
            phantom.exit();
    }, 0);
});
