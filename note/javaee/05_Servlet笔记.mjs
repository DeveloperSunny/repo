һ��Servlet����
		1��Servlet��SUN��˾�ƶ���һ�׿�����̬��ҳ�ļ�����
		2��JavaEE��ص��࣬����һ�㶼����javax��ͷ
		
*****������д��һ��Servlet����Ӧ��
		1������һ����׼��JavaWebӦ��Ŀ¼
			FirstApp:
				WEB-INF:
					classes��
					lib:
					web.xml
		2������classesĿ¼������һ���ı��ļ������е�Servlet�඼�����ӻ�ֱ��ʵ��javax.servlet.Servlet�ӿڣ�
			package cn.itcast.servlet;

			import java.io.*;
			import javax.servlet.*;

			public class FirstServlet extends GenericServlet{
				public void service(ServletRequest req,
										 ServletResponse res)
								  throws ServletException,
										 java.io.IOException{
					OutputStream out = res.getOutputStream();
					out.write("Hello Servlet".getBytes());
					out.close();
										 
				}

			}
		3������classesĿ¼����FirstServlet���б��룺
			ǰ�᣺��servlet-api.jar���뵽��Ĺ���·����.set classpath=%classpath%;C:\apache-tomcat-6.0.35\lib\servlet-api.jar
			ִ�У�javac -d . FirsetServlet.java
		4���޸�web.xml����FirsetServlet����url��ַӳ�䣬�������£�
			<?xml version="1.0" encoding="ISO-8859-1"?>
			<web-app xmlns="http://java.sun.com/xml/ns/javaee"
			   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
			   xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
			   version="2.5"> 
				<servlet>
					<servlet-name>FirstServlet</servlet-name>
					<servlet-class>cn.itcast.servlet.FirstServlet</servlet-class>
						  
				</servlet>
				<servlet-mapping>
					<servlet-name>FirstServlet</servlet-name>
					<url-pattern>/hello</url-pattern>
				</servlet-mapping>
			</web-app>
		5�������Ӧ�ò���Tomcat�С�
		6�����ʵ�ַ��http://localhost:8080/FirstApp/hello�Ϳ��Կ���д��Servlet����������ˡ�
		
*****����Servlet����������
			��������Ҫ����service����Ϊ�ͻ����з���
			1��Servlet�ӿ��еĳ��÷�����
					public void init(ServletConfig config)����ʼ����Servlet�౻ʵ�������ִ�У���ִ��һ�Ρ����������е���
					public void destroy()������Servlet�������������е���
			���ڴ���һ��Servletֻ��һ��ʵ������Բ�ͬ���û������������ö��̵߳Ļ��Ƶ���service�����ġ�
			
			Servletʵ������ͳ�ʼ��������Ĭ������£�ֻ�е�һ�η���ʱ��ִ�У���ִֻ��һ�Ρ�
			
			ϣ����Ӧ�ñ�Tomcat������Ϻ󣨴�ʱ��û���κ��˷��ʣ�����ʵ��������ɳ�ʼ��Servlet�Ĺ�����
			<servlet>tartup>      
			</servlet>
				<servlet-name>FirstServlet</servlet-name>
				<servlet-class>cn.itcast.servlet.FirstServlet</servlet-class>
				<load-on-startup>2</load-on-startup>
			
*****�ġ�Servlet�ĺ����ǣ�ģ�巽�����ģʽ��
		��������HTTPЭ���йص�Servlet��һ��ѡ�񼯳�javax.servlet.http.HttpServlet.
		��Ҫ�������е�service(ServletRequest req,ServletResponse resp)��������Ӧ�ø��ǵ���doXXX������
		doXXX���Ǹ����������ʽ���ġ�
		
		
		HttpServlet�е�service�����ǵ��͵�ģ�巽�����ģʽ�ľ���Ӧ�á�
		
**	�塢Servlet����
		1��һ��Servlet���Ա�ӳ�䵽���URL��ַ��
		2��URL��ַӳ�仹֧��ͨ���*
			��ʽһ����*��ͷ������չ����β������ <url-pattern>*.do</url-pattern>
			��ʽ������/ǰ׺��ͷ����*��β�� ����<url-pattern>/action/*</url-pattern>
		3�����Servletʹ��ͨ���ʱ���п����ж�
					��"/"��ͷ����ʽ����Ҫ��"*"��ͷ����ʽһ�����ȼ���
					����"/"��ͷ�������ж��ƥ�䣬����ƥ���
		4�����һ��Servlet��ӳ��Ϊһ��"/",�ͳ�֮ΪĬ�ϵ�Servlet����������û��ӳ��·����URL�������Ӧ��
			�����õ�Servlet������ִ����һ����
			ԭ�����ȼ�
					����ƥ��
					
Lesson 2


****һ��Servlet�е��̰߳�ȫ����
	��Servlet�ж����������������Ҫ�󣬾���ʹ�þֲ�������
	�������Ҫʵ������ʱ��Ӧ��ͬ��������ͬ������龡����Χ�ٵĴ��롣
	
***����Servlet�����ö���
		ServletConfig����������������
			���ã�������Servlet�����еĲ�����Ϣ��
			������web.xml�еĲ����������£�
				<servlet>
					<servlet-name>ServletDemo2</servlet-name>
					<servlet-class>cn.itcast.servlet.ServletDemo2</servlet-class>
					<init-param><!-- aaa=bbb -->
						<param-name>aaa</param-name>
						<param-value>bbb</param-value>
					</init-param>
					<init-param>
						<param-name>xxx</param-name>
						<param-value>yyy</param-value>
					</init-param>
				  </servlet>
*****����ServletContext���
	1����Ӧ�ñ�����������ʱ�ʹ���ServletContext�����ʵ����ÿһ��JavaWebӦ�ö���Ψһ��һ��ServletContext����
	���ʹ����ŵ�ǰ��Ӧ�á�
	2����εõ�ServletContext����ServletConfig.getServletContext();
	3����ʲô�ã�
		3.1ServletContext������һ���������������˵���ڲ�ά����һ��Map<String,Object>��
			    Object getAttribute(String name):�������ƻ�ȡ�󶨵Ķ���
				Enumeration getAttributeNames() :��ȡServletContext���е���������
				void removeAttribute(String name):���������Ƴ�����
				void setAttribute(String name,Object value):��ӻ��޸Ķ���
		3.2ʵ�ֶ��Servlet֮������ݹ���
		3.3��ȡWEBӦ�õĳ�ʼ��������Ӧ�õ�ȫ�ֲ�����
			��web.xml�ĸ�Ԫ��������һ����Ϣ��
			<context-param>
				<param-name>encoding</param-name>
				<param-value>UTF-8</param-value>
			</context-param>
			��Щ��������������Ӧ�õ�ȫ�ֲ�����ʹ��ServletContext����ȡ��
		3.4��ȡ��Դ�ļ������ַ�ʽ��
			����ServletContext.getRealPath():
					�ص㣺��ȡӦ�����κ��ļ���ֻ����Web��������
			����ResourceBundle��ȡ�����ļ�
					�ص㣺�������ڷ�web�����¡�����ֻ�ܶ�ȡ��·���е�properties�ļ�
			�������������ȡ�����ļ���רҵ��
					�ص㣺�������ڷ�web�����¡����Զ�ȡ��·���µ��κ��ļ���
					
			���룺ServletAPI�е���Ҫ�ӿڻ���ĺ�����ͼ

			Tips:����MyEclipse���ɵ�Servlet��ģ�壨8.5��
			1���ر����MyEclipse
			2���ҵ�MyEclipse�İ�װĿ¼C:\Program Files\Genuitec
			3������*wizard*(com.genuitec.eclipse.wizards_8.5.0.me201003052220.jar)
			4���򿪣��ҵ�templates\Servlet.java,����ļ�����MyEclipse����Servlet��ģ�����
			5��Ū���������ñ��ݣ���ʼ�޸ġ�

**�ġ��������Ӧ�������
			HTTPЭ������������Ӧ���֡�
			HttpServletRequest�ʹ��������󲿷�
			HttpServletResponse�ʹ�������Ӧ����

			ѧ�õĹؼ���HTTPЭ�顣

*****�塢HttpServletResponse���
	5.1����������ݣ�
		�ֽ�����
			out.write("����".getBytes("UTF-8"));������
			����취��
				��ʽһ������������Ĳ鿴���루����ȡ��
				
				֪ͨ�������ʹ�õ����
				��ʽ����response.setHeader("Content-Type", "text/html;charset=UTF-8");
				��ʽ����response.getOutputStream().write("<meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>".getBytes("UTF-8"));
				*��ʽ�ģ�response.setContentType("text/html;charset=UTF-8");//��ʽ���������Ķ���һ����
				
		�ַ�����
			Servlet�е��ַ���Ĭ�ϲ�ISO-8859-1��SUN��Servlet�淶Ҫ��ģ�
			��θ������Ĭ�ϵı����أ�response.setCharacterEncoding("UTF-8");
			
			//��Ҫ����֪ͨ������ı���
			response.setCharacterEncoding("UTF-8");
			response.setHeader("Content-Type", "text/html;charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.write(s);//Ĭ�ϲ����ISO-8859-1���SUN��Servlet�淶Ҫ��ģ�
			
			
			���ַ��������������ʱ��response.setContentType("text/html;charset=UTF-8");
					���������ã�֪ͨ�ַ�����UTF-8�������
								֪ͨ�ͻ�����UTF-8������ʾ
			
			
	5.2���Ʋ�Ҫ����
	5.3���ƻ���ʱ��
	5.4��̬���������֤��ͼƬ
	5.5��ʱˢ��
	5.6�ļ����أ������ļ������ļ����أ�
	5.7HttpServletResponseϸ��:
		�ֽ������ַ�������ͬʱʹ�ã�����ġ�
		ͨ���ַ������ֽ�����������ݲ�����ֱ�Ӵ��������ġ����ǰ�����д��response����Ļ����еġ��������ӻ�����ȡ�����ݣ�����HTTPЭ�����Ӧ��ʽ������������
		�������õ�response�������û�������رգ�������������صġ�
		
Lesson 3

*****һ��HttpServletRequest���
		�����ſͻ��˵�����Ҫ�ͻ�����ϢֻҪ��������󼴿ɣ��ö���������������
		ѧϰ�ؼ���ʱ�̼�סHTTPЭ������󲿷ֵľ������ݡ�
	
		6.1���ü򵥷���
		6.2��ȡ������Ϣͷ
		6.3��ȡ�����������ʡ��
		6.4���ñ����ݵĻ�ȡ
		�����������ͣ�
			radio checkbox,��ʹ�����ж�Ӧ�������������һ����ѡ����ʲô���ݲ����������������ע���ָ���쳣��
			���ѡ�������е�һ��������������ǵ�value��ȡֵ�ύ����������
			���ѡ�������е�һ��������������û��valueȡֵ�����ύ����������ֵ��on.
		��������ı��룺
			�������ǰʹ��ʲô���룬����ʲô�����ύ���������<meta http-equiv="content-type" content="text/html; charset=UTF-8">
			
			request.setCharacterEncoding(����):֪ͨ���򣬿ͻ����ύ������ʹ�õı��롣����ֻ��POST����ʽ��Ч
			
			�����get�����ύ���ݣ��������ISO-8859-1
			
		Tips��Ŀǰ����POST�ύ��ʽ��
		
	6.5�����
		ServletRequestҲ��һ��������ڲ�ά����һ��Map<String,Object>��
			Object getAttribute(Stirng name):
			void setAttribute(String name,Object value):
			void removeAttribute(String name):
		
	6.6����ת�����ض���
		����ת��������RequestDispatcher
		��εõ�RequestDispatcher����
			��ʽһ��ServletContext.getRequestDispatcher(Ŀ����Դ��URI);
			��ʽ����ServletRequest.getRequestDispatcher(Ŀ����Դ��URI);
			����
				��ʽһ�е�Ŀ����Դ��URI������"/"��ͷ�����򱨴���"/"�ͱ�ʾ���ǵ�ǰӦ�ã�����·����ʾ����
				��ʽ���е�Ŀ����Դ��URI�����"/"��ͷ���ͱ�ʾ���ǵ�ǰӦ�ã�����·����ʾ�������������"/"��ͷ���ͱ�ʾ���·����
				
		
	���˽�ԭ��6.7ת�����ض���ϸ�ڣ�ʵ�ʿ�����֪��һ��ԭ��
		1������ת����1����Դ���ת����Ŀ�����ʱ�����������Դ�����������ݡ���ˣ��û�ֻ�ῴ��Ŀ����������ҳ������
						���ǣ���Ӧͷ��Ϣ�ǲ���յġ���forward����Դ�ļ���
					 2����Դ���ת����Ŀ�����ʱ�����������Դ������ͷ�����ݡ���ˣ��û��ῴ��Դ�����Ŀ����������ҳ������
						���ǣ���Ӧͷ��Ϣ����յġ���include����Դ�ļ�ͷ
		����ԭ�򣺲�Ҫ��ת��ǰ����ҳ��������ݣ�Ҳ��Ҫ�ر���������������ù���
	���˽�ԭ��6.8����������̬������
		��Դ���������Ŀ�����ʱ�����������Ŀ�������ͷ����ˣ�Դ������õ�ͷ����Ч��
					���ǣ���Ӧ����Ϣ�ǲ���յġ�
		����ԭ�򣺲�Ҫ��Ŀ�������������Ӧͷ���������ù���
*****�����Ự����
	1���Ự���̾ͺñȴ�绰��
	2��ѧϰ�ỰҪ�����������ʲô��
		�Ự�����е����ݱ��档
	
	����Cookie��HttpSession���
		Cookie�ǿͻ��˼���
		HttpSession�Ƿ������˼���
		
	�ġ�Cookie��ϸ����
		javax.servlet.http.Cookie
		1��Cookie��ʲô��
			һ��С��Ϣ���ɷ�����д��������ġ�������������档
			�ͻ��˱����Cookie��Ϣ�������ٴδ�����������
		2��Cookie�����ԣ�
			name�������
			value:�����
			comment:��ѡ�ġ�ע��
			path����ѡ�ġ�
					дCookie�ĳ���ķ���·���ǣ�http://localhost:8080/day07/servlet/CookieDemo1
							���У�localhost����������/day07/servlet���ǵ�ǰCookie��path
							
							
					���ʵĵ�ַ��URI.startWith(cookie��·��),Ϊtrue�ʹ�
					
					����IE���cookie��·����/day07
					���ڷ��ʵĵ�ַ�ǣ�http://localhost:8080/day07/servlet/CookieDemo1  ��
					���ڷ��ʵĵ�ַ�ǣ�http://localhost:8080/day07/CookieDemo1          ��
					
					����IE���cookie��·����/day07/servlet/
					���ڷ��ʵĵ�ַ�ǣ�http://localhost:8080/day07/servlet/CookieDemo1  ��
					���ڷ��ʵĵ�ַ�ǣ�http://localhost:8080/day07/CookieDemo1          ����
					
					���һ��Cookie��·�����ó���/day07����ζ��ʲô����ǰӦ���µ�������Դ������������������������
					
			domain����ѡ�ġ���Cookie��������վ��������itcast.cn��Ĭ��ֵ��
			maximum age����ѡ�ġ������þ��ǻỰ���̣�������������ڴ��У�����λ����
							�����0��˵��Ҫɾ����
			version����ѡ�ġ�
			
		3�������ͻ���дCookie��HttpServletResponse.addCookie(javax.servlet.http.Cookie)������д��һ����Ӧ��Ϣͷ��Set-Cookie:cookie����Ϣ��
			�ص㣺һ����������һ����վ����20��Cookie������300��Cookie��ÿ��Cookie�ĳ��Ȳ��ܳ���4KB����ϡȱ��
		
		4����������εõ��ͻ��˴�����Cookie��HttpServletRequest.getCookies()
		5���������Cookie��ͨ�����Ʋ��С�
			domain+path+name�����ֵġ�
			localhost/day07/servlet/lastAccessTime
	�塢Cookie������
		5.1��ס�û����һ�εķ���ʱ��
		
		5.2��ס�û���¼ʱ���û���
		5.3������վ����ס�û���Ʒ����ʷ�����¼
		
		
	��������URL��ַ��д��
		���·��
		����·����������ģ�
		����·����ôд��ʲôʱ����Ҫ����Ӧ������"/day07"?
		ԭ�򣺵�ַ�ǲ��Ǹ��������õģ������,"/"�ʹ����ŵ�ǰӦ�á�����Ǹ��ͻ����õľ���·��Ҫ����Ӧ�����ơ�
		
		
		<link href=path/>                                Ҫ��/day07
		<script src=path/>								Ҫ��/day07
		<img src=path/>									Ҫ��/day07
		<a href=path/>									Ҫ��/day07
		RequestDispatcher.include(path)					��Ҫ�ӣ�"/"�ʹ����ŵ�ǰӦ��
		RequestDispatcher.forward(path)					��Ҫ�ӣ�"/"�ʹ����ŵ�ǰӦ��
		HttpServletResponse.sendRedirect(path)			Ҫ��/day07
		ServletContext.getRealPath(path)				��Ҫ�ӣ�"/"�ʹ����ŵ�ǰӦ��




		����������������У� request,session,servletcontext,pageContext,
		����������Ŀ�����ڲ�ͬ��servlet �� jsp֮�䴫�����ݡ�
		������������Ҫ�����ǵ�����������κζ�����
		���������Ҫ�����Ǵ�ȡ����������ݡ���
		�棺setAttribute(��,ֵ)
		ȡ��getAttribute(��)
		 request���������
		   ���÷�Χ�����������ӵ����󴴽�һ��request����  ����Ӧ����ʱ����
		   request�Ĵ�ȡ���� request.setAttiribute("key","aaaaa");
		   request�Ĵ涼���Լ�ֵ�Եķ�ʽ���洢,����� "key" ��ʾ���ļ��������������ַ�����"aaaaaa"  ��ʾ������ֵ���������ַ���Ҳ����������Ķ���
		  ȡ��request.getAttirbute("key");
		   ��ʾ�������ļ���ȡ������ֵ��
		 session���������
			   ���ã���һ�οͻ��˻Ự�ڼ䣬�ڷ������ϱ���ͻ������״̬��Ϣ��.
				���������� session ����
				������ִ�е� request.getSession()ʱ�ʹ���һ��sesssion����,�����ֳ�ʱ�ͻ�����session����,ÿ��sesssion���󶼻���һ��Ψһ��ID����Զ���ظ����ַ�����
				 session�Ĵ�ȡ��request��һ���ģ������ü�ֵ�Եķ�ʽ���棬���ü���ȡֵ��
			 �磺 HttpSession session = request.getSession();---->���session����
				 session.getSession(����ֵ)------>��        
				 session.getSession(��),-------->ȡ
		 �������ĳ�ʱ��������web.xml�����ã�Ҳ���Ե������ķ�����
			��web.xml�����ó�ʱ:  
				<session-config>
					   <session-timeout> ��ʱ��ʱ��</session-timeout> 
				</session-config>
		�������ķ�����session.invalidate();
		
Lesson    4

*****һ��Cookie�İ�������¼�û������Ʒ�ķ��ʼ�¼
*****����HttpSession������ԭ��̽��
	�õ�HttpSession����
		HttpServletRequest.getSession():��������Cookie��JSESSIONID=HttpSession�����id,�ɷ��������ɣ�Ψһ�ģ���ȡֵ���ڷ��������ڴ��и���id����
										���HttpSession�����ҵ��ˣ�ȡ������������û���ҵ�������һ���µ�HttpSession����
		HttpServletRequest.getSession(boolean b):���bΪtrue�������淽��������ȫһ�¡����Ϊfalse��ֻ��ѯ��
		
*****����HttpSession������
	*****����û���һ���Ե�¼�������֤����֤��
	*****�򵥹���ԭ����
	*****��ֹ�����ظ��ύ��Base64���룩
		Base64����ԭ����3���ֽ�ת��Ϊ4���ֽ�
							1010 1100    0101 1111     1010 0101
			ת��4���ֽ�   0010 1011    0000    0101   0011 1110   0010 0101
					ת��4���ֽں�ÿһ���ֽڱ�ʾ��������С����00111111 ~  00000000
																	63~0��64�����������Գ�֮ΪBase64������ʵ��һ�����ÿ�����ֶ�Ӧһ���ɼ��ַ�
			
		java.util.UUID:ͨ�õ�Ψһ��ʶ��
		
*****�ġ��ͻ��˽���Cookie��ĻỰ���ݱ�������
		�ͻ��˽���Cookie��http://localhost���ʵ���Ч
		
		url---->url;JSESSIONID=123:URL��д.�������վ�е�����URL��ַ����д��
		HttpServletResponse.encodeURL(url)����һ�����ܷ������ж��û��Ƿ������Cookie��û�н��ã�����д�������˾���д��
		
		
		��վ��ҳ��Ϊ�˸��÷��ʱ���վ���벻Ҫ��������Cookie��
		
*****�塢HttpSession�����״̬��ת�������л���
	1����θ����ڴ���HttpSession����ĳ�ʱʱ�䡣
		�޸�web.xml
			<session-config>
			<session-timeout>1</session-timeout><!--��Ȼ��������λ�Ƿ���-->
			</session-config>



	//�����õ��ǰ��µ�,��ô̫�鷳��.
		//һ:ʹ��getClass().getResourceAsStream����,���·����Ϊ�������
				//1: ��"/"  ==> ��Ե���classesĿ¼
				//2: ����"/" ==> ��Ե��Ǳ��൱ǰĿ¼
					InputStream is = this.getClass().getResourceAsStream("students.xml");
					System.out.println(is);
		//��:ʹ��this.getClass().getClassLoader().getResourceAsStream("");���
				//ֻ��һ�����·�� ==> ��������� classesĿ¼
					InputStream is2 = 	this.getClass().getClassLoader().getResourceAsStream("students.xml");
					System.out.println(is2);
		
		
			
	//ע��: ʹ������������������Դ�ļ�ʱ
	//1 jvm�����ڼ�ֻ����һ��. ����ʹ������Ĵ�����Խ���������.
		String path = this.getClass().getClassLoader().getResource("students.xml").getPath();
		File file = new File(path.substring(1, path.length()));
		System.out.println(path);
	//2 getClassLoader()ԭ������������.class�ļ���, ���Ի�����Ƶĺ�С.��Ҫ��������һЩ��ϴ����Դ.

