let ajax = {
    get(url){
        //1. 创建XMLHttpRequest对象
        let xhr = new XMLHttpRequest();
        //2. 与服务器建立连接
        xhr.open('get',url,true);
        //3. 发送请求
        xhr.send();
        //4. 等待响应
        return new Promise((resolve,reject) => {
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(/^(2|3)/.test(xhr.status)){
                        resolve(xhr.responseText);
                    }else{
                        reject();
                    }
                }
            }
        })
    },
    post(url,data){
        //1. 创建XMLHttpRequest对象
        let xhr = new XMLHttpRequest();
        //2. 与服务器建立连接
        xhr.open('post',url,true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded;charset=utf-8');
        //3. 发送请求
        xhr.send(data);
        //4. 等待响应
        return new Promise((resolve,reject) => {
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(/^(2|3)/.test(xhr.status)){
                        resolve(xhr.responseText);
                    }else{
                        reject();
                    }
                }
            }
        })
    }
}