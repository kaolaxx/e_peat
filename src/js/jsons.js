 
     class Method{
        constructor(){
     
            //第一个下拉框的数据
            $(function(){
                var $sp = $(".p1") 
                var $leve = $("#ul");
                //获取json
                $.getJSON("../data/select.json",function(json){
                    console.log(json.select);
                    var myMenu = json.select;
                    // console.log(myMenu);
                    var myOne = myMenu.one;

                    $.each(myOne,function(j){ 
                        $("<li>" + "<a>" + myOne[j] + "</a>" + "</li>").appendTo("#ul"); 
                    })
                    $leve.mouseover(function(){
                        $(this).css("display","block");
                    })
                    $sp.mouseover(function(){
                        $leve.css("display","block");
                    })
                    $sp.mouseout(function(){
                        $leve.css("display","none");
                    })
                })
            }),
            //第二个下拉框的数据
            $(function(){
                var $sp = $(".p2") 
                var $leve = $("#ul1");
                //获取json
                $.getJSON("../data/select.json",function(json){
                    console.log(json.select);
                    var myMenu = json.select;
                    // console.log(myMenu);
                    var myOne = myMenu.two;

                    $.each(myOne,function(j){ 
                        $("<li>" + "<a>" + myOne[j] + "</a>" + "</li>").appendTo("#ul1"); 
                    })
                    $leve.mouseover(function(){
                        $(this).css("display","block");
                    })
                    $sp.mouseover(function(){
                        $leve.css("display","block");
                    })
                    $sp.mouseout(function(){
                        $leve.css("display","none");
                    })
                })
            }),
            //第三个下拉框的数据
            $(function(){
                var $sp = $(".p3") 
                var $leve = $("#ul2");
                //获取json
                $.getJSON("../data/select.json",function(json){
                    console.log(json.select);
                    var myMenu = json.select;
                    // console.log(myMenu);
                    var myOne = myMenu.three;

                    $.each(myOne,function(j){ 
                        $("<li>" + "<a >" + myOne[j] + "</a>" + "</li>").appendTo("#ul2"); 
                    })
                    $leve.mouseover(function(){
                        $(this).css("display","block");
                    })
                    $sp.mouseover(function(){
                        $leve.css("display","block");
                    })
                    $sp.mouseout(function(){
                        $leve.css("display","none");
                    })
                })
            }),
           //倒计时
           $(function () {
            let timer = null;
            let $days = $('.days');
            let $o_hours = $('.hours').css({"color":"black"});
            let $o_minute = $('.minute').css('color','black');
            let $o_second = $('.second').css('color','black');
            function daoJiahi() {
                let n_date = new Date();
                let l_date = new Date('2022,8,29');
                let n_time = n_date.getTime();
                let l_time = l_date.getTime();
                let time = l_time - n_time;

                let minus = Math.floor(time / 1000);
                let day = (Math.floor(minus / 60 / 60 / 24)) < 10 ? '0' + Math.floor(minus / 60 / 60 / 24) : Math.floor(minus / 60 / 60 / 24);
                let hours = (Math.floor((minus - day * 24 * 60 * 60) / 60 / 60)) < 10 ? '0' + Math.floor((minus - day * 24 * 60 * 60) / 60 / 60) : Math.floor((minus - day * 24 * 60 * 60) / 60 / 60)
                let minutes = (Math.floor((minus - day * 24 * 60 * 60 - hours * 60 * 60) / 60)) < 10 ? '0' + Math.floor((minus - day * 24 * 60 * 60 - hours * 60 * 60) / 60) : Math.floor((minus - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
                let seconds = (minus % 60) < 10 ? '0' + (minus % 60) : (minus % 60);
                $o_hours.text(hours);
                $o_minute.text(minutes);
                $o_second.text(seconds);
                $days.text(day);
                // console.log(day + ' ' + hours + ' ' + minutes + ' ' + seconds)
            }
            timer = setInterval(daoJiahi, 5);
        })
        }
     } 

    new Method();
 