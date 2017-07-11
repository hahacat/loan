var vm = new Vue({
	el: '#wrapper',
	data : {
		submitFlag : false,
		monthsArr : [],
		quantity3 : '',
		quantity6 : '',
		quantity12 : '',
		quantity24 : '',
		allPrincipal : 0,
		allDeduction : 0,
		len : 0,
		dataArr : [],
		page : false
	},
	methods : {
		changeSubmit: function(){
			//alert(this.quantity3 && this.quantity6 && this.quantity12 && this.quantity24 ==0)
			if(this.quantity3 ==0&& this.quantity6==0 && this.quantity12==0 && this.quantity24 ==0){
				this.submitFlag = false;
				this.page = true;
			}
			this.dataArr = [];
			for(var i = 0; i<24; i++){
				this.dataArr.push({"a":0,"b":0});
			}
			if(this.quantity24 != 0){
				this.len = 24;
				this.submitFlag = true;
				this.page = false;
				for(var i =12; i<24; i++){
					if(i != 23){
						this.dataArr[i].a+=((this.quantity24 * 0.08)/12).toFixed(2);
					}else{
						this.dataArr[i].a+=((this.quantity24 * 0.08)/12+ Number(this.quantity24)).toFixed(2);
						this.dataArr[i].b+=this.quantity24*0.06;
					}
				};
			}
			if(this.quantity12 != 0){
				if(this.len <12){
					this.len = 12;
				}

				this.submitFlag = true;
				this.page = false;
				for(var i =6; i<12; i++){
					if(i != 11){
						this.dataArr[i].a+=((this.quantity12 * 0.092 +this.quantity24 * 0.08)/12).toFixed(2);
					}else{
						this.dataArr[i].a+=((this.quantity12 * 0.092 +this.quantity24 * 0.08)/12+ Number(this.quantity12)).toFixed(2);
						this.dataArr[i].b+=this.quantity12*0.06;
					}
				};							
			}
			if(this.quantity6 !=0 ){
				if(this.len <6){
					this.len = 6;
				}
				this.page = false;
				this.submitFlag = true;
				for(var i =3; i<6; i++){
					if(i != 5){
						this.dataArr[i].a+=((this.quantity6 * 0.08 + this.quantity12 * 0.092 +this.quantity24 * 0.08)/12).toFixed(2);
					}else{
						this.dataArr[i].a+=((this.quantity6 * 0.08 + this.quantity12 * 0.092 +this.quantity24 * 0.08)/12+ Number(this.quantity6)).toFixed(2);
						this.dataArr[i].b+=this.quantity6*0.06;
					}
				};	
			}
			if(this.quantity3 !=0 ){
				if(this.len <3){
					this.len = 3;
				}
				this.page = false;
				this.submitFlag = true;
				for(var i =0; i<3; i++){
					if(i != 2){
						this.dataArr[i].a+=((this.quantity3 * 0.073 + this.quantity6 * 0.08 + this.quantity12 * 0.092 +this.quantity24 * 0.08)/12).toFixed(2);
					}else{
						this.dataArr[i].a+=((this.quantity3 * 0.073 + this.quantity6 * 0.08 + this.quantity12 * 0.092 +this.quantity24 * 0.08)/12+ Number(this.quantity3)).toFixed(2);
						this.dataArr[i].b+=this.quantity3*0.06;
					}
				};
			}
			
			for(var i=0; i<24; i++){
				if(i+1>this.len){
					this.dataArr.splice(this.len)
				}
			}

			this.allPrincipal = Number(this.quantity3)+Number(this.quantity6)+Number(this.quantity12)+Number(this.quantity24);
			this.allDeduction = (this.quantity3*3/12*0.07)+(this.quantity6*6/12*0.07)+(this.quantity12*12/12*0.07)+(this.quantity24*24/12*0.07);
		}
	},
	filters : {
		forMoney : function(msg){
			return '￥'+Number(msg).toFixed(2);
		}
	}
});