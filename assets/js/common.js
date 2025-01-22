$(document).ready(function () {
    // 버튼 클릭 시 해당 동작을 처리할 함수들
    $("#showSearchBox, #hideSearchBox").on("click", (event) => toggleElementClass(".search-wrapper", event));
    $("#showMobileMenu, #hideMobileMenu").on("click", (event) => toggleElementClass(".gnb-content", event));
    $(".gnb-list .depth01 .toggle-btn").on("click", toggleMenuItem);
    $("#scrollUp").on("click", () => scrollTo(0));
    $("#scrollDown").on("click", () => scrollTo($(document).height()));
    $(".detail-content .tab-list li").on("click", scrollToTab);
    $('[data-toggle="member-more"]').on("click", toggleMemberMore);
});

// 공통적으로 클래스를 토글하는 함수
const toggleElementClass = (selector, event) => {
    const isVisible = event.target.id.includes("show");
    $(selector).toggleClass("active", isVisible);
};

// 메뉴 항목 토글 함수
const toggleMenuItem = function () {
    $(this).closest(".depth01").next().slideToggle();
};

// 스크롤 이동 함수
const scrollTo = (target) => {
    $("html, body").animate({ scrollTop: target }, "fast");
};

// 탭 클릭 시 해당 인덱스의 .tab-wrapper로 스크롤 함수
const scrollToTab = function () {
    const index = $(this).index();
    const target = $(".detail-content .tab-wrapper").eq(index);

    const headerHeight = $("header").outerHeight();
    const scrollPosition = target.offset().top - headerHeight;

    $("html, body").animate({ scrollTop: scrollPosition }, "smooth");
};

// 멤버 더 보기 토글 함수
const toggleMemberMore = function () {
    $(this).next(".member-more").toggleClass("active");
};
