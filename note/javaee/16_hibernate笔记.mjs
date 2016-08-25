һ���������ļ�
	1���������ݿ���Ϣ
		connection.username
		connection.password				
		connection.driver_class			com.mysql.jdbc.Driver
		hibernate.dialect				org.hibernate.dialect.MySQLDialect
		connection.url					jdbc:mysql://localhost:3306/database
	2����������
		<property ...>
			show_sql		��ʾ���ɵ�SQL���
			format_sql		��ʽ�����ɵ�SQL���
			hbm2ddl.auto	�Զ����ɱ�ṹ
	3�����ɱ�ṹ�����ַ�ʽ��
		1��hbm2ddl.auto 
				create����ɾ�����ٴ���
				update����������ھʹ�������һ���͸��£�һ����ʲô��������
				create-drop����ʼ��ʱ������SessionFactoryִ��close()ʱɾ����
				validate����֤��ṹ�Ƿ�һ�£������һ�£������쳣��
			
		2��ʹ��SchemaExport������
����ӳ�������ļ�
	1��������
		��������֣�����ʹ�ð�װ���͡�

		identity		ʹ�����ݿ���Զ��������ԣ������������ݿⶼ֧�֣�����oracle�Ͳ�֧�� 
		sequence		�� DB2��PostgreSQL��Oracle��SAP DB��McKoi ��ʹ�����У�sequence��
		hilo			ʹ�øߵ�λ�㷨��������ֵ��ֻ��Ҫһ�Ŷ�������е����ݶ�֧�֡�
		native			 ���ݵײ����ݿ������ѡ�� identity��sequence ���� hilo�е�һ����
		assigned		�ֹ�ָ������ֵ
		uuid
		foreign			
		increment		��Hibernateά�����Զ��������Ȳ�ѯ��ǰ����idֵ���ټ�1ʹ��.���Ƽ�ʹ�ã���Ϊ�ڶ��߳��»����⡣
		...
	2��ӳ�����
	3����ͨ����
		not-null="true"    �ǿ�Լ��
	4����������
	5����������
	
		inverse����:
				Ĭ��Ϊfalse����ʾ����ά��������ϵ��
				���Ϊtrue����ʾ������ά��������ϵ��
				ֻ��Ӱ���Ƿ�����������е�ֵ�������Чֵ����nullֵ�����Ի�ȡ��Ϣû��Ӱ�졣
				
		cascade���ԣ�
				Ĭ��Ϊnone������������
				������ָ����������ʱ���Թ����Ķ���Ҳ����ͬ�Ĳ�����
				����Ϊ��delete, save-update, all, none ...
		property-ref���ԣ�
				д���ǶԷ�ӳ��������ж�Ӧ����������
		˫�����
			һ�Զ�/���һ
				Employee:
					<many-to-one name="dep" class="com.mjs.f_one_to_many_double.Department" column="departmentId"></many-to-one>
				Department:
					<set name="emps" cascade="all" inverse="true">
						<key column="departmentId"></key>
						<one-to-many class="com.mjs.f_one_to_many_double.Employee" />
					</set>
			
			��Զ�
				Student:	<set name="teachers" table="teacher_student" inverse="false">
								<key column="studentId"></key>
								<many-to-many class="Teacher" column="teacherId"></many-to-many>
							</set>
				Teacher:	<set name="students" table="teacher_student" inverse="true">
								<key column="teacherId"></key>
								<many-to-many class="Student" column="studentId"></many-to-many>
							</set>
			һ��һ
				IdCard:<many-to-one name="person" class="com.mjs.h_one_to_one.Person" column="personid" unique="true" cascade="delete"></many-to-one>
				Person:<one-to-one name="idcard" class="com.mjs.h_one_to_one.IdCard" property-ref="person"></one-to-one>
				
				id <--->id
					IdCard:		<generator class="foreign">
									<param name="property">person</param>
								</generator>
								<one-to-one name="person" class="Person" constrained="true" cascade="delete"></one-to-one>
								
					Person:		<generator class="native"></generator>
								<one-to-one name="idCard" class="IdCard"></one-to-one>
		���������
			������һ
				Employee : <many-to-one name="dep" class="Department" column="departmentId">
				Department :
				
				session.save(dep);
				session.save(emp1);			3��insert���
				session.save(emp2);
				
			����һ�Զ�
				Employee��
				Department��<set name="emps" cascade="all">
								<key column="departmentId"></key>
								<one-to-many class="com.mjs.e_one_to_many.Employee" />
							</set>
				session.save(dep);			3��insert���+����update���
				
			�����Զ�
				Teacher:	<set name="stus" cascade="all" table="stu_tea_single">
								<key column="teacherId"></key>
								<many-to-many class="com.mjs.g_many_to_many.Student" column="studentId"></many-to-many>
							</set>
				
				Student:
				
			����һ��һ��ֻ�����������������������ĵ��������
				IdCard:<many-to-one name="person" class="com.mjs.h_one_to_one.Person" column="personid" unique="true" cascade="delete"></many-to-one>
				Person:
		
����API
	Configuration	����
		configure()	
		configure(String resource)
		addResource(String resource)	����һ��ָ��λ�õ�ӳ���ļ�
		addClass(Class clazz)			������ָ����ͬһ�����е�������Ϊǰ׺����׺Ϊ.hbm.xml��ӳ���ļ�
		buildSessionFactory()

	SessionFactory	Session����
		openSession()
		getCurrentSession()
		close()

	Session			����Ҫ��һ������
		��������ķ���
		save(Object)
		update(Object)
		delete(Object)
		��ѯ�ķ���
		createQuery(String)	--> Query
		createCriteria(Class)
		��������ķ���
		beginTransaction() --> Transaction
		getTransaction()   --> Transaction	��ȡ��ǰSession�й������������
		�����ķ���
		...

	Transaction		����
		commit()
		rollback()

	Query			��ѯ
		list()			��ѯһ��������ϡ�
		uniqueResult()	��ѯһ��Ψһ�Ľ�������û�н�����򷵻�null���������ж���������쳣��
		...
�ġ���������
	1�����ݿ����ӳ�
	2��������
	3����������
	4��Session����
		�����״̬��
		
			��ʱ״̬��
				�����ݿ�û�ж�Ӧ����Sessionû�й�����
				һ������new���Ķ���

			�־û�״̬��
				������Session�Ĺ���֮�У����ջ��ж�Ӧ�����ݿ��¼��
				�ص㣺
					1����OID
					2���Զ�����޸Ļ�ͬ�������ݿ⡣

			����״̬��
				���ݿ����ж�Ӧ��¼����������Session����֮�С�
				�޸Ĵ�״̬����ʱ���ݿⲻ���б仯��

			ɾ��״̬��
				ִ����delete()��Ķ���
		==============================================================
			1������ʵ������
				save()                ����ʱ״̬��Ϊ�־û�״̬������Sessioin����
				update()			  ������״̬��Ϊ�־û�״̬    �ڸ���ʱ�����󲻴��ھͱ���
				saveOrUpdate()		  ����ʱ������״̬תΪ�־û�״̬    
									  �������Ǹ���id�ж϶�����ʲô״̬�ģ����idΪԭʼֵ���������null��ԭʼ����������0��������ʱ״̬���������ԭʼֵ��������״̬��
				delete()			  �ѳ־û�������תΪɾ��״̬		���ɾ���Ķ��󲻴��ڣ��ͻ����쳣
				
			2�����������
				clear()
				evict()
				flush()

			3����ѯʵ������
				get()				  get()����ȡ���ݣ��ǳ־û�״̬  ������ִ��sql���  ������ݲ����ڣ��ͷ���null
				load()				  ��ȡ���ݣ��ǳ־û�״̬
									  load()�󷵻ص���һ���������Ҫ���಻����final�ģ�������������������Ͳ���ʹ�������ع�����
									  ��������ʧЧ�ķ�ʽ��һ����ʵ��д��final�ģ�������hbm.xml��д<class ... lazy="false">
									  ��������ִ��sql��䣬�����ڵ�1��ʹ�÷�id��class����ʱִ��sql��
									  ������ݲ����ڣ������쳣��ObjectNotFoundException
				createQuery()
				createCriteria()
				
						���ط�ʽ		����ֵ		������ݲ�����
				---------------------------------------------------------
				get		��������	��ʵ�����null		����null
				load	�ӳټ���	�������			���쳣
				
�塢ӳ��ע��
	1�� @Entity  	��һ��������Ϊһ��ʵ��bean(��һ���־û�POJO��)
	
	2�� @Id 		ע�������˸�ʵ��bean�ı�ʶ���ԣ���Ӧ���е���������
	
	3�� @Table 		ע�������˸�ʵ��beanӳ��ָ���ı�table��,Ŀ¼��catalog����schema������
	
	4�� @Column		ע�����������Ե��е�ӳ�䡣��ע�������µ�����
			�� name ��ѡ��������Ĭ��ֵ����������
			�� unique ��ѡ���Ƿ��ڸ���������ΨһԼ����Ĭ��ֵfalse��
			�� nullable ��ѡ���Ƿ����ø��е�ֵ����Ϊ�գ�Ĭ��ֵtrue��
			�� insertable ��ѡ�������Ƿ���Ϊ���ɵ�insert����е�һ���У�Ĭ��ֵtrue��
			
	5�� @GeneratedValue		ע�����������������ɲ��ԡ���ע������������
			�� strategy ָ�����ɵĲ��ԣ�JPA����ģ�������һ��GenerationType��Ĭ����GenerationType. AUTO
			�� GenerationType.AUTO �����ɳ������
			�� GenerationType.TABLE ʹ��һ���ض������ݿ�������������
			�� GenerationType.IDENTITY ���������ݿ��Զ����ɣ���Ҫ���Զ��������ͣ�
			�� GenerationType.SEQUENCE ���ݵײ����ݿ���������������������������ݿ�֧�����С������ֵҪ��generatorһ��ʹ�ã�
			�� generator ָ����������ʹ�õ���������������orcale�е����У�
			
	6��	@GenericGenerator ���� ע��������һ��hibernate���������ɲ��ԡ�֧��ʮ���ֲ��ԡ���ע������������
			�� name ָ������������
			�� strategy ָ��������������������ָ�����ɲ��ԣ�
			�� parameters �õ�strategyָ���ľ������������õ��Ĳ�������ʮ���ֲ��ԣ�strategy���Ե�ֵ�����£�
					�� native ����orcale����Sequence��ʽ������MySQL��SQL Server����identity(�����������ɻ���)   @GenericGenerator(name ="paymentableGenerator", strategy ="native")
	
	7�� @OneToOne ����һ��һ��������cascade���������ֵ(ֻ��CascadeType.ALL���ã������)���ֱ���
				CascadeType.PERSIST(�����½�)��CascadeType.REMOVE������ɾ������CascadeType.ALL��ȫ�����
				CascadeType.REFRESH������ˢ�£���CascadeType.MERGE���������£�
				
	8�� @JoinColumn(name="�������")//����ָ���������ݿ��е�����ֶΡ�
	
	9�� @OneToMany ����һ�Զ������cascade����ָ����������,�ο�@OneToOne�е�˵����fetchָ���Ƿ��ӳټ��أ�
			ֵΪFetchType.LAZY��ʾ�ӳ٣�ΪFetchType.EAGER��ʾ��������

	@OrderBy("progressTime DESC")����һ��һ����������ѯʱ����
			
	10��@MappedSuperclass ����ע��
	
	11��@Transient ���Ӳ�ȥӳ��
	
	12��(mappedBy="phones") Phone��ά����ϵ
	
	
	13��@JsonIgnoreProperties(value = { "book","user" })jsonȡ����ʱ������Щ����
	
	 cascade��ʾ��������   
	 CascadeType.MERGE�������£���items�����޸�����ôorder���󱣴�ʱͬʱ�޸�items��Ķ��󡣶�ӦEntityManager��merge����   
	 CascadeType.REFRESH����ˢ�£���ȡorder������ҲͬʱҲ���»�ȡ���µ�itemsʱ�Ķ��󡣶�ӦEntityManager��refresh(object)������Ч���������²�ѯ���ݿ������������   
	 CascadeType.PERSIST�������棺��order���󱣴�ʱҲ��items��Ķ���Ҳ�ᱣ�档��ӦEntityManager��presist����   
	 CascadeType.REMOVE����ɾ������order����ɾ��Ҳ��items��Ķ���Ҳ��ɾ������ӦEntityManager��remove����  
	
	
ժҪ:һ��mappedBy�����ϵ����Ҫ���ø����ԣ�˫���ϵ�������ã�����˫������������ֶ� �������ݿ���1�Զ�Ĺ�ϵ��������ϵ���Ǳ��෽ά���ļ�������ڶ෽�������ڵ��������@OneToMany��ma.........

����һ��mappedBy �����ϵ����Ҫ���ø����ԣ�˫���ϵ�������ã�����˫������������ֶ�

�������ݿ���1�Զ�Ĺ�ϵ��������ϵ���Ǳ��෽ά���ļ�������ڶ෽�������ڵ��������@OneToMany��mappedby=" "��

�����ѹ�ϵ��ά�������෽���������ȥά����ϵ

��������mappedBy��ϰ�£�

����a�� ֻ��OneToOne,OneToMany,ManyToMany�ϲ���mappedBy���ԣ�ManyToOne�����ڸ����ԣ�

����b�� mappedBy��ǩһ���Ƕ�����the owned side����ӵ�з��ģ�����ָ��theowning side��ӵ�з�����

����c�� ��ϵ��ӵ�з������ϵ��ά������ӵ�з���������������õ�@JoinColumn

����d��mappedBy��JoinColumn/JoinTable���Ǵ��ڻ����һ��

�����������������Լ�����⣬һֱ��hibernate�е�ά��������ϵ��̫�˽⣬�ܲ�֪�����Ǿ���ָ����ʲô

���������ά��������ϵ���ö�Զ���˵�����м���ڲ�����cascade������£��м���ɸ���ά��������ϵ��һ��ά��

/**ʹ��hql���ֱ�ӽ�ͶӰ��ѯ���ֶη��õ�������*/
�ӹ��췽��
String hql = "SELECT DISTINCT new com.itheima.elec.domain.ElecSystemDDL(o.keyword) FROM ElecSystemDDL o";