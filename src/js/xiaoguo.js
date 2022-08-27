//右侧内容切换
//1.获取页面元素
let $btn = $('.btn');
let $content = $('.content');
//2.添加事件
$btn.each((index, value) => {
    let tabname = $(value).attr('tab');
    $(value).on('click', () => {
        $content.css('display', 'none');
        $content.each((index, value) => {
            if ($(value).attr('tabbox') == tabname) {
                $(value).attr('style', 'display:block')
            }
        })
    })
})

//添加评价部分
$('.sbtn').on('click',function(){
    $('.textBox').show();
})
$(".fabu").click(function () {
    var $new = $("<div></div>");
    console.log($("#text").val());
    $new.html(`
                <div class="evaluation">
                    <div class="userlf">
                        <a href="javascript:;" target="_blank">
                            <img class="petview" uid="1106226"
                                src="https://img1.epetbar.com/2016-01/04/22/b4edf0cad915d9301fbdc48f74353c28.jpg"></a>
                    </div>
                    <div class="userrg">
                        <div class="usertext">
                            <div class="overflow">
                                <a href="http://www.gutou.com/u/1106226"
                                    target="_blank"><span>兔子1111</span></a>
                                &ensp;7岁7个月21天 正常&ensp;
                                <p class="rephead">
                                    <!--评价商品：<a href="http://item.epet.com/" target="_blank" title="" style="text-decoration: underline;"></a>&ensp;&ensp;&ensp;-->
                                    <span class="minstar"></span>
                                </p>
                            </div>
                            <div class="pingjiatext">
                            ${$("#text").val()}    
                            </div>
                            <ul class="re_photos">
                                <li class="fl"><img width="40px" height="40px"
                                        src="https://img2.epetbar.com/2019-10/14/11/bf0ef8da1906883fd5dac11418f1262e.png@!100w-c"><span></span>
                                </li>
                                <div class="clear"></div>
                            </ul>
                            <!--新加 供应商回复-->
                            <!--新加 end-->
                            <div class="user-huifu">
                                <a href="javascript:void(0)" onclick="show_post(this,0,0,0)"><img
                                        src="//static.epetbar.com/www/images/epet/pj-ico_03.jpg">&ensp;回复：</a><span
                                    class="huifu">0&ensp;&ensp;</span>
                                <a href="javascript:void(0)" onclick="add_like(this,0)"><img
                                        src="//static.epetbar.com/www/images/epet/zan-ico_03.jpg">&ensp;赞：</a><span
                                    id="like_"></span>&ensp;<span id="liked_"></span>
                                <span class="fr">2019-10-11 03:34:26</span>
                            </div>
                            <div class="moreinfo">
                            </div>
                        </div>
                    </div>
                </div>


    `)
    $(".insert").before($new);
    $(".textBox").css('display', 'none');
    $('#text').val('');
})


class zzy {
    constructor() {
        this.btn = document.querySelectorAll('.outer-box .box .right .right_nav .btn-box .btn')
        this.wep = document.querySelectorAll('.outer-box .box .right .right_nav .content-box .content .brand .brand-intru .brand-home .brand-info a')[1]
        this.lm = document.querySelector('.outer-box .box .left .leftbottom a')
        this.wepflag = true
        this.addEvent()
    }
    addEvent() {
        let that = this
        for (let i = 0, len = this.btn.length; i < len; i++) {
            this.btn[i].onclick = function () {
                for (let j = 0, len = that.btn.length; j < len; j++) {
                    $(that.btn[j]).css({
                        background: "#f5f5f5",
                        border: "none"
                    })
                }
                $(this).css({
                    background: "white",
                    'border-top': "2px solid green",
                })
            }
        }
        this.wep.onclick = function(){
            if(that.wepflag){
                $(this).css('background-position-y',-25)
                that.wepflag = false
            }else{
                $(this).css('background-position-y',0)
                that.wepflag = true
            } 
        }
        this.lm.onclick = function(){
            
        }
    }
}
new zzy()