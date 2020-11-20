(function($){
        $.fn.serializeJson=function(){
            var serializeObj={};
            var array=this.serializeArray();
            var str=this.serialize();
            $(array).each(function(){
                if(serializeObj[this.name]){
                    if($.isArray(serializeObj[this.name])){
                        serializeObj[this.name].push(this.value);
                    }else{
                        serializeObj[this.name]=[serializeObj[this.name],this.value];
                    }
                }else{
                    serializeObj[this.name]=this.value; 
                }
            });
            return serializeObj;
        };
        $.fn.arrayTdJson=function(obj){
        	if(obj==null){
        		var serializeObj={};
        	}else{
        		var serializeObj=obj;
        	}
            var array=this;
            $(array).each(function(){
            	var name = $(this).attr("name");
            	var value = $(this).text();
                if(serializeObj[name]){
                    if($.isArray(serializeObj[name])){
                        serializeObj[name].push(value);
                    }else{
                        serializeObj[name]=[serializeObj[name],value];
                    }
                }else{
                    serializeObj[name]=value; 
                }
            });
            return serializeObj;
        };
        $.fn.arrayValueJson=function(obj){
        	if(obj==null){
        		var serializeObj={};
        	}else{
        		var serializeObj=obj;
        	}
            var array=this;
            $(array).each(function(){
            	var name = $(this).attr("name");
            	var value = $(this).val();
                if(serializeObj[name]){
                    if($.isArray(serializeObj[name])){
                        serializeObj[name].push(value);
                    }else{
                        serializeObj[name]=[serializeObj[name],value];
                    }
                }else{
                    serializeObj[name]=value; 
                }
            });
            return serializeObj;
        };
})(jQuery);