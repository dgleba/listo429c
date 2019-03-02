
----------------------------------------------------
Title:  .
-----------------------2018-12-07[Dec-Fri]11-51AM

error:

```  
reverseproxy_1  | 2018/12/07 16:38:34 [emerg] 1#1: host not found in upstream "nginx:80" in /etc/nginx/nginx.conf:12
```

https://stackoverflow.com/questions/33639138/docker-networking-nginx-emerg-host-not-found-in-upstream/33954445#33954445

says..

```
  upstream phpupstream {
     waapi_php_1:9000 fail_timeout=5s max_fails=5;
  }
```


i did this..

```
  services:
      reverseproxy:
          volumes:
            - ./upstream.conf:/etc/nginx/nginx.conf
          depends_on:
              - nginx
              - apache
      nginx:
          # depends_on:
              # - reverseproxy
      apache:
          # depends_on:
              # - reverseproxy
```        

_____________


more error info.

```
  reverseproxy_1  | 2018/12/07 16:38:34 [emerg] 1#1: host not found in upstream "nginx:80" in /etc/nginx/nginx.conf:12
  reverseproxy_1  | nginx: [emerg] host not found in upstream "nginx:80" in /etc/nginx/nginx.conf:12
```


----------------------------------------------------

### orig..


 https://www.thepolyglotdeveloper.com/2017/03/nginx-reverse-proxy-containerized-docker-applications/

```
 version: '2'

  services:
      reverseproxy:
          image: nginx:alpine
          ports:
              - 8080:8080
              - 8081:8081
          restart: always
          volumes:
            - ./upstream.conf:/etc/nginx/nginx.conf

      nginx:
          depends_on:
              - reverseproxy
          image: nginx:alpine
          restart: always

      apache:
          depends_on:
              - reverseproxy
          image: httpd:alpine
          restart: always
```          