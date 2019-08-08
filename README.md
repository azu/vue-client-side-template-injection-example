# Client-Side Template Injection

A example of client-side template injection with Vue.js

## Site

- https://vue-client-side-template-injection-example.azu.now.sh/?name=xxx

## Payload

XSS Payload

- https://vue-client-side-template-injection-example.azu.now.sh/?name={{this.constructor.constructor('alert("foo")')()}}