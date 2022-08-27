class Glass{
    constructor(){
        this.add();
    }
    add(){
        //获取所有元素
        var oDiv = document.getElementById('goods-center');//大盒子
        var oMark = document.getElementsByClassName("mark")[0]; //遮罩
        var oFloat = document.getElementsByClassName('float_layer')[0]; //滑块
        var oBig = document.getElementsByClassName('big_pic')[0]; //大图
        var oSmall = document.getElementsByClassName('small_pic')[0];
        var oImg = oBig.getElementsByTagName('img')[0];

        //给遮罩层添加鼠标移入事件
        oMark.onmouseover = function () {
            // oFloat.style.display = 'block';  //让小块显示出来
            oBig.style.display = 'block';   //同时让大图显示出来
        };
        //给遮罩层添加鼠标移出事件
        oMark.onmouseout = function () {
          
            oFloat.style.display = 'none';  //让小块隐藏
            oBig.style.display = 'none';   //同时让大图隐藏
        };

        //给遮罩层添加鼠标移动事件
        oMark.onmousemove = function (evt) {
            var e = evt || window.event;
            //鼠标页面位置-最外面div到页面左边的距离 - 小图到oDiv的距离 - oFloat的宽度/2 (使鼠标到oFloat的中心位置);
            document.title = e.clientX - oDiv.offsetLeft - oSmall.offsetLeft;
            var l = e.clientX - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth * 2  ;
            var t = e.clientY - oDiv.offsetTop - oSmall.offsetTop - oFloat.offsetHeight  * 2 ;


            //限制边界
            if (l < 0) {
                l = 0;
            } else if (l > oMark.offsetWidth - oFloat.offsetWidth) {
                l = oMark.offsetWidth - oFloat.offsetWidth;
            }

            if (t < 0) {
                t = 0;
            } else if (t > oMark.offsetHeight - oFloat.offsetHeight) {
                t = oMark.offsetHeight - oFloat.offsetHeight;
            }

            oFloat.style.left = l + 'px';
            oFloat.style.top = t + 'px';

            //小块活动的距离（移动比例）（大图显示比例）
            var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
            var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);

            //大图的left值 = 移动比例 * （大图的宽度 - 大图所在Div的宽度）（大图所能移动的距离）
            oImg.style.left = -percentX * (oImg.offsetWidth - oBig.offsetWidth) + 'px';
            oImg.style.top = -percentY * (oImg.offsetHeight - oBig.offsetHeight) + 'px';


        };

    }
}
new Glass();
