create:
	docker build . -t simple_sidebar_image
delete:
	docker rmi simple_sidebar_image
run:
	docker run -d -p 8080:8080 --rm --name simple_sidebar_container simple_sidebar_image
stop: