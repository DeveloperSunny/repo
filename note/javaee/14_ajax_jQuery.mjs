Lesson1

	һ��JavaScript�ж��庯�������ַ�ʽ
		1��������������ͬJava�ж��巽��һ����
		function ������(����1,����2){
			//������
		}
		Ҫ��ʹ�ã�����ͨ������ȥ���á�

	2��ʹ�ú������췽��
		var ������=new Function("����1","����2","������");

		Ҫ��ʹ�ã�����ͨ������ȥ���á�

	3������ֱ��������ʽ����Ϊ���õģ�
		var ������ = function(����1,����2){
			//���1;���2;
			���1
			���2;
		}
	����JavaScript�е��߼��ж�
		���߼������У�0��""��false��null��undefined��NaN����ʾfalse
	����JavaScript�е������ǿɱ䳤�ȵ�
	
Lesson2
һ��DOM��ϰ��
	1������ѡ��㶨
	2��ʡ�ж�������
	3��checkbox��ȫѡ��ȫ��ѡ
����JavaScript�еĴ��ڲ���
��������JavaScript�Ŀͻ�����֤
******�ġ�AJAXԭ��
	4.1����
	4.2��д����
		1���������������ͨ��
			a������XmlHttpRequest���󣬹̶�д����
					function createXmlHttpRequest(){
					   var xmlHttp;
					   try{    //Firefox, Opera 8.0+, Safari
							   xmlHttp=new XMLHttpRequest();
						}catch (e){
							   try{    //Internet Explorer
									  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
								}catch (e){
									  try{
											  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
									  }catch (e){}  
							   }
						}
					   return xmlHttp;
					 }
					 
					 var xhr = createXmlHttpRequest();
			b��ע��״̬�仯���¼�����
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						//�����Ĵ���
						if(xhr.status==200||xhr.status==304){
							//��������ȷ����
							var data = xhr.responseText;//���������ص�����
							//�ѷ��ص�����д��div��
							document.getElementById("d1").innerHTML=data;
						}
					}
				}
			c����ʼ��xhr����
				xhr.open("GET","/ajaxday02/servlet/ServletDemo1?time="+new Date().getTime());
			d�����������������
				xhr.send(null);
	4.3XmlHttpRequest��⣨JavaScript����
		�������ԣ�
			readyState��������XmlHttpRequest����ĵ�ǰ״̬
				0 (δ��ʼ��) �����ѽ�����������δ��ʼ������δ����open������ 
				1 (��ʼ��) �����ѽ�������δ����send���� 
				2 (��������) send�����ѵ��ã����ǵ�ǰ��״̬��httpͷδ֪ 
				3 (���ݴ�����) �ѽ��ղ������ݣ���Ϊ��Ӧ��httpͷ��ȫ��
				4 (���) ���ݽ������,��ʱ����ͨ��ͨ��responseBody��responseText��ȡ�����Ļ�Ӧ���� 
			ֻ��Ϊ4���ͻ��˲�����Ӧ�Ĵ���
			-------------------------------------------------
			status�������������HTTP��Ӧ�롣200�ǳɹ���304������������û�иı䡣
			-------------------------------------------------
			responseText�������������ı����ݡ�
			
			onreadystatechange����XmlHttpRequest�����readyState�����仯ʱ�����ᴥ�����¼���
			
		���÷�����
			open(method,url,isAsync):��ʼ��XmlHttpRequest����
				method������ʽ��һ��ʹ��get����post
				url������ķ�������ַ������ʹ�����·�����߾���·����
						�ر�ע�⣺����õ�ַû�б仯�������һ�㲻���ٴη�������ġ�����취������һ��ʱ�����
							/ajaxday02/servlet/ServletDemo1?time="+new Date().getTime()
				isAsync���Ƿ����첽����Ĭ����true��
			send(requestData):������������������ݡ�û�д���null��
				����ʱ����POST����ʽ�ġ�������ʽ��username=admin&password=123
				
		ͨ��XmlHttpRequest�����������POST����
			//����������Ϣͷ����֪�����������͵��������ݵ����͡�
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//�̶�д��
				//��������
				xhr.send("username=admin&password=123");
	4.4����˷��ص�����
		HTML����
			responseText������XmlHttpRequest�����һ�����ԡ����������ص����ݻ��װ���������С�
			
		XML����
			responseXML:���ص���xml�����DOM����
			
		*****JSON����
		
jQuery
һ����DOM֮����໥ת��
	1��DOM-->jQuery $obj = $(obj)
	2��jQuery-->DOM 
		 //jQuery������һ��������󣬿���ͨ��[index]�ķ��������õ���Ӧ��DOM����
		 var obj = $obj[0];
		 get��ʽ�õ�DOM����
		 var obj = $obj.get(0);
����ѡ����
	����
		1��$("#myDiv");  //���� ID Ϊ"myDiv"��Ԫ�ء�
		2��$("div");     //���ݸ�����Ԫ����ƥ������Ԫ��
		3��$(".myClass");  //���ݸ�������ƥ��Ԫ�ء�
		4��$("*")  //ƥ������Ԫ��
		5��$("div,span,p.myClass")  //��ÿһ��ѡ����ƥ�䵽��Ԫ�غϲ���һ�𷵻ء�ȡ���ǲ���
	����
		27��$("div[id]")  //�������к��� id ���Ե� div Ԫ��
		28��$("input[name='newsletter']")  //�������� name ������ newsletter �� input Ԫ��
		29��$("input[name!='newsletter']")  //�������� name ���Բ��� newsletter �� input Ԫ��
		30��$("input[name^='news']")  //�������� name �� 'news' ��ʼ�� input Ԫ��
		31��$("input[name$='letter']")  //�������� name �� 'letter' ��β�� input Ԫ��
		32��$("input[name*='man']")  //�������� name ���� 'man' �� input Ԫ��
		33��$("input[id][name$='man']")  //�ҵ����к��� id ���ԣ��������� name �������� man ��β��  [selector1][selector2][selectorN]
	�㼶
		6��$("form input")  //�ڸ���������Ԫ����ƥ�����еĺ��Ԫ��
		7��$("form > input")  //�ڸ����ĸ�Ԫ����ƥ�����е���Ԫ��
		8��$("label + input")  //��ͬһ���ϣ�ƥ�����и��� label ����� input Ԫ�أ�����������ң�
		9��$("form ~ input")  //�ҵ��������ͬ���� input Ԫ��
	����
		10��$('li:first')  //��ȡ��һ��Ԫ��
		11��$('li:last')  //��ȡ����Ԫ��
		12��$("input:not(:checked)")  //��������δѡ�е� input Ԫ��
		13��$("tr:even")  //���ұ���1��3��5...�У�������ֵ0��2��4...��;ƥ����������ֵΪż����Ԫ�أ��� 0 ��ʼ����
		14��$("tr:odd")  //���ұ���2��4��6�У�������ֵ1��3��5...�� ;ƥ����������ֵΪ������Ԫ�أ��� 0 ��ʼ����
		15��$("tr:eq(1)")  //ƥ��һ����������ֵ��Ԫ��
		16��$("tr:gt(0)")  //ƥ�����д��ڸ�������ֵ��Ԫ��
		17��$("tr:lt(2)")  //ƥ������С�ڸ�������ֵ��Ԫ��
		18��$(":header").css("background", "#EEE");  //ƥ���� h1, h2, h3֮��ı���Ԫ��
		19��$("#run").click(function(){  $("div:not(:animated)").animate({ left: "+=20" }, 1000);  });ƥ����������ִ�ж���Ч����Ԫ��
		20��$("#login:focus");  //��ҳ����غ� id Ϊ 'login' ��Ԫ�����ý���:
	����
		21��$("div:contains('John')")  //�������а����ı���Ԫ��
		22��$("td:empty")  //ƥ�����в�������Ԫ�ػ����ı��Ŀ�Ԫ��
		23��$("div:has(p)").addClass("test");  //ƥ�京��ѡ������ƥ���Ԫ�ص�Ԫ��
		24��$("td:parent")  //�������к�����Ԫ�ػ����ı��� td Ԫ��
	�ɼ���
		25��$("tr:hidden")  //ƥ�����в��ɼ�Ԫ�أ�����typeΪhidden��Ԫ��
		26��$("tr:visible")  //ƥ�����еĿɼ�Ԫ��

	��Ԫ��
		34��$("ul li:nth-child(2)")  //��ÿ�� ul ���ҵ� 2 ��li
		35��$("ul li:first-child")   //��ÿ�� ul �в��ҵ�һ�� li
		36��$("ul li:last-child")    //��ÿ�� ul �в������һ�� li
		37��$("ul li:only-child")    //�� ul �в�����Ψһ��Ԫ�ص� li
	��
		38��$(":input")  //ƥ������ input, textarea, select �� button Ԫ��
		39��$(":text")  //ƥ�����еĵ����ı���
		40��$(":password")  //ƥ�����������
		41��$(":radio")  //ƥ�����е�ѡ��ť
		42��$(":checkbox")  //ƥ�����и�ѡ��
		43��$(":submit")  //ƥ�������ύ��ť
		44��$(":image")  //ƥ������ͼ����
		45��$(":reset")  //ƥ���������ð�ť
		46��$(":button")  //ƥ�����а�ť
		47��$(":file")  //ƥ�������ļ���
		48��$("tr:hidden")  //ƥ�����в��ɼ�Ԫ�أ�����typeΪhidden��Ԫ��
	����������
		49��$("input:enabled")  //�������п��õ�inputԪ��
		50��$("input:disabled")  //�������в����õ�inputԪ��
		51��$("input:checked")  //��������ѡ�еĸ�ѡ��Ԫ��
		52��$("select option:selected")  //��������ѡ�е�ѡ��Ԫ��
��������
	����
		1�� attr(name|properties|key,value|fn)
				$("img").attr("src");  //�����ĵ�������ͼ���src����ֵ��
				$("img").attr({ src: "test.jpg", alt: "Test Image" });  //Ϊ����ͼ������src��alt���ԡ�
				$("img").attr("src","test.jpg");  //Ϊ����ͼ������src���ԡ�
				$("img").attr("title", function() { return this.src });  //��src���Ե�ֵ����Ϊtitle���Ե�ֵ��
		2�� removeAttr(name)
				$("img").removeAttr("src");  //���ĵ���ͼ���src����ɾ��
		3�� prop(name|properties|key,value|fn)
				$("input[type='checkbox']").prop("checked");  //ѡ�и�ѡ��Ϊtrue��ûѡ��Ϊfalse
				$("input[type='checkbox']").prop({ disabled: true });  //����ҳ���ϵ����и�ѡ��
				
				$("input[type='checkbox']").prop("disabled", false);
				$("input[type='checkbox']").prop("checked", true);   //���ú�ѡ������ҳ���ϵĸ�ѡ��
				
				$("input[type='checkbox']").prop("checked", function( i, val ) { return !val; });  //ͨ����������������ҳ���ϵĸ�ѡ��ѡ�С�
		4�� removeProp(name)
				//����ɾ����.prop()�������õ����Լ�
	CSS��
		5��addClass(class|fn)
			$("p").addClass("selected1 selected2");  //Ϊƥ���Ԫ�ؼ��� 'selected' ��    Ϊÿ��ƥ���Ԫ�����ָ����������
		6��removeClass([class|fn])
			$("p").removeClass("selected");  //������ƥ���Ԫ����ɾ��ȫ������ָ�����ࡣ
		7��toggleClass(class|fn[,sw])  //������ڣ������ڣ���ɾ������ӣ�һ���ࡣ
	HTML����/�ı�/ֵ
		8��html([val|fn])
			$('p').html();  //����pԪ�ص����ݡ�
			$("p").html("Hello <b>world</b>!");  //�������� p Ԫ�ص�����
		9��text([val|fn])
			$('p').text();  //����pԪ�ص��ı����ݡ�
			$("p").text("Hello world!");  //�������� p Ԫ�ص��ı�����
			$("p").text(function(n){ return "��� p Ԫ�ص� index �ǣ�" + n; });
		10��val([val|fn|arr])
			$("input").val();  //��ȡ�ı����е�ֵ
			$("input").val("hello world!");  //�趨�ı����ֵ
�ġ��ĵ�����
	�ڲ�����
		1��$("p").append("<b>Hello</b>");  //��ÿ��ƥ���Ԫ���ڲ�׷�����ݡ�
		2��$("p").appendTo("div");  //�����ж���׷�ӵ�IDֵΪfoo��Ԫ���С�
		3��$("p").prepend("<b>Hello</b>");  //�����ж�����ǰ��һЩHTML��Ǵ��롣  ��ÿ��ƥ���Ԫ���ڲ�ǰ�����ݡ�
		4��$("p").prependTo("#foo");  //������ƥ���Ԫ��ǰ�õ���һ����ָ����Ԫ��Ԫ�ؼ�����
	�ⲿ����
		5��$("p").after("<b>Hello</b>");  //��ÿ��ƥ���Ԫ��֮��������ݡ�
		6��$("p").before("<b>Hello</b>");  //��ÿ��ƥ���Ԫ��֮ǰ�������ݡ�
		7��$("p").insertAfter("#foo");  //�����ж�����뵽һ��Ԫ��֮���� $("#foo").after("p")��ͬ
		8��$("p").insertBefore("#foo");  //������ƥ���Ԫ�ز��뵽��һ����ָ����Ԫ��Ԫ�ؼ��ϵ�ǰ�档
	����
		9�� $("p").wrap("<div class='wrap'></div>");  
			$("p").wrap(document.getElementById('content'));//������ƥ���Ԫ��������Ԫ�صĽṹ����ǰ���������
		10��$("p").unwrap()  //����������Ƴ�Ԫ�صĸ�Ԫ�ء����ܿ���ȡ�� .wrap()������Ч����ƥ���Ԫ�أ��Լ����ǵ�ͬ��Ԫ�أ�����DOM�ṹ���滻���ǵĸ�Ԫ�ء�
		11��$("p").wrapAll("<div></div>");  //������ƥ���Ԫ���õ���Ԫ�ذ�������
		12��$("p").wrapInner("<b></b>");  //�����ж����ڵ�ÿ�������ݼӴ�    ��ÿһ��ƥ���Ԫ�ص�������(�����ı��ڵ�)��һ��HTML�ṹ��������
	�滻
		13��$("p").replaceWith("<b>Paragraph. </b>");  //������ƥ���Ԫ���滻��ָ����HTML��DOMԪ��   �����еĶ������滻�ɼӴֵı�ǡ�
		14��$("<b>Paragraph. </b>").replaceAll("p");  //�����еĶ������滻�ɼӴֱ��
	ɾ��
		15��$("p").empty();  //ɾ��ƥ���Ԫ�ؼ��������е��ӽڵ㡣
		16��$("p").remove();  //��DOM��ɾ������ƥ���Ԫ��
		17��$("p").detach();              //��DOM��ɾ������ƥ���Ԫ�ء�
			$("p").detach(".hello");      //��remove()��ͬ���ǣ����а󶨵��¼������ӵ����ݵȶ��ᱣ��������
	����
	18��$("b").clone().prependTo("p");  //��¡����bԪ�أ���ѡ����Щ��¡�ĸ�������Ȼ������ǰ�õ����ж����С�
�塢CSS
�����¼�
�ߡ�Ч��
�ˡ�AJAX_jQuery


$(function(){//
			
	// ����onclick�¼�������			
	$("input[name=privilegeIds]").click(function(){
		// ��ѡ�л�ȡ��ĳ��Ȩ��ʱ��ͬʱҲѡ�л�ȡ�����е��¼�Ȩ��
		$(this).siblings("ul").find("input").attr("checked", this.checked);

		// ��ѡ��ĳ��Ȩ��ʱ��Ӧͬʱѡ������ֱϵ�ϵ�Ȩ�ޡ�
		if(this.checked == true){ // ����ֱ��дΪ if(this.checked){..}
			$(this).parents("li").children("input[name=privilegeIds]").attr("checked", true);
		}
		
		// ��ȡ��ĳ��Ȩ��ʱ�����ͬ����Ȩ�޶�û��ѡ�񣬾�Ҳȡ���ϼ�Ȩ��
		else{
			if( $(this).parent().siblings("li").children("input:checked").size() == 0 ){
				$(this).parent().parent().siblings("input").attr("checked", false);
			}
		}
		
	});
});