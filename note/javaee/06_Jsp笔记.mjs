Lesson 1

****
һ��JSP����
	1��JSP:Java Server Pages(�����ڷ������˵�ҳ��)������Servlet��
	ѧϰJSPѧ�õĹؼ���ʱ�����뵽Servlet���ɡ�
	2��JSP��ԭ��
		JSP�ᱻTomcat�����һ��Servlet����Servlet��Tomcat\work\catalina\locahot\day09\....
	3��JSP��Servlet���������ʵ����
		Servlet��һ����Ϊ�������������ҵ���߼�
		JSP��һ����Ϊ��ʾ�������ʾ����
		
����JSP���﷨
	1��JSP��ģ��Ԫ�أ�(��дHTML)
			����JSP�е���ЩHTML���
			���ã�ҳ�沼�ֺ�����
	2��JSP��Java�ű����ʽ��
			���ã�������ݵ�ҳ����
			�﷨��<%=���ʽ%>(ʵ���Ͼ��ǵ����������ӡ��ҳ����)
	3��JSP�е�Java�ű�Ƭ�Σ�(ʵ�ʿ����У�Ӧ����JSP�в��ܳ���һ��Java�ű�Ƭ��)
			���ã���дJava�����߼�
			�﷨��<%
					���1;
					���2;
				  %>
			ԭ�����е�����ԭ�ⲻ���ı����������뵽��Ӧ��Servlet��service�����С�
	4��JSP�����������˽���ԭ��
			���ã�������ĳ�Ա
			�﷨��<%!
					���Java����
					%>
	5��JSP��ע�ͣ�
			���ã�ע��Java�ű�����
			�﷨��<%--����ע��--%>
			
����JSP��ָ��:��JSP�����õģ��������õģ�
		�������﷨��ʽ��<%@ ָ������ ����1="ֵ1" ����2="ֵ2" ....%>
		���ã����߷�����������δ���JSP�г���ָ��֮������ݵġ�
		
	3.1page
		���ã�����JSPҳ��ĸ�������
		���ԣ�
			language:ָʾJSPҳ����ʹ�ýű����ԡ�Ĭ��ֵjava��Ŀǰֻ֧��java��
			extends��ָʾJSP��Ӧ��Servlet��ĸ��ࡣ��Ҫ�޸ġ�
			*import������JSP�е�Java�ű�ʹ�õ�������������ͬJava�е�import��䣩
						JSP�����Զ��������°��е��ࣺ
								javax.servlet.*
								javax.servlet.http.*
								javax.servlet.jsp.*
					ע�⣺һ��import���Կ��Ե����������ö��ŷָ���
			*sessioin:ָʾJSPҳ���Ƿ񴴽�HttpSession����Ĭ��ֵ��true������
			*buffer��ָʾJSP�õ�������Ļ����С.Ĭ��ֵ��8Kb��
			autoFlush���Զ�ˢ��������Ļ��档
			isThreadSafe��ָʾҳ���Ƿ����̰߳�ȫ�ģ���ʱ�ģ���Ĭ����true��
					true������ȫ�ġ�
					false����ȫ�ġ�ָʾJSP��Ӧ��Servletʵ��SingleThreadModel�ӿڡ�
			*errorPage:ָʾ��ǰҳ������ת��ת������ҳ�档
						Ŀ��ҳ�������"/"����ǰӦ�ã����Ǿ���·����
						
						����ȫ�ִ�����ʾҳ�棺
							web.xml
							 <error-page>
								<exception-type>java.lang.Exception</exception-type>
								<location>/error.jsp</location>
							 </error-page>
							  <error-page>
								<error-code>404</error-code>
								<location>/404.jsp</location>
							  </error-page>
			*isErrorPage:ָʾ��ǰҳ���Ƿ����Exception����
			*contentType��ָ����ǰҳ���MIME���͡�������Servlet�е�response.setContentType()������ȫһ��
			*pageEncoding��֪ͨ�����ȡJSPʱ���õı��루��ΪҪ���룩
					����contentType���Ե����á�
			*isELIgnored:�Ƿ����EL���ʽ��${1+1}��Ĭ��ֵ��false��
			
		pageָ����򵥵�ʹ�÷�ʽ��<%@ page pageEncoding="UTF-8"%>
	3.2include����̬����,���������þ��Ĳ��ö��ģ�
		���ã����������������
		�﷨��<%@include file=""%>fileָ��Ҫ������Ŀ�������·�������"/"����ǰӦ�ã����Ǿ���·����
		ԭ����Ŀ����������ݼӵ�Դ����У���������
		
		��̬������
			���ö���Ԫ�أ�<jsp:include page=""/>·�������"/"����ǰӦ�ã����Ǿ���·����
			
		
	3.3taglib
		���ã������ⲿ�ı�ǩ
		�﷨��<%@taglib uri="��ǩ���ƿռ�" prefix="ǰ׺"%>
			<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
			
�ġ�JSP�����ö���9��JSP���ö���
	JSP�����ö�����������			��Ӧ������
	
	request							HttpServletRequest
	response						HttpServletResponse
	session							HttpSession(�п��صģ�pageָ���session���Ե�ȡֵ)
	application						ServletContext
	config							ServletConfig
	page							this(��ǰServlet����)
	exception						java.lang.Throwable���п��صģ�pageָ���isErrorPage���Ը�Ϊtrue��
	
	out								JspWriter
	pageContext						javax.servlet.jsp.PageContext�ǳ���Ҫ
			���������ã�
					1��������һ�������ͬʱ���ܲ����������������PageContext ServletRequest HttpSession  ServletContext��
							�����ʾ����Χ�Ǳ�ҳ�档
									void setAttribute(String name,Object value)
									void removeAttribute(String name)
									Object getAttribute(String name)
							�������������������
									void setAttribute(String name,Object value,int scope)
									void removeAttribute(String name,int scope)
									Object getAttribute(String name,int scope)
									
									����int scope����PageContext���ṩ�ľ�̬�����涨�ġ�
												PageContext.PAGE_SCOPE:ҳ�淶Χ����PageContext�����е��Ǹ�Map������page��
												PageContext.REQUEST_SCOPE:����Χ����ServletRequest�е��Ǹ�Map������request��
												PageContext.SESSION_SCOPE:����Χ����HttpSession�е��Ǹ�Map������session��
												PageContext.APPLICATION_SCOPE:����Χ����ServletContext�е��Ǹ�Map������application��
												
												
							���ǳ����ã�Object findAttribute(String name):���ΰ���page request session application��Χ����ָ�����ƵĶ����ҵ�Ϊֹ��
							
					2����ȡ����8����ʽ����
					3���ṩ��ת���Ͱ����ķ��㷽��
						RequestDispatcher rd = request.getRequestDispatcher("/url");
						rd.forward(request,response);
						
						pageContext.forward("url");
						pageContext.include("url");
						
*****�塢�Ĵ������(������Դ֮�以������)
	JSP����ʽ���������				��Χ����			���������
	pageContext						page				javax.servlet.jsp.PageContext
	request							request				javax.servlet.ServletRequest  ����ʾ�����ݾ�û�����ˣ�
	session							session				javax.servlet.http.HttpSession (��ʾ�������ˣ���һ���Լ���Ҫ��)
	application						application			javax.servlet.ServletContext (��ʾ�������ˣ���Ҷ�Ҫ�á�������ʹ�ã����ʹ�ã�����ͬ������)
����JSP���õĶ���Ԫ��
	<jsp:include/>
	<jsp:forward/>
	<jsp:param/>:�ڰ�����ת��ʱ�����øñ�ǩ�����������
������ε���JSP���ֵĴ���

Lesson 2

*****һ��JavaBean�ĸ���
	1��JavaBean����һ����ѭ����д������ͨ��
	2������д��
		a��������Ĭ�ϵĹ��췽��
		b�������ֶζ�λ˽�е�   
		c���ṩ���е�getter��setter����������
		d��һ��ʵ��java.io.Serializable
		
	3��һ��Ҫ����Java�������淶��
	
	***4��Ӧ�ó�����
		����ҵ�������У�JavaBean�������������ݵġ�
		
*****����JavaWeb�Ŀ���ģ��
		ģ��һ���˽�
			JSP+JavaBean
		
		ģ�Ͷ�������ʵ��Ӧ��
							������
			M����ʦ			JavaBean��ģ��
			V���ϵĲ�		JSP����ʾҳ��
			C������̨		Servlet��������
			
			MVC+����ܹ�
			
			
***����JSP�в���JavaBean�Ķ���Ԫ��
	jsp:useBean
		���ã�������ָ����Χ�ڲ���ָ�����Ƶ�JavaBean�����ҵ��˾�ֱ��ʹ�ã�û���ҵ�������һ�������ŵ�ָ������Χ�ڡ�
		���ԣ�
			id������ġ�JavaBean������
			class:JavaBean����������
			scope����Χ��Ĭ����page��Χ����ѡֵ��page request session application
			
		ע�⣺����ñ�ǩ���������ݣ�ֻ�ڴ����¶���ʱ�Ż�ִ�С�
	jsp:setProperty��������ʹ��useBean��
		���ã�����JavaBean��setter�����������Զ�����ת�������޻�������
		���ԣ�
			property������ġ��������ơ�����setName,������name��
				����ʹ��ͨ���*��ʹ��ǰ����������������������Ե�������ȫһ�¡�
			name������ġ��ĸ�����ģ���jsp:useBean�е�id��ȡֵ��
			value�����Ե�ȡֵ��֧��ֱ������֧�ֱ��ʽ��<%=���ʽ%>����
			param:���������
	jsp:getProperty
		���ã�����JavaBean��getter������
			property������ġ����Ե����ơ�����getName,������name��
			name:����ġ��ĸ�����ģ���jsp:useBean�е�id��ȡֵ��
			
*****����ԭ��JSPҳ���в��ܳ���һ��Java�ű�<%%>��Java���ʽ<%=%>
			Java�ű�������������Զ����ǩ��
			Java���ʽ�����������EL���ʽ��   Struts2���:OGNL���ʽ��
				
*****�ġ�EL���ʽ
	��ֻ��JSP�еı��ʽ������һ�ֿ������ԡ�
	�����﷨��${EL���ʽ}
	4.1��ȡ����
		*****EL���ʽֻ�ܻ�ȡ�Ĵ����е����ݡ�
		EL���ʽ��ȡ�Ķ��������null��ҳ�治����ʾ���ݡ���ˣ�EL���ʽ����Զ������ֿ�ָ���쳣
		p.name:������������Ϊp�����getName������������������ڻ�ȡ���Ե�ȡֵ�ġ�
		
		
			.�������
			[]�������.����������ģ�[]Ҳ������[]�����ģ�.��һ��������
				����${p.name}===${p['name']}==${p["name"]}
				
				�����ڿ���ȡ������Java�����淶�Ķ�����
		
	4.2��ѧ�߼�����:
		empty�����������жϵĶ�����null���߿��ַ�����������true�����ڼ��ϣ���ʹ���϶�������null��û���κ�Ԫ�أ�Ҳ����true��
		
		EL���ʽ��֧���ַ������Ӳ�����
		
	4.3��ȡJSP�����ö���11��EL���ö��󣩣��ѵ㣬��Ҫ��JSP�����ö���ͷ�Χ���Ƹ��
		11��EL��ʽ�����У�����һ���Ǳ�ʾ��������⣬���඼�Ǳ�ʾ��Map�ṹ
		
		EL��ʽ��������			Java����									��ע
		pageContext				javax.servlet.jsp.PageContext				��JSP�е����ö�����ȫ��ͬ
		
		ʣ��Ķ��Ǵ����Map����
		pageScope				java.util.Map								������PageContextҳ�淶Χ���Ǹ�Map
		requestScope			java.util.Map								������ServletRequest����Χ���Ǹ�Map
		sessionScope			java.util.Map								������HttpSession�Ự��Χ���Ǹ�Map
		applicationScope		java.util.Map								������ServletContextӦ�÷�Χ���Ǹ�Map
		
		param					java.util.Map								���������������key��������������ơ�value�����������ֵ������һ���ַ�����
		paramValues				java.util.Map								���������������key��������������ơ�value�����������ֵ������һ���ַ������顣
		
		header					java.util.Map								������������Ϣͷ��key��ͷ���ơ�value��ͷֵ������һ���ַ�����
		headerValues			java.util.Map								������������Ϣͷ��key��ͷ���ơ�value��ͷֵ������һ���ַ������顣
		
		cookie					java.util.Map								����ͻ����ύ��Cookie��Map��key��cookie��name��value��cookie������
		initParam				java.util.Map								������ȫ�ֳ�ʼ��������web.xml��context-param��.key���������ơ�value������ֵ
		
		
	4.4������ͨ��ľ�̬������EL������
		��д���裨�Զ���EL�����ı�д���輴�Զ����ǩ�ı�д���裩��
			a����дһ����ͨ��java�࣬�ṩһ����̬����
			public class FunctionDemo {
				public static String toUpperCase(String str){
					return str.toUpperCase();
				}
			}
			b����JavaWebӦ�õ�WEB-INFĿ¼�½���һ����չ����tld(taglib definition)��XML�ļ����ο�Tomcat�е�ʾ�������������£�
			<?xml version="1.0" encoding="UTF-8"?>
			<taglib xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
				xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd"
				version="2.0">
				<tlib-version>1.0</tlib-version>
				<short-name>myfn</short-name>
				<uri>http://www.itcast.cn/myfn</uri>
				<function><!-- ���庯�� -->
					<name>toUppercase</name>
					<function-class>cn.itcast.el.FunctionDemo</function-class>
					<function-signature>java.lang.String toUpperCase( java.lang.String )</function-signature>
				</function>
			</taglib>
			c������ѡ���裩ǰ���ǰ�tld�ļ��ŵ���WEB-INFĿ¼�¡�
			��֪Ӧ�ã�tld�ļ���tld�е�uri�Ķ�Ӧ���޸�web.xml�������������ݣ�
			<jsp-config>
				<taglib>
					<taglib-uri>http://www.itcast.cn/myfn</taglib-uri>
					<taglib-location>/WEB-INF/myfn.tld</taglib-location>
				</taglib>
			  </jsp-config>
			d����JSP��ʹ��
				��taglibָ������Զ����EL������
				<%@ taglib uri="http://www.itcast.cn/myfn" prefix="myfn"%>
				 ${myfn:toUppercase(p)}
			
**�塢SUN�ṩ�ı�׼EL������
	JSTL��׼��ǩ����Jsp Standard Tag Libary��
		***Core:����
		**Fmt�����ʻ�
		SQL�����ݿ����
		XML��xml����
		**fn��EL������
		
		����JSTL��jar����standard.jar jstl.jar
		
		
*****����JSTL�еĺ��ı�ǩ��(�滻��JSP�е�Java�ű�)
	c:if
		���ã��ж��Ƿ�Ϊtrue�����Ϊtrue����ô��ǩ���������ݾͻ���ʾ��
		���ԣ�
			test������ġ�Ҫ�������boolean�ġ�֧�ֱ��ʽ��EL��Java���ʽ��
			var������test�������ı���
			scope: �������Χ��Ĭ����page
			
	c:forEach
		���������顢List��Set��Map
		���ԣ�
			items��Ҫ������Ŀ�����֧�ֱ��ʽ
			var����������ָ��ǰ�����ļ����е�һ��Ԫ��
			begin����ʼ������������
			end������������������
			step��������Ĭ����1
			varStatus��ȡһ�����֣�������һ������
				�ö��������·�����
					int getIndex():��ǰ��¼�������š���0��ʼ
					int getCount():��ǰ��¼��˳�򡣴�1��ʼ
					boolean isFirst():�Ƿ��ǵ�һ����¼
					boolean isLast():�Ƿ������һ����¼
			
			