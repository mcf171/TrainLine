<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>${testArrangement.testpaper.testPaperName}</title>
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>

<link type="text/css" rel="stylesheet" href="${basePath}styles/NewDefault.css"></link>
<link href="${basePath}styles/q.css" rel="stylesheet" type="text/css"></link>
<link href="${basePath}styles/newsolid_38.css" rel="stylesheet" type="text/css"></link>
        <style>  
     .interface
     {
           text-align: left; border: solid 1px #ff9900; background: #FDEADA; color: #333333;vertical-align:middle;
           margin:20px auto; width: 760px; height:32px; line-height:32px; padding:0 4px;
     }
     html{ overflow-x:hidden;}
     </style>
     <script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
     <script >
     <c:choose>
     	<c:when test="${testArrangement.questionArrangementState==1}">
     		alert("考试还未开始");
     		window.close();
     	</c:when>
     	<c:when test="${testArrangement.questionArrangementState==3}">
     		alert("考试已经结束");
     		window.close();
     	</c:when>
     </c:choose>
     </script>
     <script type="text/javascript">
     
     $(document).ready(function(){
    	
    	 var testQuestionItemIds = "";
    	 $("#fishTest").click(function(){
    		
    		 console.log(1);
    		 $("input[type='radio']").each(function(){
    			 
    			 var id= $(this).attr("id");
    			   if($("#"+id).prop("checked") == true){
    				   testQuestionItemIds += "&testQuestionItemIds="+$(this).val();
    			   }
    			  });
    	 	$("input[type='checkbox']").each(function(){
    	 		 var id= $(this).attr("id");
  			   if($("#"+id).prop("checked") == true){
  				   testQuestionItemIds += "&testQuestionItemIds=" + $(this).val();
  			   }
  			  });
    	 
    	 	console.log(testQuestionItemIds);
    	 	
    	 	$.ajax({
    	 		
    	 		type:"post",
    	 		data:"testArrangement.testArrangementId=${c.testArrangementId}"+testQuestionItemIds,
    	 		url:"${basePath}finishTest.action",
    	 		success:function(msg){
    	 			alert("提交成功");
    	 			window.close();
    	 		}
    	 	});
    	 	
    	 });
     });
     
     </script>
     
</head>

<body style="">
<div id="divNotRun" style="height:100px; text-align:center; display:none;"></div>
<div id="jqContent" class="" style="text-align: left; ">
  <div id="headerCss" style="overflow-x: hidden; overflow-y: hidden; ">
    <div id="ctl00_header"> </div>
  </div>
  <div id="mainCss">
    <div id="mainInner">
      <div id="box"> 
        <script type="text/javascript" src="scripts/zhezhao.js"></script>

        <div class="survey" style="margin:0px auto;">
          <div id="ctl00_ContentPlaceHolder1_JQ1_divHead" class="surveyhead" style="border: 0px;">
            <h1 id="ctl00_ContentPlaceHolder1_JQ1_h1Name"> <span id="ctl00_ContentPlaceHolder1_JQ1_lblQuestionnaireName">${testArrangement.testpaper.testPaperName}</span></h1>
            <div style="text-align: left; margin-left: 10px;"> </div>
            <div style="clear: both;"> </div>
            
            <div style="clear: both;"> </div>
          </div>
          <div id="ctl00_ContentPlaceHolder1_JQ1_question" class="surveycontent">
            <div id="ctl00_ContentPlaceHolder1_JQ1_divDisplayPageNum">
              <style type="text/css">
            legend
            {
                display: none;
            }
            fieldset
            {
                border: 0px; margin:0; padding:0;
            }
            
        </style>
            </div>
            
            <div id="ctl00_ContentPlaceHolder1_JQ1_surveyContent">
              <fieldset class="fieldset" id="fieldset1">
              <c:forEach var="item" items="${testArrangement.testpaper.testquestions}" varStatus="index">
              		<div style="" class="div_question" id="div${index.index+1}">
                  <div class="div_title_question_all">
                    <div id="divTitle1" class="div_title_question">${index.index +1}．${item.testQuestionName}<span style="color:red;">&nbsp;*</span></div>
                    <div style="clear:both;"></div>
                  </div>
                  
                  <div class="div_table_radio_question" id="divquestion${index.index+1}">
                  <script>
                 	testType = ${item.testType};
                  	var 
                  	insertHTML='<ul>';
                  	var i = 0;
                  	<c:forEach items="${item.testQuestionChooses}" var="testQuestionChoose">
                  	
                  		switch(testType){
                  		
                  		case 1:
	                  		switch(i){
	            			
	                		case 0: insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="radio">'+
	                					'<label for="q1_1">A.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
	                		; break;
	                		case 1:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="radio">'+
	                					'<label for="q1_1">B.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
	                		; break;
	                		case 2:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="radio">'+
	                					'<label for="q1_1">C.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
	                		; break;
	                		case 3:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="radio">'+
	                					'<label for="q1_1">D.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
	                		; break;
	                		default: chooseBianhao = 'I';
	                		
	                		};break;
                  		case 2:
							switch(i){
	            			
							case 0: insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="checkbox">'+
        					'<label for="q1_1">A.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
        					; break;
			        		case 1:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="checkbox">'+
			        					'<label for="q1_1">B.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
			        		; break;
			        		case 2:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="checkbox">'+
			        					'<label for="q1_1">C.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
			        		; break;
			        		case 3:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="qq${index.index+1}_' + i + '" value="${testQuestionChoose.testQuestionItemId}" type="checkbox">'+
			        					'<label for="q1_1">D.' +"${testQuestionChoose.testQuestionItemContent}" + '</label>' + '</li>';
			        		; break;
	                		default: chooseBianhao = 'I';
	                		
	                		};
                  			break;
                  	
                  		insertHTML += '<div style="clear:both;"></div></ul>';	
                  	}
                  		i++;
                  		</c:forEach>
                  	$("#divquestion${index.index+1}").append(insertHTML);
                  </script>
                    
                  </div>
                </div>
              </c:forEach>
                              
                <div class="register_div">
                  <div style="display:none;" id="divpoweredby">Powered by <a href="http://www.sojump.com/" title="专业的问卷调查网站" class="link-06f" target="_blank"><strong>Pioneer</strong></a><span style="font-family:Tahoma">™</span></div>
                </div>
              </fieldset>
               <div >
        	<input  type="button" value="提交"  id="fishTest"/>
        </div>
            </div>
            
            
          </div>
         
          <div style="clear: both;"> </div>

          
        
          
          
          <div style="clear: both;"> </div>
        </div>
       
        <div style="margin:30px auto 0; padding-top:30px; overflow: hidden; width:100%;">
          <div style="border-top: 1px solid #bbbbbb; font-size: 0; height: 1px; line-height: 1px;
                            width: 98%; margin: 0 auto;"> </div>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td height="10px"></td>
              </tr>
              <tr>
                <td align="center" valign="middle"><table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                      <tr id="ctl00_trCopy">
                        <td style="font-size: 12px; font-family: Tahoma, 宋体; color: #666666;" align="center"></td>
                      </tr>
                      <tr id="ctl00_trPoweredBy">
                        <td style="color: #666666; font-family: Tahoma, 宋体;" align="center"><div style="height: 10px;"> </div>
                          Pioneer™提供技术支持 </td>
                      </tr>
                      <tr>
                        <td></td>
                      </tr>
                    </tbody>
                  </table></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="clear: both;"> </div>
  </div>
  <div id="footercss">
    <div id="footerLeft"> </div>
    <div id="footerCenter"> </div>
    <div id="footerRight"> </div>
  </div>
  <div style="clear: both; height: 10px;"> </div>
  <div style="height: 20px;"> &nbsp;</div>
</div>
﻿
</body>
</html>