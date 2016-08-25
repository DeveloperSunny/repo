Lesson 1

һ��struts2�����ļ�
	1������web.xml
		<filter>
			<filter-name>struts2</filter-name>
			<filter-class>org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter</filter-class>
		</filter>

		<filter-mapping>
			<filter-name>struts2</filter-name>
			<url-pattern>/*</url-pattern>
		</filter-mapping>
	2��package�������
		<package name="itcast" namespace="/test" extends="struts-default">
			<!--
			pageckage:���������Ԫ��
				name�������С��������ƣ������ļ��б��뱣֤Ψһ��
				namespace���ð������ƿռ䣬һ������"/"��ͷ
				extends:���ɵĸ��������ơ�struts-default���Ƶİ���struts2����Ѿ������õ�һ����������struts2-core.jar����һ��struts-default.xml�У�
				abstract���Ƿ��ǳ������û���κ�actionԪ�صİ����ǳ������java�ࣩ
			-->
			<action name="helloworld" class="cn.itcast.action.HelloWorldAction" method="sayHello">
				<!--
				action:����һ��������
					name��ͬ���б���Ψһ������������
					class:�������JavaBean����ȫ��
					method��JavaBean�еĶ�Ӧ���������������������ص��ǣ�public String ������(){}��
				-->
					<result name="success">/1.jsp</result>
					<!--
					result:�������
						name:�����������ص��ַ���
						�������ݣ�View�ľ����ַ��
					-->
			</action>
		</package>
	3��action���Ƶ�����˳��
		����helloworld�����ķ�ʽ��http://localhost:8080/struts2day01/test/helloworld   Ӧ������/�������ƿռ�/����������
			Ĭ������£����ʶ�����helloworld������ֱ��helloworld������helloworld.action
		
			http://localhost:8080/struts2day01/test/a/b/c/helloworld
				/test/a/b/c:���ƿռ�
				helloworld����������
				
				����˳�����ƿռ�
							/test/a/b/c  û��helloworld
							/test/a/b	 û��helloworld
							/test/a      û��helloworld
							/test        ���ˣ�����ִ��
	4��struts.xml�����ļ���д��û����ʾ�����⣿
		����һ����������
		��������
			1������http://struts.apache.org/dtds/struts-2.1.7.dtd��ַ
			2��Eclipse��window��preferences������XML Catelog
			3�����add��ť
				Location��dtd�ļ���·��
				Key Type:URI
				Key:http://struts.apache.org/dtds/struts-2.1.7.dtd
	5��Struts�����ļ��еĸ���Ĭ��ֵ��
		result name:
			class:Ĭ��ֵ��com.opensymphony.xwork2.ActionSupport
					������ 	SUCCESS     success
							NONE		none
							ERROR		error
							INPUT		input
							LOGIN		login
			method��Ĭ��ֵ��public String execute(){}
			
		result type
		��ע��type��ȡֵ�Ƕ���õģ�����Ϲд�ġ���struts-default.xml�е�package���ж��壩
			dispatcher����ͨ��ת����ĳ��ҳ��
			chain����ͨ��ץ����ĳ����������
			redirect���ض���һ��ҳ��
			redirectAction:�ض���һ����������
			plainText���Դ��ı�����ʽ���JSP����
			
		resultԪ�ص�д����
			��ʽһ��
				<result type="chain" name="success">a2</result>
			��ʽ����
				<result type="chain" name="success">
					<param name="actionName">a2</param><!--name��Ӧ��chain�Ĵ������е�setActionName()����-->
				</result>
				
			ע�⣺���Ҫת�����������һ�����ƿռ�Ķ�������ôֻ��ʹ�÷�ʽ��
				<package name="p1" namespace="/namespace1" extends="struts-default">
					<action name="a2">
						<result type="dispatcher" name="success">/3.jsp</result>
					</action>
				</package>
				<package name="p2" namespace="/namespace2" extends="struts-default">
					<action name="a1">
						<result type="chain" name="success">
							<param name="namespace">/namespace1</param>
							<param name="actionName">a2</param>
						</result>
					</action>
				</package>
����������⣺    

		��1��struts.i18n.encoding=UTF-8
			   ָ��Ĭ�ϱ���    
			�÷�: <constant name="struts.i18n.encoding" value="UTF-8" />
		 
		��2��struts.action.extension 
		ָ��Struts 2����������׺��Ĭ��ֵ��action��������ƥ��*.action��������Struts2��������û���Ҫָ����������׺��������׺֮����Ӣ�Ķ��ţ�,������
			 �÷�:<constant name="struts.action.extension" value="do" />  ����
			 <constant name="struts.action.extension" value="do,action" />
		  
		��3��struts.configuration.xml.reload
			  ��struts�������ļ��޸ĺ�,ϵͳ�Ƿ��Զ����¼��ظ��ļ�,Ĭ��ֵΪfalse(����������ʹ��),�����׶���ô� 
			�÷�:<constant name="struts.configuration.xml.reload" value="true" /> 
		 
		��4��struts.devMode  
				 ����ģʽ��ʹ��,Ĭ��Ϊfalse�����ó�true���������Դ�ӡ������ϸ�Ĵ�����Ϣ�������ڲ��ҵ������ڿ�����ʱ���鿪������Ŀ����֮��ĳ�false 
		<constant name="struts.devMode" value="true" />
		  
		��5��struts.multipart.parser
			  ������ָ������ MIME-type multipart/form-data���ļ��ϴ���ʽ�������ַ�ʽcos��pell ��jakarta;struts2Ĭ�ϲ��õ����ַ�ʽ���������ǰ���ַ�ʽ����Ҫȥ����������Ӧjar������ 
		   �÷��� <constant name="struts.multipart.parser" value="cos" />  
				 <constant name="struts.multipart.parser" value="pell" />  
				 <constant name="struts.multipart.parser" value="jakarta" />
		  
		��6��struts.multipart.saveDir
			 ָ���ϴ��ļ�ʱ����ʱĿ¼��Ĭ��ʹ�� javax.servlet.context.tempdir 
		�÷���<constant name="struts.multipart.saveDir" value="/tmpuploadfiles" />  
			 
		��7��struts.multipart.maxSize
				  ������ָ��Struts 2�ļ��ϴ������������������������ֽ��� Ĭ��Ϊ2M 
			�÷���<constant name="struts.multipart.maxSize" value="2097152" />  
		 
		��8��struts.ui.theme
			   Ĭ�ϵ���ͼ���⣬����Ϊsimple,xhtml��ajax
			�÷���<constant name="struts.ui.theme" value="simple" />  
			
		��9��struts.serve.static.browserCache
			  ����������Ƿ񻺴澲̬����,Ĭ��ֵΪtrue(����������ʹ��),�����׶���ùر� 
			�÷�:<constant name="struts.serve.static.browserCache" value="false" />  
		��10��struts.enable.SlashesInActionNames 
		�����Ƿ������action��ʹ��б�ߣ�Ĭ��Ϊfalse�����ԣ�����Ϊtrue������ʹ�� 
			�÷�:<constant name="struts.enable.SlashesInActionNames" value="true" />  
		��11��struts.enable.DynamicMethodInvocation 
			�����Ƿ�֧�ֶ�̬�������ã�trueΪ֧�֣�false��֧��. 
			�÷�:<constant name="struts.enable.DynamicMethodInvocation" value="true" /> 
Lesson 2

	action���̰߳�ȫ��
	
һ���Զ�������ת����
	1����дһ���࣬�̳�com.opensymphony.xwork2.conversion.impl.DefaultTypeConverter
	2�����ǵ����е�public Object convertValue(Map<String, Object> context, Object value,Class toType)
			context:OGNL���ʽ��������
			value:ʵ�ʵ�ֵ���û�����Ķ����ַ�����������һ��String���顣
			toType��Ŀ������
	public class DateConvertor extends DefaultTypeConverter {
		/*
		 context:ognl���ʽ��������
		 value���û������ֵ�� ��������ʱ������ģ���е����ԡ��û������ֵ��String����
		 toType:Ŀ������
		 */
		@Override
		public Object convertValue(Map<String, Object> context, Object value,
				Class toType) {
			DateFormat df = new SimpleDateFormat("yyyy/MM/dd");
			if(toType==Date.class){
				//2013/05/31----->java.util.Date ��������ʱ
				String strValue = ((String[])value)[0];
				try {
					return df.parse(strValue);
				} catch (ParseException e) {
					throw new RuntimeException(e);
				}
			}else{
				//java.util.Date----->2013/05/31 ��ȡ����ʱ
				Date dValue = (Date)value;
				return df.format(dValue);
			}
		}
	}
	3��ע������ת����
		3.1�ֲ�����ת������ֻ�Ե�ǰ��Action��Ч
		�����������ڶ�������ͬ�İ��У�����һ�������ǡ���������-conversion.properties���������ļ���
			�ļ��������������ݣ�Ҫ��֤���ֶ�=��֤������ȫ��
					birthday=cn.itcast.convertor.DateConvertor
		3.2ȫ������ת�����������е�Action����Ч
		������������WEB-INF/classesĿ¼�£�����һ������Ϊ"xwork-conversion.properties"�������ļ���
			�ļ��������������ݣ�Ŀ������ȫ��=��֤������ȫ��
					java.util.Date=cn.itcast.convertor.DateConvertor
�����ļ��ϴ�
	image
	imageFileName
	imageContentType
	enctype="multipart/form-data"
	
	struts.multipart.saveDir
		 ָ���ϴ��ļ�ʱ����ʱĿ¼��Ĭ��ʹ�� javax.servlet.context.tempdir 
	�÷���<constant name="struts.multipart.saveDir" value="/tmpuploadfiles" />  
			 
	struts.multipart.maxSize
			  ������ָ��Struts 2�ļ��ϴ������������������������ֽ��� Ĭ��Ϊ2M 
	�÷���<constant name="struts.multipart.maxSize" value="2097152" />  
�����Զ���������
	1����дһ���࣬ʵ��com.opensymphony.xwork2.interceptor.Interceptor
	2����Ҫʵ��public String intercept(ActionInvocation invocation) throws Exception{}����
		�÷����ķ���ֵ���൱�ڶ����ķ���ֵ
		���������String result = invocation.invoke();�õ��˶�����ķ��ص�ֵ��
	public String intercept(ActionInvocation invocation) throws Exception {
		//�ж��û��Ƿ��¼
		HttpSession session = ServletActionContext.getRequest().getSession();
		Object obj = session.getAttribute("user");
		if(obj==null){
			return "login";
		}else{
			return invocation.invoke();//���ö�������
		}
	}
	3������������ú�һ��Ҫ�������ļ��н���ע�᣺
		<interceptors> ֻ�Ƕ�������������û�������� 
			<interceptor name="permissionInterceptor" class="cn.itcast.interceptor.PermissionInterceptor"></interceptor>
		</interceptors>
	4�������ļ��еĶ�����Ҫͨ��
		<interceptor-ref name="permissionInterceptor"></interceptor-ref>ʹ�ø�������
	ע�⣺һ��������ʹ�����Զ��������������ôĬ�ϵľͲ��������ˡ�һ��Ӧ�ò������µ�������
		<interceptor-stack name="mydefaultstack">-->
				<interceptor-ref name="defaultStack"></interceptor-ref>
				<interceptor-ref name="permissionInterceptor"></interceptor-ref
		</interceptor-stack>
		
	��������඼Ҫʹ�õĻ�������ͨ��package��������ϡ�
�ġ��ļ�����
	private String contentType;
		private long contentLength;
		private String contentDisposition;
		private InputStream inputStream;
		

		public String download() throws Exception {

			//ȷ��������Ա������ֵ
			String str = URLEncoder.encode("������", "UTF-8");
			contentDisposition = "attachment;filename="+str+".txt";
			contentType = "text/plain";
			ServletContext servletContext = 
					ServletActionContext.getServletContext();
			String fileName = servletContext.getRealPath("/WEB-INF/files/������.txt");
			inputStream = new FileInputStream(fileName);
			contentLength = inputStream.available();
			
			return "download";
		}
		
		<action name="s_*" class="com.smallBug.action.StudentAction" method="{1}">
			<result type="stream" name="download">
				<param name="bufferSize">2048</param>
			</result>
		</action>


		��2��
			public String download(){
		try {
			//��ȡ�ļ�ID
			String fileID = elecUser.getFileID();
			//1��ʹ���ļ�ID����ѯ�û��ļ�����ȡ��·��path
			ElecUserFile elecUserFile = elecUserService.findUserFileByID(fileID);
			//·��path
			String path = ServletActionContext.getServletContext().getRealPath("")+elecUserFile.getFileURL();
			//�ļ�����
			String filename = elecUserFile.getFileName();
			//���Գ�������
			filename = new String(filename.getBytes("gbk"),"iso8859-1");
			request.setAttribute("filename", filename);
			
			//2��ʹ��·��path�����ҵ���Ӧ���ļ���ת����InputStream
			InputStream in = new FileInputStream(new File(path));
			//��ջ����InputStream����
			elecUser.setInputStream(in);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "download";
	}
	<result name="download" type="stream">
				<!-- <param name="contentType">image/jpeg</param> -->
			    <param name="inputName">inputStream</param>
			    <param name="contentDisposition">attachment;filename="${#request.filename}"</param>
			    <param name="bufferSize">1024</param>
			</result>
Lesson 3

һ���û�������֤
	1����̷�ʽ��
		�������е����з���������֤��
		
			���裺
			a��������̳�ActionSupport
			b�����ǵ���public void validate()����
			c����validate�����У���д������Ҫ��Ĵ����жϣ������ø����addFieldError(String fieldName,String errorMessage)
				���fieldError����Ŵ�����Ϣ��Map�����κε�Ԫ�أ�������֤��ͨ����������������ִ�С�
				Struts2��ܻ᷵�ص�name=input��result
			d����name=inputָ����ҳ����ʹ��struts2�ı�ǩ��ʾ������Ϣ��<s:fielderror fieldName=""/>
		
		��������ָ���ķ���������֤��
			��д������������ͬ
			
			��֤������д��Ҫ��
				public void validateXxx()   Xxx�������Ҫ��֤�Ķ���������������Ҫ�Ѷ���������������ĸ��Ϊ��д��
				
	
	2������XML�����ļ��ķ�ʽ��
		�������е����з���������֤��
			�ڶ�����İ��У�����һ������Ϊ������������-validation.xml ������Ҫ��֤�Ķ���������UserAction   UserAction-validation.xml
			�������£�
			<?xml version="1.0" encoding="UTF-8"?>
			<!DOCTYPE validators PUBLIC
					"-//OpenSymphony Group//XWork Validator 1.0.3//EN"
					"http://www.opensymphony.com/xwork/xwork-validator-1.0.3.dtd">
			<validators>
				<field name="username">
					<!-- ������֤�����Ƕ���õģ���xwork-core.jar com.opensymphony.xwork2.validator.validators���е�default.xml�ļ��� -->
					<field-validator type="requiredstring"><!-- ����Ϊnull����""�ַ�����Ĭ�ϻ�ȥ��ǰ��Ŀո� -->
						<message>�û�������Ϊ��</message>
					</field-validator>
				</field>
				<--�ڶ��ֵ��÷�ʽ-->
				<validator type="requiredstring">
					<param name="fieldName">username</param>
					<message>�û�������Ϊ�տ�</message>
				</validator>
			</validators>
		��������ָ���ķ���������֤��
			�����ļ���������д��һ��Ҫ��
					��������-�������������ļ��еĶ�������-validation.xml
					UserAction-user_add-validation.xml
					
		StudentAction-validation.xml
		
		
			<?xml version="1.0" encoding="UTF-8"?>
			 <!DOCTYPE validators PUBLIC
					"-//Apache Struts//XWork Validator 1.0.3//EN"
					"http://struts.apache.org/dtds/xwork-validator-1.0.3.dtd">
			<validators>
				<!-- <field name="name">
					<field-validator type="regex">
						<param name="regex"><![CDATA[\d+]]></param>
						<message>[aAbBcCdD][123][eEfFgG][456]</message>
					</field-validator>
				</field> -->
				<validator type="regex">
					<param name="fieldName">name</param>
					<param name="regex"><![CDATA[\d+]]></param>
					<message>[aAbBcCdD][123]------------------[eEfFgG][456]</message>
				</validator>
			</validators>
			
			
	3���Զ������XML����֤��
		a����дһ���࣬�̳�FieldValidatorSupport�ࡣ
		b����public void validate(Object object)��д�����֤�߼�
				������Ҫ��ľ���fieldErrors�з���Ϣ
				
				
				public class StrongPasswordValidator extends FieldValidatorSupport {

					public void validate(Object object) throws ValidationException {
						String fieldName = getFieldName();//ȡ���ֶ���
						String filedValue = (String)getFieldValue(fieldName, object);//ȡ���û�����ĵ�ǰ�ֶε�ֵ
						if(!isPasswordStrong(filedValue)){
							addFieldError(fieldName, object);
						}
					}
					private static final String GROUP1 = "abcdefghijklmnopqrstuvwxyz";
					private static final String GROUP2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					private static final String GROUP3 = "0123456789";
					protected boolean isPasswordStrong(String password) {
						boolean ok1 = false;
						boolean ok2 = false;
						boolean ok3 = false;
						int length = password.length();
						for(int i=0;i<length;i++){
							if(ok1&&ok2&&ok3)
								break;
							String character = password.substring(i,i+1);
							if(GROUP1.contains(character)){
								ok1 = true;
								continue;
							}
							if(GROUP2.contains(character)){
								ok2 = true;
								continue;
							}
							if(GROUP3.contains(character)){
								ok3 = true;
								continue;
							}
						}
						return ok1&&ok2&&ok3;
					}
				}
		c��һ��ע�������֤������ʹ��
				��WEB-INF/classesĿ¼�½���һ������Ϊvalidators.xml�������ļ����������£�
				<validators>
					<validator name="strongpassword" class="cn.itcast.validators.StrongPasswordValidator"/>
				</validators>
		d���պ�Ϳ�����ʹ��Struts2�ṩ��16����֤����ʽȥʹ���ˡ�
		
����Struts2����i18n��֧��
	ȫ����Դ�ļ�/����Χ��Դ�ļ�/���������Դ�ļ�
	ȫ����Դ�ļ����ŵ�WEB-INF/classesĿ¼��
	����Χ��Դ�ļ���������Java���еİ��µĶ�����ġ�
			ȡ����package_����_����.properties
	
	���������Դ�ļ�:�ŵ��붯������ͬ�İ���
			ȡ������������_����_����.properties
			
			
	jsp����ζ�ȡ���ʻ�����Ϣ
	����������ζ�ȡ���ʻ�����Ϣ
����OGNL���ʽ:
	OGNL�Ǵ�ActionContext�л�ȡ���ݵġ�
	
	ActionContext�Ľṹ��
		ValueStack��
			List����������ڴ˴���ȡ�����ValueStack�е�root�Ķ�������ԣ�ֱ��д����
			
			�������������еĶ���Ҫʹ��#+(��Χ)session
		application��ServletContext�е��Ǹ�Map
		session��HttpSession�е��Ǹ�Map
		request��ServletRequest�е��Ǹ�Map
		parameters������������Ǹ�Map������ͬEL���ʽ��paramValues���ö���
		attr���൱��PageContext��findAttribute������${username}
		
		<s:if test="'aaa' not in {'aa','bb'}">
			����
		</s:if>
	С���ɣ���ҳ����ʹ��<s:debug/>�鿴�������еĶ���
	<s:select list="#request.list" id="keyword" name="keyword" 
			  listKey="keyword" listValue="keyword"
			  headerKey="jerrynew" headerValue=""
		  cssClass="bg" cssStyle="width:180px" onchange="changetype()">
	</s:select>
	
�ġ�Struts2�г��õı�ǩ
	Control Tags
		if
		elseif				test   type:boolean
		else
					<s:if test="%{false}">
						<div>Will Not Be Executed</div>
					</s:if>
					<s:elseif test="%{true}">
						<div>Will Be Executed</div>
					</s:elseif>
					<s:else>
						<div>Will Not Be Executed</div>
					</s:else>
		append
				<s:append var="myAppendIterator">
					 <s:param value="%{myList1}" />
					 <s:param value="%{myList2}" />
					 <s:param value="%{myList3}" />
				</s:append>
				<s:iterator value="%{#myAppendIterator}">
					 <s:property />
				</s:iterator>
		generator
			  <s:generator val="%{'aaa,bb1b,ccc,d1dd,eee'}" separator="1" var="gft" count="2" >
				 <s:iterator>
					 <s:property /><br/>
				 </s:iterator>
			  </s:generator>
		iterator
		merage
		sort
		subset
		
	Data Tags
		a
		action
		bean
		date
		debug
		i18n
		include
		param
		property
		push
		set
		text
		url:<s:url action="student_url" var="u"></s:url>
			<s:a href="%{#u}">url Test</s:a>
�塢��ֹ���ظ��ύ
����CURD������
�ߡ����ʹ��Struts�Ĳ������ǣ��������������ϣ�JFreeChart����
�ˡ���ͨʵ���CRUDת��

	delete -------redirectAction-----> toList
	add-----------redirectAction-----> toList
	update--------redirectAction-----> toList
	
	addUI---------------dispatcher------------------->saveUI
	updateUI---------------dispatcher---------------->saveUI
	
	list------------------------------dispatcher------------------------->list.jsp
	