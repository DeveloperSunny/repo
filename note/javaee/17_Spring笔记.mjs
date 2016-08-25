һ��IOC/DI
	1��������������ַ�ʽ
		<1>	����ֱ�Ӵ���
			<bean name="userDao" class="com.mjs.a_helloword.UserDaoImpl">
		
		<2>	���󹤳���̬��������
			<bean name="userDao2" class="com.mjs.b_beanInstance.StaticDaoFactory" factory-method="createUserDaoInstance">
		
		<3>	ʵ������������
			<bean name="daoFactory" class="com.mjs.b_beanInstance.DaoFactory2"></bean>
			<bean name="userDao3" factory-bean="daoFactory" factory-method="createUserDao"></bean>
	2�����������ʱ��
		<����>��Ĭ�ϣ�
			���ط�ʽ��
				����ʽ��Ĭ�ϣ�
				����ʽ��lazy-init="true"��
			
		<����>��scope="prototype"��
			���ط�ʽ��
				������ʹ�õ�ʱ��ű�����
		���ӣ�
			scope=="singleton/prototype/request/session/global session"
	3���������������
		<����>
			1�����ö���Ĺ��췽��
			2��ִ��init����	��init-method="init"��
			3�������Լ��ķ���	
			4����spring�����رյ�ʱ��ִ��destroy����	��destroy-method="destroy"��
		<����>
			ִ��init�������й�
	4��DI ������ע�룩
		<1>ʹ��javaBean�е�getXxx/setXxx����ע��
			<property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test01"></property>
			
		<2>���spring�������ļ��е�bean��û��<constructor-arg>��Ԫ�أ������Ĭ�ϵĹ��캯��
		
		<3>���spring�������ļ��е�bean����<constructor-arg>��Ԫ�أ����Ԫ��ȷ��Ψһ�Ĺ��캯��
			  index  ���������λ��  ��0��ʼ����
			  type   ָ���ǲ���������
			  value  ���������͸�ֵ
			  ref    ���������͸�ֵ
	5��ע��
		<1>@Resourceע���ʹ�ù���
			a����spring�������ļ��е��������ռ�
				 xmlns:context="http://www.springframework.org/schema/context"
								 http://www.springframework.org/schema/context
								 http://www.springframework.org/schema/context/spring-context-2.5.xsd
			b������ע�������
					<context:annotation-config></context:annotation-config>
			c����spring�������ļ��а� Student������������ ��bean�������
			d����һ����������ϼ�
				@Resource(name="username")
		<2>��ɨ���ע�⣺
			  a����spring�������ļ��е��������ռ�
				 xmlns:context="http://www.springframework.org/schema/context"
				 http://www.springframework.org/schema/context
				 http://www.springframework.org/schema/context/spring-context-2.5.xsd
			  b��<context:component-scan base-package="cn.itcast.annotation.scan"></context:component-scan>
				   1�� ��ע��������������������ܣ�����ע�����ɨ��
				   2����base-package�����Ӱ��²������е���
			  c�����һ�����ϼ���@Componentע�⣬�ͻ�������µķ���
					�����value���Ե�ֵΪ""
						  @Component
						  public class Person {}
						  ==
						  <bean id="person" class="..Person">
				   �����value���Ե�ֵ��Ϊ""
						  @Component("p")
						  public class Person {}
						  ==
						  <bean id="p" class="..Person">
			  d������@Resource�ķ����ٴν��в���
		<3>
			����ע��
				@Resource
				@Autowired
				@Qualifier
			��ɨ��
				@Component
				@Controller
				@Repository
				@Service
	6�����ڼ̳�
		   <1>	���һ������spring�����ļ��У����ǲ����������ഴ����������abstract="true"
		   <2>	�����һ������ӵ�и��������ֵ����parent="commonDao"

����AOP
	1������
		<1>Aspect�����棩 �� ������־����ȫ�Կ�ܡ�Ȩ�޵ȶ�������
		
		<2>joinpoint(���ӵ�) �� Ŀ�����Ŀ�귽�������ɿͻ����ڵ��õ�ʱ�������
		
		<3>Pointcut������㣩 �� ֻ�з�������㣬������֪ͨ��Ŀ�귽�������һ����ν�������ָ����Ҫ����Щ���صķ����Ķ���.
			
		<4>Advice��֪ͨ�� �� �����еķ�������֪ͨ
			
		<5>Targect��Ŀ���ࣩ �� �����Ŀ����� 
		
		<6>Weaving��֯�룩�� �γɴ������ķ����Ĺ���
		
	2���������ʽ
		execution��public * *��..����  ���еĹ�������

		execution��* set*��..����  ��set��ͷ�����ⷽ��

		execution��* com.xyz.service.AccountService.*��..���� com.xyz.service.AccountService���е����еķ���

		execution��* com.xyz.service.*.*��..����  com.xyz.service���е����е�������еķ���

		execution��* com.xyz.service..*.*��..���� com.xyz.service�����Ӱ������е�������еķ���

		execution(* cn.itcast.spring.sh..*.*(String,?,Integer))  cn.itcast.spring.sh�����Ӱ������е��������������
																	��һ������ΪString,�ڶ�������Ϊ�������ͣ�
																	����������ΪInteger���͵ķ���
	3��springAOP�ľ�����ز��裺
		   <1> ��spring����������ʱ�򣬼�����spring�������ļ�
		   <2> Ϊ�����ļ������е�bean��������
		   <3> spring���������aop:config������ 
			   1�������������ʽ�����������ʽ������spring�����е�bean��ƥ��
					���ƥ��ɹ������Ϊ��bean����������󣬴������ķ���=Ŀ�귽��+֪ͨ
					���ƥ�䲻�ɹ������ᴴ���������
		   <4> �ڿͻ�������context.getBean��ȡ����ʱ������ö����д�������򷵻ش�����������������򷵻�Ŀ�����

		˵�������Ŀ����û��ʵ�ֽӿڣ���spring���������cglib�ķ�ʽ��������������ʵ���˽ӿڣ������jdk�ķ�ʽ
		
	4��֪ͨ
		<1>ǰ��֪ͨ  <aop:before method="privilege" pointcut-ref="salary"/>
		  a����Ŀ�귽��ִ��֮ǰִ��
		  b������Ŀ�귽���Ƿ��׳��쳣����ִ�У���Ϊ��ִ��ǰ��֪ͨ��ʱ��Ŀ�귽����û��ִ�У���û�������쳣
		  
		<2>����֪ͨ  
		  a����Ŀ�귽��ִ��֮��ִ��  <aop:after-returning method="logging" pointcut-ref="salary" returning="nihao"/>
		  b����Ŀ�귽�������쳣������֪ͨ������ִ��
		  c������֪ͨ���Խ���Ŀ�귽���ķ���ֵ�����Ǳ���ע�⣺ 
				   ����֪ͨ�Ĳ��������ƺ������ļ���returning="var"��ֵ��һ�µ�
				   
		<3>����֪ͨ��<aop:after method="logging" pointcut-ref="salary"/>
		  a����Ŀ�귽��ִ��֮��ִ��
		  b������Ŀ�귽���Ƿ��׳��쳣����ִ�У���Ϊ�൱��finally
		  
		<4>�쳣֪ͨ
		  a������Ŀ�귽���׳����쳣��Ϣ
		  b������
			   ���쳣֪ͨ��������һ������Throwable  ex
			   �������ļ���
				  <aop:after-throwing method="throwingMethod" pointcut-ref="salary" throwing="ex"/>
				  
		<5>����֪ͨ
		  a��������ڻ���֪ͨ�е���ProceedingJoinPoint��proceed��Ŀ�귽������ִ��
		  b������֪ͨ���Կ���Ŀ�귽����ִ��

		<6>��5�����͵�֪ͨ�����ڲ�����ʱ������֯ 
			try{ 
			
		����֪ͨ�ں�	����ǰ��֪ͨ 				����֪ͨ��ǰ��		����ǰ�ô���
						����ǰ�ô��� 									����ǰ��֪ͨ
						����Ŀ����󷽷�    							����Ŀ����󷽷�
						���ƺ��ô��� 									���ú���֪ͨ
						���ú���֪ͨ 									���ƺ��ô���
						
			}catch(Exception e){ 
				�����쳣֪ͨ 
			}finally{ 
				��������֪ͨ 
			} 

����Spring��JDBC����

	<bean
		class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
		<property name="locations">
			<value>classpath:jdbc.properties</value>
		</property>
	</bean>

	<bean id="dataSource" destroy-method="close"
		class="org.apache.commons.dbcp.BasicDataSource">
		<property name="driverClassName" value="${jdbc.driverClassName}" />
		<property name="url" value="${jdbc.url}" />
		<property name="username" value="${jdbc.username}" />
		<property name="password" value="${jdbc.password}" />
	</bean>
	
	<bean id="transactionManager"
		class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<property name="dataSource">
			<ref bean="dataSource" />
		</property>
	</bean>
	
	<tx:advice id="tx" transaction-manager="transactionManager">
		<tx:attributes>
			<tx:method name="save*" read-only="false" />
		</tx:attributes>
	</tx:advice>
	
	<aop:config>
		<aop:pointcut expression="execution(* com.mjs.service.impl.*.* (..))"
			id="perform" />
			<aop:advisor advice-ref="tx" pointcut-ref="perform" />
	</aop:config>
		
�ġ�Spring��HIbernate����
	<bean
		class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
		<property name="locations">
			<value>classpath:jdbc.properties</value>
		</property>
	</bean>
	
	<bean id="dataSource" destroy-method="close"
		class="org.apache.commons.dbcp.BasicDataSource">
		<property name="driverClassName" value="${jdbc.driverClassName}" />
		<property name="url" value="${jdbc.url}" />
		<property name="username" value="${jdbc.username}" />
		<property name="password" value="${jdbc.password}" />
	</bean>
	
	<bean id="sessionFactory" class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
		<property name="configLocation">
			<value>classpath:hibernate.cfg.xml</value>
		</property>
	</bean>
	
	<bean id="transactionManager" class="org.springframework.orm.hibernate3.HibernateTransactionManager">
		<property name="sessionFactory">
			<ref bean="sessionFactory"/>
		</property>
	</bean>
	
	<tx:advice id="tx" transaction-manager="transactionManager">
		<tx:attributes>
			<tx:method name="save*" read-only="false" />
		</tx:attributes>
	</tx:advice>
	
	<aop:config>
		<aop:pointcut expression="execution(* com.mjs.hibernate.dao.impl.*.* (..))" id="perform"/>
		<aop:advisor advice-ref="tx" pointcut-ref="perform"/>
	</aop:config>
	
�塢����ʽ������

����Spring4 Jar�����

	Spring AOP��Spring�����������̣��ṩAOP�����������̣���ʵ��
	
	Spring Aspects��Spring�ṩ�Ķ�AspectJ��ܵ�����
	
	Spring Beans��Spring IOC�Ļ���ʵ�֣��������������ļ��������͹���bean�ȡ�
	
	Spring Context���ڻ���IOC�������ṩ��չ���񣬴��⻹�ṩ�����ҵ�������֧�֣�
		���ʼ�����������ȡ�JNDI��λ��EJB���ɡ�Զ�̷��ʡ������Լ�������ͼ���ܵ�֧�֡�
		
	Spring Context Support��Spring context����չ֧�֣�����MVC���档
	
	Spring Core��Spring�ĺ��Ĺ��߰�
	
	Spring expression��Spring���ʽ����
	
	Spring Instrument��Spring�Է������Ĵ���ӿ�
	
	Spring Instrument Tomcat��Spring��tomcat���ӳصļ���
	
	Spring JDBC����JDBC �ļ򵥷�װ
	
	Spring JMS��Ϊ��jms api��ʹ�ö����ļ򵥷�װ
	
	Spring orm�����ϵ�������ormʵ�֣���hibernate��ibatis��jdo�Լ�spring ��jpaʵ��
	
	Spring oxm��Spring����object/xmlӳ���֧�֣�������JAVA��XML֮�������л�
	
	Spring test����JUNIT�Ȳ��Կ�ܵļ򵥷�װ
	
	Spring tx��ΪJDBC��Hibernate��JDO��JPA���ṩ��һ�µ�����ʽ�ͱ��ʽ�������
	
	Spring web������WebӦ�ÿ���ʱ���õ�Spring���ʱ����ĺ����࣬�����Զ�����WebApplicationContext
		���Ե��ࡢStruts��JSF�����ࡢ�ļ��ϴ���֧���ࡢFilter��ʹ������߸����ࡣ
		
	Spring webmvc������SpringMVC�����ص������ࡣ�������ʻ�����ǩ��Theme����ͼչ�ֵ�FreeMarker��
		JasperReports��Tiles��Velocity��XSLT����ࡣ��Ȼ��������Ӧ��ʹ���˶�����MVC��ܣ�
		���������JAR�ļ�����κ��ࡣ
		
	Spring webmvc portlet��Spring MVC����ǿ


if [ $have_tty -eq 1 ]; then
  JAVA_OPTS="-server -XX:PermSize=64M -XX:MaxPermSize=128m 



  spring

  AOP���ģ������˺���ҵ�������������Ҫ�ظ����õ�ҵ���ģ���зֳɹ�������������

  ��־����
  ��ȫ���
  Ȩ�޼��
  ���󻺴�
  �쳣����
  ͳ�Ʒ���ִ��ʱ��