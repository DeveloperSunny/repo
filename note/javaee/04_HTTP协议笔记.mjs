*****һ��HTTPЭ��
		1.1Э������ü��汾
			1.1.1HTTP��Hyper Text Transfer Protocol�����ı�--html����Э�飩��
			1.1.2HTTPЭ��������û������ͻ����������������ݴ��ݵġ�
			1.1.3��HttpЭ��İ汾��
					1.0���ص㣺ÿ������������ϵ���Դ��Ҫ�����µ����ӣ���Ӧ��Ϻ󶼻�ر����ӡ�����״̬��Э�顣
					1.1:�ص㣺��һ��TCP/IP���ӵĻ����Ͽ��Է����������͵õ���ε���Ӧ����1.0����һЩ�������Ӧͷ��
					
		1.2Э������
			1.2.1���󲿷֣�
				GET /App1/1.html HTTP/1.1
				Accept: */*
				Accept-Language: zh-cn
				Accept-Encoding: gzip, deflate
				User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729)
				Host: localhost:8080
				Connection: Keep-Alive
				
				username=admin&password=123
				
				���󲿷�����������ɵģ�
					�����У�λ�ڵ�һ��
					������Ϣͷ���ӵڶ��п�ʼ����һ�����н���
					�������ģ��ӵ�һ������֮��Ķ�������
					
			1.2.2��Ӧ���֣�
				HTTP/1.1 200 OK
				Server: Apache-Coyote/1.1
				Accept-Ranges: bytes
				ETag: W/"65-1366335797484"
				Last-Modified: Fri, 19 Apr 2013 01:43:17 GMT
				Content-Type: text/html
				Content-Length: 65
				Date: Fri, 19 Apr 2013 02:06:23 GMT
				Warnning��w1
				Warnning: w2

				hello http
				<a href="b.html">click</a>
				<img src="1.jpg"/>

				��Ӧ��������������ɵģ�
					��Ӧ�У�λ�ڵ�һ��
					��Ӧ��Ϣͷ���ӵڶ��п�ʼ����һ�����н���
					��Ӧ���ģ��ӵ�һ������֮��Ķ�������
		1.3Э����ϸ����
				�����У�GET /App1/1.html HTTP/1.1
						GET������ʽ��Ĭ�ϵ�����ʽ���������õ�����ʽ����POST��
							GET���ص㣺Ĭ�ϵ�����ʽ��
								/App1/c.html?username=sdsfds&password=234324
								�ѱ�����������ݷ����������URI�ĺ��档?username=sdsfds&password=234324
								��������:��¶���ݣ������г������ޡ�
							POST���ص�(����ʹ�õ�)������HTML�е�form����<form action="c.html" method="post">
								����������������Ĳ��֡�����ľ�����ơ���԰�ȫ��
						---------------------------
						/App1/1.html:�������Դ��URI��
						---------------------------
						HTTP/1.1���ͻ���ʹ�õ�Э��İ汾
						
				��Ӧ�У�HTTP/1.1 200 OK
						HTTP/1.1���������õ�Э��汾
						200����Ӧ�롣�������������Ľ����һ�ֱ�ʾ
								200������
								302/307���ض���
								304:����������Դû�б��޸�
								404���������Դ������
								500��������������
						OK����Ӧ������
				������Ϣͷ������������ݸ�����Ϣ
					Accept:֪ͨ����������������Խ��ܵ�MIME���͡����ļ�ϵͳ�����ļ���չ���������ݵ����͡���������MIME�����������������͡�Tomcat\conf\web.mxl��
														MIME�������ƣ�������/С����
					Accept-Charset:֪ͨ�������������֧�ֵ��ַ���
					Accept-Encoding:֪ͨ��������������ܹ����������ѹ����ʽ�����磺gzip
					Accept-language:֪ͨ����������ϣ��������
					Host������������Ͷ˿�
					*Referer����һ��URL��ַ��ȡֵ�ǵ�ǰҳ��֮ǰ���Ǹ�ҳ���ַ�ġ�������
					*Content-Type:֪ͨ���������������ĵ�MIME���͡�
							ȡֵ��application/x-www-form-urlencodedĬ��ֵ
							��Ӧ����form����enctype����
					If-Modified-Since:֪ͨ��������������ļ�������޸�ʱ�䡣
					User-Agent:֪ͨ�����������������.
					Content-Length:��ʾ������Ϣ���ĵĳ��� 
					Connection:��ʾ�Ƿ���Ҫ�־����ӡ�������������������ֵΪ��Keep -Alive�������߿�������ʹ�õ���HTTP 1.1��HTTP 1.1Ĭ�Ͻ��г־����� 
					*****Cookie:��������Ҫ������ͷ��Ϣ֮һ���Ự�йأ�
				��Ӧ��Ϣͷ��
					*Location:֪ͨ�ͻ��ˣ�ָʾ�µ���Դ��λ�ã����302/307���á������ض���
					Server:֪ͨ�ͻ��ˣ�������������
					*Content-Encoding:֪ͨ�ͻ��ˣ���Ӧ���ĵ�ѹ�����뷽ʽ�����õ���gzip��
					*Content-Length��֪ͨ�ͻ�����Ӧ���ĵ����ݴ�С
					*Content-Type:֪ͨ�ͻ�����Ӧ���ĵ�MIME����
					*Refresh����������Զ�ˢ�¡�ȡֵΪ������ˢ�µ�ʱ��������λ���룩
								Refresh:3
								Refresh:3;URL=������Դ��URI
					*Content-Disposition��֪ͨ�ͻ��ˣ������صķ�ʽ����Դ��
								Content-Disposition��attachment;filename=1.jpg
					*****Set-Cookie:SS=Q0=5Lb_nQ; path=/search�������˷��͵�Cookie���Ự�йأ�
					
					*Expires: -1                                            ��ҳ����Чʱ�䡣��λ�Ǻ���
					*Cache-Control: no-cache (1.1)  
					*Pragma: no-cache   (1.0)                               ֪ͨ�ͻ��˲�Ҫ����