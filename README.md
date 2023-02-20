# Client-Side Template Injection

An example of client-side template injection with Vue.js

## Clarification

This is not a problem with Vue itself.

For more details, see the following issue.

- [Clarification · Issue #2 · azu/vue-client-side-template-injection-example](https://github.com/azu/vue-client-side-template-injection-example/issues/2)

## Site

- https://vue-client-side-template-injection-example.azu.now.sh/?name=xxx

## Payload

XSS Payload

- https://vue-client-side-template-injection-example.azu.now.sh/?name={{this.constructor.constructor('alert("foo")')()}}
