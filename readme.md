Task 3.1

FE https://dc6svv1hcod86.cloudfront.net/

Task 3.2

https://hwn88qoedb.execute-api.eu-west-1.amazonaws.com/dev/products/

Swagger: src/swagger/openapi.yaml

Additional:
+4 - Async/await is used in lambda functions
+4 - ES6 modules are used for Product Service implementation
+4 - Custom Webpack/ESBuild/etc is manually configured for Product Service. Not applicable for preconfigured/built-in bundlers that come with templates, plugins, etc.
+4 (All languages) - SWAGGER documentation is created for Product Service
+4 (All languages) - Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
+4 (All languages) - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
+4 (All languages) - Main error scenarios are handled by API ("Product not found" error).
