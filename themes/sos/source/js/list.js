/**
 * list 部分处理方法
 */
$(document).ready(function () {
  const initList = list => {
    // list 初始化
    const postMap = {}
    const posts = list || window.sos.categoryMap[window.sos.curCategory] || []
    let postListHtml = ''
    for (const post of posts) {
      postMap[post.title] = post
      postListHtml += `
        <div
          class='list-ele'
          title='${ post.title }'
          active=false
          hasResource=${ post.hasResource }
        >
          <div class='list-ele-logo' style='background-image:url(${ post.logo })'></div>
          <div class='list-ele-title'>
            <div class='list-ele-main-title'>
              <div class='list-ele-main-title-content'>${ post.title }</div>
              <div class='list-ele-icon'></div>
            </div>
            <div class='list-ele-sub-title'>${ post.subTitle }</div>
          </div>
        </div>
      `
    }
    $('.list-container').html(postListHtml)

    const getPostDetail = (post) => {
      if (!post.hasResource) {
        const detailHtml = `
          <div class='list-ele-detail' title='${ post.title }'>
            <a
              class='list-ele-plus'
              href='${ window.sos.collectInfoLink }'
              target='_blank'
            >
              请留下您的联系方式，以便我们向您获取资源&nbsp;➡
            </a>
          </div>
        `
        return detailHtml
      }
  
      let downloadHtml = `<div class='list-ele-download-list'>`
      for (const download of post.downloadList) {
        downloadHtml += `
          <a class='download-list-ele' href='${ download.link }' target='_blank'>
            <div class='download-list-ele-intro'>${ download.intro }</div>
            <div class='download-list-ele-size'>${ download.size } &nbsp;<span style='text-decoration:underline;'>⬇<span></div>
          </a>
        `
      }
      downloadHtml += '</div>'
      const detailHtml = `
        <div class='list-ele-detail' title='${ post.title }'>
          <div class='list-ele-download'>
            <div class='list-ele-detail-title'>下载</div>
            ${ downloadHtml }
          </div>
          <div class='list-ele-content'>
            <div class='list-ele-detail-title'>简介</div>
            <div class='list-ele-content-words'>${ post.downloadContent }</div>
          </div>
          <a
            class='list-ele-plus-download'
            href='${ window.sos.collectInfoLink }'
            target='_blank'
          >
            我还想要其他的版本&nbsp;➡
          </a>
        </div>
      `
      return detailHtml
    }
  
    // 点击事件处理
    $('.list-ele').click(function () {
      const title = $(this).attr('title')
      const active = $(this).attr('active')
      if (active === 'false') {
        const detailHtml = getPostDetail(postMap[title])
        $(this).after(detailHtml)
        $(this).addClass('list-ele-active')
        $(this).attr('active', 'true')
      } else {
        $(this).attr('active', 'false')
        $(this).removeClass('list-ele-active')
        $(`.list-ele-detail[title='${ title }']`).remove()
      }
    })
  }

  initList()

  const onSearch = e => {
    if (e.keyCode !== 13) return
    // 去除侧边样式
    $('.sidebar-ele-common').attr('active', false)
    $('.sidebar-ele-common').removeClass('sidebar-ele-active')
    $('.sidebar-ele-common').addClass('sidebar-ele-unactive')
    $('.sidebar-ele-common').css('background-image', 'none')
    // 正则匹配搜索
    const pattern = new RegExp(e.target.value)
    const mapData = window.sos.categoryMap
    let resData = []
    let otherData = []
    for (const key in mapData) {
      if (!mapData.hasOwnProperty(key)) continue
      const categoryArr = mapData[key]
      categoryArr.forEach(item => {
        if (pattern.test(item.title)) {
          resData.push(item)
        } else {
          if (pattern.test(item.subTitle) || pattern.test(item.downloadContent)) otherData.push(item)
        }
      })
    }
    initList(resData.concat(otherData))
  }

  // 搜索事件处理
  document.getElementById('app-search').addEventListener('keyup', onSearch)
})




