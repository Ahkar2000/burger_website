let screenHeight = $(window).height();

$(window).scroll(function () { 
    let currentHeight = $(this).scrollTop();
    if(currentHeight > screenHeight-100){
        $('.first-page').addClass('scroll')
        $('.up-top').addClass('auto-up')
    }else{
        $('.up-top').removeClass('auto-up')
        $('.first-page').removeClass('scroll')
        setActive("home")
    }
});
$(".navbar-toggler").click(function () {
    $('#menu-icon').toggleClass('fa-bars').toggleClass('fa-close');
});
$(window).on('load',function(){
    $('.loader-container').fadeOut(500,function(){
        $(this).remove();
    });
});
AOS.init();

function setActive(current) { 
    $('.nav-link').removeClass('current-section');
    $(`.nav-link[href='#${current}']`).addClass('current-section');
}
 
        function navScroll() {
            let currentSection = $("section[id]");
            currentSection.waypoint(function (direction) {
        
                if(direction == "down"){
                    let currentSectionId = $(this.element).attr('id');
                    setActive(currentSectionId);
                }
        
            },{ offset:'50px' });
        
            currentSection.waypoint(function (direction) {
        
                if(direction == "up"){
                    let currentSectionId = $(this.element).attr('id');
                    setActive(currentSectionId);
                }
        
            },{ offset:'-50px' })};
navScroll();
$('.up-top').click(function(){
    $(window).scrollTop(0)
});