java������ǿ
1��JDK5.0����
	������
2����̬����(�˽�)
	���ã��������еľ�̬��Ա
	�﷨��import static java.lang.System.out;
	����import static java.lang.System.*;

3���Զ�װ��Ͳ���
	��������---->��װ���ͣ�װ��
	��װ����---->�������ͣ�����

	���ٻ��棺true��false��byte������~128-->+127������� ������\u0000��\u007F����ַ�
	�����Щ�������͵İ�װ�������ͬһ������


4����ǿforѭ����
	��Ƶı��⣺����������
	��ǿforѭ��ֻ�ܱ��������ʵ����Iteratable�ӿڵĶ���
	�﷨��
	for(Ԫ�ص����� ������:�����ʵ����Iteratable�ӿڵĶ���){
		System.out.println(������);
	}

	��ǿforѭ�����ص㣺ֻ�ʺϡ�Ҫ���ڱ���ʱ��Ԫ�ص�ֵ����ʹ�ô�ͳforѭ����


5���ɱ����
	�ɱ�����͵��������鼴�ɡ�
	һ�������Ĳ����б��У�ֻ����һ���ɱ�������ұ���������

6��ö��
7������
	�����˿�����֮��ꡣ
	�����ȵõ�����ֽ������Class clazz = Class.forName(�����������);

	��εõ�����ֽ��룺
			Class.forName(�����������);
			������������.getClass();
			����.class
	�ڷ��䷽��ʱ����������Ĳ�����һ�����飬���ǵ����¼������⣬�ᰴ��JDK1.4���﷨���Դ���JVM��Ѵ��ݵ���������𿪣��𿪾ʹ�������ĸ�����ƥ�䣩
	����취����ֹJVM���������
		��ʽһ�������鿴����һ��Object����
		��ʽ�������¹���һ��Object���飬�Ǹ�����������ΪΨһ��Ԫ�ش��ڡ�
	
8����ʡ
	beanutils��ʡ���(����commons-logging)��apache
	www.apache.org
9������
	ֻ���������õġ���������ֽ�����û�з��͵ġ�
	���ͣ�����Ⱥ����Ҷ��õ��˷��ͣ���������һ�¡�
	ArrayList<Object> list = new ArrayList<String>();�����

	ֻ��һ��ʹ�÷��ͣ���һ�߲�ʹ�÷����ǿ��Եġ�
	ֻ���������Ͳ�����Ϊ���ͷ�����ʵ�ʲ���
	
Lesson 2

һ��ע��
1��ע������ã���������ļ�
2��JDK���ṩ������������ע��
	@Override:˵���Ƿ񸲸��˸���ķ�����
	@Deprecated��˵����ʱ�ˡ�
	@SuppressWarnings�����ƾ���
			@SuppressWarnings("���Ƶľ���ľ�������")��
				unused������δʹ��
				deprecation:ʹ���˲��޳�ʹ�õ���򷽷�ʱ�ľ���
				unchecked��ִ����δ����ת��ʱ�ľ��档����û��ʹ�÷���
				falthrough����switch�����ֱ��ͨ����һ�������û��breakʱ�ľ���
				path������·����Դ�ļ�·�������в����ڵ�·��ʱ�ľ��档
				serial�����ڿ����л�����ȱ��serialVersionUID����ʱ�ľ���
				finally���κ�finally�Ӿ䲻���������ʱ�ľ��档
				all������������������ľ��档
3��ע��ѧϰĿ�꣺
	a���Զ���ע��
	b������ע��
4���Զ���ע����﷨��
	ע�Ȿ��public @interface MyAnnotation{}
		ʹ�ùؼ���@interface����һ������ѡ���������ע�⡣
	ע���е����ԣ�
		������ʽ������ ��������();	
				���磺String name();
					ʹ�ã�@MyAnnotationDemo1(name="hello")
		�ر�ע�⣺ע������Ե�����ֻ���ǣ��������͡�String��Class��ö�١�ע�����ͼ��������͵�һά���顣
	ע�����Ե�Ĭ��ֵ��
			���� ��������() default Ĭ��ֵ;
	ע���е��������ԣ�
			���� value();   ʹ��ʱ,���ֻ��value����ֵ�����������ã�@MyAnnotationDemo1(value="hello")����@MyAnnotationDemo1("hello")
							  ʹ��ʱ,���ֻ��value����ֵ����Ҫ��������������ֵ�����������ã�
																		@MyAnnotationDemo1(value="hello",name="aaa")
			����[] value();
							ʹ�÷�ʽ��ͬvalue��
								ʹ�÷�ʽ�����ֶ�ok
										//	@MyAnnotationDemo1(value={"a","b"})
										//	@MyAnnotationDemo1({"a","b"})
										//	@MyAnnotationDemo1({"a"})
											@MyAnnotationDemo1("a")
											
5��Ԫע�⣺
	���壺������ע���ע�����Ԫע�⡣
	***@Retention��ע��ı�����Χ
		RetentionPolicy.SOURCE:ע�������Դ�ļ���
		RetentionPolicy.CLASS:ע�������Դ�ֽ����ļ���
		RetentionPolicy.RUNTIME:ע�����������ʱ
	***@Target��ע����ֵ�λ��
	@Documented: ����ָ������Ԫ Annotation ���ε� Annotation �ཫ�� javadoc ������ȡ���ĵ�.
	@Inherited: �������ε� Annotation �����м̳���.���ĳ����ʹ���˱� @Inherited ���ε� Annotation, �������ཫ�Զ����и�ע��
����Servlet3.0���¹淶
1��Ҫ��
	jdk6.0+
	Tomcat7.0+
2������ע�������web.xml�����ļ�
	@WebServlet������Servlet��
	@WebInitParam:����Servlet��Filter�ĳ�ʼ������
	@WebFilter�����ù�����
	@WebListener��ע�������
	@MultipartConfig//֤���ͻ����ύ�ı��������ɶಿ����ɵ�