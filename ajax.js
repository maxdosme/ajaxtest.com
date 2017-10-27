/**
 * Created by hyuan on 2016/11/14.
 */

function ajax(url,fnSucc,fnFaild){

    //1.创建ajax
    if (window.XMLHttpRequest){
        var oAjax = new XMLHttpRequest();
    }else {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //2.连接服务器
    oAjax.open('GET',url,true);

    //3.发送请求
    oAjax.send();

    //4.接收返回值
    oAjax.onreadystatechange = function (){     //浏览器和服务器进行到哪一步
        //判断是否接收成功
        if (oAjax.readyState == 4){     //读取完成
            if (oAjax.status == 200){   //成功
                fnSucc(oAjax.responseText);
            }else {
                if (fnFaild){           //失败
                    fnFaild(oAjax.status);
                }
            }
        }
    }
}
