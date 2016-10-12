	
	required:true		����������ֶΡ�
	remote:"check.php"	ʹ�� ajax �������� check.php ��֤����ֵ��
	email:true			����������ȷ��ʽ�ĵ����ʼ���
	url:true			����������ȷ��ʽ����ַ��
	date:true			����������ȷ��ʽ�����ڡ�����У�� ie6 �������á�
	dateISO:true		����������ȷ��ʽ�����ڣ�ISO�������磺2009-06-23��1998/01/22��ֻ��֤��ʽ������֤��Ч�ԡ�
	number:true			��������Ϸ������֣�������С������
	digits:true			��������������
	creditcard:			��������Ϸ������ÿ��š�
	equalTo:"#field"	����ֵ����� #field ��ͬ��
	accept:				����ӵ�кϷ���׺�����ַ������ϴ��ļ��ĺ�׺����
	maxlength:5			���볤������� 5 ���ַ�����������һ���ַ�����
	minlength:10		���볤����С�� 10 ���ַ�����������һ���ַ�����
	rangelength:[5,10]	���볤�ȱ������ 5 �� 10 ֮����ַ�����������һ���ַ�����
	range:[5,10]		����ֵ������� 5 �� 10 ֮�䡣
	max:5				����ֵ���ܴ��� 5��
	min:10				����ֵ����С�� 10��


//////////////////////////////////////////////////////////

$("#sport_product_mod_form").validate({
		rules: {
			productId: {
				required: true,
				remote: v.context+"/sport/product/isrepeat?id="+v.id+"&operate="+v.operate
		    },
		    productName: {
		    	required: true
		    },
		    price: {
		    	required: true,
		    	number:true
		    },
		    strategyGroupId: {
		    	required: true
		    }
		},
		messages: {
			productId: {
				required: "��ƷID����Ϊ�գ�",
				remote: "��ƷID�����ظ���"
		    },
		    productName: {
		    	required: "��Ʒ������Ϊ�գ�"
		    },
		    price: {
		    	required: "�۸���Ϊ�գ�",
		    	number:"��������Ч���֣�"
		    },
		    strategyGroupId: {
		    	required: "������ID����Ϊ�գ�"
		    }
		},
		errorPlacement: function(error, element) {
			var name = element.attr("name");
			var info = $("<span class='help-block m-b-none' id='" + name + "Error'></span>");
			info.html(error);
			var p = element.parent("div");
			p.append(info);
		}
	});



	<script src="<vip:staticPath/>/plugins/jquery-validation/jquery.validate.min.js"></script>
	<script src="<vip:staticPath/>/plugins/jquery-validation/additional-methods.min.js"></script>


@ResponseBody
@RequestMapping("isrepeat")
public boolean isRepeat(@RequestParam(value = "operate") String operate,
		@RequestParam(value = "userName", required = false) String userName,
		@RequestParam(value = "id", required = false) Long id) {
	if ("save".equals(operate)) {
		VipPayAccount account = vipPayAccountService.getAccountByUserName(userName);
		if (account != null)
			return false;
	}
	else if ("update".equals(operate)) {
		if (id == null)
			return false;
		VipPayAccount account = vipPayAccountService.getAccountByUserName(userName);
		if (account != null && account.getId().longValue() != id.longValue())
			return false;
	}
	return true;
}