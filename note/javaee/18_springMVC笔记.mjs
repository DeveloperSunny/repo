һ������jar��

�������������

����ע�����

�ġ�REST (Representational State Transfer)�����ֲ�״̬ת�������ܹ�

�塢ʹ��POJO��Plain Old Java Object��������������ֵ

����ʹ��Servlet API ��Ϊ���

�ߡ�����ģ������

�ˡ���ͼ����ͼ������

�š�SpringMVC�Զ����ǩ

ʮ���Զ�������ת����

ʮһ������У��

ʮ��������JSON

ʮ�����ļ��ϴ�������

ʮ�ġ�������

ʮ�塢�쳣����

ʮ����SpringIOC��SpringMVC����

һ������jar��
	1��commons-logging
		//��־
	2��spring-aop
		//������Ƭ��� �ṩ��AspectJ��֧�֣��Ա���Է���Ľ�������Ĺ��ܼ��ɽ�IDE��
	3��spring-beans
		//���ġ����������ļ��������͹���bean �Լ�����IOC/DI������ص������ࡣ
	4��spring-context
		//ΪSpring �����ṩ�˴�����չ��
	5��spring-core
		//Spring ��ܻ����ĺ��Ĺ����ࡣ�ⲿ����Commons Logging ��
	6��spring-expression
		//���ö����ע�룬������SpEL (Spring Expression Language)
	7��spring-web
		//Web Ӧ�ÿ���ʱ���õ�Spring ���ʱ����ĺ�����
	8��spring-webmvc
		//Spring MVC �����ص������ࡣ������ܵ�Servlets��Web MVC��ܣ�����������ͼ֧�֡�

�������������
	1��web.xml �ļ�������Ϣ
	
		�� װ�� Servlet
			<servlet>
				<servlet-name>dispatcherServlet</servlet-name>
				<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
				<init-param>
					<param-name>contextConfigLocation</param-name>
					<param-value>classpath:springmvc.xml</param-value>
				</init-param>
				<load-on-startup>1</load-on-startup>
			</servlet>
			  
			<servlet-mapping>
				<servlet-name>dispatcherServlet</servlet-name>
				<url-pattern>/</url-pattern>
			</servlet-mapping>
			
		�� ֧�� RESTFUL ���
			<filter>
				<filter-name>HiddenHttpMethodFilter</filter-name>
				<filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
			</filter>

			<filter-mapping>
				<filter-name>HiddenHttpMethodFilter</filter-name>
				<url-pattern>/*</url-pattern>
			</filter-mapping>
			
	2��springmvc.xml �ļ�������Ϣ
		
		<!-- �����Զ�ɨ��İ� -->
		<context:component-scan base-package="com.mjs"></context:component-scan>
		
		<!-- ������ͼ������: ��ΰ� handler ��������ֵ����Ϊʵ�ʵ�������ͼ -->
		<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
			<property name="prefix" value="/WEB-INF/views/"></property>
			<property name="suffix" value=".jsp"></property>
		</bean>
����ע�����
	1��RequestMapping("index")
		//ӳ�����󣬿��Զ���������
		
		�� ����
			value��Ĭ�ϣ�������URL
			method �����󷽷�RequestMethod
			params ��������� params="id[!id][id=12]"[{"id","id=12"}]
			heads ������ͷ��ͬ���������
		�� Ant �����Դ��ַ֧�� 3 ��ƥ�����
			?��ƥ���ļ����е�һ���ַ�
			*��ƥ���ļ����е������ַ�
			**��** ƥ����·��
			
	2��PathVariable
		//ͨ�� @PathVariable ���Խ� URL ��ռλ�������󶨵�������������������У�URL �е� {xxx} ռλ������ͨ��
			@PathVariable("xxx") �󶨵���������������С�
			
		�� ʹ�þ���
			@RequestMapping("/delete/{id}")
			public String delete(@PathVariable("id") Integer id){ ///// }
		
	3��RequestParam
		//�ڴ�������δ�ʹ�� @RequestParam ���԰�����������ݸ����󷽷�
		
		�� ����
			value��������
			required���Ƿ���롣Ĭ��Ϊ true, ��ʾ��������б��������Ӧ�Ĳ������������ڣ����׳��쳣
			
		�� ʹ�þ���
			public String testRequestParam(@RequestParam(value = "username") String username){ /////// }
			
	4��RequestHeader
		//������ͷ������ֵ
		
		�� ����
			value��������
			required���Ƿ���롣Ĭ��Ϊ true, ��ʾ��������б��������Ӧ�Ĳ������������ڣ����׳��쳣
		
		�� ʹ�þ���
			public String testRequestHeader(@RequestHeader(value = "Accept-Language") String al){ //////// }
			
	5��CookieValue 
		//���ô�������ΰ�ĳ�� Cookie ֵ
		
		�� ����
			value��������
			required���Ƿ���롣Ĭ��Ϊ true, ��ʾ��������б��������Ӧ�Ĳ������������ڣ����׳��쳣
		
		�� ʹ�þ���			
			public String testCookieValue(@CookieValue("JSESSIONID") String sessionId) { ////////// }
	6��InitBinder
		//�� @InitBinder ��ʶ�ķ��������Զ� WebDataBinder ������г�ʼ����WebDataBinder �� DataBinder �����࣬��
			������ɱ��ֶε� JavaBean ���Եİ�
			
		�� @InitBinder���������з���ֵ������������Ϊvoid
		
		�� @InitBinder�����Ĳ���ͨ������ WebDataBinder
		
		�� ʹ�þ���
			@InitBinder
			public void initBinder(WebDataBinder binder){
				binder.setDisallowedFields("lastName");
			}
	
	7��DateTimeFormat
		//�ɶ�java.util.Date��java.util.Calendar��java.long.Long ʱ�����ͽ��б�ע
		
		�� ���� pattern ��pattern����Ϊ�ַ�����ָ������/��ʽ���ֶ����ݵ�ģʽ�� �磺��yyyy-MM-dd hh:mm:ss��
				iso ������Ϊ DateTimeFormat.ISO��ָ������/��ʽ���ֶ����ݵ�ISOģʽ���������֣�ISO.NONE����ʹ�ã�
					-- Ĭ�ϡ�ISO.DATE(yyyy-MM-dd) ��ISO.TIME(hh:mm:ss.SSSZ)��ISO.DATE_TIME(yyyy-MM-dd hh:mm:ss.SSSZ)
				style ���ַ������͡�ͨ����ʽָ������ʱ��ĸ�ʽ������λ�ַ���ɣ���һλ��ʾ���ڵĸ�ʽ���ڶ�λ��ʾʱ��
						�ĸ�ʽ��S��������/ʱ���ʽ��M��������/ʱ���ʽ��L��������/ʱ���ʽ��F����������/ʱ���ʽ����
						�������ڻ�ʱ���ʽ
				
	8��NumberFormat
		//�ɶ������������͵����Խ��б�ע
		�� ����		style ������Ϊ NumberFormat.Style������ָ����ʽ���ͣ��������֣�Style.NUMBER�������������ͣ���
							Style.CURRENCY���������ͣ��� Style.PERCENT���ٷ������ͣ�
					pattern ������Ϊ String���Զ�����ʽ����patter="#,###"
					
	9��HttpMessageConverter
				
�ġ�REST (Representational State Transfer)�����ֲ�״̬ת�������ܹ�

	1����Դ��Resources���������ϵ�һ��ʵ�壬����˵�������ϵ�һ��������Ϣ����������һ���ı���һ��ͼƬ��һ�׸�
		����һ�ַ�����֮����һ������Ĵ��ڡ�������һ��URI��ͳһ��Դ��λ����ָ������ÿ����Դ��Ӧһ���ض��� URI ��
		Ҫ��ȡ�����Դ����������URI�Ϳ��ԣ���� URI ��Ϊÿһ����Դ�Ķ�һ�޶���ʶ�����
		
	2�����ֲ㣨Representation��������Դ������ֳ�������ʽ���������ı��ֲ㣨Representation�������磬�ı�����
		�� txt ��ʽ���֣�Ҳ������ HTML ��ʽ��XML ��ʽ��JSON ��ʽ���֣��������Բ��ö����Ƹ�ʽ��
		
	3��״̬ת����State Transfer����ÿ����һ�����󣬾ʹ����˿ͻ��˺ͷ�������һ�ν������̡�HTTPЭ�飬��һ����״̬
		Э�飬�����е�״̬�������ڷ������ˡ���ˣ�����ͻ�����Ҫ����������������ͨ��ĳ���ֶΣ��÷������˷�����״
		̬ת������State Transfer����������ת���ǽ����ڱ��ֲ�֮�ϵģ����Ծ��� �����ֲ�״̬ת����������˵������ HTTP 
		Э�����棬�ĸ���ʾ������ʽ�Ķ��ʣ�GET��POST��PUT��DELETE�����Ƿֱ��Ӧ���ֻ���������GET ������ȡ��Դ��
		POST �����½���Դ��PUT ����������Դ��DELETE ����ɾ����Դ��
		
		
�塢ʹ��POJO��Plain Old Java Object��������������ֵ

	1��Spring MVC �ᰴ����������� POJO �����������Զ�ƥ�䣬�Զ�Ϊ�ö����������ֵ��֧�ּ������ԡ�
		
		@RequestMapping("/testPojo")
		public String testPojo(User user) {
			System.out.println("testPojo: " + user);
			System.out.println("testPojo: " + user.getAddress());
			return SUCCESS;
		}
		
����ʹ��Servlet API ��Ϊ���
	
	1��MVC �� Handler �������Խ��ܵ� ServletAPI ����
		HttpServletRequest
		HttpServletResponse 
		HttpSession 
		InputStream
		OutputStream
		Reader
		Writer
		
		java.security.Principal
		Locale
		
	2��ʹ�þ���
		@RequestMapping("/testServletAPI")
		public void testServletAPI(HttpServletRequest request,
				HttpServletResponse response, Writer out) throws IOException {
			System.out.println("testServletAPI, " + request + ", " + response);
			out.write("hello springmvc");
			// return SUCCESS;
		}
	
�ߡ�����ģ������

	Spring MVC �ṩ�����¼���;�����ģ�����ݣ�
	
		1��ModelAndView: ����������ֵ����Ϊ ModelAndView ʱ, �����弴��ͨ���ö������ģ������
			eg��
				public ModelAndView testModelAndView() {
					String viewName = SUCCESS;
					ModelAndView modelAndView = new ModelAndView(viewName);

					// ���ģ�����ݵ� ModelAndView ��.
					modelAndView.addObject("time", new Date());
					return modelAndView;
				}
				
			//Ŀ�귽���ķ���ֵ������ ModelAndView ���͡� ���п��԰�����ͼ��ģ����Ϣ SpringMVC ��� ModelAndView ��
			//model �����ݷ��뵽 request �������.
			
		2��Map �� Model: ���Ϊorg.springframework.ui.Model��org.springframework.ui.ModelMap �� java.util.Map ʱ��
			����������ʱ��Map �е����ݻ��Զ���ӵ�ģ���С�
			eg��
				public String testMap(Map<String, Object> map) {
					map.put("names", Arrays.asList("Tom", "Jerry", "Mike"));
					return SUCCESS;
				}
			
		3��@SessionAttributes: ��ģ���е�ĳ�������ݴ浽HttpSession �У��Ա�������֮����Թ����������
		
			@SessionAttributes(types=User.class) �Ὣ����ģ������������Ϊ User.class ��������ӵ��Ự�С�
			@SessionAttributes(value={"user1", "user2"}) 		//��Ӧkeyֵ
			@SessionAttributes(types={User.class, Dept.class})
			@SessionAttributes(value={"user1", "user2"},types={Dept.class})
			
			//���˿���ͨ��������ָ����Ҫ�ŵ��Ự�е�������(ʵ����ʹ�õ��� value ����ֵ),
			//������ͨ��ģ�����ԵĶ�������ָ����Щģ��������Ҫ�ŵ��Ự��(ʵ����ʹ�õ��� types ����ֵ)
			
		4��@ModelAttribute: ������α�ע��ע���, ��εĶ���ͻ�ŵ�����ģ���С�
		
			�� �ڷ���������ʹ�ã�Spring MVC �ڵ���Ŀ�괦����ǰ��������������ڷ������ϱ�ע��@ModelAttribute �ķ�����
			
			�� �ڷ��������ǰʹ�ã����Դ����������л�ȡ������ģ�������л�ȡ�����ٽ���������󶨵������У�
									�ٴ�����Ρ���������ζ�����ӵ�ģ����
				@ModelAttribute
				public void getUser(@RequestParam(value = "id", required = false) Integer id,Map<String, Object> map) {
					System.out.println("modelAttribute method:" + id);
					if (id != null) {
						User user = new User(1, "Tom", "123456", "tom@atguigu.com", 12);
						System.out.println("�����ݿ��л�ȡһ������: " + user);
						map.put("user", user);
					}
				}
				@RequestMapping("/testModelAttribute")
				public String testModelAttribute(@ModelAttribute("user")User user) {
					System.out.println(user);
					return "success";
				}
				//���ڲ����޸ĵ��ֶΣ�������ʱ��д�����Ծͺ�
	
		5����@SessionAttributes�������쳣
		
			����ڴ����ඨ�崦��ע��@SessionAttributes("xxx")�����ԴӻỰ�л�ȡ�����ԣ�
				�����丳������Σ�Ȼ������������Ϣ������ζ�������ڻỰ���Ҳ�����Ӧ����
				�ԣ����׳� HttpSessionRequiredException �쳣(�ػ���SessionAttributes��)
			���������
				�� @ModelAttribute("aaa")
				�� ����@ModelAttribute���εķ���
	
�ˡ���ͼ����ͼ������

	1����������ִ����ɺ����շ���һ�� ModelAndView ���󡣶�����Щ���� String��View �� ModeMap �����͵�
		��������Spring MVC Ҳ�����ڲ�������װ���һ��ModelAndView �������������߼�����ģ�Ͷ������ͼ��
		
	2��Spring MVC ������ͼ��������ViewResolver���õ����յ���ͼ����View�������յ���ͼ������ JSP ��Ҳ������
		Excel��JFreeChart �ȸ��ֱ�����ʽ����ͼ��
		
	3���������վ�����ȡ������ͼ�����ģ�����ݽ�����Ⱦ���������������ģ������������ص�۽�������ģ�����ݵĹ�
		���ϣ��Ӷ�ʵ�� MVC �ĳ�ֽ��
	
	4����ͼ����������Ⱦģ�����ݣ���ģ�����������ĳ����ʽ���ָ��ͻ���
	
	5����������ͼ������
	
		�� URL����Դͼ
			InternalResourceView
				//��JSP��������Դ��װ��һ����ͼ����InternalResourceViewResolverĬ��ʹ�õ���ͼ��
			JstlView
				//���JSP��ʹ����JSTL���ʻ���ǩ�Ĺ��ܣ�����Ҫʹ�ø���ͼ
				
		�� �ĵ���ͼ
			AbstractExcelView
				//Excel�ĵ���ͼ�ĳ����ࡣ����ͼ�����POI����Excel�ĵ�
			AbstractPdfView
				//PDF�ĵ���ͼ�ĳ����࣬����ͼ�����IText����PDF�ĵ�
				
		�� ������ͼ
			ConfigurableJsperReportsView
			Jasper...
				//����ʹ�� JasperReports ����������ͼ
				
		�� JSON��ͼ
			MappingJacksonJsonView
				//��ģ������ͨ�� Jackson ��Դ��ܵ� ObjectMapper �� JSON ��ʽ���
	
	6����ͼ������
		
		�� SpringMVC Ϊ�߼���ͼ���Ľ����ṩ�˲�ͬ�Ĳ��ԣ������� Spring WEB ������������һ�ֻ���ֽ������ԣ���
			ָ������֮����Ⱥ�˳��ÿһ��ӳ����Զ�Ӧһ���������ͼ������ʵ���ࡣ
			
		�� ��ͼ�����������ñȽϵ�һ�����߼���ͼ����Ϊһ���������ͼ����
		
		�� ���е���ͼ������������ʵ�� ViewResolver �ӿ�
	
	7�����õ���ͼ������ʵ����
		
		�� ����Ϊ Bean ������
			BeanNameViewResolver
				//���߼���ͼ������Ϊһ�� Bean ��Bean ��id�����߼���ͼ��
				
		�� ����Ϊ URL �ļ�
			InternalResourceViewResolver
				����ͼ������Ϊһ��URL�ļ���һ��ʹ�øý���������ͼ��ӳ��Ϊһ�������� WEB-INF Ŀ¼�µĳ����ļ���JSP��
			JasperReportsViewResolver
				JasperReports��һ������Java�Ŀ�Դ�����ߣ��ý���������ͼ������Ϊ�����ļ���Ӧ��URL
				
		�� ģ���ļ���ͼ
			FreeMarkerViewResoler
				����Ϊ����FreeMarkerģ�弼����ģ���ļ�
				
			VelocityViewReoler				
			VelocityLayoutViewResolver		//����Ϊ����Velocityģ�弼����ģ���ļ�
			
	8����ϣ��ֱ����Ӧͨ�� SpringMVC ��Ⱦ��ҳ�棬����ʹ�� mvc:view-controller ��ǩʵ��
	
		�� <mvc:view-controller path="/success" view-name="success"/>
			<mvc:annotation-driven></mvc:annotation-driven>
			<!-- ����ֱ����Ӧת����ҳ��, �������پ��� Handler �ķ���. -->
		    <!-- ��ʵ�ʿ�����ͨ���������� mvc:annotation-driven ��ǩ -->
		    
�š�SpringMVC�Զ����ǩ

ʮ���Զ�������ת����
	1����������ת����ʵ�� Converter<String, Employee>
	2����д convert(String source) ����
	3��<mvc:annotation-driven conversion-service="conversionService"></mvc:annotation-driven>	
		<bean id="conversionService"
			class="org.springframework.format.support.FormattingConversionServiceFactoryBean">
			<property name="converters">
				<set>
					<ref bean="employeeConverter"/>
				</set>
			</property>	
		</bean>
	
ʮһ������У��
	�� ʵ����֤
	
		//JSR 303 �� Java Ϊ Bean ���ݺϷ���У���ṩ�ı�׼��ܣ����Ѿ������� JavaEE 6.0 ��
		
		//JSR 303 ͨ���� Bean �����ϱ�ע������ @NotNull��@Max �ȱ�׼��ע��ָ��У����򣬲�ͨ����׼����֤�ӿڶ� Bean ��
		//����֤
		
		ע�⣺
		@Null			//����Ϊ��
		@NotNull		//����Ϊ��
		@AssertTrue		//����Ϊtrue
		@AssertFalse	//����Ϊfalse
		
		@Min(value)		//��ֵ������һ�����֣����Ҵ��ڵ���ָ��ֵ
		@Max
		@DecimalMax
		@DecimalMin
		
		@Size(max, min)	//Ԫ�ش�С��ָ����Χ��
		@Didits(integer,fraction)	//��ע�ǵ�Ԫ�ر�����һ�����֣���ֵ�����ڿɽ��ܵķ�Χ��
		@Past			//��ע�͵�Ԫ�ر�����һ����ȥ������
		@Future			//��ע�͵�Ԫ�ر�����һ��������ʱ��
		@Pattern(value)	//�������������ʽ
		
		@Email
		@Length			//��ע�͵��ַ����Ĵ�С������ָ����Χ��
		@NotEmpty		//����ǿ�
		@Range			//�������ʺϵķ�Χ��
		
		eg:
			public String save(@Valid Employee employee, Errors result){
					if(result.getErrorCount() > 0){
						System.out.println("������!");
						
						for(FieldError error:result.getFieldErrors()){
							System.out.println(error.getField() + ":" + error.getDefaultMessage());
						}
						return "input";
					}
					employeeDao.save(employee);
					return "redirect:/emps";
				}	
				
			jsp:<form:errors path="*"></form:errors>
	
	
	�� ��ʾ��Ϣ�Ĺ��ʻ�
	
		i18n.properties
			NotEmpty.employee.email=\u4E0D\u80FD\u4E0D\u80FD\u771F\u7684\u4E0D\u80FD\u4E3A\u7A7A\u554A
		
		springmvc.xml
			<bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
					<property name="basename" value="i18n"></property>
			</bean>
	
ʮ��������JSON
	1����Jackson**  3��jsr��
	2�� @ResponseBody
		@RequestMapping("testJson")
		public Collection<Employee> testJson(){
			return employeeDao.getAll();
		}
	3��$(function() {
			$("#testJson").click(function() {
				var url = this.href;
				var args = {};
				$.post(url, args, function(data) {
					for ( var i = 0; i < data.length; i++) {
						var id = data[i].id;
						var lastName = data[i].lastName;
						alert(id + ": " + lastName);
					}
				});
				return false;
			});
		});
	//���JSON��ѭ��
	@JsonIgnoreProperties(value={"parent"})
		
ʮ�����ļ��ϴ�������
	�� �ϴ�
		1����jar��
		
		2�� <!-- ���� MultipartResolver -->
			<bean id="multipartResolver"
				class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
				<property name="defaultEncoding" value="UTF-8"></property>
				<property name="maxUploadSize" value="1024000"></property>	
			</bean>	
			
		3�� @RequestMapping("/testFileUpload")
			public String testFileUpload(@RequestParam("desc") String desc, 
					@RequestParam("file") MultipartFile file) throws IOException{
				System.out.println("desc: " + desc);
				System.out.println("OriginalFilename: " + file.getOriginalFilename());
				System.out.println("InputStream: " + file.getInputStream());
				return "success";
			}
		
	
	//�����ϴ�
		@ResponseBody
		@RequestMapping("/testHttpMessageConverter")
		public String testHttpMessageConverter(@RequestBody String body) {
			System.out.println(body);
			return "helloword" + new Date();
		}
		
	�� ����
		@RequestMapping("/testResponseEntity")
		public ResponseEntity<byte[]> testResponseEntity(HttpSession session)
				throws IOException {
			byte[] body = null;
			ServletContext servletContext = session.getServletContext();
			InputStream in = servletContext.getResourceAsStream("/files/������.txt");
			body = new byte[in.available()];
			in.read(body);

			HttpHeaders headers = new HttpHeaders();
			headers.add("Content-Disposition", "attachment;filename=abc.txt");

			HttpStatus statusCode = HttpStatus.OK;

			ResponseEntity<byte[]> response = new ResponseEntity<byte[]>(body,
					headers, statusCode);
			return response;
		}

ʮ�ġ�������
	�� �����ļ�����
		<mvc:interceptors>
			<!-- �����Զ���������� -->
			<bean class="com.smallBug.springmvc.interceptors.FirstInterceptor"></bean>
			
			<!-- ����������(��)���õ�·�� -->
			<mvc:interceptor>
				<mvc:mapping path="/emps"/>
				<bean class="com.smallBug.springmvc.interceptors.SecondInterceptor"></bean>
			</mvc:interceptor>
		</mvc:interceptors>
		
	�� ʵ�� HandlerInterceptor

		public class FirstInterceptor implements HandlerInterceptor{

			/**
			 * �÷�����Ŀ�귽��֮ǰ������.
			 * ������ֵΪ true, ��������ú�������������Ŀ�귽��. 
			 * ������ֵΪ false, �򲻻��ٵ��ú�������������Ŀ�귽��. 
			 * 
			 * �������ļ�����˳������ִ��
			 * 
			 * ���Կ�����Ȩ��. ��־, �����. 
			 */
			@Override
			public boolean preHandle(HttpServletRequest request,
					HttpServletResponse response, Object handler) throws Exception {
				System.out.println("[FirstInterceptor] preHandle");
				return true;
			}

			/**
			 * ����Ŀ�귽��֮��, ����Ⱦ��ͼ֮ǰ. 
			 * ���Զ��������е����Ի���ͼ�����޸�. 
			 * 
			 * �������ļ�����˳�򣬷���ִ��
			 * 
			 */
			@Override
			public void postHandle(HttpServletRequest request,
					HttpServletResponse response, Object handler,
					ModelAndView modelAndView) throws Exception {
				System.out.println("[FirstInterceptor] postHandle");
			}

			/**
			 * ��Ⱦ��ͼ֮�󱻵���. �ͷ���Դ
			 * 
			 * �������ļ�����˳�򣬷���ִ��
			 * 
			 */
			@Override
			public void afterCompletion(HttpServletRequest request,
					HttpServletResponse response, Object handler, Exception ex)
					throws Exception {
				System.out.println("[FirstInterceptor] afterCompletion");
			}

		}
		
ʮ�塢�쳣����
	�� �ض�handler �쳣����
	
		/**
		 * 1. �� @ExceptionHandler ����������п��Լ��� Exception ���͵Ĳ���, �ò�������Ӧ�������쳣����
		 * 2. @ExceptionHandler ����������в��ܴ��� Map. ��ϣ�����쳣��Ϣ����ҳ����, ��Ҫʹ�� ModelAndView ��Ϊ����ֵ
		 * 3. @ExceptionHandler ������ǵ��쳣�����ȼ�������. 
		 * 4. @ControllerAdvice: ����ڵ�ǰ Handler ���Ҳ��� @ExceptionHandler ������������ǰ�������ֵ��쳣, 
		 * ��ȥ @ControllerAdvice ��ǵ����в��� @ExceptionHandler ��ǵķ����������쳣. 
		 */
		 
		@ExceptionHandler({ArithmeticException.class})
		public ModelAndView handleArithmeticException(Exception ex){
			System.out.println("���쳣��: " + ex);
			ModelAndView mv = new ModelAndView("error");
			mv.addObject("exception", ex);
			return mv;
		}
		
	�� ȫ���쳣����
	
		@ControllerAdvice
		public class SpringMVCTestExceptionHandler {

			@ExceptionHandler({ArithmeticException.class})
			public ModelAndView handleArithmeticException(Exception ex){
				System.out.println("----> ���쳣��: " + ex);
				ModelAndView mv = new ModelAndView("error");
				mv.addObject("exception", ex);
				return mv;
			}
			
		}
	
	�� �Զ������ҳ�棨���ɶ����ڷ����ϣ�
	
		@ResponseStatus(value=HttpStatus.FORBIDDEN, reason="�û��������벻ƥ��!")
		public class UserNameNotMatchPasswordException extends RuntimeException{

			private static final long serialVersionUID = 1L;
		}
		
	�� �����ļ���ӳ���쳣
	
		<!-- ����ʹ�� SimpleMappingExceptionResolver ��ӳ���쳣 -->
		<bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
			<property name="exceptionAttribute" value="ex"></property>
			<property name="exceptionMappings">
				<props>
					<prop key="java.lang.ArrayIndexOutOfBoundsException">error</prop>
				</props>
			</property>
		</bean>	
		
ʮ����SpringIOC��SpringMVC����

	<!--  
		��Ҫ���� Spring ���� SpringMVC �� ?
		���Ƿ���Ҫ�ټ��� Spring �� IOC ���� ?
		�Ƿ���Ҫ�� web.xml �ļ����������� Spring IOC ������ ContextLoaderListener ?
		
		1. ��Ҫ: ͨ�������, ����������Դ, ����, ����������ܶ��Ƿ��� Spring �������ļ���(�����Ƿ��� SpringMVC �������ļ���).
		ʵ���Ϸ��� Spring �����ļ���Ӧ�� IOC �����еĻ��� Service �� Dao. 
		2. ����Ҫ: ������ SpringMVC �������ļ���. Ҳ���Էֶ�� Spring �������ļ�, Ȼ��ʹ�� import �ڵ㵼�������������ļ�
	-->
	
	<!--  
		����: �� Spring �� IOC ������ SpringMVC �� IOC ����ɨ��İ����غϵĲ���, �ͻᵼ���е� bean �ᱻ���� 2 ��.
		���:
		1. ʹ Spring �� IOC ����ɨ��İ��� SpringMVC �� IOC ����ɨ��İ�û���غϵĲ���. 
		2. ʹ�� exclude-filter �� include-filter �ӽڵ����涨ֻ��ɨ���ע��
	-->
	
	<!--  
		SpringMVC �� IOC �����е� bean ���������� Spring IOC �����е� bean. 
		�������� ? ��֮����. Spring IOC �����е� bean ȴ���������� SpringMVC IOC �����е� bean!
	-->
	
	�� beans.xml
	
		<context:component-scan base-package="com.smallBug.springmvc">
			<context:exclude-filter type="annotation" 
				expression="org.springframework.stereotype.Controller"/>
			<context:exclude-filter type="annotation" 
				expression="org.springframework.web.bind.annotation.ControllerAdvice"/>
		</context:component-scan>
	
	�� SpringMVC.xml
		
		<context:component-scan base-package="com.smallBug.springmvc" use-default-filters="false">
			<context:include-filter type="annotation" 
				expression="org.springframework.stereotype.Controller"/>
			<context:include-filter type="annotation" 
				expression="org.springframework.web.bind.annotation.ControllerAdvice"/>
		</context:component-scan>
		
	�� web.xml
	
		<!-- �������� Spring IOC ������ Listener -->
		<!-- needed for ContextLoaderListener -->
		<context-param>
			<param-name>contextConfigLocation</param-name>
			<param-value>classpath:beans.xml</param-value>
		</context-param>

		<!-- Bootstraps the root web application context before servlet initialization -->
		<listener>
			<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
		</listener>
		
		<servlet>
			<servlet-name>springDispatcherServlet</servlet-name>
			<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
			<init-param>
				<param-name>contextConfigLocation</param-name>
				<param-value>classpath:springmvc.xml</param-value>
			</init-param>
			<load-on-startup>1</load-on-startup>
		</servlet>

		<servlet-mapping>
			<servlet-name>springDispatcherServlet</servlet-name>
			<url-pattern>/</url-pattern>
		</servlet-mapping>



	<!-- ����ֱ��ת����ҳ�� -->
	<!-- ����ֱ����Ӧת����ҳ��, �������پ��� Handler �ķ���.  -->
	<mvc:view-controller path="/success" view-name="success"/>


	<mvc:default-servlet-handler/>����̬��Դ