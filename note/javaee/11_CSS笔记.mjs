һ��Font
	1��font:caption; //ʹ���б����ϵͳ�ؼ����ı�����(�簴ť���˵���)
	2��color:****   //������ɫ
	3��font-family:����;  //�������ơ�������˳�����С��Զ��Ÿ���������������ư����ո���Ӧʹ����������
	4��font-size:16px;	//�����С��Ĭ��ֵΪ16px
	5��font-style:italic	//������italicΪб��
	6��font-weight:900;	//������
	7��text-decoration:underline���»��ߣ�|line-through���ᴩ�ߣ�|overline���ϻ��ߣ�
	8��text-transform:uppercase����������ĸת���ɴ�д��|lowercase����������Ļת����Сд��|capitalize�������е��ʵĵ�һ����ĸ��ɴ�д����ʼ���Ǵ�д����ĸ���䣩
	9��line-height:100px;	//�����ϱ����ճ��ĸ߶�
	10��letter-spacing:34px;	//�ּ��
	11��word-spacing	//����֮��ľ���
	
��������
	1��text-indent:2%;	//��������
	2��text-align:center	//�ı��Ķ��뷽ʽ
	
��������
	1��background-color:red;	//������ɫ
	2��background-image:url();	//����ͼƬ
	3��background-position:top | center | bottom | left | center | right	//���û��������ı���ͼ��λ��
	4��background-repeat:no-repeat; repeat-x������ƽ�̣�  repeat-y������ƽ�̣� 
	
�ġ���λ
	1��position:absolute;  left:30%;|right|top|	bottom	//һ��ʹ�þ��Զ�λ
	
�塢�ߴ�
	1��height
	2��width
	
�����ⲹ��
	1��margin : auto | length ���������ö����ıߵ����ӱ߾ࡣ
�ߡ�����
	1��outline:red dotted 1px;
		none  :�� Ĭ��ֵ���ޱ߿����κ�ָ���� outline-width ֵ�޹� 
		dotted  :�� ���������� 
		dashed  :�� ���������� 
		solid  :�� ʵ�������� 
		double  :�� ˫�������������������������ĺ͵���ָ���� oueline-width ֵ 
		groove  :�� ���� outline-color ��ֵ��3D���������� 
		ridge  :�� ���� outline-color ��ֵ��3D͹�������� 
		inset  :�� ���� outline-color ��ֵ��3D���������� 
		outset  :�� ���� outline-color ��ֵ��3D͹�������� 

�ˡ�����
�š��ڲ���
	1��padding:20px 20px 20px;	//���ֻ�ṩһ����������ȫ���������ߡ�
								����ṩ��������һ�������ϣ��£��ڶ����������ҡ�
								����ṩ��������һ�������ϣ��ڶ����������ң������������¡�
								�ĸ����������Ͽ�ʼ˳ʱ��
	2��padding-top
	3��padding-right
	4��padding-bottom
	5��padding-left
ʮ���б�
	1��list-style : list-style-image || list-style-position || list-style-type 
	2��list-style-image : none | url ( url ) 
	3��list-style-type 
			   disc  :�� CSS1  Ĭ��ֵ��ʵ��Բ 
			 circle  :�� CSS1  ����Բ 
			 square  :�� CSS1  ʵ�ķ��� 
			decimal  :�� CSS1  ���������� 
		lower-roman  :�� CSS1  Сд�������� 
		upper-roman  :�� CSS1  ��д�������� 
		lower-alpha  :�� CSS1  СдӢ����ĸ 
		upper-alpha  :�� CSS1  ��дӢ����ĸ 
		none  :�� CSS1  ��ʹ����Ŀ���� 

ʮһ�����
	1��caption-side : top | right | bottom | left 	//���û�������( table )�� caption �������ڱ�����һ�ߡ����Ǻ� caption ����һ��ʹ�õ����ԡ�
ʮ����������
ʮ������ӡ
ʮ�ġ�����
ʮ�塢����
ʮ��������
	1��clear : left 	//�����Ե�ֵָ���˲������и�������ı�
	2��float: right 	//�ı������������
ʮ�ߡ��߿�
	1��border : border-width || border-style || border-color 
	2��border-color            border-style            border-width             
	3��border-top              border-top-color        border-top-style        border-top-width
	4��border-right            border-right-color      border-right-style      border-right-width 
	5��border-bottom           border-bottom-color     border-bottom-style     border-bottom-width 
	6��border-left             border-left-color       border-left-style       border-left-width
	7��border-left : border-width || border-style || border-color 
ʮ�ˡ�α��
	1��:link    :visited
	2��:hover   :active
ʮ�š�����
	1��<link rel="stylesheet" href="s.css" type="text/css" />
	2��<style type="text/css"></style>
	3��<h1 style=""></h1>
	
	

	ֵ				����
								//��ʹ�õ��Զ������ URL��
								//ע�ͣ����ڴ��б��ĩ��ʼ�ն���һ����ͨ�Ĺ�꣬�Է�û���� URL ����Ŀ��ù�ꡣ
	default			Ĭ�Ϲ�꣨ͨ����һ����ͷ��
	auto			Ĭ�ϡ���������õĹ�ꡣ
	crosshair		������Ϊʮ���ߡ�
	pointer			������Ϊָʾ���ӵ�ָ�루һֻ�֣�
	move			�˹��ָʾĳ����ɱ��ƶ���
	e-resize		�˹��ָʾ���ο�ı�Ե�ɱ����ң������ƶ���
	ne-resize		�˹��ָʾ���ο�ı�Ե�ɱ����ϼ������ƶ�����/������
	nw-resize		�˹��ָʾ���ο�ı�Ե�ɱ����ϼ������ƶ�����/������
	n-resize		�˹��ָʾ���ο�ı�Ե�ɱ����ϣ������ƶ���
	se-resize		�˹��ָʾ���ο�ı�Ե�ɱ����¼������ƶ�����/������
	sw-resize		�˹��ָʾ���ο�ı�Ե�ɱ����¼������ƶ�����/������
	s-resize		�˹��ָʾ���ο�ı�Ե�ɱ������ƶ����ϣ���
	w-resize		�˹��ָʾ���ο�ı�Ե�ɱ������ƶ���������
	text			�˹��ָʾ�ı���
	wait			�˹��ָʾ������æ��ͨ����һֻ���ɳ©����
	help			�˹��ָʾ���õİ�����ͨ����һ���ʺŻ�һ�����򣩡�