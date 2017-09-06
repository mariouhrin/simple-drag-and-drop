# Simple Starter

## Features

* Hot Reloading (automatic incremental refresh after any changes)

* ES6 (babel compile it to ES5)

* ESLint (syntax validation)

* Sass (CSS pre-processor)


### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Clone the project:

```
git clone https://github.com/mariouhrin/simple-drag-and-drop.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`


### To build the production package

```
npm run build
```

### Nginx Config

Here is an example Nginx config:

```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint
There is a `.eslint.yaml` config for eslint 

To run linting, run:

```
npm run lint
```

### Notes on importing css styles
* styles having /src/ in their absolute path considered part of the application and exported as local css modules.
* other styles considered global styles used by components and included in the css bundle directly.

