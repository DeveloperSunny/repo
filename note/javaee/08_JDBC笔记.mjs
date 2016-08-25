
һ��JDBC����
	JDBC:Java DataBase Connectivity(Java�������ݿ�ı�׼��SUN�ƶ���)
	JDBC�����ݿ��������ʲô��ϵ��JDBC�ǹ淶������㣬���ݿ������Ǿ����ʵ�֡�
	JDBC�淶��һЩ������ͽӿ���ɣ�һ�����java.sql.*��javax.sql.*���У�JDK�д���
	
*****����JDBC����Ĳ���
	׼���������ݿ���������뵽����·����
	1��������������ע������
	2����ȡ�����ݿ������
	3���õ�����SQL���Ķ��󣬲�����SQL�����ݿ�
	4������в�ѯ������õ���װ�˲�ѯ����Ķ���
	5���������
	6���ͷ�ռ�õ���Դ
	
����JDBC�г��ýӿں������ϸ����
	1��DriverManager
		���ã�ע���������õ����ݿ������
		ע��������
			DriverManager.registDriver(new com.mysql.jdbc.Driver());(����ȡ)
			ԭ��1������������������ݿ�������2���ᵼ������ע��2�顣
			���������
		��ȡ���ݿ�����ӣ�
			static Connection getConnection(String url,String user,String password):
					url:���ݿ�����Ӵ���
						mysql��jdbc:mysql://localhost:3306/day14���ݿ�������jdbc:mysql:///day14(���ӱ���Ĭ�϶˿��ϵ�mysql���ݿ�)
					user:���ݿ���û���
					password:���ݿ������
			static Connection getConnection(String url,Properties info)
			static Connection getConnection(String url)
			
	2��Connection
		���������ݿ⽻�������뽨�������ӵĻ�����
	3��Statement
		���ã�������SQL���
		���õķ�����
			ResultSet executeQuery(String sql):sql��DQL���
			int executeUpdate(String sql):sql��DML��䡣������û�з��ؽ����DDLҲ���ԡ�����ֵ�����������Ӱ�쵽��������
			boolean execute(String sql):sql�������κε�sql��䡣����н�������أ�����true�����򷵻�false��	
										
	4��ResultSet
		boolean next():����һ��
		boolean previous():����һ��
		void absolute(int row):��һ�еļ�¼����1
		void beforeFirst():�ƶ�����һ�е�ǰ��
		void afterLast():�ƶ������һ�еĺ���
		
	5���ͷ���Դ
�ġ�����JDBC�����ݿ����CRUD
�塢����JDBC��дԭ�е��û�ע��͵�¼�İ���
����SQL��ע�뼰����

PreparedStatement:(����ʹ�������Ͳ�Ҫ��ʹ��Statement)
	���ã�
	1��Ԥ����SQL��䣬���ݿ�ִ��Ч�ʸߡ�
	2����ֹSQLע��
	3��֧�ֲ���ռλ��"?"
	
�ߡ��ͻ�����ϵͳ��Web��ĿCRUD��

Lesson 2

****һ���ͻ�����ϵͳ��ʵ�֣�JavaWeb+JDBC)
	1���������ݿ�
		create database clientManagementSystem;
		use clientManagementSystem;
		create table customer(
			id varchar(100) primary key,
			name varchar(200),
			gender varchar(10),
			birthday date,
			cellphone varchar(20),
			email varchar(200),
			hobby varchar(200),
			type varchar(100),
			description varchar(255)
		);
	2������JavaWebӦ�ã������������jar����
		mysqldriver.jar
		beanutils.jar
		commons-logging.jar
		jstl.jar
		standard.jar
		
****������������ʾʱ��ҳ�����Ѷ�Ŷ��
		MySQL:select * from customer limit m,n;
		m:ÿҳ��ʼ�ļ�¼�������š�����0��ʼ��
		n:ÿҳ��ʾ������

		ÿҳ��ʾ10��
		��1ҳ�����ݣ�select * from customer limit 0,10;
		��2ҳ�����ݣ�select * from customer limit 10,10;
		��3ҳ�����ݣ�select * from customer limit 20,10;

		ÿҳ��ʼ��¼������=(��ǰҳ��-1)*ÿҳ��ʾ������


		�ܹ�����ҳ=������%ÿҳ��ʾ������==0��������/ÿҳ��ʾ������:������/ÿҳ��ʾ������+1��


		DAO����죺
			/**
			 * ��ѯ��¼��������
			 */
			int getTotalRecords();
			/**
			 * ��ѯ��ҳ����
			 * @param startIndex ÿҳ��ʼ��¼���������
			 * @param pagesize ÿҳ��ʾ�ļ�¼����
			 * @return
			 */
			List<Customer> findPageRecords(int startIndex,int pagesize);

		Service���죺
			/**
			 * �����û�Ҫ����ҳ�뷵�ط�װ�˷�ҳ�й����ݵ�Page����
			 */
			Page findPageReocrds(String pagenum);

		Servlet���죺
				String pagenum = request.getParameter("pagenum");//�û�Ҫ����ҳ��
				Page page = s.findPageReocrds(pagenum);
				page.setServletUrl("/servlet/ShowAllCustomersServlet");
				request.setAttribute("page", page);
				request.getRequestDispatcher("/listCustomers.jsp").forward(request, response);

����������

�ġ����ı��ʹ�����Ƶ����ݿ��ȡ

Lesson 3

һ����ȡ���ݿ��Զ����ɵ�����:������ֵ������Լ��ĳ�����ά��
	create database day16;
	use day16;
	create table t1(
		id int primary key auto_increment,
		name varchar(100)
	);
������ε��ô洢����
***������������
	TPL������������

	start transaction:����һ������
	rollback:�ع�
	commit���ύ����

	JDBC���������йصķ�����
	Connection.setAutoCommit(boolean b)
	Connection.rollback()
	Connection.rollback(Savepoint sp)
	Connection.commit();


*****�ġ���������ԣ����뼶��
	A:ԭ���ԡ�˵��������һ�����ɷָ�ĵ�λ��
	C��һ����.�������ʹ���ݿ��һ��һ����״̬�任������һ��һ����״̬.(����ת��)
	*I�������ԡ�һ�������ܱ�����������š�
	D���־��ԡ�����һ���ύ����Ӧ�ñ����ñ���������

	�������������ĸ��뼶�𣬻�������¡�����ȷ���������
	�����ָһ�������������һ��������δ�ύ�����ݡ�
	�����ظ��������һ����¼�ģ�ͬһ����¼ǰ��һ��
	������ö��������һ�ű�ǰ������ļ�¼������һ����

	MySQL�п���������뼶�����䣺
		select @@tx_isolation;     //�鿴��ǰ��������뼶��
		set transaction isolation level ��ļ�������֮һ��;//���ø��뼶��




	���뼶��ķ��ࣺ
	READ UNCOMMITTED:����������ظ�����������п��ܷ�����
	READ COMMITTED:�ܱ�������������ظ�����������п��ܷ�����
	REPEATABLE READ:�ܱ�������������ظ��ȣ�������п��ܷ�����
	SERIALIZABLE:�ܱ�������������ظ��ȡ������


*****�塢���ݿ����ӳ�ԭ��

*****������д��׼�����ݿ����ӳ�
	ʵ����javax.sql.DataSource�Ĳ��Ǳ�׼�����ݿ����ӳأ�����������˼��һ���֮Ϊ����Դ��
	
	����һ����֪���ĳ���������й����ϵĸı����������ַ�ʽ��
	1���������࣬��չ�����ĳ�����ܡ����˴��в�ͨ��
	2�����ð�װ���ģʽ��дԭ�е���Ĺ���
		a����дһ����ʵ���뱻��д�ࣨcom.mysql.jdbc.Connection����ͬ�Ľӿ�
		b������һ�����ã���ס����д���ʵ��
		c�����幹�췽�������뱻��д���ʵ��
		d������Ҫ��д�ķ�������д����
		e�����ڲ���Ҫ��д�ķ���������ԭ�еĶ���Ķ�Ӧ����
		
		*****��װ���ģʽ
		*****Ĭ�����������ģʽ
		
	3����̬����
		*****���ڽӿڵĶ�̬����
	java.lang.reflect.Proxy
	static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h) 
 
	���ã����ش������ʵ��
	������loader�����������һ���뱻�������ʹ��ͬһ��
		 interfaces�������������ʵ�ֵĽӿ�
		 h����ô����
			 Object invoke(Object proxy, Method method, Object[] args) ������ԭ������κη��������ᾭ���˷�����
			 
***�ߡ���Դ������Դʹ��
		DBCP��DataBase Connection Pool
			1����Ҫ��jar��commons-dbcp.jar  commons-pool.jar
			2����DBCP�������ļ�����������·����
			3��
			

			public class DBCPUtil {
				private static DataSource ds;
				static{
					try {
						InputStream in = DBCPUtil.class.getClassLoader().getResourceAsStream("dbcpconfig.properties");
						Properties props = new Properties();
						props.load(in);
						ds = BasicDataSourceFactory.createDataSource(props);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				public static Connection getConnection(){
					try {
						return ds.getConnection();
					} catch (SQLException e) {
						throw new RuntimeException(e);
					}
				}
				public static void release(ResultSet rs,Statement stmt,Connection conn){
					if(rs!=null){
						try {
							rs.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
						rs = null;
					}
					if(stmt!=null){
						try {
							stmt.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
						stmt = null;
					}
					if(conn!=null){
						try {
							conn.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
						conn = null;
					}
				}
			}

		C3P0����һ�������˵Ĵ���
			����jar��
			
**�ˡ����ݿ�Ԫ��Ϣ�Ļ�ȡ����д���ʱʹ�ã�
*****�š���д�����Լ���JDBC��ܣ����䣩
			�������ģʽ
			
Lesson 4

һ��DBUtil��ܵ�ʹ�ã�DBAssistһ���ģ�

	new QueryRunner()  //Connection ���Զ��ͷ�
	new QueryRunner(DataSource)  //Connection �Զ��ͷ�
	
����DBUtil����е����н��������

	new BeanHandler<People>(People.class) //��װ��javaBean��
	new BeanListHandler<People>(People.class) //��װ��List��
	new ArrayHandler() //�ѽ�����еĵ�һ������ת�ɶ������顣ֻ�ʺϽ������һ����¼�����
	new ArrayListHandler() //�ѽ�����е�ÿһ�����ݶ�ת��һ�����飬�ٴ�ŵ�List�С�
	new ColumnListHandler("name") //���������ĳһ�е����ݴ�ŵ�List��
	new KeyedHandler("name") //��������е�ÿһ�����ݶ���װ��һ��Map<����,��ֵ>��ٰ���Щmap�ٴ浽һ��map���keyΪָ����key��
	new MapHandler()  //��������е�ÿһ�����ݶ���װ��һ��Map�Ȼ���ٴ�ŵ�List
	new ScalarHandler()  //�ʺ�ȡһ��һ�еļ�¼�������¼����
	
*****����ʵ�ʿ����е��������
*****�ġ�ThreadLocal��

		public class TransactionUtil {
			private static ThreadLocal<Connection> tl = new ThreadLocal<Connection>();
			
			private static DataSource ds;
			static{
				try {
					InputStream in = DBCPUtil.class.getClassLoader().getResourceAsStream("dbcpconfig.properties");
					Properties props = new Properties();
					props.load(in);
					ds = BasicDataSourceFactory.createDataSource(props);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			public static DataSource getDataSource(){
				return ds;
			}
			public static Connection getConnection(){
				try {
					Connection conn = tl.get();
					if(conn==null){
						conn = ds.getConnection();
						tl.set(conn);
					}
					return conn;
				} catch (SQLException e) {
					throw new RuntimeException(e);
				}
			}
			public static void startTransaction(){
				try {
					Connection conn = tl.get();
					if(conn==null){
						conn = this.getConnection();
					}
					conn.setAutoCommit(false);
				} catch (SQLException e) {
					throw new RuntimeException(e);
				}
			}
			public static void rollback(){
				try {
					Connection conn = tl.get();
					if(conn==null){
						conn = this.getConnection();
					}
					conn.rollback();
				} catch (SQLException e) {
					throw new RuntimeException(e);
				}
			}
			public static void commit(){
				try {
					Connection conn = tl.get();
					if(conn==null){
						conn = this.getConnection();
					}
					conn.commit();
				} catch (SQLException e) {
					throw new RuntimeException(e);
				}
			}
			public static void relase(){
				try {
					Connection conn = tl.get();
					if(conn!=null){
						conn.close();
						tl.remove();
					}
				} catch (SQLException e) {
					throw new RuntimeException(e);
				}
			}
		}
		
�塢������ɾ�Ĳ�
	һ�Զ�
	��Զ�
	һ��һ