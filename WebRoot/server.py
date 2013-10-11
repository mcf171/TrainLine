#!/usr/bin/env python
#coding=utf8

import os
import api
import signal

from twisted.web import server
from twisted.web import static
from twisted.web import resource
from twisted.internet import reactor

SERVER_PORT = 8000;
DEFAULT_PAGE = 'index.html';

class Static(static.File):
	def render(self, request):
		return static.File.render_GET(self, request);

class Default(resource.Resource):
	def __init__(self, path):
		resource.Resource.__init__(self);
		self._path = path;
		self.putChild('', Static(os.path.join(self._path, DEFAULT_PAGE)));

	def render(self, request):
		request.redirect(self._path + '/');
		return '';

def registerPath(root, path = '.'):
	for name in os.listdir(path):
		fullPath = os.path.join(path, name);
		if not name.startswith('.'):
			if os.path.isdir(fullPath):
				print 'Dir  :', fullPath;
				child = Default(fullPath);
				root.putChild(name, child);
				registerPath(child, fullPath);
			elif os.path.isfile(fullPath):
				ext = os.path.splitext(fullPath)[1].lower();
				if not ext.startswith('.py'):
					print 'File :', fullPath
					root.putChild(name, Static(fullPath));

def SIGINT(sig, frame):
	print '\rKeyboardInterrupt';
	reactor.stop();

def main():
	webRoot = Default('./');
	print 'Indexing ...';
	registerPath(webRoot);
	print 'Registering ...';
	api.APIs(webRoot).register();
	reactor.listenTCP(SERVER_PORT, server.Site(webRoot));
	print 'Done, listen at %d.' % SERVER_PORT;
	reactor.run();
	print 'Bye.';

if __name__ == '__main__':
	signal.signal(signal.SIGINT, SIGINT);
	main();

