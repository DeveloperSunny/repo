�Զ����ǩ����
1���Զ����ǩ����JSP�����е�

һ����ǩ������
	�Ƴ���JSP�е�Java�ű�(<%%>)
������д�Զ����ǩ�Ĳ���(�Զ���EL������������ͬ)

	Tag�ӿڣ����еķ����������������õġ�
	
	������
		SKIP_BODY:���Ա�ǩ���������ݡ�ֻΪdoStartTag��������
		EVAL_BODY_INCLUDE:�����Ա�ǩ���������ݡ�ֻΪdoStartTag��������
		SKIP_PAGE:���Խ�����ǩ֮������ݡ�ֻΪdoEndTag��������
		EVAL_PAGE:�����Խ�����ǩ֮������ݡ�ֻΪdoEndTag��������
	������
		int doStartTag():�������á������Զ����ǩ�Ŀ�ʼ��ǩʱ�����á�
		int doEndTag():�������á������Զ����ǩ�Ľ���ʱ�����á�
		void setPageContext(PageContext pc):���������á������ǩ֮ǰ�ͻ���á�
		void setParent(Tag t):���������á������ǩ֮ǰ�ͻ���á�Ŀ�괫�ݽ�����ǩ��û�д���null��
		void release() :���������ã��ͷű�ǩ��ռ�õ���Դ��
		
		
	IterationTag�ӿڣ��̳�Tag�ӿڡ������ظ�ִ���������ݵķ���
		int doAfterBody():ִ���������ᱻ�������ø÷�����
			�÷����ķ���ֵֻ���ǣ�Tag.SKIP_BODY,�������壬���������ǩ����
								  IterationTag.EVAL_BODY_AGAIN����ִ��һ���������ݡ�
		
	BodyTag�ӿڣ��̳�IterationTag�ӿڡ������˻�ȡ�������ݵķ�����
		int EVAL_BODY_BUFFERED:��doStartTag()�����õġ�ֻ�з��ظ�ֵ������2�������Żᱻ�������á�
		
		void doInitBody():��ʼ�����塣��������
		void setBodyContent(BodyContent b) :�����������ݡ��������á�BodyContent�ʹ������������ݡ�
	
	SimpleTag�ӿڣ�
		void doTag():������ǩ��ִ�С��������á�
		void setJspBody(JspFragment jspBody):�������á������ǩ���������ݡ�
		void setJspContext(JspContext pc):�������á�����PageContext����
		void setParent(JspTag parent):�������á����븸��ǩ��
		
	
	----------------------------����--------------------------------------------------------------------------------------------------
	1����дһ���ֱ࣬�ӻ���ʵ��javax.servlet.jsp.tagext.Tag�ӿ�
		package cn.itcast.tag;

		import java.io.IOException;

		import javax.servlet.jsp.JspException;
		import javax.servlet.jsp.tagext.TagSupport;
		//TagSupportʵ����Tag�ӿ�
		public class ShowRemoteIpTag extends TagSupport {

			public int doStartTag() throws JspException {
				String remoteIp = pageContext.getRequest().getRemoteAddr();
				try {
					pageContext.getOut().write(remoteIp);
				} catch (IOException e) {
					e.printStackTrace();
				}
				return super.doStartTag();
			}
		}

	------------------------------------------------------------------------------------------------------------------------------

	2����WEB-INFĿ¼�½���һ����չ��Ϊtld��Tag Libary Definition����xml�ļ���
	<?xml version="1.0" encoding="UTF-8"?>
	<taglib xmlns="http://java.sun.com/xml/ns/j2ee"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd"
		version="2.0">
		<tlib-version>1.0</tlib-version>
		<short-name>itcast</short-name>
		<uri>http://www.itcast.cn/jsp/jstl</uri>
		<tag><!-- ������ǩ -->
			<description>Show Remote Address</description>
			<name>showRemoteIp</name>
			<tag-class>cn.itcast.tag.ShowRemoteIpTag</tag-class>
			<body-content>empty</body-content><!-- ָʾ��ǩ���������ݣ�û�о�дempty -->
		</tag>
	</taglib>
	3������ѡ�ģ���web.xml�ж�tld�ļ������ƿռ����ӳ���Ӧ��
	  <jsp-config>
		<taglib>
			<taglib-uri>http://www.itcast.cn/jsp/jstl</taglib-uri>
			<taglib-location>/WEB-INF/itcast.tld</taglib-location>
		</taglib>
	  </jsp-config>
	4����JSP��ʹ��
		<%@ taglib uri="http://www.itcast.cn/jsp/jstl" prefix="itcast"%>

==============================================================================
	1.��������
		private List items;
		private String var;//��
		public void setItems(List items) {
			this.items = items;
		}
		public void setVar(String var) {
			this.var = var;
		}

	2.�ѵ�ǰԪ�طŵ�ҳ�淶Χ
		pc.setAttribute(var, obj);

	3.����������ִ��
		getJspBody().invoke(null);

		// һ��Ч����ͬ
		JspFragment jf = getJspBody();
		jf.invoke(out);

	4.��ȡ��ǩ��������
		StringWriter sw = new StringWriter();
		getJspBody().invoke(sw);
		String content = sw.getBuffer().toString();

	5.��ȡpageContext
		PageContext pc = (PageContext) getJspContext();

������ǩִ�в����ԭ��
�ġ���ǩʵ�ֵĸ�������
	����jspҳ��ĳһ���������Ƿ�ִ�С�
	���ƽ�����ǩ���JSP�����Ƿ�ִ��
	����jspҳ�������ظ�ִ�С�
	�޸�ҳ���������
�塢JSP�б�ǩ�̳���ϵ
�����򵥱�ǩԭ��
�ߡ���ǩ������Ԫ�����
	tld�ļ���
	taglib����Ԫ��
		tlib-version:�汾��
		short-name:���ñ�ǩʱ�Ķ����ơ�һ����tld�ļ����ļ���һ�£����ҡ�
		uri����ǩ�󶨵����ƿռ䡣ֻ��һ�����֣�û��ʵ�ʵ����塣
		tag�������ǩԪ��
			name����ǩ�����ơ�
			tag-class:��ǩ��ʵ�����ȫ���ơ�
			body-content:ָʾ��ǩ���������ݵ����͡�
				��ѡֵ��
					empty:û���������ݡ������ڴ�ͳ�ͼ򵥱�ǩ��
					JSP:˵��JSP�ļ����ܳ���ɶ����ǩ���������о��ܳ���ɶ�������ڴ�ͳ��ǩ��
					scriptless��˵����ǩ���������ݲ�����java�ű�������������ʱʹ�ã������ڼ򵥱�ǩ��
					tagdependent��˵����ǩ������������ԭ�ⲻ���Ĵ��ݸ���ǩ������ġ�
								�����Ǵ��ݵ�������
			attribute�������ǩ������
				name������������Ӧ��ǩ�������е�setter����
				required:�Ƿ��Ǳ��������
				rtexprvalue���Ƿ�֧�ֱ��ʽ��EL��java���ʽ����Ĭ����false��
		<tag>
			<name>forEach1</name>
			<tag-class>cn.smallbug.tag.ForEach1SimpleTag</tag-class>
			<body-content>scriptless</body-content>
			<attribute>
				<name>items</name>
				<required>true</required>
				<rtexprvalue>true</rtexprvalue>
			</attribute>
			<attribute>
				<name>var</name>
				<required>true</required>
				<rtexprvalue>false</rtexprvalue>
			</attribute>
		</tag>
		
�ˡ���ǩ��ʵ�ð�����
	������
	ģ��c:if
	ģ��c:when c:otherwise c:choose
	ģ��c:forEach
		java.lang.reflect.Array
	����HTML��ǵı�ǩ
�š�JSTL�е�ʣ����ı�ǩ

Lesson 2

(��һ���˽�)һ��ʲô�ǹ��ʻ�
(��ϰһ��)�������ʻ�������Ҫ����
	1����Դ����
		����_����_����.properties
		
		������ͬ�Ķ��properties�ļ�������һ����Դ����
		���ԣ�ISO�й涨��zh  en   http://www.loc.gov/standards/iso639-2/englangn.html�� 
		����:ISO�й涨��CN HK MO TW  US UK  http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html�� 
		
		msg_en_US.properties
		msg_zh_CN.properties
		msg.properties  �������������Ϣû���ҵ���Ӧ����Դ�ļ��������������Ĭ�ϵ���Դ��
		
		

	Locale
	�ı���ResourceBundle 
	-------------------------------------------------------------
	����ʱ�䣺DateFormat
	Date---->String:��ʽ�������format
	 
	
	String---->Date:�����ַ�����parse
	
	���ֻ��ң�NumberFormat
	
	Number---->String:��ʽ�������format
	
	String---->Number:�����ַ�����parse
	
	
	������ʽ����MessageFormat
�����򵥽��ܹ��ʻ���JSTL��ǩ��
*****�ġ�����������(�ҳ���Ҫ)
	1������������һ��������
	2�����Զ��������Ӧ�������ء�
	
�塢��д���˵Ĳ���
	1����дһ���࣬ʵ��javax.servlet.Filter�ӿڣ���������һ���֮Ϊ��������
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		System.out.println("FilterDemo1������");
		chain.doFilter(request, response);//����
	}
	2����web.xml�н������ã�Ҫ������Щ��Դ��
	<filter>
		<filter-name>FilterDemo1</filter-name>
		<filter-class>cn.itcast.filter.FilterDemo1</filter-class>
	  </filter>
	  <filter-mapping>
		<filter-name>FilterDemo1</filter-name>
		<url-pattern>/*</url-pattern>
	  </filter-mapping>
	  
������������ִ�й���
	���������������˳���ǰ���web.xml��filter-mappingԪ�صĳ���˳��������صġ�
	
	������ֻ�ᱻ��ʼ��һ�Σ�Ӧ�ñ�����ʱ������˳�ʼ����
	
�ߡ��������򵥰�����3��
�ˡ��������ĸ߼�����
	<filter-mapping>
		<filter-name>FilterDemo3</filter-name>
		<url-pattern>/*</url-pattern>
		<dispatcher>REQUEST</dispatcher> Ĭ����������д������һ�������Ĭ�ϵľ�û����
		<dispatcher>FORWARD</dispatcher>
		<dispatcher>INCLUDE</dispatcher>
		<dispatcher>ERROR</dispatcher>
	  </filter-mapping>
�š����̰�װ���ģʽ
ʮ���������߼�������
	ȫվGzipѹ�����൱���Ѷȣ�
	
Lesson 3 
	
һ����װ���ģʽ��BufferedReader��readLine()���������к�
�����������߼�������
	�������������
	�໰������
	HTML�����ǹ�����
	ȫվѹ�������������ѣ�
��������URL��Ȩ�����ع�����
	����Ҫ��
		���ݿ⣺MySQL
		����ģ�ͣ�MVC+����ܹ�
		���ݿ���ʣ�DBUtils���
		�������ݷ�װ��BeanUtils���
		JSP�в��ܳ���һ��java�ű��ͱ��ʽ
		
	һ��������������
		
	�������ݼ���Ҫ������������
			commons-beanutils.jar
			commons-dbcp.jar
			commons-dbutils.jar
			commons-logging.jar
			commons-pool.jar
			jstl.jar
			standard.jar
			
			mysqldriver.jar
	�������ݿ⣺
		create database day20;
		use day20;
		create table menu(
			id varchar(100) primary key,
			name varchar(100) unique,
			uri varchar(100),
			description varchar(255)
		);
		create table role(
			id varchar(100) primary key,
			name varchar(100) unique,
			description varchar(255)
		);
		create table user(
			id varchar(100) primary key,
			username varchar(100) unique not null,
			password varchar(100),
			nick varchar(100)
		);
		create table menu_role(
			m_id varchar(100),
			r_id varchar(100),
			primary key(m_id,r_id),
			constraint m_id_fk foreign key(m_id) references menu(id),
			constraint r_id_fk1 foreign key(r_id) references role(id)
		);
		create table role_user(
			r_id varchar(100),
			u_id varchar(100),
			primary key(r_id,u_id),
			constraint u_id_fk foreign key(u_id) references user(id),
			constraint r_id_fk2 foreign key(r_id) references role(id)
		);