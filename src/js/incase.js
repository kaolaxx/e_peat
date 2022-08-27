class Slider {
  constructor(){
    //获取大盒子
    this.bigbox = $('.bigbox');
    //左按钮
    this.ltBtn = $(".lt_btn");
    //右按钮
    this.rtBtn = $(".right_btn");
    //大图
    this.big_pic = $("#top li");
    //小图ul
    this.small_ul = $("#small_ul");
    //小图
    this.small_pic = $("#bottom li");
    //当前下标
    this.cur_index = 0;
    //图片数量
    this.num = this.small_pic.length;
    //设置小图ul的宽度
    // this.small_ul.style.width = this.small_pic[0].offsetWidth * this.num + 'px';
    //当前层级
    this.zIndex = 1;
    //添加事件
    this.addaEvent();
    //调用轮播方法
    this.slide();
    //调用自动轮播方法
    // this.autoPlay();
  }

  //事件
  addaEvent() {
    let that = this;
    //左边按钮
    this.ltBtn.click(function () {
      // alert(2);
      that.cur_index--;
      if (that.cur_index <= 0) {
        that.cur_index = 0;
      }
      that.slide();
    })
    //右边按钮
    that.rtBtn.click(function () {
      // alert(1);
      that.cur_index++;
      if (that.cur_index >= that.num - 1) {
        that.cur_index = that.num - 1;
      }
      that.slide();
    })
    //小图移入事件切换大图
    for (let i = 0; i < this.small_pic.length; i++) {
      this.small_pic.eq(i).mouseover(function () {
        that.small_pic.each(function () {
          $(this).css('border', '');
        })
        that.cur_index = i;
        that.small_pic.eq(i).css('border', '1px solid #74BE5F');
        that.slide();
      })

      that.small_pic.eq(i).mouseout(function(){
        that.small_pic.each(function () {
          $(this).css('border', '');
        })
      })
    }
  }
    //轮播方法
    slide() {
      //大图
      this.big_pic.eq(this.cur_index).css('z-index', ++this.zIndex);
      if (this.cur_index <= 0) {
        this.cur_index = 0;
      } else if (this.cur_index >= this.num - 1) {
        this.cur_index = this.num - 1;
      }
    }
}



  new Slider();
