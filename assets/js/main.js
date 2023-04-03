$(function(){


    // fix nav
    let scrollTop = 0;
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
  
        if(curr > 1){
            if (curr > scrollTop) {
                $('.header').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
            scrollTop = curr;
        } else {
            $('.header').removeClass('on');

        }
    });


    // popup menu
    $('.btn-menu').click(function(){
        $(this).addClass('on')
        $('.aside-menu').addClass('on')
        $('.btn-close').removeClass('on')
        $('body').addClass('hidden')

    })
    
    $('.btn-close').click(function(){
        $(this).addClass('on')
        $('.btn-menu').removeClass('on')
        $('.aside-menu').removeClass('on')
        $('body').removeClass('hidden')
    })


    // arch 모양 슬라이드
    const archSlide = new Swiper(".arch-slide", {
        slidesPerView: 3.2,
        spaceBetween: 24,
        centeredSlides: true,
        loop : true,
        loopedSlides: 2,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
        breakpoints: {
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 10,
            },
            768: {
                slidesPerView: 2.4,
                spaceBetween: 10,
              },
            320: {
            slidesPerView: 1.4,
            spaceBetween: 10,
            },
        }
    });


    // 사람 사각 슬라이드
    const peopleSlide = new Swiper(".people-slide", {
        slidesPerView:'auto',  //auto로 주면 css에서 크기를 내맘대로 정할 수 있다. (auto는 위드100%가 되니 수동설정 ㄱ), 시작과 끝은 swiper한테 패딩 0 20px 이런식으로 주면 떨어짐
        spaceBetween: 24,  //css에서 margin-left 같은거 주면 안되고 여기서 줘야 함. 왜냐, css에서 주면 내 뜻대로 잘 안될 것이다
        loop : true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        breakpoints: {
            1024: {
              spaceBetween: 40,
            },
            768: {
                slidesPerView: 1.6,
                spaceBetween: 20,
              },
        }
    });


    // 제품 사각 슬라이드
    const itemSlide = new Swiper(".item-slide", {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop : true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        breakpoints: {
            1024: {
              spaceBetween: 40,
            },
            768: {
                slidesPerView: 1.6,
                spaceBetween: 20,
              },
        }
    });


    // FAQs Toggle
    $('.sc-FAQs .title').click(function(){

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).parent().siblings('.cont-area').stop().slideUp()
        } else {
            $(this).addClass('on');    
            $(this).parent().siblings('.cont-area').stop().slideDown()
        }

    })


    // topBtn
    $("#topBtn").click(function(){
        $("html, body").animate({scrollTop : 0}, 100);
        return false;
    });

    let btnTop = 800;
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
      
        if (curr < btnTop) {
            $('.fixed-btns .btn-top').removeClass('on');
        } else {
            $('.fixed-btns .btn-top').addClass('on');
        }
  
    });








    gsap.registerPlugin(ScrollTrigger);
    // ScrollTrigger.saveStyles(".mobile, .desktop");
    ScrollTrigger.matchMedia({

        "(min-width: 1280px)": function() {

            gsap.set('.md-headline .text span',{yPercent:100})
            intro = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc-main-visual",
                    start:"0% 0%",
                    end:"+=500%",
                    // markers:true,
                    scrub:1,
                    pin:true,
                }
            })
            intro
            .to('.headline .text span',{ yPercent:-100, stagger:0.05, opacity:0 })
            .addLabel('a')
            .to('.sc-main-visual .bg',3,{ yPercent:-10, },'a')
            .to('.sc-slogan.xs',3,{ opacity:1, visibility: 'visible' },'a')
            .to('.md-headline .text span',3,{ yPercent:0, stagger:0.05, },'a')
            .to('.md-headline .text span',3,{ delay:1, yPercent:-100, stagger:0.05, })
            .addLabel('b')
            .to('.sc-page-slide .page1',3,{yPercent:-100, borderRadius:0 },'b')
            .from('.sc-page-slide .page1 .headline',3,{ opacity:0, yPercent:100, },'b')
            .to('.sc-page-slide .page2',3,{ yPercent:-100, borderRadius:0 })
            .to('.sc-page-slide .page3',3,{ yPercent:-100, borderRadius:0 })
            .to('.sc-page-slide .page4',3,{ yPercent:-100, borderRadius:0 })
            .to('.sc-page-slide .group-page',{ yPercent:-100, borderRadius: '0 0 50% 50%' })
        
        
            document.querySelectorAll('[data-scroll]').forEach(element => {
        
                child=element.children[0];
                
                gsap.from(child,{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 80%", 
                        end:"100% 100%",
                        // markers:true,
                        scrub:1,
                    },
                    yPercent:100,
                    opacity:0,
        
                })
                
            });
        },

        "(min-width: 768px, max-width: 1279px)": function() {
            gsap.set('.md-headline .text span',{yPercent:100})
            intro = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc-main-visual",
                    start:"0% 0%",
                    end:"+=500%",
                    scrub:1,
                    pin:true,
                }
            })
            intro
            .to('.sc-main-visual .headline .text span',{ yPercent:-100, stagger:0.05, opacity:0 })
            .addLabel('a')
            .to('.sc-main-visual .bg',3,{ yPercent:-10, },'a')
            .to('.sc-slogan.xs',3,{ opacity:1, visibility: 'visible' },'a')
            .to('.md-headline .text span',3,{ yPercent:0, stagger:0.05, },'a')
            .to('.md-headline .text span',3,{ delay:1, yPercent:-100, stagger:0.05, })
    },

        "all": function() {
            ''
    }

    });




    





}) //지우지말기