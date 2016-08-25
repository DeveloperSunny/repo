Lesson01   XML

XML��ѧϰĿ�꣺
����XML������ʵ�е��в�ι�ϵ������
��ʹ�ó����ȡ��XML�б�ʾ�����ݣ�����Parser��

һ��XML��ʲô��������ʲô��
	1��XML��ָ����չ������ԣ�eXtensible Markup Language�����û��Զ���ı�ǩ.�����HTML�����ġ�
	2��XML����Ƶ���ּ�Ǳ�ʾ���ݡ�HTML��������ʾ���ݵġ�Ŀǰ����ʹ�õ�XML�汾��1.0
	3��XML���˱�ʾ�����⡣��ʵ�ʵ���ҵ�����У���Ҫ��XML��Ϊ����������ļ���

����XML�Ļ����﷨
	1���ĵ�������
		���ã����ڱ�ʶ���ĵ���һ��XML�ĵ���
		ע�������������������ĵ��ĵ�һ�У�֮ǰ�����ж������У�Ҳ�������κε�ע�ͣ�

		��򵥵�XML������<?xml version="1.0"?>
		�����е�encoding���ԣ�˵��������ǰXML�ĵ�ʱ��ʹ�õı��롣Ĭ����UTF-8
		�����е�standalone���ԣ�˵��XML�ĵ��Ƿ��Ƕ����ġ����˽⣩


	2��Ԫ��
		������ǩ����ʡ��
		һ��XML�ĵ�������ֻ����һ������ǩ
		XML�ĵ��в�����Իس��ͻ��м��ո�
		��ǩ�������淶��Ԫ��(��ǩ)�����ƿ��԰�����ĸ�����֡����š��»��ߺ�Ӣ�ľ�㡣�ϸ����ִ�Сд��

	3��Ԫ�ص�����
		������ȡֵһ��Ҫ�������������������Ż�˫���ţ�

	4��ע��
		��HTML�е�ע����ȫһ�£�<!--����ע��-->
		ע�Ͳ���Ƕ��
	5��CDATA��
		CDATA��Character Data����д��
		���ã�CDATA���еĶ��������ı���
		�﷨��
			<![CDATA[
			
					�ı�����
					
					]]>
	6�������ַ�
		�ո�    &nbsp;
		&		&amp;
		<		&lt;   (less than)
		>		&gt;	(great than)
		"		&quot;
		'		&apos;
		
	7������ָ��(PI:Processing Instruction)
		����ָ����PI(Processing Instruction)��
		���ã�����ָ�������ν���XML�ĵ���
		�﷨�������ԡ�<?����Ϊ��ͷ���ԡ�?>����Ϊ��β��
			����<?xml-stylesheet type="text/css" href="s.css"?>
			
����XML��Լ��
	1����ʽ���õ�XML�ĵ�������XML�﷨�ġ�
	2����Ч��XML�ĵ�����ѭԼ���淶�ġ�
		��ʽ���õĲ�һ������Ч�ģ�����Ч�ıض���ʽ���á�

�ġ�DTD�Ļ����﷨���������ɣ�
	1��DTD��Document Type Definition
	2�����ã�Լ��XML����д�淶��
	3��DTD�ļ����浽����ʱ������ʹ��UTF-8����

	4����������ⲿ��DTD�ĵ���Լ����ǰ��XML�ĵ�
		DTD�ļ��ڱ��أ�<!DOCTYPE ��Ԫ������ SYSTEM "DTD�ļ���·��">
		DTD�ļ��������ϣ�<!DOCTYPE ��Ԫ������ PUBLIC "DTD����" "DTD��·��URL">

	5��DTD���﷨ϸ��
		5.1����Ԫ��
			�﷨��<!ELEMENT Ԫ������ ʹ�ù���>
			ʹ�ù���
				(#PCDATA):ָʾԪ�ص���������ֻ������ͨ���ı�.(Parsed Character Data)
				EMPTY:ָʾԪ�صĲ������������ݡ�
				ANY:����ָʾԪ�ص���������Ϊ��������
				(��Ԫ��)��ָʾԪ���а�������Ԫ��
						�����Ԫ���ö��ŷֿ���˵�����밴������˳��ȥ��дXML�ĵ�
						�����Ԫ���á�|���ֿ���˵����ѡ��һ��
						��+��*��������ʾԪ�س��ֵĴ���
		5.2����Ԫ�ص�����(attribute)
			�﷨��<!ATTLIST �ĸ�Ԫ�ص�����
							������1 ����ֵ���� ����˵��
							������2 ����ֵ���� ����˵��>
				����ֵ���ͣ�
					CDATA��˵�������Ե�ȡֵΪһ����ͨ�ı�
					ENUMERATED (DTDû�д˹ؼ���)��
						�﷨��<!ATTLIST Ԫ������ (ֵ1|ֵ2) "ֵ1">
					ID:���Ե�ȡֵ�����ظ�
				����˵����
					#REQUIRED����ʾ�����Ա������
					#IMPLIED�����Կ��п���
					#FIXED:��ʾ���Ե�ȡֵΪһ���̶�ֵ �﷨��#FIXED "�̶�ֵ"
					ֱ��ֵ����ʾ���Ե�ȡֵΪ��Ĭ��ֵ
					
					
					<!ELEMENT TVSCHEDULE (CHANNEL+)>
					<!ELEMENT CHANNEL (BANNER,DAY+)>
					<!ELEMENT BANNER (#PCDATA)>
					<!ELEMENT DAY (DATE,(HOLIDAY|PROGRAMSLOT+)+)>
					<!ELEMENT HOLIDAY (#PCDATA)>
					<!ELEMENT DATE (#PCDATA)>
					<!ELEMENT PROGRAMSLOT (TIME,TITLE,DESCRIPTION?)>
					<!ELEMENT TIME (#PCDATA)>
					<!ELEMENT TITLE (#PCDATA)> 
					<!ELEMENT DESCRIPTION (#PCDATA)>
					<!ATTLIST TVSCHEDULE NAME CDATA #REQUIRED>
					<!ATTLIST CHANNEL CHAN CDATA #REQUIRED>
					<!ATTLIST PROGRAMSLOT VTR CDATA #IMPLIED>
					<!ATTLIST TITLE RATING CDATA #IMPLIED>
					<!ATTLIST TITLE LANGUAGE CDATA #IMPLIED>
					
					<?xml version="1.0" encoding="GBK"?>
					<!DOCTYPE TVSCHEDULE SYSTEM "instance1.dtd">
					<TVSCHEDULE NAME="YYTV">
						<CHANNEL CHAN="YY">
							<BANNER>AAA</BANNER>
							<DAY>
								<DATE>2013-04-13</DATE>
								<PROGRAMSLOT>
									<TIME>14:57</TIME>
									<TITLE LANGUAGE="ZH">TT</TITLE>
									<DESCRIPTION>DD</DESCRIPTION>
								</PROGRAMSLOT>
							</DAY>
						</CHANNEL>
					</TVSCHEDULE>
	
	
	
		5.2����ʵ��
			�ؼ���ENTITY
			ʵ��Ķ����Ϊ����ʵ��Ͳ���ʵ��
			����ʵ�壺
				���ã���DTD�ж��壬��XML��ʹ��
				�﷨��<!ENTITY ʵ������ "ʵ������">
				��XML��ʹ�ã�&ʵ������;
			����ʵ�壺
				���ã���DTD�ж��壬��DTD��ʹ��
				�﷨��<!ENTITY % ʵ������ "ʵ������">
				��DTD��ʹ�ã�%ʵ������;
�塢XML������ʽ����
	1������XML�Ľ�����ʽ��DOM��SAX
		DOM:Document Object Model��W3C�Ƽ�ʹ�õĽ�����ʽ
		SAX:Simple API for XML���ǹٷ���׼��
	2�����ý�����������
		JAXP:SUN�Ƴ���ʵ�֣��ܽ���DOM��SAX��ʽ����
		Dom4J
		JDom��

����JAXP����DOM����
	JAXP��API����JavaSE�С�
	org.w3c.dom:�ṩDOM��ʽ����XML�ı�׼�ӿ�
	org.xml.sax:�ṩSAX��ʽ����XML�ı�׼�ӿ�
	javax.xml:�ṩ�˽���XML�ĵ�����

Lesson02

һ��JAXP����DOM�����İ���
����JAXP����SAX����
	SAX����ԭ��
	ͨ����ȡ����ȡXML�ĵ������������ĵ���ĳһ����ʱ���ĵ��Ŀ�ʼ��Ԫ�صĿ�ʼ���ı���Ԫ�صĽ������ĵ��Ľ�������
	��������¼��������Ķ�Ӧ���������������ݣ��Բ�������ʽ���ݸ���Ӧ�ķ�����
�ˡ�SchemaԼ��(��������)
	1��SchemaԼ���ĵ��������һ��XML�ĵ�����չ��Ϊxsd
	2���ص㣺����Schemaд��XML�ĵ�
		�ѵ㣺XML�ĵ��ĸ�Ԫ����ôд��

	a�����ȿ�Schema�ĵ����ҵ���Ԫ��
		<?xml version="1.0" encoding="UTF-8"?>
		<���></���>
	b��˼��������������ĸ����ƿռ䣿��Schema�ĵ���targetNamespace�������ƿռ䡣
		��xmlns�ؼ���(xmlns���ƿռ�����)�������ҵ�Ԫ�������ĸ����ƿռ䣨xmlns��xml namespace��

		<?xml version="1.0" encoding="UTF-8"?>
		<itcast:��� xmlns:itcast="http://www.itcast.cn"></itcast:���>

	c��˼�������ƿռ����ĸ�xsd�ļ���Ӧ�أ�ʹ��schemaLocation�ؼ������������ƿռ��xsd�Ķ�Ӧ��ϵ

		<?xml version="1.0" encoding="UTF-8"?>
		<itcast:��� xmlns:itcast="http://www.itcast.cn" 
					schemaLocation="http://www.itcast.cn book.xsd"></itcast:���>

	d��schemaLocation�����������һ����׼�����ƿռ䣨http://www.w3.org/2001/XMLSchema-instance��
		<?xml version="1.0" encoding="UTF-8"?>
		<itcast:��� xmlns:itcast="http://www.itcast.cn" 
					xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
					xsi:schemaLocation="http://www.itcast.cn book.xsd"></itcast:���>