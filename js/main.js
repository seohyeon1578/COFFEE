// 검색창 요소 찾기 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

// 페이지 스크롤에 따른 요소(badge) 제어
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 500) {
    // Badge 요소 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }
  else {
    // Badge 요소 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
});

// 나타날 요소(.fade-in) 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복 처리
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// Swiper
new Swiper('.notice .swiper', {
  direction: 'vertical',  // 수직 슬라이드
  autoplay: true,         //자동 재생 여부
  loop: true              //반복 재생 여부
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', //수평 슬라이드
  autoplay: true,             // 자동 재생 여부
  loop: true,                 // 반복 재생 여부
  slidesPerView: 3,           // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,           // 슬라이드 사이 여백
  centeredSlides: true,       // 1번 슬라이드가 가운데 보이기
  pagination: {               // 페이지 번호 사용
    el: '.promotion .swiper-pagination',  //페이지 번호 요소
    clickable: true           //사용자의 페이지 번호 제어 여부
  }
});
