һ��������������

	number(����,������,����) 

	string(js���Ե�ͻ��,û��char����.)

	boolean

	null  (������ʾ�����������͵�ռλ��.ͨ��������Ϊ��ֵ.)var person = null;

	undefined  (��null����������ֵ,�ǵ���������һ������,) 
			//1.û�и��ñ�����ʼ��ֵ,��ôϵͳ��Ĭ�ϸ�ֵΪundefined
			//2.������û�з���ֵ,��ôĬ�Ϸ���undefined
			//3.array��û��ʼ��

	ԭʼ�������� �жϷ�:
			typeof ==> �����ж�һ������������ԭʼ���͵�.

����ϸ�ڣ�

	***ʹ��var�벻ʹ��var�������ں����У�ʹ��varΪ�ֲ�������ʹ��varΪȫ�ֱ���

	һԪ�ӷ�,����
		var a = +1;
		var b = -1;
		��js�еĸ߼�Ӧ��.
		var c = +"1";  //����д���ڽ�������ת��
		var d = +"abc"; // ����д��ת��ʧ��,����number�е�����ֵ NaN.

	Boolean ����� ! && ||
		js���Զ�����ת��.
			//ת������ (�ص�)
			//string ==>  ""==>ת��Ϊfalse ������Ϊtrue;
			//number ==>  ����NaN,+0��-0.������ת��Ϊtrue.
			//null ==>  false
			//undefined ==> false
		//NaN����:
			//NaN������κ�boolean���㷵��ֵ����false. ����!=
		//��Ϊundefined��null��������,���� 
			alert(undefined == null);// true

	�Ƚ������
		alert(11>3);//true
		//����������� , һ��������,һ������������ʱ, �������ͻ��Զ�����������ת��
		alert("11">3);// true
		alert(11>"3");//true
		//�ַ����ڽ��бȽ�ʱ ,������: �Ƚ����ַ�asc��. ���һ��,�Ƚϵ�2λ...
		alert("11">"3");// false
		alert("11">"1");// true
		alert("abc">11);//false

	���������  == != ===
		ȫ����: === ==> �Ƚ�ʱ��������.

�����������

		js����for(var xxx in xxx) ���. ==> �õĺ���,�����������������.
		
�ġ�Object��ECMAScript�еĶ���
	1> ֪���������ж���ĳ���. 
	2> toString��ӡ����������

�塢Function����
	1> Function�Ĵ���
	 ��ʽ1:var fun1 = new Function("a","b","alert(a+b);");
	 ��ʽ2:var fun2 = function (a,b){alert(a+b);}
	 ��ʽ3:function fun3(a,b){alert(a+b)}

	2>Function�ĵ��� ==> js�к����ĵ���ֻ����������.
		����ʱ���ö���arguments
			arguments���� ���������ڼ�ʵ�ʲ����б�.
			arguments.length ==> ʵ�ʲ�������
			arguments[0] ==> ��һ������.
		Ӧ��: arguments ʵ�ֺ���������.

	3> �����ķ���
		1>�������û����ʾָ������ֵ ��ô��������ֵΪundefined.
		2>ʹ��return �ؼ���,��������
		3>return �ؼ���,��js��Ҳ������Ϊ�����������еĹ���.
		4>void�������Ӧ��.

����String Number Boolean
	
		α����: string number boolean ��3��ԭʼ���Ϳ��Կ�����α����, ��ֱ�ӵ��ð�װ����ķ���������.


�ߡ�String����
	����
		length
	����
		//1 û�õķ���
		alert(str1.big());
		alert(str1.sub()); 
		alert(str1.bold());
	2 ��Ҫ�ķ���
		1> indexOf
		2> lastIndexOf
		3> charAt 
		alert(str1.charAt(0));//a
		4> charCodeAt ���������ַ���asc��
		alert(str1.charCodeAt(0));//97
		5> subString 
		alert(str1.substring(0, 1));//a 
		6> slice ֧�ָ���. ��������.
		alert(str1.slice(0, -1));//a

	3 �������ϵķ���(��������������.)
		1 ���췽��
			//����1 �����ַ��� ,����2 ƥ��ģʽ
			//�û������� ����ĸ��ͷ,������6��10λ֮��.
			//ƥ��ģʽ������ 
				//"i": ���Դ�Сд. ignoredCase
				//"g": ȫ��ƥ�� global
			var reg1 = new RegExp("^[a-zA-Z][a-zA-Z_0-9]{5,9}$","g");
			var reg2 = /^[a-zA-Z][a-zA-Z_0-9]{5,9}$/g;

		2 ����
			//test���� ==> �����ַ����������Ƿ�ƥ��.
			var username = "a3456";
			//alert(reg1.test(username));//true
				
			//��String�����ϵ�4������
			var str = "hello world";
			//split �и��ַ���
			alert(str.split(/o/g));
			//replace �����滻
			alert(str.replace(/o/g, "haha"));
			//search ֻ���ҵ�һ�����ֵ�λ��. �����Ҫ���ҵ�n�����ֵ�λ��ʹ��exec����.
			alert(str.search(/o/g));
			//match ==> �ҵ��ַ����з���������ʽ�Ĳ��ֲ�����.
			alert(str.match(/o/g));

�ˡ�Global ����

	encodeURI	����utf-8����
	decodeURI	����utf-8����

	encodeURIComponent	������Ҳ����ת��
	decodeURIComponent	����

	escape
	unescape//���루��ʱ��

	isNaN	�ж��Ƿ���NaN

	parseInt	ת��������
	parseFloat	ת���ɸ�����


�š�Array ����
	1.������ʽ
		1>������ʽ1 ����һ�����鲢��ʼ��ֵ
			var arr1 = ["abc",2,true,null,undefined,new Object()]; 
		2>������ʽ2 ͬ��ʽ1
			var arr2 = new Array(1,2,3);
		3>������ʽ3 ==> ����һ������Ϊ3������. ����Array�Ĺ��캯��,���ֻ��һ������,�����������������.��ô���������������ĳ�ʼ������.
			var arr3 = new Array(3);
	2.����
		length ==> ����ĳ���

	3.js��������ص�:
		1.js�е�����,��������.
		2.����ĳ��Ȳ��ǹ̶���.�õ�����,���ж೤.

	4.����
		1> join����==> �������е�ÿ��Ԫ��������������һ���ַ���.�����������ӷ�.(Ĭ�����ӷ���",")
		   join�����ĸ߼�Ӧ��:ƴ���ַ�����StringBuilder������

		2> push/pop ==> ģ��ջ�Ľṹ.

		3> shift/unshift==> ģ����еĽṹ

		4> reverse���� ==> �������е�Ԫ��˳����

		5> sort���� ==> ����ķ�����Ĭ���ǰ��ַ�����������. 
						����Ƚ�����function abc(a,b){return a-b;}�Բ�������ʽ����sort����

ʮ��
	ECMAScript�жԶ���ķ���
			���ض���
				�ڽ����� ==> ����Ҫ����ʵ��.ֱ��ʹ�� Global  Math
			�������� ==> DOM BOM ������.

ʮһ��js�Զ������
	1��function People(name,age){
			this.name = name;
			this.age = age;
			this.setName = function(name){this.name = name};
			this.getName = function(){return this.name};
		}
		var p = new People("С��", 23);
		for(x in p){
			document.write(x+"="+p[x]);
			}
	2��function People(){
			
		}
	   var p = new People();
	   p.name = "С��";
	   p.age = 23;
	   p.setName = function(name){this.name = name;};
	   p.getName = function(){return this.name};
	   for(x in p){
			document.write(x+"="+p[x]);
			}
	3��var = {
				"name" : "С��",
				"age" : 23
				}

ʮ�������ƿռ�

	(function($) {
		$.namespace = function(namespaceString) {
			var temp = [];
			var array = namespaceString.split(".");
			for (var i = 0; i < array.length; i++) {
				temp.push(array[i]);
				eval("window." + temp.join(".") + "={}")
			}
		}
	})($);


ʮ����prototype
	1����������ӵ��jsonû��

	2��obj.prototype={} 	//һ���յ�json����

	3��new�ᴴ��һ����prototype��ͬ����

	4��ֻ��new���Ķ������ʹ��prototype�����ԣ�����ֱ�ӵ��ò���

	5��b.prototype = a.prototype;�����ô���

ʮ�ġ���д��
	function Student(){}

	Student.prototype.setName(name){
		this.name = name;
	}
	Student.prototype.setAge(age){
		this.age = age;
	}
	Student.prototype.getName(){
		return this.name;
	}
	Student.prototype.getAge(){
		return this.age;
	}


ʮ�塢�̳�
	1��
		subStudent.prototype = Student.prototype;
		subStudent.prototype = new Student();
	2��
		function extends(json){
			var F = function(){}
			for(var i in json){
				F.prototype[i] = json[i];
			}
			return F;
		}
	3��

ʮ����
	ajaxJSON.callback(fn); 	//thisΪajaxJSON����
	ajaxJSON.callback.call(window,fn); 	//thisΪwindow����

	Person.apply(Student);	//�൱��Student.Person()
	//�Դ˸ı�this��ָ��


ʮ�ߡ��հ�
	�ں����ڲ�����ĺ����ں����ⲿʹ��
	(function(param){//�β�

	})(param);//ʵ��










==============================================================================================

֪ͨ������޻���
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="0" />



if(window.parent != window){window.parent.location.reload(true);}