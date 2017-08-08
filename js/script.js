$(function(){
    var attentionArray=['fzz1',56040,96291,16101,4809,'dasima','lck',633144,2250040];
    $('#my-tab a').click(function (e) { 
          e.preventDefault();//阻止a链接的跳转行为 
          $(this).tab('show');//显示当前选中的链接及关联的content 
        }) 
   function check(id){
        $.getJSON("https://query.yahooapis.com/v1/public/yql", {
        q: "select * from json where url=\"http://open.douyucdn.cn/api/RoomApi/room/"+id+"\"",
        format: "json"
}, function(data) {
        var $allContent = $("#all .status");
        var $onlineContent = $("#online .status");
        var $outlineContent = $("#outline .status");
        var results=data.query.results;
        var resultStr=JSON.stringify(results);
        var liContent=""; 
        if (results.json.data.room_status==1){
            liContent="<li class='col-md-12'><img src='"+results.json.data.avatar+"' alt='"+results.json.data.owner_name+"' ><p class='col-md-3'>"+results.json.data.owner_name+"</p><p class='col-md-2 online'>直播中</p><p class='col-md-2'>"+results.json.data.cate_name+"</p><a class='col-md-3 online' href='https://www.douyu.com/"+id+"' target='_blank'>点击观看直播</a></li>"
            $onlineContent.append(liContent);
        }else if(results.json.data.room_status==2){
            liContent="<li class='col-md-12'><img src='"+results.json.data.avatar+"' alt='"+results.json.data.owner_name+"' ><p class='col-md-3'>"+results.json.data.owner_name+"</p><p class='col-md-2 outline'>暂无直播</p><p class='col-md-2'>"+results.json.data.cate_name+"</p><a class='col-md-3 outline' href='https://www.douyu.com/"+id+"' target='_blank'>我要蹲点守候</a></li>"
            $outlineContent.append(liContent);
        }
        $allContent.append(liContent);
        });
    }
    function inquire(){
        for(let i=0;i<attentionArray.length;i++){
        check(attentionArray[i]);
        }
    }
    inquire();
    $(".btn").click(function(){
        $(".status").html("");
       inquire(); 
    });
    
})



/*
$(function(){
   function check(id){
        $.getJSON("http://query.yahooapis.com/v1/public/yql", {
        q: "select * from json where url=\"http://open.douyucdn.cn/api/RoomApi/room/"+id+"\"",
        format: "json"
}, function(data) {
        var $content = $("#content")
            if (data.query.results) {
                $content.text(JSON.stringify(data.query.results));
            } else {
                $content.text('no such code ');
            }
        });
    }
    check(56040);
})
*/