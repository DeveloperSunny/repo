����Web�����Ļ�������
	�������ϵ�WEB��Դ��
	��̬��Դ����������ġ�����html��css��js
	��̬��Դ�����ݲ�ͬ��������ͬ�����ġ���̬��Դ���ɾ�̬��Դ�����磺JSP��ASP

����Web������Ҫ�ķ�����
	JavaEE:��13�ּ������ܳơ�Servlet/JSP����JavaEE������һ��
	���õķ�������
	WebLogic:֧��JavaEE�淶����֮ΪJavaEE��������ʵ����ʲô�淶�ķ������ͽ���ʲô������������������������
	WebSphereAS��Application Server����֧��JavaEE�淶
	JbossAS��֧��JavaEE�淶�����
	Tomcat��֧��Servlet/JSP�淶����������������

	Java��ع淶���ӿںͳ����ࣩ����SUN�ƶ�


�ġ�Tomcat�İ�װ����������������(Ŀ�꣺TOmcat������)
	1��ע�⣺��Ҫ��Tocmatװ�������Ļ�ո��Ŀ¼�С�
	2����֤Tomcat�Ƿ�ɹ�
		a������Tomcat\bin��ִ��startup.bat
		b������������û�г�����û�Ҫ���������http://localhost:8080����è˵��OK
		
	3������Tomcat���������⣺
		***a���޷�����������ϵͳ��������JAVA_HOME=���JDK�İ�װĿ¼
		
		Tips:
			HTTPЭ��涨��WebӦ�õ�Ĭ�϶˿���80
			��Tomcatʹ�õ�Ĭ�϶˿�8080��ΪWebӦ�õ�Ĭ�϶˿�80��
			
			��Tomcat\confĿ¼����һ��server.xml
			�ҵ�8080��Ϊ80���Ϳ���ʹ��Ĭ�϶˿��ˡ�
	4��Catalina_home=Tomcat�İ�װĿ¼��������ʹ�ã�



		java�ļ���javac -d . xx.java	


�塢Tomcat��Ŀ¼�ṹ�������������Զ���ģ�
	CATALINA_HOME��
		*bin:����Tomcat���������
		*conf��Tomcat��������Ϣ����
		*lib��Tomcat������Ҫ��jar��
		*logs:TOmcat��������־
		temp�������ʱ�ļ���
		*webapps:WebӦ�õĴ��Ŀ¼����Ŀ¼�е�ÿ��Ŀ¼������һ��Ӧ�á�
		work��Tomcat�Ĺ���Ŀ¼
	
*****����JavaWebӦ�õ�Ŀ¼�ṹ��SUN�ƶ��ģ����ϸ�Ҫ�󣩱����ס
		MyApp:(Ŀ¼��Ӧ�õ�����)
			1.html
			css
				a.css
			WEB-INF:��Ŀ¼�����У��Ҵ�С������ȫһ�¡���Ŀ¼�е���Դ���û��޷�ֱ�ӷ��ʵ������ǳ���Ҫ��
				classes:���Java����ֽ���
				lib:��ű�Ӧ����Ҫ��jar��
				web.xml:��Ӧ�õ������ļ�

***�ߡ���Ρ������Լ���Ӧ�õ�Tomcat��
		��ʽһ�������Ӧ�ÿ�����Tomcat\webappsĿ¼�¡�
			ע�⣺���ļ��������Ҫ����Tomcat
		��ʽ�������Լ���Ӧ�ô����war�����ٿ�����Tomcat\webappsĿ¼��
			�������Ӧ��Ŀ¼
			ִ�У�jar -cvf MyApp.war .
	
�ˡ�Tomcat��ɲ�����⣺
	����Ŀ¼��
		��ʽһ����������ʹ�ã�ԭ�������Ҫ����������
			1���޸�Tomcat\conf\server.xml���ҵ�<Host name="localhost"/>Ԫ��
			2������������һ����Ԫ�أ��������£�
				<Context path="/haha" docBase="E:\MyApp"/>
				path:����Ŀ¼�����ơ����û������ʵ�
				docBase:ʵ��Ӧ�õĴ��Ŀ¼
			3����������Tomcat
			4��������Դ��http://localhost:8080/haha/1.html���Ƿ���E����MyAppĿ¼�е�1.html
		**��ʽ����
			��Tomcat\conf\[enginename]\[hostname]Ŀ¼�½���һ��������ļ����ļ���չ��Ϊxml��
			�ļ������ļ�������ӳ�������·������<Context path="/haha" docBase="E:\MyApp"/>�е�path��
			�����������ݣ�
			<?xml version="1.0"?>
			<Context docBase="E:\MyApp"/>