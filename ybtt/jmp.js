function QueryString(item){
var sValue=location.search.match(new RegExp("[\?\&]"+item+"=([^\&]*)(\&?)","i"))
return sValue?sValue[1]:sValue
};
if(QueryString("platInfo")==null || QueryString("platInfo")==undefined || QueryString("platInfo")==""){
	window.location.href="?platInfo=open_258_10319"; 
}