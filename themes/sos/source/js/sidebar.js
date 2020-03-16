/**
 * sidebar 部分处理方法
 */
$(document).ready(function () {
  // 初始化
  const categoryMap = {}
  const categoryList = []
  $('.sidebar-ele-common').each(function () {
    categoryMap[$(this).attr('category')] = $(this).attr('img')
    categoryList.push($(this).attr('category'))
  })
  if (!categoryMap[window.sos.curCategory]) {
    window.sos.curCategory = categoryList[0]
  }

  const activeSidebar = () => {
    const needActive = $(`.sidebar-ele-common[category='${ window.sos.curCategory }']`)
    needActive.attr('active', true)
    needActive.removeClass('sidebar-ele-unactive')
    needActive.addClass('sidebar-ele-active')
    needActive.css('background-image', needActive.attr('img'))
  }
  activeSidebar()
})