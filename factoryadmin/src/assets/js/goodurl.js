
 let goodsurl=function (url){
		let newurl;
		let arr=url.split("&");
		let a=[];
		for (let i=0;i<arr.length;i++) {
			if(arr[i].substr(arr[i].length - 1,arr[i].length)!="="){
				a.push(arr[i]) 
			}
			if(a.length==0){
				a.push(arr[0])
			}
		}
		if (a.length==0) {
			newurl=a[0]
		} else{
			newurl=a.join("&")
		}
		return newurl;
	}
	export default goodsurl
