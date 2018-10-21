// 服装小图左右点击
var left = 0;
$(".pho_bot_left").click(function(){
	left = $(".imgs").position().left;
	console.log(left);
	if(left>=0){
		left = 0;
	}else{
		left = left+60+"px";
		$(".imgs").css({"left":left});
	}
});

$(".pho_bot_right").click(function(){
	if(left<=-60){
		left = -60;
	}else{
		left = left-60;
		$(".imgs").css({"left":left});
		// $(".imgs").position().left = left;不能赋值
	}
});
// 点击小图片切换大图
$.each(
	$(".imgs li"),function(){
		$(this).click(function(){
			$(this).css({border:'1px solid #000'})
			.siblings().css({border:'0'});
			// var url = $(this).css("backgroundImage").
			// replace('url(','').replace(')','');	
			// console.log(url);	
			// // $(".pho_top").attr("backgroundImage","url("+url+")");(错误)
			// $(".pho_top").css({"backgroundImage":"url("+url+")"});
			// console.log($(".pho_top").attr("backgroundImage"));
			var srcs = $(this).find(".jpgs").attr("src");
			// console.log(srcs);
			$(".pho_top img").attr("src",srcs);
			// 放大镜效果
			$(".pho_top").mouseenter(function(){
				singlton.getInstance({
					//要放大的图片对应的dom元素
					bigBoxDom:this,
					//大图的src；要放大的效果的dom元素的背景图片
					bigImg:srcs,			
					//要放大图片的宽和高
					bigBoxWidth:385,
					bigBoxHeight:520,
					//放大镜的宽和高
					width:100,
					height:130
				});
			});
		});
	}
); 
// 放大镜效果
$(".pho_top").mouseenter(function(){
				singlton.getInstance({
					//要放大的图片对应的dom元素
					bigBoxDom:this,
					//大图的src；要放大的效果的dom元素的背景图片
					bigImg:"img/d_yuan1.jpg",			
					//要放大图片的宽和高
					bigBoxWidth:385,
					bigBoxHeight:520,
					//放大镜的宽和高
					width:100,
					height:130
				});
			});
//选择尺码
$(".sml").click(function(){
	$(this).css({border:"1px solid #e50065"})
	.siblings().css({border:"1px solid #cccccc"});
	$(".rgb").css({border:"0"});
});
var num = 1;
// 增减数量
$(".add").click(function(){
	num++;
	$(".sums_left").html(num);
});
$(".jian").click(function(){
	if(num<=0){
		num = 0;
	}else{
		num--;
	    $(".sums_left").html(num);
	}
});
// 商品详情导航效果
$.each(
	$(".cen_nav a"),function(){
		$(this).click(function(){
			$(this).css({background:"#fff",
			"border-top":"1px solid #e60060"})
			.siblings().css({background:"#e8e8e8",border:"0"});
		});
	}
);


// 获取cookie
getCookie("clothesId");
// console.log(getCookie("clothesId"));

// 发送ajax
$.ajax({
	type:"get",
	url:"php/getGoodsInfo.php",
	async:true,
	data:{
		goodsId:data.goodsId
	},
	success:function(data){
		// console.log(data.goodsId);
		// if(data.goodsId == getCookie("clothesId")){
			// 店名
			$("$dianming").html(data.beiyong11);
			console.log($("$dianming").html(data.beiyong11));
			// 描述
			$("#descript").html(data.goodsDesc);
			// 大图
			$(".pho_top img").attr("src",data.goodsImg);
			// 小图
			$(".jpgs1").attr("src",data.beiyong1);
			$(".jpgs2").attr("src",data.beiyong2);
			$(".jpgs3").attr("src",data.beiyong3);
			$(".jpgs4").attr("src",data.beiyong4);
			$(".jpgs5").attr("src",data.beiyong5);
			$(".jpgs6").attr("src",data.beiyong6);
			// 商品编号
			$("#bianhao").html(data.goodsId);
			// 商品名称
			$("#goodsname").html(data.goodsname);
			// 商品当前价格
			$("#goodsprice").html(data.goodsprice);
			// 评论数量
			$("#discuss").html(data.beiyong12);
			// 尺码
			$("#sizeS").html(data.beiyong7);
			$("#sizeM").html(data.beiyong8);
			$("#sizeL").html(data.beiyong9);
			// 剩余数量
			$("#goodscount").html(data.goodscount);
			$("#goodsimg").attr("src",data.goodsImg);
		// }
	},
	dataType:"json"
});