�� xwork-2.0.4.jar ���У�������� \com\opensymphony\xwork2\validator\validators ·������һ������Ϊ�� default.xml ���� xml �ļ����ڸ��ļ��������� Struts2 �Դ�������У�������塣����������£�
[html] view plaincopy
<!---------�ļ�����default.xml-------->      
<validators>     
<validator name="required"    
class="com.opensymphony.xwork2.validator.validators.RequiredFieldValidator"/>     
<validator name="requiredstring"    
class="com.opensymphony.xwork2.validator.validators.RequiredStringValidator"/>     
<validator name="int"    
class="com.opensymphony.xwork2.validator.validators.IntRangeFieldValidator"/>     
<validator name="double"    
class="com.opensymphony.xwork2.validator.validators.DoubleRangeFieldValidator"/>     
<validator name="date"    
class="com.opensymphony.xwork2.validator.validators.DateRangeFieldValidator"/>     
<validator name="expression"    
class="com.opensymphony.xwork2.validator.validators.ExpressionValidator"/>     
<validator name="fieldexpression"    
class="com.opensymphony.xwork2.validator.validators.FieldExpressionValidator"/>     
<validator name="email"    
class="com.opensymphony.xwork2.validator.validators.EmailValidator"/>     
<validator name="url"    
class="com.opensymphony.xwork2.validator.validators.URLValidator"/>     
<validator name="visitor"    
class="com.opensymphony.xwork2.validator.validators.VisitorFieldValidator"/>     
<validator name="conversion"    
class="com.opensymphony.xwork2.validator.validators.ConversionErrorFieldValidator"/>     
<validator name="stringlength"    
class="com.opensymphony.xwork2.validator.validators.StringLengthFieldValidator"/>     
<validator name="regex"    
class="com.opensymphony.xwork2.validator.validators.RegexFieldValidator"/>     
</validators>    
���ϴ��������� Struts2 ����У�����Ķ��壬���潫��Щ����У������һ���� 13 �������ֶκͷ��ֶθ�ʽ��У����ʽд�����£�������û�г������ʾ������������У������Ӧ�ô��붼�Ǳ����Լ�����ġ���У���ļ���ȡ��ΪActionClassName-validation.xmlʱ����� action�е����д�����ʵʩ������֤�������ֻ��Ҫ��action�е�ĳ��action����ʵʩУ�飬��ô��У���ļ���ȡ��ӦΪ:ActionClassName-ActionName-validation.xml������ActionNameΪstruts.xml��action�����ơ�
[html] view plaincopy
<!-- ����У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="required">     
      <param name="fidleName">field</param>                      
      <message>����������</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="required">                
          <message>����������</message>     
      </field-validator>     
  </field>     
    
  <!-- �����ַ���У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="requiredstring">     
      <param name="fidleName">field</param>     
      <param name="trim">true</param>                     
      <message>����������</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="requiredstring">     
          <param name="trim">true</param>               
          <message>����������</message>     
      </field-validator>     
  </field>     
    
  <!-- ����У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="int">     
      <param name="fidleName">field</param>                      
      <param name="min">1</param>     
      <param name="max">80</param>     
      <message>���ֱ�����${min}-${max}��֮��</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="int">     
          <param name="min">1</param>     
          <param name="max">80</param>     
          <message>���ֱ�����${min}-${max}��֮��</message>     
      </field-validator>     
  </field>     
    
  <!-- ����У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="double">     
      <param name="fidleName">field</param>     
      <param name="minExclusive">0.1</param>     
      <param name="maxExclusive">10.1</param>                
      <message>���븡����Ч</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="double">     
          <param name="minExclusive">0.1</param>     
          <param name="maxExclusive">10.1</param>                
          <message>���븡����Ч</message>     
      </field-validator>     
  </field>     
      
  <!-- ����У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="date">     
      <param name="fidleName">field</param>     
      <param name="min">2009-01-01</param>     
      <param name="max">2019-01-01</param>     
      <message>������Ч</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="date">     
         <param name="min">2009-01-01</param>     
         <param name="max">2019-01-01</param>     
         <message>������Ч</message>     
      </field-validator>     
  </field>     
    
  <!-- ���ʽУ�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="expression">     
      <param name="expression">password==repassword</param>     
          <message>�������벻һ��</message>     
  </validator>     
      
  <!-- �ֶα��ʽУ�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="fieldexpression">     
      <param name="expression">password==repassword</param>     
      <message>�������벻һ��</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="fieldexpression">     
          <param name="expression"><![CDATA[#password==#repassword]]></param>     
          <message>�������벻һ��</message>     
      </field-validator>     
  </field>     
    
  <!-- �ʼ�У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="email">     
      <param name="fidleName">field</param>                      
      <message>�Ƿ��ʼ���ַ</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="email">     
          <message>�Ƿ��ʼ���ַ</message>     
      </field-validator>     
  </field>     
      
  <!-- ��ַУ�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="url">     
      <param name="fidleName">field</param>                  
      <message>��Ч��ַ</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="url">                  
          <message>��Ч��ַ</message>     
      </field-validator>     
  </field>     
      
  <!-- visitorУ�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="visitor">     
      <param name="fidleName">field</param>     
      <param name="context">fieldContext</param>     
      <param name="appendPrefix">true</param>                  
      <message>����У��</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="visitor">                 
          <param name="context">fieldContext</param>     
          <param name="appendPrefix">true</param>                  
          <message>����У��</message>     
      </field-validator>     
  </field>     
      
  <!-- ����ת��У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="conversion">     
      <param name="fidleName">field</param>     
      <message>����ת������</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="conversion">     
          <message>����ת������</message>     
      </field-validator>     
  </field>     
      
  <!-- �ַ�������У�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="stringlength">     
      <param name="fidleName">field</param>     
      <param name="minLength">1</param>     
      <param name="maxLength">10</param>     
      <param name="trim">true</param>                     
      <message>�ַ������ȱ���Ϊ10λ</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="stringlength">     
          <param name="minLength">1</param>     
          <param name="maxLength">10</param>     
          <param name="trim">true</param>                  
          <message>�ַ������ȱ���Ϊ10λ</message>     
      </field-validator>     
  </field>     
      
  <!-- ������ʽУ�� -->     
  <!-- ���ֶ�У�� -->     
  <validator type="regex">     
      <param name="fidleName">field</param>                      
      <param name="expression"><![CDATA[(/^13[13567890](\d{8})$/)]]></param>     
      <message>�ֻ��������Ϊ���ֲ�����11λ</message>     
  </validator>     
  <!-- �ֶ�У�� -->     
  <field name="field">     
      <field-validator type="regex">     
          <param name="expression"><![CDATA[(/^13[13567890](\d{8})$/)]]></param>     
          <message>�ֻ��������Ϊ���ֲ�����11λ</message>     
      </field-validator>     
  </field>    

�������
�� 1 ������У���� required �������ж�������ֶ��Ƿ�Ϊ�ա����δ�����κ����������ʾ������Ϣ��
	fieldName ������ָ��У����ֶ������������������ Struts2 �Դ�������У���������е����ԡ�
	��˽�����������У����ʱ�������Թ���̸�����Ƕ����Լ�Ҫ֪��������������У�������еġ�
	��У����������ǩ����ǰ���½����й����ܣ�����Ҳ�Թ���̸��
	
�� 2 �������ַ���У���� requiredstring �����ж������ֶ��Ƿ��� 1 ���ǿ��ַ��� ��
	�������Ҳ��ʾ������Ϣ�����е� trim ��������У��֮ǰ���ַ������д���Ĭ���ǡ� true ����
	
�� 3 ������У���� int �ж�������ֶ���������һ��������Χ�ڡ� min ��������Сֵ�� max �����ֵ��
	<message> ��ǩ�ڿ��á� ${ ������ } ����ʽ���ʾ���Ǿ����ֵ��
	
�� 4 ������У���� double �� t �ж�������ֶ��������� 1 ����������Χ�ڡ� minInclusive ��ʾ�����Χ����Сֵ�� 
	max Inclusive ��ʾ�����Χ�����ֵ������ minExclusive �� maxExclusive �������ԣ�ǰ�߱����ڸ��㷶Χ֮��
	����Сֵ���������ڸ��㷶Χ֮������ֵ��
	ע�⣺�����ĸ��������û��������������У�鲻��ȥ��顣
	
�� 5 ������У���� date �ж�������ֶε�����ֵ�Ƿ��� 1 �����ڷ�Χ�ڡ� min �Ǹ÷�Χ����Сֵ�� 
	max�����ֵ��������������Ҳ�͸���У�������ĸ�������ͬ�����û������������У�鲻��顣
	
�� 6 �����ʽУ���� expression ֻ�з��ֶ�У���ʽ���������ֶ�У������������������Ҳ�� expression��
	�������ʾ�����߿���ʹ�� OGNL ���ʽ������У�����
	
�� 7 ���ֶα��ʽУ���� fieldexpression �ж��ֶ��Ƿ�����һ�����ʽ���������ʾ��
	�������ж�����������ȷ������ֵ�Ƿ�һ�¾Ϳ���ʹ�ø�У�������������� expression �ͱ��ʽУ������ͬ��
	���������������ֶ�У���С�
	
�� 8 ���ʼ�У���� email ���ж�������ֶ��� 1 �� email ʱ���Ƿ���� email �ĸ�ʽ��

�� 9 ����ַУ���� ur l ���ж�������ֶ��� 1 ����ַʱ���Ƿ������ַ�ĸ�ʽ��

�� 10 �� visitor У���������жϼ������͵��ֶΡ�ǰ���½��������ܡ�����������һ�� context �����ǿ���Ӧ��
	�ļ���������Ԫ�ض���ı����� appendPrefix ������ָ���ڴ�����Ϣ��ǰ���Ƿ�����ض�ǰ׺����ǰ׺���ݿ�
	�� <message> ��ǩ�ж��塣��������������Ҳ��û������ʱ��У��������ȥִ�м�顣
	
�� 11 ������ת��У���� conversion �����ж������ֶ��Ƿ��������ת�������� 1 �� repopulateField ���ԣ�
	���Ϊ�� true �����������������ת�����󣬷��ص� struts.xml ��ָ���� Action �� input ��ͼ����ʱ����
	���ԭ�����������������ʾ�������� false �����෴������Ҳ���Կ�������һֱ��ֵĹ۵�����ת��Ҳ��������
	У���һ�������������ݵġ�
	
�� 12 ���ַ�������У���� stringlength �����ж�������ַ��������Ƿ���ָ���ĳ��ȷ�Χ������minLength ����С
	�ַ������ȣ� maxLength ������ַ������ȡ� trim ���Ժ����������ַ���У����requiredstring �� trim ����ӵ��
	��ͬ���ܡ�������Ҳ�����ڲ�������ִ�м��Ŀ�ѡ���ԡ�
	
�� 13 ��������ʽУ���� regex ����ֶ�����ֵ�Ƿ�� 1 ��������ʽƥ�䡣 expression ���������ݾ��Ǹ�������ʽ��
	���и� caseSensitive ���ԣ�Ϊ�� true �������ƥ��ʱ�����ĸ��Сд���С���֮�����С��������ʾ�������� 1 ���ж�
	�����ֵ�Ƿ��� 11 λ��ȫ����������ɵ�������ʽ�����������ֻ��������ݵ��ֶΣ���У������������õġ�