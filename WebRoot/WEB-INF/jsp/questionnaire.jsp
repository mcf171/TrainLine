<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>${questionnaireArrangement.questionArrangementName}</title>
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
              <c:forEach var="item" items="${questionnaireArrangement.questionnaire.questionnairerubrics}" varStatus="index">
              		<div style="" class="div_question" id="div${index.index+1}">
                  <div class="div_title_question_all">
                    <div id="divTitle1" class="div_title_question">${index.index +1}．${item.questionnaireRubricIntroduce}<span style="color:red;">&nbsp;*</span></div>
                    <div style="clear:both;"></div>
                  </div>
                  
                  <div class="div_table_radio_question" id="divquestion${index.index+1}">
                  
                  <script>
                 	testType = ${item.questionnaireRubricType};
                 	var i = 0;
                  	var insertHTML='<ul>';
                  	<c:forEach var="item_item" items="${item.questionnaireChoose }">
                  	
                  		switch(testType){
                  		
                  		case 1:
	                  		switch(i){
	            			
	                		case 0: insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="A" type="radio">'+
	                					'<label for="q1_1">A.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
	                		; break;
	                		case 1:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="B" type="radio">'+
	                					'<label for="q1_1">B.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
	                		; break;
	                		case 2:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="C" type="radio">'+
	                					'<label for="q1_1">C.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
	                		; break;
	                		case 3:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="D" type="radio">'+
	                					'<label for="q1_1">D.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
	                		; break;
	                		default: chooseBianhao = 'I';
	                		
	                		};break;
                  		case 2:
							switch(i){
	            			
							case 0: insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="A" type="checkbox">'+
        					'<label for="q1_1">A.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
        					; break;
			        		case 1:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="B" type="checkbox">'+
			        					'<label for="q1_1">B.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
			        		; break;
			        		case 2:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="C" type="checkbox">'+
			        					'<label for="q1_1">C.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
			        		; break;
			        		case 3:  insertHTML += ' <li style="width:99%;">' +' <input name="q${index.index+1}" id="${item_item.questionnaireChooseId}" value="D" type="checkbox">'+
			        					'<label for="q1_1">D.' + ${item_item.questionnaireChooseContent} + '</label>' + '</li>';
			        		; break;
	                		default: chooseBianhao = 'I';
	                		
	                		};
                  			break;
                  		}
                  		
                  		insertHTML += '<div style="clear:both;"></div></ul>';	
                  		i++;
                  	</c:forEach>
                  	$("#divquestion${index.index+1}").append(insertHTML);
                  </script>
                    
                  </div>
                </div>
              </c:forEach>
                              
                <div class="register_div">
                	<input type="button" value="提交" id="confirm"/>
                </div>
                <script>
                $(document).ready(function(){
                	$("#confirm").click(function(){
                		
                		var dataInfo="";
                		$("input[type='radio']").each(function(){
                			   var id= $(this).attr("id");
                			   if($(this).prop("checked")==true){
                				   dataInfo += "&questionnaireChooseIds=" + id;
                			   }
                			  });
                		$("input[type='checkbox']").each(function(){
             			   var id= $(this).attr("id");
             			   if($("#"+id).prop("checked")==true){
             				   dataInfo += "&questionnaireChooseIds=" + id;
             			   }
             			  });
                		
                		console.log(dataInfo);
                		
                		$.ajax({
                			
                			type:"post",
                			url:"${basePath}finishQuestionnaireArrangement.action",
                			data:"questionnaireArrangement.questionnaireArrangementId=${questionnaireArrangement.questionnaireArrangementId}"+dataInfo,
                			success:function(){
                				alert("完成问卷");
                				window.close();
                			}
                		});
                	});	
                });
                
                </script>
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
                          Pioneer™提供技术支持 ${basePath}</td>
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