jQuery���ر༭��
	$(function() {
		$('input[name=load]').click(function() {
			$.getScript('../kindeditor-min.js', function() {
				KindEditor.basePath = '../';
				KindEditor.create('textarea[name="content"]');
			});
		});
		$('input[name=remove]').click(function() {
			KindEditor.remove('textarea[name="content"]');
		});
	});

jQueryɾ���༭��
	$('input[name=remove]').click(function() {
		KindEditor.remove('textarea[name="content"]');
	});

�Զ������߶�
	autoHeightMode : true,
	afterCreate : function() {
		this.loadPlugin('autoheight');
	}

�ı�����ȥ����ʱ�����ݸ��µ�kindEditor������
			afterBlur: function(){this.sync();}

items:
		source����ʾ�����л��༭���ı༭ģʽ����Դ����HTML�鿴ģʽ��
		undo����ʾ���ˣ�Ҳ�������ǳ��õ�CTRL+Z��ݼ����ܣ�
		redo����ʾǰ����Ҳ�������ǳ��õ�CTRL+Y��ݼ����ܣ�
		preview����ʾԤ�������������ǰԤ���༭���ڵ�������չʾ��Ч����
		print����ʾ��ӡ�༭���ڵ����ݡ�
		template����ʾ���Բ���༭���ڵ�ģ�崰�壻
		code����ʾ���Բ������Σ�
		cut����ʾ���У�
		copy����ʾ���ƣ���ͬCTRL+C��
		paste����ʾճ������ͬCTRL+V��
		plainpaste����ʾճ��Ϊ�޸�ʽ�ı�����Ҫ�����ڱ����븳ֵ������HTML��ʽ�Ĵ��ı�����༭���������������������HTML��ǩ�Ĺ��ˣ�
		wordpaste����ʾ��WORD��ճ����
		justifyleft����ʾѡ���ı�����
		justifycenter����ʾѡ���ı����У�
		justifyright����ʾѡ���ı����ң�
		justifyfull����ʾ���˶��룻
		insertorderedlist����ʾ��ţ�1��2��3����
		insertunorderedlist����ʾ��Ŀ���ţ�
		indent����ʾ����������
		outdent����ʾ����������
		subscript����ʾ�±ꣻ��ͬ��X2
		superscript����ʾ�ϱꣻ��ͬ��X2
		clearhtml����ʾ���HTML��ǩ��
		quickformat����ʾ�����Ű棻
		selectall����ʾȫѡ��
		fullscreen����ʾȫ����
		formatblock����ʾ���䣻
		fontname����ʾ���壻
		fontsize����ʾ���ִ�С��
		forecolor����ʾ������ɫ��
		hilitecolor����ʾ���ֱ���ɫ��
		bold����ʾ���ּӴ֣�
		italic����ʾ����б�壻
		underline����ʾ������׷���»��ߣ�
		strikethrough����ʾ������׷��ɾ���ߣ�
		lineheight����ʾ�����оࣻ
		removeformat����ʾɾ��ѡ�жεĸ�ʽ��
		image����ʾ�����ϴ�ͼƬ��
		multiimage����ʾ�����ϴ�ͼƬ��
		flash����ʾ����flash��
		media����ʾ��������Ƶ�ļ���
		insertfile����ʾ�����ļ���
		table����ʾ������
		hr����ʾ������ߣ�
		emoticons����ʾ������飻
		baidumap����ʾ�����ͼ��
		pagebreak����ʾ�����ҳ����
		anchor����ʾ����ê�㣻
		link����ʾ���볬���ӣ�
		unlink����ʾȡ���������ӣ�һ���link��ϳ��֣�
		about����ʾ����kindeditor�༭������Ϣ��