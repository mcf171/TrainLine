#coding=utf8

import os
import json
import time

from twisted.web import server
from twisted.web import resource
from twisted.internet import reactor

class APIs(resource.Resource):
	def __init__(self, apiRoot):
		apiRoot.putChild('api', self);
		resource.Resource.__init__(self);

	def register(self):
		names = globals();
		for name in names:
			if name.startswith('API_'):
				api = names[name];
				mapping = self.children;
				if api.path in ('', None):
					api.path = name[4:];
				root = self;
				paths = api.path.split('/');
				while len(paths) > 1:
					if not mapping.has_key(paths[0]):
						node = resource.Resource();
						root.putChild(paths[0], node);
					root = mapping[paths[0]];
					mapping, paths = root.children, paths[1:];
				if root.children.has_key(paths[0]):
					raise ValueError('duplicate API path');
				print 'API  :', api.path;
				root.putChild(paths[0], api());

class BaseAPI(resource.Resource):
	path = None;

	def render(self, request):
		try:
			self.session = request.getSession().sessionNamespaces;
			return resource.Resource.render(self, request);
		except ImportError:
			return 'Not supported on "%s"' % platform.platform();

	def clientAlert(self, message, redirect):
		return """
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript">
	alert("%s");
	window.location.href = "%s";
</script>
</head>
<body>
</body>
</html>
""" % (message, redirect);

class AsynchronizeAPI(BaseAPI):
	def render_POST(self, request):
		reactor.callInThread(self._async_request, request);
		return server.NOT_DONE_YET;

	def _async_request(self, request):
		try:
			try:
				response = self.render_async(request);
			except ImportError:
				response = None;
			request.write(json.dumps(response));
			request.finish();
		except RuntimeError:
			pass

	def render_async(self, request):
		raise NotImplementedError('"AsynchronizeAPI.render_async(self, request)" must be implemented by subclass.');

class GridAPI(AsynchronizeAPI):
	def _build_grid(self, items):
		result = {};
		result['items'] = items;
		result['totalCount'] = len(items);
		return result;

	def render_async(self, request):
		try:
			self.page = int(request.args['page'][0]);
			self.limit = int(request.args['limit'][0]);
			return self._build_grid(self.render_grid(request));
		except:
			return None;

	def render_grid(self, request):
		raise NotImplementedError('"GridAPI.render_grid(self, request)" must be implemented by subclass.');

class API_user_study_get_available(GridAPI):
	path = 'user/study/get_available';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'class'	: '财务类',
			'course': '审计基础知识',
			'start'	: '2013-08-21',
			'end'	: '2014-08-21',
			'public': True,
			'select': False
		}, {
			'id'	: 1,
			'class'	: '工程经济类',
			'course': '项目成本管理',
			'start'	: '2013-08-21',
			'end'	: '2014-08-21',
			'public': False,
			'select': False
		}, {
			'id'	: 2,
			'class'	: '工程经济类',
			'course': '铁路工程概预算知识',
			'start'	: '2013-08-21',
			'end'	: '2014-08-21',
			'public': False,
			'select': True
		}];

class API_user_study_get_selected(GridAPI):
	path = 'user/study/get_selected';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'class'	: '工程经济类',
			'course': '项目成本管理',
			'start'	: '2013-08-21',
			'end'	: '2014-08-21',
			'step'	: 0,
		}, {
			'id'	: 1,
			'class'	: '工程经济类',
			'course': '铁路工程概预算知识',
			'start'	: '2013-08-21',
			'end'	: '2014-08-21',
			'step'	: 1,
		}, {
			'id'	: 2,
			'class'	: '管理类',
			'course': '合同管理',
			'start'	: '2013-08-21',
			'end'	: '2014-08-21',
			'step'	: 2,
		}];

class API_user_exam_get_exams(GridAPI):
	path = 'user/exam/get_exams';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'course': '合同管理',
			'exam'	: '合同管理考试',
			'start'	: '2013-08-21 10:00:00',
			'end'	: '2013-08-21 12:00:00',
			'force'	: False,
			'status': 0
		}, {
			'id'	: 1,
			'course': '变更索赔',
			'exam'	: '变更索赔考试',
			'start'	: '2013-08-21 10:00:00',
			'end'	: '2013-08-21 12:00:00',
			'force'	: False,
			'status': 1
		}];

class API_backend_study_get_questionares(GridAPI):
	path = 'backend/study/get_questionares';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'no'	: '20130821-123-1234',
			'name'	: '培训需求调查问卷',
			'start'	: '2013-08-21',
			'end'	: '2013-09-21',
			'status': 0
		}, {
			'id'	: 1,
			'no'	: '20130821-123-1234',
			'name'	: '企业需求调查问卷',
			'start'	: '2013-08-21',
			'end'	: '2013-09-21',
			'status': 2
		}];

class API_backend_study_get_auditations(GridAPI):
	path = 'backend/study/get_auditations';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'name'	: '张三',
			'course': '哲学',
			'date'	: '2013-08-21',
			'status': 0
		}, {
			'id'	: 1,
			'name'	: '李四',
			'course': '工程经济学',
			'date'	: '2013-08-21',
			'status': 2
		}, {
			'id'	: 2,
			'name'	: '王五',
			'course': '管理学',
			'date'	: '2013-08-21',
			'status': 1
		}];

class API_backend_study_get_note_overview(GridAPI):
	path = 'backend/study/get_note_overview';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'course': '基础经济学',
			'title'	: '张三的基础经济学笔记标题示例',
			'text'	: '张三的一些笔记内容示例',
			'name'	: '张三',
			'time'	: '2013-08-21 03:15:29'
		}, {
			'id'	: 0,
			'course': '自我修养',
			'title'	: '李四的基础经济学笔记标题示例',
			'text'	: '李四的一些笔记内容示例',
			'name'	: '李四',
			'time'	: '2013-08-21 03:17:27'
		}];

class API_backend_examinations_get_questions(GridAPI):
	path = 'backend/examinations/get_questions';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'type'	: 0,
			'text'	: '题目一的内容',
			'label'	: '题目一的标签',
			'level'	: 2,
			'score'	: 5,
			'stored': False
		}, {
			'id'	: 0,
			'type'	: 3,
			'text'	: '题目二的内容',
			'label'	: '题目二的标签',
			'level'	: 5,
			'score'	: 3,
			'stored': True
		}];

class API_backend_examinations_get_papers(GridAPI):
	path = 'backend/examinations/get_papers';

	def render_grid(self, request):
		return [{
			'id'	: 0,
			'no'	: '20130822-0001',
			'name'	: '问卷一',
			'author': '张三',
			'type'	: 0,
			'stored': True
		}, {
			'id'	: 1,
			'no'	: '20130822-0002',
			'name'	: '问卷二',
			'author': '李四',
			'type'	: 1,
			'stored': False
		}];
