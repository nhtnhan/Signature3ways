// Initialize Signature Pad
var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)',
    velocityFilterWeight: .7,
    minWidth: 0.5,
    maxWidth: 2.5,
    throttle: 16, // max x milli seconds on event update, OBS! this introduces lag for event update
    minPointDistance: 3,
});

// Initialize clear button
clearButton = document.getElementById('clear');

// Clear signature pad onClick clear button
clearButton.addEventListener('click', function(event) {
    signaturePad.clear();
});


(function($){
    
    // Create custom function switchTabs
    $.fn.switchTabs = function() {
        $(this).each(function() {
            
            // Initialize vars
            var el = $(this).children('.switch-tabs-nav');
            var switchBody = el.siblings('.switch-tabs-body');

            // Click switch tab
            switchBody.children('.switch-content:not(:first)').hide();
            el.on('click', 'a', function() {

                // Change the active tab
                el.children().removeClass('active');
                el.children().children().removeClass('active');

                $(this).parent().addClass('active');
                $(this).parent().children().addClass('active');

                // Hide previous tab
                switchBody.children('.switch-content').hide();

                //Show new active tab
                var activeTab = $(this).attr('href');
                $(activeTab).show();
                return false;
            });
        });
    }

    // Run function when page is fully loaded
    $(window).on('load', function() {
        $('.switch-tabs').switchTabs();
    });
})(jQuery);

