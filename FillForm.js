const input = document.getElementsByTagName("input");
        const textarea = document.getElementsByTagName("textarea");
        const input_text = [];
        const input_number = [];
        
        const data_text = {   
            "专业*":"睡觉",
            "移动电话*":"1335235543",
            "姓名*":"Jim",
            "出生日期":"世界",
            "身高*":"1999",
            "电子邮箱*":"1422168638@666.com",
            "期望面试地点":"月球",
            "个人成就":"HelloWorld"
        }

        for(let a = 0; a < input.length; a++){
            switch(input[a].type){
                case "text":input_text.push(input[a]);break;
                case "number":input_number.push(input[a]);break;
                default:break;
            }
        }

        for(let a = 0; a < textarea.length; a++){
            input_text.push(textarea[a]);
        }
    
        function inputGetKey(inputNode, key){
            let broNode = inputNode;

            while(broNode != null){
                if(broNode.innerText == key){
                    return true;
                }
                broNode = broNode.previousSibling;
            }
            return false;
        }


        function inputGetKeyUp(inputNode, key){
            if(inputNode.tagName == "BODY")return false;
            
            if(inputGetKey(inputNode, key))return true;
            
            if(inputGetKeyUp(inputNode.parentNode, key))return true;
            else return false;
            
        }

        for(let input_key of Object.keys(data_text)){

            for(let a = 0; a < input_text.length; a++){

                if(inputGetKeyUp(input_text[a], input_key)){
                    
                    if(data_text[input_key])
                    input_text[a].value = data_text[input_key];
                    Reflect.deleteProperty(data_text, input_key);
                }
            }
        }