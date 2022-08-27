//弹出插件
function Float(){
    this.btn = document.querySelector('#buy');
    this.mark = document.querySelector('#mark');
    this.float = document.querySelector('.float');
    this.cls = document.querySelector('.title>span');
    //添加事件
    this.addEvent();
}
Float.prototype.addEvent = function(){
    this.btn.onclick = function(){
        this.mark.style.display = 'block';
        this.float.style.left = document.documentElement.clientWidth / 2 - thi;s.float.offsetWidth / 2 + 'px';
    }.bind(this);
    this.cls.onclick = () => {
        this.mark.style.display = 'none';
    }
}

new Float();