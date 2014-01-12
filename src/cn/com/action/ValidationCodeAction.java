package cn.com.action;

import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.util.SecurityCode;
import cn.com.util.SecurityImage;

public class ValidationCodeAction extends BaseActionSupport {

	private Map<String, Object> dataMap;
	private String valideValue;
	// 图片流
	private ByteArrayInputStream imageStream;

	public ByteArrayInputStream getImageStream() {
		return imageStream;
	}

	public void setImageStream(ByteArrayInputStream imageStream) {
		this.imageStream = imageStream;
	}

	public String execute() throws Exception {
		// 如果开启Hard模式，可以不区分大小写
		// String securityCode =
		// SecurityCode.getSecurityCode(4,SecurityCodeLevel.Hard,
		// false).toLowerCase();

		// 获取默认难度和长度的验证码
		String securityCode = SecurityCode.getSecurityCode();
		String resultValue = securityCode.substring(securityCode
				.lastIndexOf('_') + 1);
		securityCode = securityCode.substring(0, securityCode.indexOf('_'));

		imageStream = SecurityImage.getImageAsInputStream(securityCode);
		// 放入session中
		session.put("SESSION_SECURITY_CODE", securityCode);
		session.put("VALID_VALUE", resultValue);

		return SUCCESS;
	}

	public String validCode() {

		int validValueRel = Integer.parseInt((String) session
				.get("VALID_VALUE"));
		boolean flag = validValueRel == Integer.parseInt(valideValue) ? true
				: false;

		dataMap.put("infor", flag);
		return SUCCESS;
	}

	public ValidationCodeAction() {
		this.dataMap = new HashMap<String, Object>();
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public String getValideValue() {
		return valideValue;
	}

	public void setValideValue(String valideValue) {
		this.valideValue = valideValue;
	}

}
