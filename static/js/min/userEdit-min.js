$(function(){$("input").addClass("form-control"),$("textarea").addClass("form-control"),$("button").addClass("form-control btn-primary"),$("[for='id_user-username']").html("用户名称（必填项）"),$("[for='id_user-email']").html("用户邮箱"),$(".helptext").hide(),$("#activityEditForm").validate({rules:{"user-username":{required:!0},"user-email":{email:!0},"userprofile-phone":{required:!0,number:!0},"userprofile-schoolID":{required:!0,number:!0},doingstart:{required:!0},doingstart:{required:!0},feedback:{required:!0}},messages:{"user-username":{required:"请填写你的个人名称"},"user-email":{email:"请填写正确的邮箱格式"},"userprofile-phone":{number:"请输入数字"},"userprofile-schoolID":{number:"请输入数字"},doingstart:{required:"请选择活动开始日期"},doingend:{required:"请选择活动结束日期"},feedback:{required:"请添加反馈"}}})});