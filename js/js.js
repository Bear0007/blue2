$("input").blur(function(){
    if($(this).val() =="") {       
        $(this).next().css('display','block');
        return false;
        
    }else{
        $(this).next().css('display','none');
    } 
});
$("#submit").click(function(){
    if($("#name").val()==""){
        // check.preventDefault();
       $("#name").next().css('display','block');
        return false;
    }else if($("#name_id").val()==""){
      $("#name_id").next().css('display','block');
        return false;
    }else if($("#mali").val()==""){
        $("#mali").next().css('display','block');
          return false;
      }else if($("#firm").val()==""){
        $("#firm").next().css('display','block');
          return false;
      }
})

function fnCheckEmail(){
    // 获取邮箱框输入的数据
    var vals=$email.val()
    // 邮箱正则匹配表达式
    var reMail = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i
    // 如果输入框为空，则提示不能为空并return
    if (vals==''){
        $email.next().show().html('邮箱不能为空')
        flagEmail=false
        return
    }
    // 正则验证邮箱输入是否合法
    if(reMail.test(vals))
    {
        // 如果匹配成功，则隐藏span标签
        $email.next().hide()
        flagEmail=true
    }
    else
    {
        // 如果匹配失败，则显示span标签，替换提示信息
        $email.next().show().html('你输入的邮箱格式不正确')
        flagEmail=false
    }
}

 
