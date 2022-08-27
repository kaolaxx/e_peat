function Cart() {
    //购物车按钮
    this.$cart = $('#buy');
    //购买按钮
    this.$buys = $('#addToCart');
    //添加事件
    this.addEvent();
    //初始化页面数据
    this.init();
    this.inpits = $('#ip');
    this.num = 1;
}
Cart.prototype = {
    constructor: Cart,
    addEvent: function () {
        //记录this
        let that = this;
        this.$buys.click(() => {
            //跳转到购物车页面
            location.href = '#';
            let good_id = $(".goods").attr("data-good-id");
            let good_name = $(".hdtitle").text();
            let good_price = $(".money2").text();
            let good_src = $(".img1").attr('src');

            //获取后端数据
            let storage = window.localStorage;
            let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
            //转对象
            let storage_obj = convertStrToObj(storage_str);
            //检测当前商品是否购买过
            if (good_id in storage_obj) {
                //找到商品数量 + 1
                storage_obj[good_id].num++;
            } else {
                storage_obj[good_id] = {
                    "name": good_name,
                    "src": good_src,
                    "price": good_price,
                    "num": 1
                }
            }
            //存入本地存储中
            storage.setItem('products', JSON.stringify(storage_obj));
        })
    },
    //页面初始化数据
    init: function () {
        //获取-
        let that = this;
        $('.suls').click(function () {
            //获取id
            let id = $(".goods").attr("data-good-id");
            let storage = window.localStorage;
            let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
            //转对象
            let storage_obj = convertStrToObj(storage_str);
            if (storage_obj[id].num > 1) {
                storage_obj[id].num--;
            }
            //存入本地存储中
            storage.setItem('products', JSON.stringify(storage_obj));
            //前端
            $('.suls').value = storage_obj[id].num;
            that.inpits.val(storage_obj[id].num);
            if (that.num > 1) {
                that.num--;

            }


            //显示结算框的总数量
            let sumnum = $(".nums");
            sumnum.text(storage_obj[id].num);
            //总价格
            let  sumprice = $(".gross");
            sumprice.text(storage_obj[id].price * storage_obj[id].num);

        })

        //获取所有的+

        $('.puls').click(function () {

            //获取id
            let id = $(".goods").attr("data-good-id");
            let storage = window.localStorage;
            let storage_str = storage.getItem('products') ? storage.getItem('products') : '';
            //转对象
            let storage_obj = convertStrToObj(storage_str);
            storage_obj[id].num++;
            //存入本地存储中
            storage.setItem('products', JSON.stringify(storage_obj));
            //前端
            that.value = storage_obj[id].num;
            that.inpits.val(storage_obj[id].num);
            
            //显示结算框的总数量
            let sumpirce = $(".nums");
            sumpirce.text(storage_obj[id].num);
            //总价格
            let  sumprice = $(".gross");
            sumprice.text(storage_obj[id].price * storage_obj[id].num);
        })

    }

}
new Cart();