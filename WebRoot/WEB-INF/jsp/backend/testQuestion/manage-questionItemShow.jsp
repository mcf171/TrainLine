<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script>

$(document).ready( function(){
	
	var testType = 1;
	
	
	$("#testType").change(function(){
		
		testType = parseInt(this.value);
		
		switch(testType){
		
		case 1:
			$("#danxuan").removeClass("hidden");
			$("#duoxuan").addClass("hidden");
			$("#xuanxiangxinxi").removeClass("hidden");
			break;
		case 2:
			$("#duoxuan").removeClass("hidden");
			$("#danxuan").addClass("hidden");
			$("#xuanxiangxinxi").removeClass("hidden");
			break;
		case 3:
			$("#xuanxiangxinxi").addClass("hidden");
			break;
		}
	});
	<c:forEach items="${standardAnswer}" var="item">
		$("#${item}").attr("checked","checked");
	</c:forEach>
});

</script>

<form class="form-horizontal">
	<div class="row-fluid line-margin">
		<span class="help-inline"><b>基本信息：</b>
		</span>
	</div>
	<div class="control-group">
		<label class="control-label" >试题名：</label>
		<div class="controls">
			<span class="input-xlarge uneditable-input" id="courseName">${testquestion.testQuestionName}</span>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" >试题难度：</label>
		<div class="controls">
			<span class="input-xlarge uneditable-input" id="courseName">${testquestion.degreeOfDifficulty}</span>
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label" >试题类型：</label>
		<div class="controls">
			<c:if test="${testquestion.testType==1}">
				<span class="input-xlarge uneditable-input" id="courseName">单选题</span>
			</c:if>
			<c:if test="${testquestion.testType==2}">
				<span class="input-xlarge uneditable-input" id="courseName">多选题</span>
			</c:if>
			<c:if test="${testquestion.testType==3}">
				<span class="input-xlarge uneditable-input" id="courseName">主观题</span>
			</c:if>
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label" >分数：</label>
		<div class="controls">
		<span class="input-xlarge uneditable-input" id="courseName">${testquestion.score}</span>
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label" >课程ID：</label>
		<div class="controls">
			<span class="input-xlarge uneditable-input" id="courseName">${testquestion.course.courseId}</span>
		</div>
		
	</div>
	<div class="control-group">
		<label class="control-label" >课程名：</label>
		<div class="controls">
			
			<span class="input-xlarge uneditable-input" id="courseName">${testquestion.course.courseName}</span>
		</div>
	</div>
	
	<div id="xuanxiangxinxi">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>选项信息：</b>
			</span>
		</div>
		
		<c:forEach items="${testAnswerIntroduce}" var="item" varStatus="index">
		
			<c:if test="${index.index ==0}">
				<div class="control-group">
					<label class="control-label" >A：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="A" value="A" selected/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" id="A" value="A" selected/> 正确答案
						</c:if>
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==1}">
				<div class="control-group">
					<label class="control-label" >B：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="B" value="B"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" id="B" value="B"/> 正确答案
						</c:if>
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==2}">
				<div class="control-group">
					<label class="control-label" >C：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="C" value="C"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="danxuanstandardAnswer" id="C" value="C"/> 正确答案
						</c:if>
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==3}">
				<div class="control-group">
					<label class="control-label" >D：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="D" value="D"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="danxuanstandardAnswer" id="D" value="D"/> 正确答案
						</c:if>
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==4}">
				<div class="control-group">
					<label class="control-label" >E：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="E" value="E"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="danxuanstandardAnswer" id="E" value="E"/> 正确答案
						</c:if>
						
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==5}">
				<div class="control-group">
					<label class="control-label" >F：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						
						
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="F" value="F"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="danxuanstandardAnswer" id="F" value="F"/> 正确答案
						</c:if>
						
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==6}">
				<div class="control-group">
					<label class="control-label" >G：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>
						
						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="G" value="G"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="danxuanstandardAnswer" id="G" value="G"/> 正确答案
						</c:if>
						
					</div>
				</div>
			</c:if>
			<c:if test="${index.index ==7}">
				<div class="control-group">
					<label class="control-label" >H：</label>
					<div class="controls">
					<span class="input-xlarge uneditable-input" id="courseName">${item}</span>

						<c:if test="${testquestion.testType =='1'}">
						<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" id="H" value="H"/> 正确答案
						</c:if>
						<c:if test="${testquestion.testType =='2'}">
						<input type="checkbox" class="standardAnswer" name="danxuanstandardAnswer" id="H" value="H"/> 正确答案
						</c:if>
						
					</div>
				</div>
			</c:if>
		</c:forEach>
		
		
		<div id="duoxuan" class="hidden">
		
			<div class="control-group">
				<label class="control-label" >A：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="A"/> 正确答案
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >B：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="B"/> 正确答案
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >C：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="C"/> 正确答案
				</div>
			</div>
			<div class="control-group" >
				<label class="control-label" >D：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="D"/> 正确答案
				</div>
			</div>
		
		</div>
	
		
	
	</div>
	
	<div class="control-group">

		<div class="controls">
			<button type="submit" class="btn"><i class="icon-ok"></i>确定</button> <button type="submit" class="btn"><i class="icon-remove"></i>取消</button>
		</div>
	</div>
</form>

</body>
</html>
