/**
 * header 交互方法
 */
$(document).ready(function () {
  // 处理移动端标题
  const pageTitle = window.sos.curCategoryImage ? window.sos.curCategory : '凉宫春日资源站';
  $('.header-m-title>h2').html(pageTitle)
  if (window.screen.width < 1024) {
    if (window.sos.curCategoryMobileImg) {
      $('header').css('background-image', `url(${window.sos.curCategoryMobileImg})`)
    } else {
      $('header').addClass('m-home')
    }
  }

  const toggleSidebar = () => {
    const $_sidebar = $('.sidebar')
    if ($_sidebar.hasClass('active')) {
      // 关闭
      $_sidebar.removeClass('active')
      $('header').removeClass('active')
      $('header').css('background-image', `url(${window.sos.curCategoryMobileImg})`)
    } else {
      // 打开
      $_sidebar.addClass('active')
      $('header').addClass('active')
      $('header').css('background-image', `none`)
      const needActive = $(`.sidebar-ele-common[category='${ window.sos.curCategory }']`)
      needActive.css('background-image', needActive.attr('mImg'))
    }
  }
  // 移动端sidebar开关切换
  document.querySelector('.header-m-menu').addEventListener('click', toggleSidebar)
  document.querySelector('.header-m-menu-close').addEventListener('click', toggleSidebar)

  // 移动端搜索框开关
  document.querySelector('.header-m-search').addEventListener('click', () => {
    $('header').removeClass('active')
    $('header').removeClass('m-home')
    $('.sidebar').removeClass('active')
    $('.header-search').addClass('active')
    $('.header-search>input').focus()
  })

  // 移动端搜索框失焦自动隐藏
  document.querySelector('.header-search>input').addEventListener('blur', () => {
    $('.header-search').removeClass('active')
  })
})
